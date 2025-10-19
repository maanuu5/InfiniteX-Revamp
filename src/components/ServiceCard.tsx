interface ServiceCardProps {
  title: string
  imageUrl: string
  imageAlt: string
  link?: string
}

export default function ServiceCard({ title, imageUrl, imageAlt, link = '#' }: ServiceCardProps) {
  return (
    <a 
      href={link}
      className="group relative block aspect-[4/3] rounded-3xl overflow-hidden bg-black border border-white/10 hover:border-white/20 transition-all duration-500"
    >
      {/* Background Image - Hidden by default, revealed on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      {/* Text Content */}
      <div className="relative z-10 h-full flex items-end justify-start" style={{ padding: '2rem 2.5rem' }}>
        <h3 
          className="text-light transition-transform duration-500 group-hover:translate-y-2 flex flex-col gap-1"
          style={{
            fontFamily: '"Wulkan Display", serif',
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            lineHeight: '1.3',
            maxWidth: '85%',
            paddingLeft: '0.5rem'
          }}
        >
          {title.split(/[\s/]+/).map((word, index) => (
            <span key={index} className="block">
              {word}
              {index < title.split(/[\s/]+/).length - 1 && word !== '/' ? ' ' : ''}
            </span>
          ))}
        </h3>
      </div>
    </a>
  )
}