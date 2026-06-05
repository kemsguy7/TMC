import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CONTACT } from '../../data/site';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors ${
      isActive ? 'text-accent' : 'text-navy hover:text-accent'
    }`;

  return (
    <>
      <div className="hidden md:block bg-navy text-white text-sm">
        <div className="container-tm py-2 flex justify-between items-center">
          <div className="flex gap-6">
            <a href={`tel:${CONTACT.sales.replace(/\s/g, '')}`} className="hover:text-accent-light transition-colors">
              Sales: {CONTACT.sales}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-accent-light transition-colors">
              {CONTACT.email}
            </a>
          </div>
          <span className="text-white/70">Lagos, Nigeria · Nationwide Service</span>
        </div>
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-4 shadow-sm'
        }`}
      >
        <div className="container-tm flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/images/truck-masters-logo.png" alt="Truckmasters Nigeria" className="h-10 md:h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !py-2.5 !px-4 text-xs"
            >
              WhatsApp
            </a>
            <Link to="/quote" className="btn-primary !py-2.5 !px-5 text-xs">
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-navy"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-surface overflow-hidden"
            >
              <nav className="container-tm py-4 flex flex-col gap-3">
                {NAV.map((item) => (
                  <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass} onClick={() => setOpen(false)}>
                    {item.label}
                  </NavLink>
                ))}
                <Link to="/quote" className="btn-primary mt-2" onClick={() => setOpen(false)}>
                  Get a Quote
                </Link>
                <a href={`tel:${CONTACT.sales.replace(/\s/g, '')}`} className="flex items-center gap-2 text-navy font-semibold">
                  <Phone className="w-4 h-4 text-accent" />
                  {CONTACT.sales}
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
