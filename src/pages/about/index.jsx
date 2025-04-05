function About() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-6xl font-bold text-blue-600 mb-12 text-center">
        About Pawsome Pet
      </h1>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Pawsome Pet, our mission is to celebrate the incredible bond
          between pets and their people. We’re dedicated to providing top-tier
          resources, building a supportive community, and offering products that
          enhance pet lives. Whether it’s helping you decode your dog’s bark or
          finding the perfect toy for your turtle, we’re here to make pet
          parenthood a joyous adventure. Our site, built with React and Tailwind
          CSS, is a testament to our commitment to quality and accessibility.
        </p>
      </section>

      {/* History Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Our History
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Pawsome Pet started in a small apartment with a single laptop and a
          big dream. In 2018, our founder, a lifelong pet lover, began writing
          blog posts about cat care after adopting a stray kitten named Mitten.
          Those posts sparked a community, and soon we were adding dog tips,
          bunny advice, and more. By 2020, we’d grown into a full platform,
          partnering with pet experts and launching this site on Vercel. Today,
          we reach thousands of pet parents worldwide, and every wag, purr, and
          hop fuels our passion to keep going.
        </p>
        <img
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?fit=crop&w=800&q=80"
          alt="Pet Beginnings"
          className="w-full h-96 object-cover rounded-md mt-6"
        />
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&q=80"
              alt="Luna"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Luna – Pet Expert
            </h3>
            <p className="text-gray-600 mt-4 text-center">
              With a decade of training experience, Luna’s our go-to for
              behavior advice. She’s tamed wild pups and soothed anxious
              cats—ask her anything!
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&q=80"
              alt="Max"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Max – Content Creator
            </h3>
            <p className="text-gray-600 mt-4 text-center">
              Max brings pet stories to life with videos and articles. From
              grooming hacks to adoption tales, he’s got a knack for making pets
              shine.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&q=80"
              alt="Lee"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Lee – Developer
            </h3>
            <p className="text-gray-600 mt-4 text-center">
              I’m Lee, the tech wizard behind this site. Using React, Tailwind,
              and Vercel, I built Pawsome Pet to be fast, beautiful, and
              pet-obsessed—just like us!
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Our Core Values
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Love</h3>
            <p className="text-lg text-gray-700">
              Everything we do is fueled by our love for pets. It’s the
              heartbeat of Pawsome Pet—every article, product, and connection
              starts here.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
            <p className="text-lg text-gray-700">
              We empower pet parents with knowledge. From first-time owners to
              seasoned pros, our resources help you understand and care for your
              pet better.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Community</h3>
            <p className="text-lg text-gray-700">
              Pets bring us together. We foster a space where pet lovers can
              share, learn, and grow as a family—because no one should
              pet-parent alone.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Our Milestones
        </h2>
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
              2018
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                The Beginning
              </h3>
              <p className="text-lg text-gray-700">
                Pawsome Pet was born with a single blog post about kitten care,
                sparking our journey.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
              2020
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Website Launch
              </h3>
              <p className="text-lg text-gray-700">
                We went live with this site, reaching pet lovers across the
                globe with our expanded content.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
              2025
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Today</h3>
              <p className="text-lg text-gray-700">
                Now a thriving hub, we’re proud to serve thousands with tips,
                stories, and a growing community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Our Community
        </h2>
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/family-enjoying-road-trip-with-their-dog_23-2149401846.jpg?t=st=1743877391~exp=1743880991~hmac=4acc5ac86fe6fe9f4c2a2fab81df49be2ccec106f2125e6fa0752adaef2bcafe&w=996"
            alt="Pet Community"
            className="w-full h-96 object-cover rounded-md mb-6"
          />
          <p className="text-lg text-gray-700 leading-relaxed">
            Our community is the heart of Pawsome Pet. From forums to social
            media, pet lovers connect here to share photos, ask advice, and
            celebrate their pets. We host monthly photo contests, live Q&A
            sessions with experts, and virtual pet playdates. Join us and become
            part of a family that spans the globe—because pets make the world a
            better place, and so do you!
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
