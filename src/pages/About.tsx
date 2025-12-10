import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import founderImage from '../assets/image.jpg';
import logo from '../assets/logo.jpg';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20">
            {/* Header */}
            <div className="bg-secondary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('about.subtitle')}
                    </p>
                </div>
            </div>

            {/* Mission & History */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-secondary mb-6">{t('about.story_title')}</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {t('about.story_p1')}
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {t('about.story_p2')}
                            </p>

                            <h3 className="text-2xl font-bold text-secondary mb-4 mt-8">{t('about.mission_title')}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {t('about.mission_desc')}
                            </p>

                            <div className="space-y-3">
                                {[
                                    t('about.values.quality'),
                                    t('about.values.communication'),
                                    t('about.values.delivery'),
                                    t('about.values.satisfaction')
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center text-gray-700">
                                        <CheckCircle className="text-primary mr-3 flex-shrink-0" size={20} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Construction Site"
                                    className="object-cover w-full h-full rounded-xl"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-primary hidden md:block rtl:left-auto rtl:-right-6 rtl:border-l-0 rtl:border-r-4">
                                <p className="text-4xl font-bold text-secondary mb-1">3+</p>
                                <p className="text-gray-500 text-sm">{t('about.years_excellence')}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-4">{t('about.founder_title')}</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="h-full">
                                <img
                                    src={founderImage}
                                    alt="Mohamed Belhaj"
                                    className="w-full h-full object-cover min-h-[400px]"
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-secondary mb-2">Mohamed Belhaj</h3>
                                <p className="text-primary font-medium mb-6">{t('about.founder_role')}</p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {t('about.founder_desc')}
                                </p>
                                <div className="mt-auto">
                                    <img src={logo} alt="Signature" className="h-12 opacity-50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
