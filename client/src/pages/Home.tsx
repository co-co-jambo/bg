'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { CyberButton } from "@/components/CyberButton";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsletterForm } from "@/components/NewsletterForm";
import {
  Twitter,
  Gamepad2,
  Users,
  Coins,
  Rocket,
  ChevronDown,
  Copy,
  Check,
  ExternalLink,
  Map,
  ShoppingBag
} from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [playButtonText, setPlayButtonText] = useState("Play Beta");
  const contractAddress = "0x1234...5678";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/20 h-16 flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo_(1)_1766424464749.png" alt="Bird Game 3 Logo" className="h-8 w-auto" />
            <span className="font-display font-bold text-xl tracking-widest text-primary hidden sm:block">BIRD GAME 3</span>
          </div>
          <div className="hidden md:flex gap-8 font-display text-sm uppercase tracking-wide">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#tokenomics" className="hover:text-accent transition-colors">Token</a>
            <a href="#roadmap" className="hover:text-secondary transition-colors">Roadmap</a>
            <a href="#community" className="hover:text-primary transition-colors">Community</a>
          </div>
          <CyberButton
            variant="accent"
            className="px-4 py-2 text-sm"
            onClick={() => setPlayButtonText("BETA ACCESS\n1.02.2026")}
          >
            {playButtonText.split('\n').map((line, i) => (
              <span key={i} className={i > 0 ? "text-xs block" : ""}>{line}</span>
            ))}
          </CyberButton>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/16e28499-5cf2-4617-87a4-20949338a72e-Photoroom_1766424464749.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
              BIRD GAME 3
            </h1>
            <p className="text-2xl md:text-3xl font-display text-accent mb-8 tracking-[0.5em] uppercase">
              $TBG Token
            </p>
            <p className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto lg:mx-0 font-light">
              The ultimate 5v5 MOBA experience where feathery fury meets blockchain technology. Join the flock, earn $TBG, and dominate the skies.
            </p>
            <p className="text-primary text-2xl font-bold mb-8 max-w-xl mx-auto lg:mx-0 tracking-wider uppercase">
              FLY. FIGHT. SURVIVE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CyberButton glow onClick={() => window.open('#', '_blank')}>
                BUY $TBG
              </CyberButton>
              <div className="flex items-center gap-2 bg-black/50 border border-primary/30 p-1 pr-4 clip-path-slant cursor-pointer group" onClick={copyToClipboard}>
                <div className="p-3 bg-primary/20 text-primary">
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </div>
                <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">
                  {contractAddress}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <img src="/logo_(1)_1766424464749.png" alt="Bird Game Logo Large" className="w-full max-w-lg mx-auto drop-shadow-[0_0_50px_rgba(0,255,255,0.2)]" />
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/50"
        >
          <ChevronDown className="w-10 h-10" />
        </motion.div>
      </section>

      <section id="about" className="py-24 relative bg-grid-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="The Legend Takes Flight" 
            subtitle="Born from a TikTok trend, forged in the fires of competitive gaming."
            variant="cyan"
          />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src="/62fa8ea9-f84a-4c8b-afcf-595ce87718ad-Photoroom_1766424464749.png" 
                alt="Gameplay" 
                className="relative z-10 rounded-lg border-2 border-primary/30 shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-card/50 p-6 border-l-4 border-primary backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Gamepad2 className="text-primary" /> 5v5 Sky Battles
                </h3>
                <p className="text-muted-foreground">
                  Experience intense aerial combat with unique bird classes. From the stealthy Hummingbird assassin to the tanky Pigeon brawler.
                </p>
              </div>
              <div className="bg-card/50 p-6 border-l-4 border-secondary backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Rocket className="text-secondary" /> TikTok Viral Sensation
                </h3>
                <p className="text-muted-foreground">
                  What started as a meme is now a fully-fledged esports title. Millions of views, thousands of fans, one game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Choose Your Champion" 
            subtitle="The skies are divided. Which flock will you join?"
            variant="green"
            align="right"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative bg-card border border-border p-8 clip-path-slant overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <img src="/45219ca9-ad05-4eff-a52c-98cfec40f9c6-Photoroom_1766424464749.png" className="w-32 h-32 object-contain" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 uppercase">The Pigeon</h3>
              <p className="text-gray-400 mb-6">Urban warriors. Tanky, resilient, and never backing down from a crumb fight. Masters of crowd control.</p>
              <div className="flex gap-2 text-xs font-mono text-primary">
                <span className="bg-primary/10 px-2 py-1">TANK</span>
                <span className="bg-primary/10 px-2 py-1">MELEE</span>
                <span className="bg-primary/10 px-2 py-1">HARD</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group relative bg-card border border-border p-8 clip-path-slant overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <img src="/d8643c89-7be0-4590-815c-0a4f75f59f4c-Photoroom_1766424464749.png" className="w-32 h-32 object-contain" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 uppercase">The Hummingbird</h3>
              <p className="text-gray-400 mb-6">Speed demons of the forest. High burst damage, incredible mobility, but fragile. For skilled pilots only.</p>
              <div className="flex gap-2 text-xs font-mono text-secondary">
                <span className="bg-secondary/10 px-2 py-1">ASSASSIN</span>
                <span className="bg-secondary/10 px-2 py-1">RANGED</span>
                <span className="bg-secondary/10 px-2 py-1">EXPERT</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group relative bg-card border border-border p-8 clip-path-slant overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <img src="/logo_(2)_1766424464749.png" className="w-32 h-32 object-contain" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 uppercase">The Owl</h3>
              <p className="text-gray-400 mb-6">Overseeing the battleground from above. Decisive charge and critical damage, enemies won't stand a chance.</p>
              <div className="flex gap-2 text-xs font-mono text-accent">
                <span className="bg-accent/10 px-2 py-1">SNIPER</span>
                <span className="bg-accent/10 px-2 py-1">RANGED</span>
                <span className="bg-accent/10 px-2 py-1">MEDIUM</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="tokenomics" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="$TBG Economics"
            subtitle="The fuel of the avian economy. Earn, spend, govern."
            variant="gold"
          />

          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="bg-card/80 p-8 border border-accent/20 rounded-xl hover:border-accent transition-colors">
              <Coins className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-black text-white mb-2">1T</h3>
              <p className="text-accent uppercase tracking-widest text-sm">Total Supply</p>
            </div>
            <div className="bg-card/80 p-8 border border-accent/20 rounded-xl hover:border-accent transition-colors">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-black text-white mb-2">2%</h3>
              <p className="text-accent uppercase tracking-widest text-sm">DEV Share</p>
            </div>
            <div className="bg-card/80 p-8 border border-accent/20 rounded-xl hover:border-accent transition-colors">
              <ShoppingBag className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-black text-white mb-2">0%</h3>
              <p className="text-accent uppercase tracking-widest text-sm">Buy/Sell Tax</p>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <SectionHeading title="Flight Path" variant="cyan" />
          
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start bg-card p-6 border-l-4 border-primary"
            >
              <div className="text-4xl font-black text-primary/50 min-w-[150px]">Q4 2025</div>
              <div>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li><span className="font-semibold text-white">Launch of Bird Game Token</span><br />TGE to bootstrap the Bird Game ecosystem and fund core infrastructure.</li>
                  <li><span className="font-semibold text-white">Community & ecosystem setup</span><br />Official channels, marketing and early community onboarding.</li>
                  <li><span className="font-semibold text-white">Infrastructure preparation</span><br />Backend, servers, and tooling required for early testing phases.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start bg-card p-6 border-l-4 border-secondary"
            >
              <div className="text-4xl font-black text-secondary/50 min-w-[150px]">Q1 2026</div>
              <div>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li className="bg-primary/10 p-2 rounded border border-primary/30"><span className="font-bold text-primary">Closed Beta access for token holders</span><br />Early access testing phase available exclusively to Bird Game token holders.</li>
                  <li><span className="font-semibold text-white">Gameplay testing & balancing</span><br />Bug fixes, balance changes etc. based on metrics review and community feedback</li>
                  <li><span className="font-semibold text-white">Stability & performance improvements</span><br />Server load testing and optimization ahead of public release.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start bg-card p-6 border-l-4 border-accent"
            >
              <div className="text-4xl font-black text-accent/50 min-w-[150px]">Q2 2026</div>
              <div>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li><span className="font-semibold text-white">Official Bird Game release</span><br />Public launch of the game.</li>
                  <li><span className="font-semibold text-white">Competitive features rollout</span><br />Leaderboards and ranked modes</li>
                  <li><span className="font-semibold text-white">Token utility activation</span><br />Initial in-game integrations for the Bird Game token.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start bg-card p-6 border-l-4 border-primary"
            >
              <div className="text-4xl font-black text-primary/50 min-w-[150px]">Q3 2026</div>
              <div>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li><span className="font-semibold text-white">Ongoing updates and content expansions</span></li>
                  <li><span className="font-semibold text-white">Seasonal events and competitive cycle</span></li>
                  <li><span className="font-semibold text-white">Continuous ecosystem and gameplay improvements</span></li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <SectionHeading title="Acquire TBG" variant="gold" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Create Wallet", "GET SOL", "CONNECT to pumpfun", "Swap for $TBG"].map((step, i) => (
              <div key={i} className="relative p-6 bg-card border border-accent/20 group hover:border-accent/50 transition-colors">
                <div className="text-6xl font-black text-accent/10 absolute top-2 right-2 group-hover:text-accent/20 transition-colors">0{i + 1}</div>
                <h3 className="text-xl font-bold text-white relative z-10 mt-8">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="community" className="pt-24 pb-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 uppercase">Join the <span className="text-primary">Flock</span></h2>
              <p className="text-gray-400 mb-8 max-w-md">
                Don't miss a beat. Subscribe to our newsletter for game updates, drops, and exclusive lore.
              </p>
              <div className="flex gap-4">
                {[Twitter, ExternalLink, Map].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 hover:bg-primary hover:text-black flex items-center justify-center transition-colors rounded">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <NewsletterForm />
            </div>
          </div>
          
          <div className="text-center pt-12 border-t border-white/5 text-gray-600 text-sm">
            <p>&copy; 2025 Bird Game. All rights reserved. Not financial advice.</p>
            <p className="mt-2">Built with pure caffeine and bird seed.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
