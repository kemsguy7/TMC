import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const VideoShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    void video.play();
    setPlaying(true);
  };

  return (
    <AnimatedSection className="section-pad bg-white">
      <div className="container-tm">
        <SectionHeading
          eyebrow="Experience Truckmasters"
          title="Step inside our showroom & workshop"
          description="See where retail customers and fleet operators alike receive the same standard of care — from vehicle sales to expert servicing."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-navy/10 bg-navy-dark shadow-card-hover"
        >
          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            controls={playing}
            playsInline
            preload="metadata"
            poster="/images/IMG_3551.jpg"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src="/videos/showroom-tour.mov" type="video/quicktime" />
            <source src="/videos/showroom-tour.mov" type="video/mp4" />
            Your browser does not support embedded video.
          </video>

          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play showroom video"
              className="absolute inset-0 flex items-center justify-center bg-navy-dark/35 transition-colors hover:bg-navy-dark/45"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-glow transition-transform hover:scale-105">
                <Play className="ml-1 h-9 w-9 fill-current" />
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default VideoShowcase;
