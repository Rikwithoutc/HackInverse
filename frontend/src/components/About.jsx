import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-8 md:px-24 bg-[#0a0a0a] text-gray-300">
      <div className="max-w-4xl">
        {/* Title with Gradient */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          About DarkBlog
        </h2>

        {/* Introduction Paragraphs */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Welcome to DarkBlog, a sanctuary for ideas and stories. We believe that content shines 
            brightest against a dark canvas. Our platform is designed to be distraction-free, 
            allowing your words to take center stage.
          </p>
          <p>
            Whether you're a developer sharing snippets, a poet weaving verses, or a storyteller 
            recounting adventures, DarkBlog provides the perfect atmosphere for your expression.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            To create a community where unauthorized users can explore freely, and authorized 
            users can engage deeply. We prioritize privacy, simplicity, and performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;