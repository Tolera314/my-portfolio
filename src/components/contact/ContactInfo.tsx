
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoItem {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}

const ContactInfo = () => {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'tolefayiss@gmail.com',
      link: 'mailto:tolefayiss@gmail.com',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '+251 93 040 5193',
      link: 'tel:+2510930405193',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: '#',
    },
  ];

  return (
    <div className="space-y-4">
      {contactInfo.map((info, index) => (
        <a
          key={index}
          href={info.link}
          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted transition-colors"
        >
          <div className="rounded-full p-2 bg-primary/10 text-primary">
            {info.icon}
          </div>
          <div>
            <h4 className="font-medium">{info.title}</h4>
            <p className="text-muted-foreground">{info.value}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;
