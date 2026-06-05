import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
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

const menuBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const menuPanel = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring' as const, stiffness: 280, damping: 32, mass: 0.85 },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const menuList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
  exit: { opacity: 0, transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const menuItem = {
  hidden: { opacity: 0, x: 48, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 320, damping: 28 },
  },
  exit: { opacity: 0, x: 24, transition: { duration: 0.15 } },
};

const HamburgerButton = ({ open, onClick }: { open: boolean; onClick: () => void }) => (
  <button
    type="button"
    className="lg:hidden relative z-[60] flex h-11 w-11 items-center justify-center rounded-xl border border-navy/10 bg-white/80 shadow-sm backdrop-blur-sm transition-colors hover:border-accent/30 hover:bg-accent/5"
    onClick={onClick}
    aria-label={open ? 'Close menu' : 'Open menu'}
    aria-expanded={open}
  >
    <div className="relative h-4 w-5">
      <motion.span
        className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-navy"
        animate={open ? { rotate: 45, y: 7, backgroundColor: '#e53e3e' } : { rotate: 0, y: 0, backgroundColor: '#2c3e50' }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      />
      <motion.span
        className="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-navy"
        animate={open ? { opacity: 0, scaleX: 0.4, x: -8 } : { opacity: 1, scaleX: 1, x: 0 }}
        transition={{ duration: 0.18 }}
      />
      <motion.span
        className="absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-navy"
        animate={open ? { rotate: -45, y: -7, backgroundColor: '#e53e3e' } : { rotate: 0, y: 0, backgroundColor: '#2c3e50' }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      />
    </div>
  </button>
);

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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors ${
      isActive ? 'text-accent' : 'text-navy hover:text-accent'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `group flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-semibold transition-all duration-300 ${
      isActive
        ? 'bg-white/12 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]'
        : 'text-white/85 hover:bg-white/8 hover:text-white hover:translate-x-1'
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

          <HamburgerButton open={open} onClick={() => setOpen((v) => !v)} />
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              variants={menuBackdrop}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[55] bg-navy-dark/70 backdrop-blur-md lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.aside
              variants={menuPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 z-[58] flex w-[min(100%,22rem)] flex-col overflow-hidden lg:hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-[#121c26]" />
              <motion.div
                className="absolute -right-16 top-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -left-10 bottom-24 h-40 w-40 rounded-full bg-white/10 blur-2xl"
                animate={{ y: [0, -12, 0], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative flex h-full flex-col px-6 pb-8 pt-24">
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.35 }}
                  className="mb-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-light">Navigation</p>
                  <p className="mt-2 font-heading text-2xl font-bold text-white">Where to next?</p>
                </motion.div>

                <motion.nav
                  variants={menuList}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-1 flex-col gap-2"
                >
                  {NAV.map((item) => (
                    <motion.div key={item.to} variants={menuItem}>
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        className={mobileLinkClass}
                        onClick={() => setOpen(false)}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.nav>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, type: 'spring', stiffness: 260, damping: 24 }}
                  className="mt-6 space-y-3 border-t border-white/10 pt-6"
                >
                  <Link
                    to="/quote"
                    className="btn-primary flex w-full justify-center !rounded-2xl !py-4 text-sm shadow-glow"
                    onClick={() => setOpen(false)}
                  >
                    Get a Quote
                  </Link>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/35 hover:bg-white/10"
                  >
                    Chat on WhatsApp
                  </a>

                  <div className="grid gap-2 pt-2">
                    <a
                      href={`tel:${CONTACT.sales.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/8 hover:text-white"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent-light">
                        <Phone className="h-4 w-4" />
                      </span>
                      {CONTACT.sales}
                    </a>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/8 hover:text-white"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent-light">
                        <Mail className="h-4 w-4" />
                      </span>
                      {CONTACT.email}
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
