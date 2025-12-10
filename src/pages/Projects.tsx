import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Luxury Villa Carthage',
            category: 'construction',
            image: project1,
            description: 'A stunning modern villa overlooking the Mediterranean Sea. Features include a private infinity pool, smart home integration, and sustainable materials.',
        },
        {
            id: 2,
            title: 'Modern Apartment Interior',
            category: 'interior',
            image: project2,
            description: 'Complete interior redesign of a penthouse in La Marsa. Focusing on open spaces, natural light, and minimalist aesthetics.',
        },
        {
            id: 3,
            title: 'Villa Renovation Radès',
            category: 'renovation',
            image: project3,
            description: 'Transformation of a 1980s villa into a contemporary family home. Added a new floor, modernized the facade, and landscaped the gardens.',
        },
        // Duplicating for grid effect
        {
            id: 4,
            title: 'Seaside Residence',
            category: 'construction',
            image: project1,
            description: 'High-end residential complex featuring 12 luxury apartments with sea views and premium amenities.',
        },
        {
            id: 5,
            title: 'Office Complex',
            category: 'renovation',
            image: project3,
            description: 'Renovation of a commercial building in Tunis. Upgraded HVAC systems, facade modernization, and interior layout optimization.',
        },
        {
            id: 6,
            title: 'Minimalist Loft',
            category: 'interior',
            image: project2,
            description: 'Industrial chic loft conversion. Exposed brick, steel beams, and custom furniture design.',
        },
    ];

    const categories = ['all', 'construction', 'renovation', 'interior'];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="pt-20">
            {/* Header */}
            <div className="bg-secondary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.title')}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('projects.subtitle')}
                    </p>
                </div>
            </div>

            {/* Filter & Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 md:px-6 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-secondary'
                                    }`}
                            >
                                {t(`projects.categories.${cat}`)}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                index={index}
                                image={project.image}
                                title={project.title}
                                category={t(`projects.categories.${project.category}`)}
                                description={project.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
