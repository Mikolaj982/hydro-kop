'use client'
import { useEffect, useState } from 'react'
import { PHONE_HREF, PHONE, links } from '@/data/content';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-ink/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
      <div className="container-x flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src={'/images/globe.svg'}
            alt="Hydro-Kop logo"
            priority
            className="h-10 w-10"
            width={40}
            height={40}
          />
          <span className="text-white font-display font-semibold tracking-tight text-lg">Hydro-Kop</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-white/70 hover:text-white transition-colors">{l}</a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href={PHONE_HREF} className="text-sm text-white/90 font-medium hover:text-yellow transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
          <a href="#kontakt" className="ml-2 inline-flex items-center gap-2 bg-yellow text-ink px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-yellow-deep transition-colors">
            Darmowa wycena <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {/* <AnimatePresence> */}
      {open && (
        // <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
        <div className="lg:hidden overflow-hidden bg-ink border-t border-white/5">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="text-white/80 py-1">{l}</a>
            ))}
            <a href={PHONE_HREF} className="text-yellow font-medium">{PHONE}</a>
            <a href="#kontakt" onClick={() => setOpen(false)} className="bg-yellow text-ink text-center py-3 rounded-full font-semibold">Darmowa wycena</a>
          </div>
          {/* </motion.div> */}
        </div>
      )}
      {/* </AnimatePresence> */}
    </header>
  );
}

export default Nav