import { useState, useEffect } from 'react'
import Head from 'next/head'
import PremiumLogo from './PremiumLogo'

export default function PremiumLayout({ children, title = 'LYRIC - Premium Hair Defense Shampoo' }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="LYRIC Hair Defense Shampoo - Premium sulfate-free formula with natural ingredients for all hair types." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Premium Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-gold/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="hover:opacity-80 transition-opacity duration-300">
              <PremiumLogo size="md" />
            </a>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Product', 'About', 'Why Choose', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white hover:text-gold transition-colors duration-300 font-medium tracking-wide"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.open('https://wa.me/917017794055?text=I%20want%20to%20buy%20Lyric%20Hair%20Defense%20Shampoo%20for%20₹599', '_blank')}
                className="btn-gold text-sm hidden sm:block"
              >
                Buy Now
              </button>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white hover:text-gold transition-colors duration-300 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-6 py-4 bg-black/95 backdrop-blur-md border-t border-gold/20">
            <div className="flex flex-col space-y-4">
              {['Home', 'Product', 'About', 'Why Choose', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-gold transition-colors duration-300 font-medium tracking-wide py-2 border-b border-gray-700 last:border-b-0"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  window.open('https://wa.me/917017794055?text=I%20want%20to%20buy%20Lyric%20Hair%20Defense%20Shampoo%20for%20₹599', '_blank')
                  setMobileMenuOpen(false)
                }}
                className="btn-gold text-sm w-full mt-4"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gold hover:bg-gold/80 text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        ↑
      </button>

      {/* Premium Footer */}
      <footer className="bg-gradient-to-t from-charcoal to-black border-t border-gold/20 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <PremiumLogo size="lg" className="justify-center md:justify-start mb-6" />
              <p className="text-gray-300 leading-relaxed">
                Premium herbal shampoo crafted with natural ingredients for healthy, beautiful hair.
              </p>
            </div>
            
            <div>
              <h4 className="text-gold font-semibold mb-6 text-lg">Connect With Us</h4>
              <div className="flex justify-center md:justify-start space-x-6">
                <a
                  href="https://www.facebook.com/lyrichaircare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gold to-darkGold rounded-full flex items-center justify-center text-black hover:scale-110 hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/lyrichaircare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gold to-darkGold rounded-full flex items-center justify-center text-black hover:scale-110 hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.twitter.com/lyrichaircare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gold to-darkGold rounded-full flex items-center justify-center text-black hover:scale-110 hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.youtube.com/lyrichaircare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gold to-darkGold rounded-full flex items-center justify-center text-black hover:scale-110 hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-gold font-semibold mb-6 text-lg">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <p>📧 lyricherbal@gmail.com</p>
                <p>📞 Unique Beauty Hub</p>
                
              </div>
            </div>
          </div>
          
          <div className="border-t border-gold/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LYRIC Hair Care. All rights reserved. | Premium Natural Hair Care</p>
          </div>
        </div>
      </footer>
    </>
  )
}