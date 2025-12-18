import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, User, MessageSquare } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import Button from '../components/Button';
import Input from '../components/Input';
import './Contact.css';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const mailtoLink = `mailto:henritomperi97@gmail.com?subject=Contact from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
    window.location.href = mailtoLink;
    reset();
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-container">
        <ScrollAnimation className="contact-form-wrapper" x={-50}>
          <h2 className="contact-heading">LEAVE A MESSAGE</h2>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="input-wrapper">
                <User className="input-icon" size={20} />
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  {...register('name')}
                />
              </div>
              {errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  {...register('email')}
                />
              </div>
              {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <MessageSquare className="input-icon" size={20} />
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={6}
                  className={`form-input ${errors.message ? 'error' : ''}`}
                  {...register('message')}
                />
              </div>
              {errors.message && <span className="error-message">{errors.message.message}</span>}
            </div>
            <Button
              variant="submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </Button>
          </form>
        </ScrollAnimation>
        <ScrollAnimation className="contact-profile" x={50}>
          <div className="profile-card">
            <div className="profile-info">
              <div className="profile-name">Henri Tomperi</div>
              <div className="profile-divider"></div>
              <div className="profile-location">Helsinki, Finland</div>
              <div className="profile-divider"></div>
              <div className="profile-email">henritomperi97@gmail.com</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

