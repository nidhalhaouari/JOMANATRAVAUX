import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    image: string;
    title: string;
    category: string;
    description: string;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
        >
            <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <button className="bg-white text-secondary p-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowUpRight size={24} />
                    </button>
                </div>
            </div>
            <div className="p-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">{category}</span>
                <h3 className="text-xl font-bold text-secondary mt-2 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
