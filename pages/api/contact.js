export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body
    
    // Here you would typically save to database or send email
    console.log('Contact form submission:', { name, email, message })
    
    // Simulate processing
    setTimeout(() => {
      res.status(200).json({ 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.' 
      })
    }, 1000)
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}