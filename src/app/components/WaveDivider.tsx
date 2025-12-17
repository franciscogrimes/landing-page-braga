export function WaveDivider() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[80px] md:h-[120px]"
      >
        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="-4"
              stdDeviation="6"
              floodColor="rgba(0,0,0,0.25)"
            />
          </filter>
        </defs>

        <path
          d="M0,64 C240,96 480,32 720,32 960,32 1200,96 1440,64 L1440,0 L0,0 Z"
          fill="#F7F5EF"
          filter="url(#shadow)"
        />
      </svg>
    </div>
  )
}
