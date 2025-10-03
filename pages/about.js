import PremiumLayout from '../components/PremiumLayout'
import PremiumLogo from '../components/PremiumLogo'

export default function About() {
  const handleBuyNow = () => {
    window.open('https://wa.me/917017794055?text=I%20want%20to%20buy%20Lyric%20Hair%20Defense%20Shampoo%20for%20₹599', '_blank')
  }

  return (
    <PremiumLayout title="About LYRIC - Premium Hair Care">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-black via-charcoal to-black flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <PremiumLogo size="xl" className="justify-center mb-8" />
            <h1 className="text-6xl font-serif font-bold text-gold mb-6">About LYRIC</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Premium herbal hair care crafted with nature's finest ingredients for healthy, beautiful hair.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-b from-charcoal/50 to-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-gold mb-8">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                LYRIC was born from a passion for natural hair care and the belief that everyone deserves healthy, beautiful hair. 
                Our journey began with extensive research into traditional herbal remedies and modern hair science.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We carefully selected six powerful natural ingredients - Amla, Shikakai, Aloe Vera, Lorraine, Bhringraj, and Vitamin E - 
                to create a sulfate-free formula that gently cleanses while nourishing your hair from root to tip.
              </p>
              <button onClick={handleBuyNow} className="btn-gold">
                Buy Now - ₹599
              </button>
            </div>
            <div className="text-center">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gold/20 to-green/20 rounded-full flex items-center justify-center text-8xl border-2 border-gold/30 glow">
                🌿
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-gold mb-16">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-card">
              <div className="text-5xl mb-6">🌱</div>
              <h3 className="text-xl font-semibold text-gold mb-4">Natural Care</h3>
              <p className="text-gray-300">Harnessing the power of nature to provide gentle yet effective hair care solutions.</p>
            </div>
            <div className="premium-card">
              <div className="text-5xl mb-6">✨</div>
              <h3 className="text-xl font-semibold text-gold mb-4">Quality First</h3>
              <p className="text-gray-300">Premium ingredients and rigorous testing ensure the highest quality in every bottle.</p>
            </div>
            <div className="premium-card">
              <div className="text-5xl mb-6">💚</div>
              <h3 className="text-xl font-semibold text-gold mb-4">Sustainable</h3>
              <p className="text-gray-300">Committed to eco-friendly practices and cruelty-free formulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LYRIC */}
      <section className="py-24 bg-gradient-to-b from-charcoal/30 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-gold mb-16 text-center">Why Choose LYRIC</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2">Sulfate-Free Formula</h3>
                    <p className="text-gray-300">Gentle cleansing without harsh chemicals that strip natural oils.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2">Natural Ingredients</h3>
                    <p className="text-gray-300">Six powerful herbs working together for optimal hair health.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2">All Hair Types</h3>
                    <p className="text-gray-300">Suitable for every hair texture and type, from straight to curly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2">Proven Results</h3>
                    <p className="text-gray-300">Thousands of satisfied customers with healthier, stronger hair.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-96 h-96 mx-auto bg-gradient-to-br from-gold/20 to-green/20 rounded-full flex items-center justify-center text-9xl border-4 border-gold/30 glow">
                🧴
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-gold mb-8">Ready to Transform Your Hair?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have experienced the LYRIC difference. 
            Order your premium hair defense shampoo today.
          </p>
          <button onClick={handleBuyNow} className="btn-gold text-xl px-12 py-5">
            Buy Now - ₹599
          </button>
        </div>
      </section>
    </PremiumLayout>
  )
}