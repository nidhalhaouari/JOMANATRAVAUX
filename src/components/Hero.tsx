import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === 'rtl';

    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Construction Site"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-secondary/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-medium tracking-widest uppercase mb-2 md:mb-4 text-sm md:text-base">
                        {t('hero.welcome')}
                    </h2>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                        {t('hero.title')} <br />
                        <span className="text-primary">{t('hero.since')}</span>
                    </h1>
                    <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
                        {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center"
                        >
                            {t('hero.cta_primary')}
                            <ArrowRight className={`ml-2 ${isRTL ? 'rotate-180' : ''}`} size={20} />
                        </Link>
                        <Link
                            to="/projects"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-secondary transition-colors"
                        >
                            {t('hero.cta_secondary')}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
