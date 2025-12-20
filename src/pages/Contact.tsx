import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, User, MessageSquare } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import Button from '../components/Button';
import Input from '../components/Input';
import { APP_CONFIG } from '../utils/constants';
import { generateMailtoLink } from '../utils/helpers';
import type { ContactFormData } from '../utils/types';
import './Contact.css';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

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
    const subject = `Contact from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    const mailtoLink = generateMailtoLink(APP_CONFIG.email, subject, body);
    window.location.href = mailtoLink;
    reset();
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-container">
        <ScrollAnimation className="contact-form-wrapper" x={-50}>
          <h2 className="contact-heading">LEAVE A MESSAGE</h2>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              icon={<User size={20} />}
              error={errors.name?.message}
              {...register('name')}
            />
            <Input
              id="email"
              type="email"
              placeholder="Email"
              icon={<Mail size={20} />}
              error={errors.email?.message}
              {...register('email')}
            />
            <Input
              id="message"
              as="textarea"
              placeholder="Message"
              rows={6}
              icon={<MessageSquare size={20} />}
              error={errors.message?.message}
              {...register('message')}
            />
            <Button
              variant="submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </Button>
          </form>
        </ScrollAnimation>
        <ScrollAnimation className="contact-profile" x={50}>
          <div className="profile-card">
            <div className="profile-info">
              <div className="profile-name">{APP_CONFIG.name}</div>
              <div className="profile-divider"></div>
              <div className="profile-location">{APP_CONFIG.location}</div>
              <div className="profile-divider"></div>
              <div className="profile-email">{APP_CONFIG.email}</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

