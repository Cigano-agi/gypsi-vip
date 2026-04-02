import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ArrowUpRight, Zap, Shield, Globe, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PixelImage } from '@/components/ui/PixelImage'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation - Floating Pill */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl nav-pill h-16 flex items-center justify-between px-8 rounded-full">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-[10px] text-white font-bold">G</div>
          <span className="font-bold text-sm tracking-tighter uppercase font-sans">Guild Platform</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <Link href="#manifesto" className="text-[11px] font-bold text-gray-400 hover:text-black uppercase tracking-widest transition-colors">Manifesto</Link>
          <Link href="#lineage" className="text-[11px] font-bold text-gray-400 hover:text-black uppercase tracking-widest transition-colors">Linhagens</Link>
          <Link href="/bounties" className="text-[11px] font-bold text-gray-400 hover:text-black uppercase tracking-widest transition-colors">Bounties</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-[11px] font-bold text-gray-400 hover:text-black uppercase tracking-widest transition-colors">Login</Link>
          <Link href="/register" className="btn-elite btn-elite-primary h-10 px-6 text-[11px] uppercase tracking-wider">
            Join the Elite
          </Link>
        </div>
      </nav>

      {/* Hero Section - The Dithered Blue Wave */}
      <section className="hero-gradient-genius dither-overlay pt-64 pb-40 px-6 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10">
            <Star size={12} className="text-white fill-white" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/90">Protocol 001 Active</span>
          </div>

          <h1 className="text-6xl md:text-[90px] font-normal text-white leading-[1] mb-10 tracking-tight">
            Construimos produtos com IA <br />
            e ajudamos você a construir os seus
          </h1>

          <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl mx-auto mb-16 italic">
            A elite dos builders criando ativos de alta velocidade na era do vibe coding. Conhecimento arcano aplicado ao mercado real.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/register" className="btn-elite bg-white text-black h-14 px-10 text-base font-bold shadow-2xl shadow-blue-900/40 hover:scale-105 transition-transform">
              Iniciar Sincronização
            </Link>
            <Link href="#manifesto" className="btn-elite border-white/30 text-white h-14 px-10 text-base font-bold backdrop-blur-sm hover:bg-white/10 transition-all">
              Ver Manifesto
            </Link>
          </div>
        </div>

        {/* Hero Visual - High End Architecture */}
        <div className="mt-32 max-w-6xl mx-auto px-4">
          <div className="relative aspect-[21/9] rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,102,255,0.3)] animate-float">
            <PixelImage 
              src="/images/guild_hero.png" 
              alt="Elite Architecture" 
              fill
              className="border-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Trust / Stats Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-16">
          {[
            { label: 'Total Revenue Generated', value: 'R$ 2.4M+' },
            { label: 'Active Elite Builders', value: '450+' },
            { label: 'High-Ticket Bounties', value: '120+' },
            { label: 'Success Velocity', value: '94%' },
          ].map((stat, i) => (
            <div key={i} className="space-y-3">
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">{stat.label}</p>
              <p className="text-4xl font-normal text-black tracking-tighter">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lineage Section - Elegant Bento */}
      <section id="lineage" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
          <div className="max-w-2xl space-y-6 text-left">
            <h2 className="text-5xl md:text-7xl font-normal text-black tracking-tight leading-none uppercase">Escolha sua <br/> linhagem.</h2>
            <p className="text-gray-500 text-2xl font-medium italic">Especialização é a única forma de atingir a performance de elite na era da IA.</p>
          </div>
          <Star size={40} className="text-gray-100 hidden md:block" />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              title: 'Ladino', 
              tagline: 'Revenue Frontline',
              desc: 'Vendas de alto ticket e estratégias de fechamento rápido. Especialista em conversão humana potencializada por agentes.',
              icon: Zap,
              color: 'text-amber-500',
              bg: 'bg-amber-50/30'
            },
            { 
              title: 'Mago', 
              tagline: 'System Architect',
              desc: 'Arquitetos de automação e designers de fluxo. O cérebro por trás da escala infinita e infraestrutura invisível.',
              icon: Shield,
              color: 'text-purple-500',
              bg: 'bg-purple-50/30'
            },
            { 
              title: 'Mercador', 
              tagline: 'Asset Strategy',
              desc: 'Donos de produto e estrategistas de negócio. Construindo ativos de longo prazo e modelos de receita recorrente.',
              icon: Globe,
              color: 'text-emerald-500',
              bg: 'bg-emerald-50/30'
            }
          ].map((path, i) => (
            <div key={i} className={cn("p-12 card-elite flex flex-col items-start gap-8 group hover:bg-gray-50", path.bg)}>
              <div className={cn("w-14 h-14 flex items-center justify-center rounded-3xl bg-white shadow-xl shadow-black/5 group-hover:scale-110 transition-transform", path.color)}>
                <path.icon size={28} />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">{path.tagline}</span>
                  <h3 className="text-4xl font-normal text-black">{path.title}</h3>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed font-medium italic">{path.desc}</p>
              </div>
              <Link href="/register" className="mt-auto flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-black group-hover:translate-x-2 transition-all">
                Initialize Path <ArrowUpRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer - Minimalism */}
      <footer className="py-32 border-t border-gray-100 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-24 text-center md:text-left bg-white relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-6 h-6 bg-black rounded-full"></div>
            <span className="font-bold text-lg tracking-tighter uppercase">Guild Platform</span>
          </div>
          <p className="text-lg text-gray-400 font-medium max-w-xs italic leading-snug">
            Construindo a infraestrutura para a próxima geração de riqueza gerada por IA.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-32">
          <div className="space-y-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">Resources</p>
            <ul className="space-y-4">
              <li><Link href="/bounties" className="text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors">Bounties</Link></li>
              <li><Link href="/ranking" className="text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors">Leaderboard</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">Sync</p>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors">Manifesto</Link></li>
              <li><Link href="#" className="text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
