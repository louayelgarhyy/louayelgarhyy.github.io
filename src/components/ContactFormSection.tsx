import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const getServices = (t: any) => [
  t('services.items.mobile.title') + ' - $9.99',
  t('services.items.web.title') + ' - $29.99', 
  t('services.items.ui.title') + ' - $19.99',
  t('services.items.deployment.title') + ' - $14.99',
  t('services.items.maintenance.title') + ' - $24.99',
  t('services.items.consulting.title') + ' - $39.99',
];

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzgChN2RG4IWk0QKel8z9fGdRUPqd0lBi2C9s2qbVHA-hqAcCu_g76XwEs4oMO1wL_-/exec';

const ContactFormSection = ({ preselectedSubject }: { preselectedSubject?: string }) => {
  const { t } = useTranslation();
  const services = getServices(t);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(preselectedSubject || services[0]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<string|null>(null);

  useEffect(() => {
    if (preselectedSubject) setSubject(preselectedSubject);
  }, [preselectedSubject]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);
    const formData = new FormData();
    formData.append('name', name.trim());
    formData.append('email', email.trim());
    formData.append('phone', phone.trim());
    formData.append('subject', subject.trim());
    formData.append('message', message.trim());
    try {
      // Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });
      // EmailJS (stub, replace with your EmailJS integration)
      // await emailjs.send(...)
      // TODO: Integrate EmailJS here
      if (response.ok) {
        setAlert(t('contact.form.success') || 'Request sent successfully!');
        setName(''); setEmail(''); setPhone(''); setMessage('');
        setSubject(services[0]);
      } else {
        setAlert(t('contact.form.error') || 'Error sending request.');
      }
    } catch (error) {
      setAlert(t('contact.form.networkError') || 'Network error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('contact.form.title') || 'Contact Me'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            {t('contact.form.description') || "Fill out the form below and I'll get back to you as soon as possible."}
          </p>
        </div>
        <form className="work-request space-y-6" onSubmit={handleSubmit} autoComplete="off">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">{t('contact.form.name') || 'Name'}</label>
              <input id="name" name="name" type="text" required className="input input-bordered w-full" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">{t('contact.form.email') || 'Email'}</label>
              <input id="email" name="email" type="email" required className="input input-bordered w-full" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">{t('contact.form.phone') || 'Phone'}</label>
              <input id="phone" name="phone" type="text" className="input input-bordered w-full" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">{t('contact.form.subject') || 'Subject'}</label>
              <select id="subject" name="subject" required className="input input-bordered w-full" value={subject} onChange={e => setSubject(e.target.value)}>
                {services.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">{t('contact.form.message') || 'Message'}</label>
            <textarea id="message" name="message" required className="input input-bordered w-full min-h-[120px]" value={message} onChange={e => setMessage(e.target.value)} />
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? (t('contact.form.sending') || 'Sending...') : (t('contact.form.send') || 'Send Message')}
            </button>
          </div>
          {alert && <div className={`text-center text-sm ${alert.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{alert}</div>}
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;