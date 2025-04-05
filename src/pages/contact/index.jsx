function Contact() {
    return (
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-6xl font-bold text-blue-600 mb-12 text-center">Get in Touch</h1>
  
        {/* Contact Form */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <p className="text-lg text-gray-700 mb-8">
            Questions about pet care? Want to collaborate, share a story, or just say hi? Fill out the form below, and our 
            team will respond within 24-48 hours. We’re here to help you and your pet thrive—don’t hesitate to reach out!
          </p>
          <form className="space-y-8 bg-white p-8 rounded-lg shadow-lg">
            <div>
              <label className="block text-gray-700 font-medium text-lg">Full Name</label>
              <input type="text" className="w-full p-4 border rounded-md" placeholder="Your Full Name" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-lg">Email Address</label>
              <input type="email" className="w-full p-4 border rounded-md" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-lg">Phone Number (Optional)</label>
              <input type="tel" className="w-full p-4 border rounded-md" placeholder="Your Phone Number" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-lg">Subject</label>
              <input type="text" className="w-full p-4 border rounded-md" placeholder="What’s on your mind?" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-lg">Message</label>
              <textarea className="w-full p-4 border rounded-md" rows="8" placeholder="Tell us more—details help us help you better!"></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xl">
              Send Message
            </button>
          </form>
        </section>
  
        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">How do I join the Pawsome Pet community?</h3>
              <p className="text-lg text-gray-700">
                Easy! Contact us here or follow us on social media. We’ll send you links to our forums, groups, and upcoming events.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Can I suggest a product or topic?</h3>
              <p className="text-lg text-gray-700">
                Absolutely! We love hearing from you. Use this form to suggest pet gear, care topics, or anything you’d like us to cover.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">How fast do you respond?</h3>
              <p className="text-lg text-gray-700">
                We aim for 24-48 hours, but urgent pet questions get priority—because we know pets don’t wait!
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Do you offer phone support?</h3>
              <p className="text-lg text-gray-700">
                Not yet, but you can leave your number, and we’ll call if needed. Email and form submissions are our main channels.
              </p>
            </div>
          </div>
        </section>
  
        {/* Contact Info */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> <a href="mailto:support@pawsomepet.com" className="text-blue-600 hover:underline">support@pawsomepet.com</a><br />
                <strong>Phone:</strong> (123) 456-7890 (Leave a voicemail—we’ll call back!)<br />
                <strong>Address:</strong> 123 Pet Lane, Furrytown, USA 12345
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700">
                <strong>Business Hours:</strong><br />
                Monday–Friday: 9 AM – 5 PM (EST)<br />
                Saturday: 10 AM – 2 PM<br />
                Sunday: Closed (Pet cuddle time!)
              </p>
            </div>
          </div>
        </section>
  
        {/* Support Options */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Support Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Live Chat</h3>
              <p className="text-gray-600 mt-4">
                Coming soon! For now, use this form or email us—we’re quick to reply.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Social Media</h3>
              <p className="text-gray-600 mt-4">
                DM us on Facebook, Instagram, or Twitter. We’re active and love hearing from you!
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Pet Emergency?</h3>
              <p className="text-gray-600 mt-4">
                For urgent issues, contact your vet. We can guide you to resources—message us!
              </p>
            </div>
          </div>
        </section>
  
        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                “I emailed about my dog’s chewing, and they replied with a detailed plan the next day. So helpful!”
              </p>
              <p className="mt-4 text-gray-800 font-semibold">— Emily R., Dog Mom</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                “Quick response and great advice on my bunny’s diet. Pawsome Pet rocks!”
              </p>
              <p className="mt-4 text-gray-800 font-semibold">— Alex T., Bunny Dad</p>
            </div>
          </div>
        </section>
  
       
      </div>
    );
  }
  
  export default Contact;