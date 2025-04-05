function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Pawsome Pet</h3>
          <p className="text-sm">
            Your go-to place for pet love, care, and community. Built with
            passion for pets and their people.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pet Tips
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:support@pawsomepet.com"
              className="hover:text-gray-300"
            >
              support@pawsomepet.com
            </a>
            <br />
            Phone: (123) 456-7890
            <br />
            Address: 123 Pet Lane, Furrytown, USA
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <p className="text-sm">Stay pawsome with us on social media!</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-gray-300">
              🐾 Facebook
            </a>
            <a href="#" className="hover:text-gray-300">
              🐾 Instagram
            </a>
            <a href="#" className="hover:text-gray-300">
              🐾 Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm border-t border-blue-700 pt-4">
        &copy; 2025 Pawsome Pet. All rights reserved. Made with 🐾 by Lee Moser.
      </div>
    </footer>
  );
}

export default Footer;
