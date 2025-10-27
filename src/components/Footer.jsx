import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed! Welcome to Éclat Beauty.');
  };

  return (
    <footer className="relative border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Join the glow list</h3>
            <p className="mt-2 text-gray-600">Early access to drops, beauty tips, and special rewards.</p>
            <form onSubmit={onSubmit} className="mt-6 flex max-w-md gap-2">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
              <button type="submit" className="rounded-xl bg-gray-900 text-white px-5 py-3 font-medium hover:bg-gray-800">Subscribe</button>
            </form>
          </div>
          <div className="md:ml-auto">
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="p-2.5 rounded-full border border-gray-200 hover:bg-gray-50">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2.5 rounded-full border border-gray-200 hover:bg-gray-50">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Youtube" className="p-2.5 rounded-full border border-gray-200 hover:bg-gray-50">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} Éclat Beauty. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
