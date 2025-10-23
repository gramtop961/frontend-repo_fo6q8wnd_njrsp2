import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-gray-200">
        <h3 className="text-sm uppercase tracking-widest text-gray-500">Bio</h3>
        <div className="mt-6 grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1533105041244-9feb1d0f2c63?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait in studio"
              className="w-full aspect-[4/5] object-cover rounded-lg ring-1 ring-black/5"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">I’m Alex Rivera, architect and founder.</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For over a decade I’ve pursued a restrained, context-driven practice — where clarity of structure, discipline of detail, and honesty of materials shape serene places for living and gathering. My work spans private residences, small cultural projects, and adaptive reuse.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I collaborate closely with clients, builders, and craftspeople, guiding projects from concept through construction with an emphasis on light, proportion, and spatial calm. The goal is architecture that feels inevitable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700">
              <span className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1">Residential</span>
              <span className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1">Cultural</span>
              <span className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1">Adaptive Reuse</span>
              <span className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1">Interiors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
