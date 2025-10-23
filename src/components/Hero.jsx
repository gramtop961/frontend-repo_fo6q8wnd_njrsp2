import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-gray-200 via-white to-gray-100 blur-3xl opacity-60"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-24">
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              Atelier Moderno
            </h1>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
              <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
              <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            </nav>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-gray-900">
                Modern architecture, timeless restraint.
              </h2>
              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                We craft minimalist residential and cultural spaces that balance light, proportion, and materiality. Built with a devotion to details that disappear.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center justify-center rounded-full border border-gray-900 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                  View work
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-gray-900/80 hover:text-gray-900">
                  Start a project →
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop"
                alt="Minimalist concrete residence with large glazing"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
