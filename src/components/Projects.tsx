import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Fast-and-Fab',
    imageUrl: 'https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg',
    imageAlt: 'Restaurant website project showcase'
  },
  {
    title: 'Beyond-Dreams',
    imageUrl: 'https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg',
    imageAlt: 'Tech company website project'
  },
  {
    title: 'Sibling-Space',
    imageUrl: 'https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg',
    imageAlt: 'Fashion e-commerce project'
  },
  {
    title: "Let's-Grow-Esports",
    imageUrl: 'https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg',
    imageAlt: 'Healthcare platform project'
  },
  {
    title: 'E-Legalify',
    imageUrl: 'https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg',
    imageAlt: 'Environmental organization website'
  },
  {
    title: 'Speak-Clearly',
    imageUrl: 'https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg',
    imageAlt: 'Digital agency portfolio project'
  }
]

export default function Projects() {
  return (
    <section 
      className="relative mt-32 py-24 bg-dark"
      style={{
        padding: '6rem',
        paddingTop: '6rem',
        paddingBottom: '6rem'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-dark/95" />
      
      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto">
        {/* Heading */}
        <h2 
          className="text-center mb-20 text-light"
          style={{
             paddingTop: '10px',
            paddingBottom: '70px',
            marginTop: '10px',
            fontFamily: 'Zen Dots, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '400',
            letterSpacing: '0.02em'
          }}
        >
          Projects
        </h2>

        {/* Grid of Project Cards */}
        <div 
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))'
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}