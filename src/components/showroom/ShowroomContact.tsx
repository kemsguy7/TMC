import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '../../data/site';

const ShowroomContact = () => (
  <div className="mt-12 border-t border-white/[0.08] pt-10">
    <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
      Truckmasters Nigeria Ltd
    </h3>

    <address className="mt-5 space-y-4 not-italic">
      <p className="flex gap-3 text-sm leading-relaxed text-white/55">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
        {CONTACT.address}
      </p>
      <p className="flex gap-3 text-sm text-white/55">
        <Phone className="h-4 w-4 shrink-0 text-accent-light" />
        <span>
          Sales:{' '}
          <a href={`tel:${CONTACT.sales.replace(/\s/g, '')}`} className="hover:text-white">
            {CONTACT.sales}
          </a>
          {CONTACT.salesAlt && (
            <>
              <br />
              <a href={`tel:${CONTACT.salesAlt.replace(/\s/g, '')}`} className="hover:text-white">
                {CONTACT.salesAlt}
              </a>
            </>
          )}
        </span>
      </p>
      <p className="flex gap-3 text-sm text-white/55">
        <Mail className="h-4 w-4 shrink-0 text-accent-light" />
        <a href={`mailto:${CONTACT.salesEmail}`} className="hover:text-white">
          {CONTACT.salesEmail}
        </a>
      </p>
    </address>

    <p className="mt-6 text-xs text-white/35">{CONTACT.hours}</p>
  </div>
);

export default ShowroomContact;
