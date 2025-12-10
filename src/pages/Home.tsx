import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home as HomeIcon, PenTool, Users, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';

const Home = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === 'rtl';

    const services = [
        {
            icon: <HomeIcon size={40} />,
            title: t('intro.services.construction.title'),
            description: t('intro.services.construction.desc'),
        },
        {
            icon: <PenTool size={40} />,
            title: t('intro.services.renovation.title'),
            description: t('intro.services.renovation.desc'),
        },
        {
            icon: <Users size={40} />,
            title: t('intro.services.consultation.title'),
            description: t('intro.services.consultation.desc'),
        },
    ];

    return (
        <div>
            <Hero />

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                            {t('intro.title')}
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('intro.description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100 text-center"
                            >
                                <div className="text-primary mb-6 flex justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-secondary text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('cta.subtitle')}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors"
                    >
                        {t('cta.button')}
                        <ArrowRight className={`ml-2 ${isRTL ? 'rotate-180' : ''}`} size={20} />
                    </Link>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </section>
        </div>
    );
};

export default Home;
