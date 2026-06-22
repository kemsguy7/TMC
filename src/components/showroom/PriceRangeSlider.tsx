import { useCallback, useEffect, useRef, useState } from 'react';
import { PRICE_INCREMENTS, formatNairaCompact } from '../../data/vehicles';

type PriceRangeSliderProps = {
  minIndex: number;
  maxIndex: number;
  onChange: (minIndex: number, maxIndex: number) => void;
  theme?: 'dark' | 'light';
};

const PriceRangeSlider = ({ minIndex, maxIndex, onChange, theme = 'dark' }: PriceRangeSliderProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<'min' | 'max' | null>(null);
  const isDark = theme === 'dark';

  const minPercent = (minIndex / (PRICE_INCREMENTS.length - 1)) * 100;
  const maxPercent = (maxIndex / (PRICE_INCREMENTS.length - 1)) * 100;

  const indexFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return Math.round(ratio * (PRICE_INCREMENTS.length - 1));
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const onMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const index = indexFromClientX(clientX);

      if (dragging === 'min') {
        onChange(Math.min(index, maxIndex), maxIndex);
      } else {
        onChange(minIndex, Math.max(index, minIndex));
      }
    };

    const onUp = () => setDragging(null);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [dragging, indexFromClientX, maxIndex, minIndex, onChange]);

  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between gap-4">
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${isDark ? 'text-white/45' : 'text-muted'}`}
        >
          Budget
        </span>
        <span
          className={`text-right text-sm font-medium tabular-nums ${isDark ? 'text-white/90' : 'text-navy'}`}
        >
          {formatNairaCompact(PRICE_INCREMENTS[minIndex])}
          <span className={isDark ? 'mx-2 text-white/30' : 'mx-2 text-muted'}>—</span>
          {formatNairaCompact(PRICE_INCREMENTS[maxIndex])}
        </span>
      </div>

      <div ref={trackRef} className="relative h-10 select-none touch-none">
        <div
          className={`absolute top-1/2 h-px w-full -translate-y-1/2 ${isDark ? 'bg-white/20' : 'bg-navy/15'}`}
        />
        <div
          className={`absolute top-1/2 h-px -translate-y-1/2 ${isDark ? 'bg-white/70' : 'bg-navy/50'}`}
          style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
        />
        {(['min', 'max'] as const).map((thumb) => {
          const percent = thumb === 'min' ? minPercent : maxPercent;
          return (
            <button
              key={thumb}
              type="button"
              aria-label={thumb === 'min' ? 'Minimum price' : 'Maximum price'}
              className={`absolute top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border shadow-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 ${
                isDark
                  ? 'border-white/60 bg-navy-dark focus:ring-white/30'
                  : 'border-navy/30 bg-white focus:ring-accent/30'
              }`}
              style={{ left: `${percent}%` }}
              onMouseDown={() => setDragging(thumb)}
              onTouchStart={() => setDragging(thumb)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PriceRangeSlider;
