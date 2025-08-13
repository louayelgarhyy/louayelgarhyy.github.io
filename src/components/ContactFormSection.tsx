import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare, FileText } from 'lucide-react';

const getServices = (t: any) => [
  t('services.items.mobile.title') + ' ' + t('services.starting_from') + ' $99.99',
  t('services.items.web.title') + ' ' + t('services.starting_from') + ' $49.99',
  t('services.items.ui.title') + ' ' + t('services.starting_from') + ' $49.99',
  t('services.items.deployment.title') + ' ' + t('services.starting_from') + ' $24.99',
  t('services.items.maintenance.title') + ' ' + t('services.starting_from') + ' $24.99',
  t('services.items.consulting.title') +' - FREE',
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
  const [alert, setAlert] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const inputVariants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
      transition: { duration: 0.2 }
    },
    unfocused: {
      scale: 1,
      boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)",
      transition: { duration: 0.2 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t('contact.form.title') || 'Get In Touch'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('contact.form.description') || "Ready to bring your ideas to life? Let's discuss your project and create something amazing together."}
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-[2fr_4fr] gap-12 items-start"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={fieldVariants}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's Connect
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">louayelgarhy@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+20 1144373132</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-muted-foreground">24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Why Choose Me?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Fast response time</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Transparent pricing</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Regular updates</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Post-launch support</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-xl"
            variants={fieldVariants}
          >
            <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={fieldVariants}
              >
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    {t('contact.form.name') || 'Full Name'}
                  </label>
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                  >
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Louay ElGarhy"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    {t('contact.form.email') || 'Email Address'}
                  </label>
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                  >
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="louay@example.com"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={fieldVariants}
              >
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    {t('contact.form.phone') || 'Phone Number'}
                  </label>
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'phone' ? 'focused' : 'unfocused'}
                  >
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                    {t('contact.form.subject') || 'Service Type'}
                  </label>
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'subject' ? 'focused' : 'unfocused'}
                  >
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 appearance-none"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                      >
                        {services.map((s, i) => (
                          <option key={i} value={s}>{s}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                variants={fieldVariants}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  {t('contact.form.message') || 'Project Details'}
                </label>
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                >
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                      rows={6}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fieldVariants}
                className="pt-4"
              >
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{t('contact.form.sending') || 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('contact.form.send') || 'Send Message'}</span>
                    </>
                  )}
                </motion.button>
              </motion.div>

              {alert && (
                <motion.div
                  className={`flex items-center justify-center space-x-2 rtl:space-x-reverse p-4 rounded-xl ${alert.includes('success')
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-red-50 border border-red-200 text-red-800'
                    }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {alert.includes('success') ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span className="text-sm font-medium">{alert}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;