export default function Hero() {
  const textStyle = {
    fontSize: 'clamp(2.5rem, 4vw, 4rem)',
    fontFamily: '"Wulkan Display", serif',
    lineHeight: '1.1',
    fontWeight: '300',
    letterSpacing: '-0.02em',
    color: 'rgb(242, 242, 242)'
  };

  const italicStyle = {
    ...textStyle,
    fontStyle: 'italic'
  };

  return (
    <section className="min-h-screen flex items-center justify-start pr-8 pb-20" style={{ paddingLeft: '100px',marginTop: '50px' }}>
      <div className="max-w-[1200px]">
        <h1 className="text-light" style={{ marginTop: '0' }}>
          <span className="block" style={textStyle}>You're probably waiting for us</span>
          <span className="block" style={textStyle}>to define infinity.</span>
          <span className="block" style={italicStyle}>We're still busy expanding it.</span>
          <span className="block" style={textStyle}>Because limits are man-made,</span>
          <span className="block" style={textStyle}>and we're not.</span>
        </h1>
        
        <div className="mt-24">
          <p 
            className="text-light max-w-3xl"
            style={{
              marginTop: '50px',
              marginLeft: '0px',
              fontFamily: '"Source Code Pro", monospace',
              fontSize: '18px',
              fontWeight: 500,
              letterSpacing: '0.05rem',
              textTransform: 'uppercase',
              lineHeight: 1.5
            }}
          >
            *AN INDEPENDENT CREATIVE STUDIO PUSHING IDEAS BEYOND INFINITY
          </p>
        </div>
      </div>
    </section>
  )
}