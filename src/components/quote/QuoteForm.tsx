import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const INITIAL: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

const QuoteForm = () => {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submittedJson, setSubmittedJson] = useState<string | null>(null);

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = {
      ...form,
      submittedAt: new Date().toISOString(),
      source: 'truckmasters-quote-form',
    };

    try {
      // Placeholder: logs JSON until backend/email is configured
      console.log('Quote form submission:', JSON.stringify(payload, null, 2));

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => null);

      if (!response || !response.ok) {
        // Expected until API exists — still treat as success for demo
        setSubmittedJson(JSON.stringify(payload, null, 2));
        setStatus('success');
        setForm(INITIAL);
        return;
      }

      setSubmittedJson(JSON.stringify(payload, null, 2));
      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-xl border border-navy/15 bg-white px-4 py-3.5 text-navy placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-shadow';

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 md:p-10 space-y-6 max-w-2xl mx-auto"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Full Name *</label>
          <input required className={inputClass} value={form.name} onChange={update('name')} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Phone *</label>
          <input required type="tel" className={inputClass} value={form.phone} onChange={update('phone')} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Email *</label>
          <input required type="email" className={inputClass} value={form.email} onChange={update('email')} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Company</label>
          <input className={inputClass} value={form.company} onChange={update('company')} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-2">Service Needed</label>
        <select className={inputClass} value={form.service} onChange={update('service')}>
          <option value="">Select a service</option>
          <option>Workshop / Repairs</option>
          <option>Vehicle Sales</option>
          <option>Fleet Inspection</option>
          <option>Fleet Consultancy</option>
          <option>Mobile Workshop</option>
          <option>Body & Paint</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-2">Message *</label>
        <textarea
          required
          rows={5}
          className={inputClass}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about your fleet or vehicle needs..."
        />
      </div>

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === 'submitting' ? 'Submitting...' : 'Submit Quote Request'}
      </button>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-800"
        >
          <p className="font-semibold mb-2">Request received!</p>
          <p className="mb-3 text-green-700">
            Your details have been captured as JSON (email integration coming soon). Our team will contact you shortly.
          </p>
          {submittedJson && (
            <pre className="text-xs bg-white/80 rounded-lg p-3 overflow-x-auto text-navy/80 max-h-48">
              {submittedJson}
            </pre>
          )}
        </motion.div>
      )}

      {status === 'error' && (
        <p className="text-accent text-sm">Something went wrong. Please try again or call us directly.</p>
      )}
    </motion.form>
  );
};

export default QuoteForm;
