import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.jpg';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <img src={logo} alt="JOMANA TRAVAUX" className="h-10 w-auto object-contain bg-white rounded-sm p-1" />
                            <span className="text-xl font-bold tracking-wider text-white">
                                JOMANA TRAVAUX
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            {t('footer.desc')}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primary">{t('footer.quick_links')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.home')}</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.about')}</Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.projects')}</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.contact')}</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primary">{t('footer.services')}</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-400 text-sm">{t('intro.services.construction.title')}</li>
                            <li className="text-gray-400 text-sm">{t('intro.services.renovation.title')}</li>
                            <li className="text-gray-400 text-sm">{t('intro.services.consultation.title')}</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primary">{t('footer.contact')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={18} className="text-primary mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">Radès, Tunisia</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="text-primary mr-3 flex-shrink-0" />
                                <a href="tel:+21628113738" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                    +216 28 113 738
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="text-primary mr-3 flex-shrink-0" />
                                <a href="mailto:mmpsconstruction@gmail.com" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                    mmpsconstruction@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-xs text-center md:text-left mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} JOMANA TRAVAUX. {t('footer.rights')}
                    </p>
                    <p className="text-gray-500 text-xs">
                        {t('footer.designed')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
