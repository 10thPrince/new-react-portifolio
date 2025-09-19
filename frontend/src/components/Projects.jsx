import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Blogging AI",
        description: "An AI that makes it Easy to create and Manage your Blogs.",
        image: "/projects/QuickBlog.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoURL: "#",
        githubURL: "#"
    },
    {
        id: 2,
        title: "Analyst",
        description: "An app that is ready to help you in data Analysis with ease.",
        image: "/projects/Analyst.png",
        tags: ["TypeScript", "TailwindCSS", "Next.js"],
        demoURL: "#",
        githubURL: "#"
    },
    {
        id: 3,
        title: "Book Store",
        description: "A fst and secure online book store that sells books at a perfect Price.",
        image: "/projects/BookStore.png",
        tags: ["React", "Node.js", "Stripe"],
        demoURL: "#",
        githubURL: "#"
    },
]



const Projects = () => {
    return (
        <section id="projects"
            className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each Project was carefully
                    crafted with attention to detail, perfomance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className="text-xl mb-1 font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                {/* links */}

                                <div className="flex justify-center items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoURL}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                            {" "}
                                            <ExternalLink />
                                        </a>
                                        <a
                                            href={project.githubURL}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                            {" "}
                                            <Github />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* my github */}
                <div className='text-center mt-12'>
                    <a href="https://github.com/10thprince" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                        Check My Github <ArrowRight />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects