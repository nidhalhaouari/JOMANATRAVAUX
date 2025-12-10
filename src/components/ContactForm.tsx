import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: 'house',
        message: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = t('contact.form.errors.name');
        if (!formData.email.trim()) {
            newErrors.email = t('contact.form.errors.email_req');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('contact.form.errors.email_inv');
        }
        if (!formData.phone.trim()) {
            newErrors.phone = t('contact.form.errors.phone_req');
        } else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone)) {
            newErrors.phone = t('contact.form.errors.phone_inv');
        }
        if (!formData.message.trim()) newErrors.message = t('contact.form.errors.message');

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                projectType: 'house',
                message: '',
            });
            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-secondary mb-6">{t('contact.form.title')}</h3>

            {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg flex flex-col items-center text-center">
                    <CheckCircle size={48} className="mb-4" />
                    <h4 className="text-xl font-semibold mb-2">{t('contact.form.success_title')}</h4>
                    <p>{t('contact.form.success_desc')}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('contact.form.name')}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
                                } focus:outline-none focus:ring-2 transition-colors`}
                            placeholder="John Doe"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500 flex items-center">
                                <AlertCircle size={14} className="mr-1" /> {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                {t('contact.form.email')}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
                                    } focus:outline-none focus:ring-2 transition-colors`}
                                placeholder="john@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500 flex items-center">
                                    <AlertCircle size={14} className="mr-1" /> {errors.email}
                                </p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                {t('contact.form.phone')}
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
                                    } focus:outline-none focus:ring-2 transition-colors`}
                                placeholder="+216 28 113 738"
                            />
                            {errors.phone && (
                                <p className="mt-1 text-sm text-red-500 flex items-center">
                                    <AlertCircle size={14} className="mr-1" /> {errors.phone}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Project Type */}
                    <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('contact.form.project_type')}
                        </label>
                        <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-colors bg-white"
                        >
                            <option value="house">{t('contact.form.types.house')}</option>
                            <option value="renovation">{t('contact.form.types.renovation')}</option>
                            <option value="consultation">{t('contact.form.types.consultation')}</option>
                            <option value="other">{t('contact.form.types.other')}</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('contact.form.message')}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
                                } focus:outline-none focus:ring-2 transition-colors`}
                            placeholder="..."
                        />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-500 flex items-center">
                                <AlertCircle size={14} className="mr-1" /> {errors.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {t('contact.form.sending')}
                            </span>
                        ) : (
                            <span className="flex items-center">
                                {t('contact.form.submit')}
                                <Send size={20} className="ml-2 rtl:mr-2 rtl:ml-0" />
                            </span>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
