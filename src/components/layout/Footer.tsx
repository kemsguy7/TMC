import { Link } from 'react-router-dom';
import { CONTACT } from '../../data/site';

const Footer = () => (
  <footer className="bg-navy text-white">
    <div className="container-tm py-14 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div className="lg:col-span-2">
        <img src="/images/truck-masters-logo.png" alt="Truckmasters" className="h-12 mb-4 brightness-0 invert" />
        <p className="text-white/75 max-w-md leading-relaxed">
          Automotive therapy for Nigeria&apos;s fleets — sales, workshop, diagnostics, and nationwide support.
          We sell peace of mind.
        </p>
      </div>
      <div>
        <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-white/75">
          <li><Link to="/services" className="hover:text-accent-light transition-colors">Services</Link></li>
          <li><Link to="/gallery" className="hover:text-accent-light transition-colors">Gallery</Link></li>
          <li><Link to="/quote" className="hover:text-accent-light transition-colors">Get a Quote</Link></li>
          <li><Link to="/contact" className="hover:text-accent-light transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading font-semibold mb-4">Contact</h4>
        <ul className="space-y-2 text-sm text-white/75">
          <li>Sales: {CONTACT.sales}</li>
          <li>Service: {CONTACT.service}</li>
          <li>{CONTACT.email}</li>
          <li className="pt-2">{CONTACT.address}</li>
        </ul>
        <div className="flex gap-3 mt-4">
          <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">Facebook</a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">Instagram</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">LinkedIn</a>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="container-tm py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Truckmasters Nigeria Limited. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
