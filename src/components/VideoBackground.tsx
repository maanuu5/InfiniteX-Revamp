export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <img
        src="https://i.pinimg.com/originals/74/c9/80/74c9801e8fba4c2d7ca0197d3cc3990a.gif"
        alt="Background animation"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80" />
    </div>
  )
}