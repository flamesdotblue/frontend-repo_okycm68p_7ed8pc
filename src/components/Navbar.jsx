import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-400 via-purple-400 to-indigo-400 shadow-md" />
            <span className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-indigo-600">
              Éclat Beauty
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#shop" className="hover:text-gray-900 transition-colors">Shop</a>
            <a href="#new" className="hover:text-gray-900 transition-colors">New</a>
            <a href="#fragrance" className="hover:text-gray-900 transition-colors">Fragrances</a>
            <a href="#skincare" className="hover:text-gray-900 transition-colors">Skincare</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-black/5">
              <Search className="h-5 w-5 text-gray-700" />
            </button>
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-black/5 relative">
              <ShoppingBag className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] rounded-full bg-fuchsia-600 text-white grid place-items-center">2</span>
            </button>
            <button aria-label="Menu" className="md:hidden p-2 rounded-full hover:bg-black/5">
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
