import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.jpg';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.projects'), path: '/projects' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="JOMANA TRAVAUX" className="h-10 md:h-12 w-auto object-contain" />
                        <span className={`text-lg md:text-xl font-bold tracking-wider ${scrolled ? 'text-secondary' : 'text-white'}`}>
                            JOMANA TRAVAUX
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path
                                    ? 'text-primary'
                                    : scrolled
                                        ? 'text-secondary'
                                        : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <LanguageSwitcher />
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition-colors"
                        >
                            {t('nav.quote')}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md focus:outline-none ${scrolled ? 'text-secondary' : 'text-white'
                                }`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white shadow-lg overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                        ? 'text-primary bg-gray-50'
                                        : 'text-secondary hover:text-primary hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <div className="flex flex-col space-y-3">
                                    <a href="tel:+21628113738" className="flex items-center text-secondary hover:text-primary">
                                        <Phone size={18} className="mr-2" />
                                        +216 28 113 738
                                    </a>
                                    <a href="mailto:mmpsconstruction@gmail.com" className="flex items-center text-secondary hover:text-primary">
                                        <Mail size={18} className="mr-2" />
                                        mmpsconstruction@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
