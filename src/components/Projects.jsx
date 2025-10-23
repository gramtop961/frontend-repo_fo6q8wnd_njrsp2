import React, { useEffect, useState } from 'react'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL
        const res = await fetch(`${base}/projects`)
        if (!res.ok) throw new Error('Failed to load projects')
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        setError('Unable to load projects right now.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

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

        {loading && (
          <div className="mt-10 text-gray-600">Loading projects…</div>
        )}
        {error && !loading && (
          <div className="mt-10 text-red-600">{error}</div>
        )}

        {!loading && !error && (
          <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.length === 0 ? (
              <p className="text-gray-600">No projects yet.</p>
            ) : (
              projects.map((p) => (
                <article key={p.id} className="group">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{p.title}</h3>
                    {p.year && <span className="text-sm text-gray-500">{p.year}</span>}
                  </div>
                  <p className="text-sm text-gray-600">{p.location}</p>
                </article>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
