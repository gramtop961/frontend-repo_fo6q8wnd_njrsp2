import React from 'react'

const projects = [
  {
    title: 'Casa Horizonte',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
    location: 'Monterey, CA',
    year: '2023',
  },
  {
    title: 'Gallery of Light',
    image:
      'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop',
    location: 'Santa Fe, NM',
    year: '2022',
  },
  {
    title: 'Courtyard House',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop',
    location: 'Austin, TX',
    year: '2021',
  },
  {
    title: 'Cliffside Studio',
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c3f5?q=80&w=1600&auto=format&fit=crop',
    location: 'Big Sur, CA',
    year: '2020',
  },
]

const Projects = () => {
  return (
    <section id="work" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500">Selected Work</h3>
            <h2 className="mt-2 text-3xl sm:text-4xl font-medium text-gray-900">Built projects</h2>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm text-gray-700 hover:text-gray-900">Inquire ↗</a>
        </div>
        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">{p.title}</h3>
                <span className="text-sm text-gray-500">{p.year}</span>
              </div>
              <p className="text-sm text-gray-600">{p.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
