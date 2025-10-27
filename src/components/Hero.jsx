import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for depth; don't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl backdrop-blur-xl bg-white/40 rounded-3xl p-8 shadow-xl border border-white/50">
          <p className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/5 text-gray-700 mb-4">
            New • The Fragrance of Creativity
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Elevate your beauty ritual
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            A modern collection of makeup and fragrance essentials. Clean formulas, glassy finishes, and an iridescent glow—designed to inspire.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#shop" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white bg-gradient-to-r from-fuchsia-600 to-indigo-600 shadow-lg shadow-fuchsia-600/20 hover:brightness-110 transition">
              Shop new arrivals
            </a>
            <a href="#fragrance" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/70 backdrop-blur border border-white/60 text-gray-900 hover:bg-white transition">
              Explore fragrances
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
