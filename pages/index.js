import { useState, useEffect } from 'react'
import PremiumLayout from '../components/PremiumLayout'
import PremiumLogo from '../components/PremiumLogo'

// Then use: <FAQSection />
import FAQSection from '../components/FAQSection'


export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in, .slide-in-left').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ingredients = [
    { name: 'Amla', image: '/images/Amla.png', benefit: 'Vitamin C abundant, makes hair roots strong ' },
    { name: 'Shikakai', image: '/images/Shikakai.png', benefit: 'Natural cleanser, softens and glosses hair' },
    { name: 'Aloe Vera', image: '/images/Aloe-Vera.png', benefit: 'Balances and soothes the scalp' },
    { name: 'Rice Water', image: '/images/Rice-Water.png', benefit: 'Moisturizes and protects hair follicles' },
    { name: 'Bhringraj', image: '/images/Bhringraj.png', benefit: 'Aid to hair growth and prevents graying' },
    { name: 'Vitamin E', image: '/images/Vitamin E.png', benefit: 'Antioxidant protection and hair restoration' }
  ]

  const testimonials = [
    { name: 'Rajesh Kumar', text: 'After using LYRIC for 3 months, my hair fall has reduced significantly. The natural ingredients really work!', rating: 5, image: '/images/Rajesh Kumar.png' },
    { name: 'Anita Patel', text: 'Amazing results! My hair is more resilient and the smell of fruits lasts throughout the day. Highly recommend this herbal shampoo.', rating: 5, image: '/images/Anita patel.png' },
    { name: 'Muhammad Haris', text: 'Best investment for my hair care routine. The sulfate-free formula is gentle yet effective. My scalp feels healthier than ever.', rating: 5, image: '/images/Muhammad Haris.jpg'}
  ]

  const benefits = [
    { title: 'Sulfate-Free', desc: 'Gentle cleansing without harsh chemicals', image: '/images/Sulfate-free.png' },
    { title: 'Natural Formula', desc: '100% herbal ingredients for healthy hair', image: '/images/Natural.png' },
    { title: 'All Hair Types', desc: 'Perfect for every hair texture and type', image: '/images/all-hair-types.png' },
    { title: 'Gentle & Effective', desc: 'Powerful results with gentle care', image: '/images/Effective&Gentle.png' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleTouchStart = (e) => {
    setTouchEnd(0)
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      } else {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      }
    }
  }

  return (
    <PremiumLayout>
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-black via-charcoal to-black flex items-center relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="fade-in text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">
                Hair Defense
                <span className="block text-gold text-glow">Shampoo</span>
              </h1>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
                <span className="bg-gold/20 text-gold px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-gold/30">Sulfate Free</span>
                <span className="bg-green/20 text-lightGreen px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-green/30">Gentle Formula</span>
                <span className="bg-gold/20 text-gold px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-gold/30">All Hair Types</span>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Get the strength of nature with our high-quality herbal formula. 
                Blended with Amla, Shikakai, Aloe Vera, and more for longer, healthier hair.
              </p>
              
              <button 
                onClick={() => window.open('https://wa.me/917017794055?text=I%20want%20to%20buy%20Lyric%20Hair%20Defense%20Shampoo%20for%20₹599', '_blank')}
                className="btn-gold text-base sm:text-lg w-full sm:w-auto"
              >
                Buy Now
              </button>
            </div>
            
            <div className="text-center fade-in mt-8 lg:mt-0">
              <div className="relative p-8">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto animate-float">
                  <img 
                    src="/images/lyric-shampoo-bottle.png" 
                    alt="LYRIC Hair Defense Shampoo Bottle"
                    className="w-full h-full object-contain drop-shadow-2xl bottle-image"
                    style={{filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3)) brightness(1.1) contrast(1.2)', mixBlendMode: 'multiply', background: 'transparent'}}
                  />
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gold/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-green/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Product Section */}
      <section id="product" className="py-24 bg-gradient-to-b from-charcoal/50 to-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="section-title text-left">
                Premium Natural Care
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                LYRIC Hair Defense Shampoo combines ancient herbal wisdom with modern hair science. 
                Our sulfate-free formula gently cleanses while nourishing your hair with powerful natural ingredients.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {['Hair Strength', 'Hair Growth', 'Gentle & Natural', 'Fruity Aroma'].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gold rounded-full"></div>
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="btn-gold">
                More About
              </button>
            </div>
            
            <div className="fade-in">
              <div className="bg-gradient-to-br from-gold/10 to-green/10 rounded-3xl p-8 border border-gold/20">
                <h3 className="text-2xl font-serif text-gold mb-6">What Makes It Special</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">🌿</span>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Natural Ingredients</h4>
                      <p className="text-gray-300">Six powerful herbs working in harmony</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">✨</span>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Sulfate-Free Formula</h4>
                      <p className="text-gray-300">Gentle cleansing without chemicals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">💫</span>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Universal Care</h4>
                      <p className="text-gray-300">Perfect for all hair types and textures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black mt-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title fade-in">
              More About LYRIC
            </h2>
            
            <div className="bg-gradient-to-br from-gold/10 to-green/10 rounded-3xl p-12 border border-gold/20 fade-in">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed slide-in-left">
                Lyric is a high-end personal care company committed to offering effective, natural, and sulfate-free hair care products.
              </p>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed slide-in-left">
                Our bestseller, Lyric Hair Defense Shampoo, is specially formulated with strong natural ingredients like Amla, Shikakai, Aloe Vera, Rice Water, Bhringraj, and Vitamin E to make hair stronger, induce growth, and ensure a healthy scalp.
              </p>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed slide-in-left">
                With its calming formula and scented fruit aroma, Lyric Shampoo is suitable for all hair types. We stand behind mixing heritage and modern science to give you a rich hair care experience that is safe, efficient, and earth-friendly.
              </p>
              
              <div className="mb-8 fade-in">
                <h3 className="text-2xl font-serif text-gold mb-6">Our Mission:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 fade-in" style={{animationDelay: '0.1s'}}>
                    <span className="text-gold text-xl">👉</span>
                    <span className="text-gray-200 text-lg">Help you protect your hair naturally and with confidence.</span>
                  </div>
                  <div className="flex items-start space-x-4 fade-in" style={{animationDelay: '0.2s'}}>
                    <span className="text-gold text-xl">👉</span>
                    <span className="text-gray-200 text-lg">Offer sulfate-free, without chemical solutions.</span>
                  </div>
                  <div className="flex items-start space-x-4 fade-in" style={{animationDelay: '0.3s'}}>
                    <span className="text-gold text-xl">👉</span>
                    <span className="text-gray-200 text-lg">Give you premium quality at an affordable price (₹599 for 300ml).</span>
                  </div>
                </div>
              </div>
              
              <p className="text-2xl font-serif text-gold text-center fade-in">
                Discover the strength of nature with Lyric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="section-title fade-in">
            Natural Ingredients
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold/30">
                    <img 
                      src={ingredient.image} 
                      alt={ingredient.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-serif text-gold mb-4">{ingredient.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{ingredient.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="py-24 bg-gradient-to-b from-charcoal/30 to-black">
        <div className="container mx-auto px-6">
          <h2 className="section-title fade-in">
            Why Choose LYRIC
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="premium-card fade-in text-center" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 mx-auto mb-6">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottle Showcase */}
      <section id="bottle-showcase" className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title fade-in">
            Premium Bottle Design
          </h2>
          
          <div className="fade-in">
            <img 
              src="/images/premium-bottle-showcase.png" 
              alt="LYRIC Premium Bottle Design"
              className="w-[600px] h-[600px] mx-auto object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
              style={{filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 10px 30px rgba(0,0,0,0.3))'}}
            />
            <p className="text-xl text-gray-300 mt-8 max-w-2xl mx-auto">
              Elegantly designed 300ml bottle with premium finish. 
              Perfect for your bathroom counter and easy to use.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-charcoal/30 to-black">
        <div className="container mx-auto px-6">
          <h2 className="section-title fade-in">
            What Our Customers Say
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div 
              className="premium-card fade-in text-center overflow-hidden cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="transition-all duration-700 ease-in-out transform" key={currentTestimonial}>
                <div className="mb-6">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mx-auto border-2 border-gold/30 transition-all duration-500 transform hover:scale-110 animate-fade-in"
                  />
                </div>
                <div className="text-gold text-3xl mb-6 animate-pulse">{'⭐'.repeat(testimonials[currentTestimonial].rating)}</div>
                <p className="text-xl text-gray-300 mb-6 italic leading-relaxed transition-opacity duration-500 animate-slide-up">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h4 className="text-lg font-semibold text-gold transition-all duration-300 animate-fade-in">
                  - {testimonials[currentTestimonial].name}
                </h4>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-gold' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}


{/* FAQ Section */}
<FAQSection />

{/* Contact */}



      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-charcoal/30 to-black">
        <div className="container mx-auto px-6">
          <h2 className="section-title fade-in">
            Contact Us
          </h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="premium-card fade-in">
              <h3 className="text-2xl font-serif text-gold mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                Have questions about LYRIC Hair Defense Shampoo? We're here to help!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-gold text-xl">📧</span>
                  <span className="text-gray-200">lyricherbal@gmail.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-gold text-xl">📞</span>
                  <span className="text-gray-200">+91 7017794055</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-gold text-xl">💬</span>
                  <span className="text-gray-200">WhatsApp for instant support</span>
                </div>
              </div>
              
              <button 
                onClick={() => window.open('https://wa.me/917017794055?text=Hello%20LYRIC%20Team,%20I%20have%20a%20question%20about%20your%20Hair%20Defense%20Shampoo', '_blank')}
                className="btn-gold"
              >
                Contact via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="section-title fade-in">
            Get Your LYRIC Shampoo
          </h2>
          
          <div className="max-w-md mx-auto">
            <div className="premium-card fade-in text-center">
              <img 
                src="/images/shop-bottle.png" 
                alt="LYRIC Hair Defense Shampoo - Buy Now"
                className="w-32 h-32 mx-auto mb-6 object-contain animate-float"
                style={{filter: 'brightness(1.1) contrast(1.1)'}}
              />
              <h3 className="text-2xl font-serif text-gold mb-4">LYRIC Hair Defense Shampoo</h3>
              <p className="text-gray-300 mb-6">300ml Premium Bottle</p>
              
              <div className="text-4xl font-bold text-gold mb-6">₹599</div>
              
              <ul className="text-left space-y-2 mb-8 text-gray-300">
                <li>✓ Sulfate-Free Formula</li>
                <li>✓ Natural Herbal Ingredients</li>
                <li>✓ Suitable for All Hair Types</li>
                <li>✓ Free Shipping</li>
              </ul>
              
              <button 
                onClick={() => window.open('https://wa.me/+917017794055?text=I%20want%20to%20buy%20Lyric%20Hair%20Defense%20Shampoo%20for%20₹599', '_blank')}
                className="btn-gold w-full text-lg"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </PremiumLayout>
  )
}
