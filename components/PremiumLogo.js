export default function PremiumLogo({ size = 'md', className = '' }) {
  const textSizes = {
    sm: 'text-2xl',
    md: 'text-3xl', 
    lg: 'text-5xl',
    xl: 'text-7xl'
  }
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Circular badge background */}
        <div className="bg-gradient-to-br from-gold via-darkGold to-gold rounded-full p-3 shadow-2xl shadow-gold/30">
          <span className={`font-serif font-black text-black ${textSizes[size]} tracking-wider`}>
            LYRIC
          </span>
        </div>
      </div>
      
      {/* Professional tagline */}
      <div className="ml-4 hidden md:block">
        <div className="text-gold font-light text-sm tracking-widest uppercase">
          Premium Hair Care
        </div>
        <div className="text-white/60 text-xs font-light">
          Natural • Sulfate-Free • Professional
        </div>
      </div>
    </div>
  )
}