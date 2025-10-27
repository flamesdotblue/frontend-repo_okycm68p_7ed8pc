import { Star } from 'lucide-react';

const products = [
  { id: 1, name: 'Glaze Lip Oil', tag: 'Lips', price: 22, toneFrom: 'from-pink-200', toneTo: 'to-fuchsia-200' },
  { id: 2, name: 'Skin Veil Tint', tag: 'Complexion', price: 28, toneFrom: 'from-amber-200', toneTo: 'to-rose-200' },
  { id: 3, name: 'Chromatic Palette', tag: 'Eyes', price: 34, toneFrom: 'from-indigo-200', toneTo: 'to-purple-200' },
  { id: 4, name: 'Aura Highlighter', tag: 'Cheeks', price: 26, toneFrom: 'from-sky-200', toneTo: 'to-cyan-200' },
  { id: 5, name: 'Silk Matte', tag: 'Lips', price: 24, toneFrom: 'from-rose-200', toneTo: 'to-red-200' },
  { id: 6, name: 'Cloud Blush', tag: 'Cheeks', price: 20, toneFrom: 'from-fuchsia-200', toneTo: 'to-purple-200' },
];

function Rating() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="shop" className="relative py-20 bg-gradient-to-b from-white to-purple-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Featured collection</h2>
            <p className="mt-2 text-gray-600">Best-sellers loved for their glass-skin finish and soft pigment.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-medium text-fuchsia-700 hover:text-fuchsia-800">View all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.id} className="group relative rounded-3xl border border-white bg-white/70 backdrop-blur shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className={`h-48 bg-gradient-to-br ${p.toneFrom} ${p.toneTo} relative`}>
                <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_70%_40%,black,transparent_65%)]" />
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/40 blur-2xl" />
                <div className="absolute left-6 bottom-6 bg-white/70 backdrop-blur rounded-full px-3 py-1 text-xs font-medium text-gray-700 border border-white/60">
                  {p.tag}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{p.name}</h3>
                    <div className="mt-1"><Rating /></div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-xl font-semibold text-gray-900">${p.price}</p>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-xl bg-gray-900 text-white py-2.5 font-medium hover:bg-gray-800 transition">
                  Add to bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
