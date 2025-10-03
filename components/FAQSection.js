export default function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-charcoal/50 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-gold mb-16 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <style jsx>{`
            details {
              background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(34, 139, 34, 0.05));
              border: 1px solid rgba(255, 215, 0, 0.2);
              border-radius: 12px;
              margin-bottom: 12px;
              overflow: hidden;
              transition: all 0.3s ease;
            }
            details:hover {
              border-color: rgba(255, 215, 0, 0.4);
            }
            summary {
              padding: 20px;
              cursor: pointer;
              font-size: 16px;
              font-weight: 600;
              color: #FFD700;
              list-style: none;
              position: relative;
              transition: background-color 0.3s ease;
            }
            summary:hover {
              background-color: rgba(255, 215, 0, 0.08);
            }
            summary::after {
              content: '▼';
              position: absolute;
              right: 20px;
              top: 50%;
              transform: translateY(-50%);
              font-size: 14px;
              transition: transform 0.3s ease;
            }
            details[open] summary::after {
              transform: translateY(-50%) rotate(180deg);
            }
            details p {
              padding: 0 20px 20px;
              color: #D1D5DB;
              line-height: 1.6;
              margin: 0;
              font-size: 15px;
            }
          `}</style>
          
          <div className="space-y-3">
            <details>
              <summary>How effective is this herbal shampoo for hair fall control?</summary>
              <p>The combination of Bhringraj and Amla strengthens hair follicles while reducing breakage. Aloe Vera soothes the scalp, and rice water provides essential nutrients. This sulfate-free formula cleanses gently without stripping natural oils, promoting healthier hair growth over time.</p>
            </details>
            
            <details>
              <summary>What specific Bhringraj and Amla benefits can users expect?</summary>
              <p>Bhringraj stimulates blood circulation to promote natural hair growth and helps prevent premature graying. Amla delivers high vitamin C content that strengthens hair roots and adds natural shine. Together, these herbs create optimal conditions for natural hair care and scalp health.</p>
            </details>
            
            <details>
              <summary>Is this sulfate-free shampoo suitable for chemically treated hair?</summary>
              <p>Yes, the gentle formulation works well on colored, permed, or chemically straightened hair. Shikakai and rice water provide mild cleansing action that preserves hair treatments. The natural ingredients help repair damage while maintaining hair color and texture integrity.</p>
            </details>
            
            <details>
              <summary>What is the recommended usage frequency for optimal results?</summary>
              <p>Apply to wet hair 2-3 times weekly, massaging gently into the scalp for two minutes before rinsing. The Aloe Vera and Vitamin E components work best with consistent use. Most users notice improvements in hair texture and reduced fall within 4-6 weeks.</p>
            </details>
            
            <details>
              <summary>Can people with oily or dry scalp conditions use this natural hair care product?</summary>
              <p>The balanced formula addresses both conditions effectively. Rice water helps control excess oil production while Aloe Vera provides moisture to dry scalps. Shikakai offers natural cleansing without over-drying, making it suitable for various scalp types and sensitivities.</p>
            </details>
            
            <details>
              <summary>How do the rice water and Vitamin E components enhance hair health?</summary>
              <p>Rice water contains amino acids and B vitamins that strengthen hair strands and improve elasticity. Vitamin E acts as an antioxidant, protecting hair from environmental damage while promoting circulation. This combination helps reduce breakage and supports natural hair growth cycles.</p>
            </details>
            
            <details>
              <summary>What makes this herbal shampoo different from conventional chemical-based products?</summary>
              <p>Unlike synthetic shampoos, this natural hair care solution uses plant-based cleansers that maintain the scalp's pH balance. The absence of sulfates prevents excessive drying, while herbal ingredients provide nourishment rather than just cleansing. This approach supports long-term hair health naturally.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}