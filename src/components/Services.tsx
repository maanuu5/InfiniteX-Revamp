import ServiceCard from './ServiceCard'

const services = [
  {
    title: 'Custom Web-Development',
    imageUrl: 'https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg',
    imageAlt: 'Modern electric utility building, corporate office exterior, professional business architecture - Photo by Avi Werde on Unsplash'
  },
  {
    title: 'Responsive Design',
    imageUrl: 'https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg',
    imageAlt: 'Nashville cityscape, downtown skyline, urban business district, modern city architecture - Photo by Aleksei Zaitcev on Unsplash'
  },
  {
    title: 'Performance Optimization',
    imageUrl: 'https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg',
    imageAlt: 'Modern technology office, healthcare tech workspace, digital innovation, contemporary business interior - Photo by Boitumelo on Unsplash'
  },
  {
    title: 'SEO-Analytics',
    imageUrl: 'https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg',
    imageAlt: 'Healthcare facility, medical center exterior, hospital building, modern healthcare architecture - Photo by Solen Feyissa on Unsplash'
  },
  {
    title: 'UI-UX ',
    imageUrl: 'https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg',
    imageAlt: 'Mexican restaurant interior, colorful dining space, festive restaurant atmosphere, vibrant food establishment'
  },
  {
    title: 'AI-Driven Automation',
    imageUrl: 'https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg',
    imageAlt: 'Church building exterior, religious architecture, modern church design, spiritual community center - Photo by Roger Starnes Sr on Unsplash'
  }
]

export default function Services() {
  return (
    <section 
      className="relative mt-32 py-24 bg-dark"
      style={{
        padding: '6rem',
        paddingTop: '6rem',
        paddingBottom: '6rem'
      }}
    >
      {/* Background overlay to hide video */}
      <div className="absolute inset-0 bg-dark/95" />
      
      {/* Content */}
      <div 
        className="relative z-10 mx-auto"
        style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <h2 className="text-light mb-24 text-center"
          style={{
            paddingTop: '10px',
            paddingBottom: '70px',
            marginTop: '10px',
            fontFamily: '"Zen Dots", serif',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            lineHeight: '1.1',
            fontWeight: '300',
            letterSpacing: '-0.02em'
          }}
        >
          S E R V I C E S
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
        {/* CTA button under cards */}
        <div className="mt-12 flex justify-center">
          <button
            className="text-sm font-medium tracking-wider text-white transition-all duration-200"
            style={{
              marginTop: '50px',
              padding: '0.875rem 1rem',
              border: '1px solid white',
              borderRadius: '0.25rem',
              background: 'transparent',
              boxShadow: '0px 0px 0px 0px rgba(94, 234, 123, 0)',
              letterSpacing: '0.075rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(94, 234, 123, 0.05)'
              e.currentTarget.style.boxShadow = '6px 6px 0px 0px rgba(94, 234, 123, 0.7)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(94, 234, 123, 0)'
            }}
          >
            SEE ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  )
}