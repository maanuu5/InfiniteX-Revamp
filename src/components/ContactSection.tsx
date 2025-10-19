import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-8 py-20">
      <div className="w-full max-w-7xl flex items-center justify-between gap-16">
        {/* Left side - Portrait and circular text */}
        <div className="relative w-1/2 flex items-center justify-center">
          {/* Portrait Image */}
          <img 
            src="https://www.foxfuelcreative.com/wp-content/themes/custom/img/figures/01-figure-george-bowie.png" 
            alt="George Washington with lightning bolt face paint"
            className="w-full max-w-md object-contain"
          />
          
          {/* Circular Text */}
          <svg className="absolute" width="300" height="300" viewBox="0 0 300 300" style={{ left: '67%', top: '5%', transform: 'translate(-50%, -50%)' }}>
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
              />
            </defs>
            <text fill="#ffffff" fontSize="16" letterSpacing="8" fontFamily="Inter, sans-serif" fontWeight="400">
              <textPath href="#circlePath" startOffset="0%">
            InfiniteStudiosX . InfiniteStudiosX
              </textPath>
            </text>
          </svg>
        </div>

        {/* Right side - Contact Form */}
        <div className="w-1/2 flex flex-col gap-8 pr-20">
          <div className="flex flex-col gap-6 w-full" style={{ maxWidth: '450px' }}>
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                height: '60px',
                paddingLeft: '3rem',
                paddingRight: '2rem',
                borderWidth: '1.5px'
              }}
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                height: '60px',
                paddingLeft: '3rem',
                paddingRight: '2rem',
                borderWidth: '1.5px'
              }}
            />

            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder="DROP YOUR MESSAGE HERE"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-transparent border border-white/30 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors resize-none"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                minHeight: '140px',
                paddingLeft: '3rem',
                paddingRight: '2rem',
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
                borderWidth: '1.5px'
              }}
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="self-start rounded-full font-bold transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #4ade80 0%, #22c55e 100%)',
                color: '#000000',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.875rem 3rem',
              }}
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}