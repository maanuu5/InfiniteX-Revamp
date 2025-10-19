import foundersVideo from './founders.mp4';

export default function FoundersSection() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center bg-black" style={{marginTop: '0', marginBottom: '0'}}>
      {/* Left side - Video container */}
      <div className="absolute left-0 top-0 bottom-0 w-[65%] z-0 overflow-hidden flex items-center justify-center">
        <video 
          src={foundersVideo} 
          autoPlay
          loop
          muted
          playsInline
          className="min-w-full min-h-full object-contain"
          style={{
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />
      </div>
      
      {/* Right side - Purple overlay card */}
      <div className="absolute right-0 top-0 bottom-0 w-[35%] z-10 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)'}}>
        <div className="px-10 py-8 max-w-lg h-full flex items-center justify-center">
          <h2 
            className="text-white leading-tight text-center"
            style={{
              fontFamily: 'Doto, Inter, sans-serif',
              fontSize: 'clamp(1.75rem, 3vw, 3rem)',
              fontWeight: '400',
              lineHeight: '1.15',
              letterSpacing: '-0.01em'
            }}
          >
            Two local geniuses started an agency a year ago.
            <br />
            <span className="text-[1.5rem] mt-4 block" style={{ fontFamily: 'Doto, Inter, sans-serif', marginTop: '3rem' }}>Mohammad Harish & Manan Arora</span>
          </h2>
        </div>
      </div>
    </section>
  );
}