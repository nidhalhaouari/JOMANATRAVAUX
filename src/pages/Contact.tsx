import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20">
            {/* Header */}
            <div className="bg-secondary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </div>
            </div>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info & Map */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-secondary mb-6">{t('contact.get_in_touch')}</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {t('contact.desc')}
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 text-primary rtl:mr-0 rtl:ml-4">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-secondary">{t('contact.location')}</h3>
                                            <p className="text-gray-600">Radès, Tunisia</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 text-primary rtl:mr-0 rtl:ml-4">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-secondary">{t('contact.phone')}</h3>
                                            <a href="tel:+21628113738" className="text-gray-600 hover:text-primary transition-colors">
                                                +216 28 113 738
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 text-primary rtl:mr-0 rtl:ml-4">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-secondary">{t('contact.email')}</h3>
                                            <a href="mailto:mmpsconstruction@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                                                mmpsconstruction@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 text-primary rtl:mr-0 rtl:ml-4">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-secondary">{t('contact.hours')}</h3>
                                            <p className="text-gray-600">{t('contact.hours_week')}</p>
                                            <p className="text-gray-600">{t('contact.hours_sat')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25563.53580459381!2d10.25686975!3d36.7680795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35e076634c03%3A0x8805721868477017!2zUmFkw6hz!5e0!3m2!1sen!2stn!4v1709654321000!5m2!1sen!2stn"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Radès Map"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
