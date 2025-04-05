function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?fit=crop&w=1350&q=80"
          alt="Happy Dog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10  bg p-10 rounded-lg">
          <h1 className="text-7xl font-bold text-white mb-6">
            Welcome to Pawsome Pet
          </h1>
          <p className="text-2xl text-white max-w-3xl mx-auto mb-8">
            Dive into a world where pets reign supreme! We’re your ultimate
            resource for pet care, community, and fun. Whether you’ve got a
            barking buddy, a purring pal, or a hopping hopper, Pawsome Pet is
            here to make every moment with your pet extraordinary.
          </p>
          <button className="px-10 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xl">
            Start Exploring
          </button>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-16">
          Featured Pets of the Month
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?fit=crop&w=500&q=80"
              alt="Puppy"
              className="w-full h-64 object-cover rounded-md mb-6"
            />
            <h3 className="text-3xl font-semibold text-gray-800">
              Buddy the Puppy
            </h3>
            <p className="text-gray-600 mt-4">
              Meet Buddy, a 3-month-old golden retriever with boundless energy!
              He loves chasing balls, napping in the sun, and stealing socks.
              Check out our puppy training guides to help your little Buddy grow
              into a well-mannered dog.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?fit=crop&w=500&q=80"
              alt="Cat"
              className="w-full h-64 object-cover rounded-md mb-6"
            />
            <h3 className="text-3xl font-semibold text-gray-800">
              Whiskers the Cat
            </h3>
            <p className="text-gray-600 mt-4">
              Whiskers is a 2-year-old tabby who rules her domain with grace.
              She enjoys bird-watching from the window and cozy naps. Learn how
              to keep your cat entertained with our DIY toy ideas and care tips.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?fit=crop&w=500&q=80"
              alt="Bunny"
              className="w-full h-64 object-cover rounded-md mb-6"
            />
            <h3 className="text-3xl font-semibold text-gray-800">
              Flopsy the Bunny
            </h3>
            <p className="text-gray-600 mt-4">
              Flopsy is a fluffy lop-eared rabbit who adores fresh hay and
              hopping around. Small pets like her need special care— explore our
              guides on bunny habitats and nutrition to keep them thriving.
            </p>
          </div>
        </div>
      </section>

      {/* Care Tips Section */}
      <section className="bg-blue-50 py-20">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-16">
          Pet Care Essentials
        </h2>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?fit=crop&w=400&q=80"
              alt="Dog Bath"
              className="w-48 h-48 object-cover rounded-full mb-6"
            />
            <h3 className="text-3xl font-semibold text-gray-800">
              Grooming Guide
            </h3>
            <p className="text-gray-600 mt-4 text-center">
              Grooming isn’t just about looks—it’s about health! Learn how to
              brush out mats, trim nails, and bathe your pet without stress. We
              cover dogs, cats, and even rabbits with step-by-step instructions
              and product recommendations.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.freepik.com/free-photo/close-up-adorable-pet-eating_23-2151182848.jpg?t=st=1743876501~exp=1743880101~hmac=a6976c382a02ce8ea891330be6cfe8f20bda709a927e9ccb5a22e780eb9792ca&w=740"
              alt="Pet Food"
              className="w-48 h-48 object-cover rounded-full mb-6"
            />
            <h3 className="text-3xl font-semibold text-gray-800">
              Nutrition Basics
            </h3>
            <p className="text-gray-600 mt-4 text-center">
              What’s the best diet for your pet? We break down wet vs. dry food,
              homemade recipes, and treats that keep tails wagging. Plus, tips
              for picky eaters and special dietary needs—your pet’s health
              starts here!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.freepik.com/free-photo/medium-shot-smiley-doctor-checking-dog_23-2149304331.jpg?t=st=1743876919~exp=1743880519~hmac=509944235e66ca77c80231fa661ae80849508b0765cdc84b41dc45ada5d87b03&w=996"
              alt="Vet Visit"
              className="w-48 h-48 object-cover rounded-full mb-6"
            />
            <h3 className="text-3xl font-semibold text-gray-800">
              Health Checkups
            </h3>
            <p className="text-gray-600 mt-4 text-center">
              Regular vet visits keep your pet thriving. Learn what to expect,
              how to spot health issues early, and how to prepare your pet for a
              stress-free appointment. From vaccinations to dental care, we’ve
              got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Pet Stories Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-16">
          Pet Stories
        </h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?fit=crop&w=500&q=80"
              alt="Rescue Dog"
              className="w-full md:w-1/3 h-64 object-cover rounded-md mb-6 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-3xl font-semibold text-gray-800">
                Max’s Rescue Journey
              </h3>
              <p className="text-gray-600 mt-4">
                Max was found shivering in a alley, but today he’s a happy hound
                thanks to his loving family. His story shows the power of
                adoption. Read how his owners nursed him back to health and
                taught him to trust again—it’s a tearjerker with a wagging tail
                ending!
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?fit=crop&w=500&q=80"
              alt="Cat Adventure"
              className="w-full md:w-1/3 h-64 object-cover rounded-md mb-6 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-3xl font-semibold text-gray-800">
                Luna’s Big Adventure
              </h3>
              <p className="text-gray-600 mt-4">
                Luna the cat once disappeared for a week, only to return with
                tales (or tails?) of her own. Her owner shares how they reunited
                and tips for keeping curious cats safe. It’s a wild ride of
                feline mischief!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Adoption Info Section */}
      <section className="bg-blue-100 py-20">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-16">
          Adopt a Pet
        </h2>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-lg text-gray-700 text-center mb-12">
            Thinking of adding a furry friend to your family? Adoption is a
            pawsome choice! Here’s why it matters and how to get started. We
            partner with shelters to bring you pets in need of love—each one
            comes with a story and a whole lot of heart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">
                Why Adopt?
              </h3>
              <p className="text-gray-600 mt-4">
                You save a life and gain a loyal companion. Shelters are full of
                amazing pets waiting for a second chance— adoption reduces
                overcrowding and gives them a home.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">
                How to Start
              </h3>
              <p className="text-gray-600 mt-4">
                Visit local shelters or browse online listings. Fill out an
                application, meet your match, and prepare your home. We’ve got
                checklists to make it easy!
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">
                Success Stories
              </h3>
              <p className="text-gray-600 mt-4">
                From shy strays to family stars—read how adopted pets
                transformed lives. Your next best friend could be waiting right
                now!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-16">
          Pet Photo Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?fit=crop&w=300&q=80"
            alt="Dog"
            className="w-full h-48 object-cover rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?fit=crop&w=300&q=80"
            alt="Cat"
            className="w-full h-48 object-cover rounded-md"
          />

          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?fit=crop&w=300&q=80"
            alt="Puppy"
            className="w-full h-48 object-cover rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?fit=crop&w=300&q=80"
            alt="Kitten"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-5xl font-bold mb-8">
          Stay Pawsome with Our Newsletter
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Get the latest pet tips, stories, and exclusive offers delivered to
          your inbox. Join thousands of pet lovers who make every day a little
          more pawsome with us!
        </p>
        <div className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-l-md text-gray-800 focus:outline-none"
          />
          <button className="mt-4 px-8 py-4 bg-white text-blue-600 rounded-r-md hover:bg-gray-200">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
