export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 y2k-gradient rounded-lg flex items-center justify-center y2k-glow">
          <span className="text-background font-black text-lg">Y2K</span>
        </div>
        <span className="text-xl font-black">
          <span className="y2k-gradient-text">ZERO</span>
          <span className="text-secondary">BAR</span>
        </span>
      </div>
    </a>
  )
}