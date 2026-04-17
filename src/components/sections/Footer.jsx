import { motion } from 'framer-motion';
import { Circle, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Circle size={24} strokeWidth={2} className="text-teal-600" />
              <span className="font-serif text-2xl font-medium tracking-widest text-zinc-900 uppercase">
                Aura
              </span>
            </div>
            <p className="font-sans text-zinc-500 max-w-sm leading-relaxed mb-8">
              Health intelligence, beautifully simplified. Designed for those who value clarity and design.
            </p>
            <div className="flex items-center gap-2 border-b border-zinc-300 pb-2 max-w-xs focus-within:border-teal-600 transition-colors">
              <input type="email" placeholder="Join the newsletter" className="bg-transparent w-full outline-none font-sans text-sm text-zinc-900 placeholder:text-zinc-400" />
              <button className="text-zinc-400 hover:text-teal-600 transition-colors"><ArrowRight size={18} /></button>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-zinc-900 mb-6">Product</h4>
            <ul className="space-y-4 font-sans text-sm text-zinc-500">
              <li><a href="#" className="hover:text-teal-600 transition-colors">The Ring</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Sizing Kit</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">The App</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Science</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-zinc-900 mb-6">Support</h4>
            <ul className="space-y-4 font-sans text-sm text-zinc-500">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-zinc-400">
          <p>© 2026 Aura Health Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}