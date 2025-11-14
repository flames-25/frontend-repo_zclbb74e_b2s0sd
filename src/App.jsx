import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.title = 'NebulaBlue — Cinematic SaaS UI'
  }, [])

  return (
    <div className="min-h-screen bg-[color:var(--surface-950)] text-white">
      {/* Global background layers */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(30,64,175,0.35),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8, <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'320\' height=\'320\' viewBox=\'0 0 320 320\'><defs><pattern id=\'grid\' width=\'32\' height=\'32\' patternUnits=\'userSpaceOnUse\'><path d=\'M 32 0 L 0 0 0 32\' fill=\'none\' stroke=\'white\' stroke-width=\'0.5\' opacity=\'0.35\'/></pattern></defs><rect width=\'100%\' height=\'100%\' fill=\'url(%23grid)\'/></svg>" )' }} />
      </div>

      {/* CSS variables for theme */}
      <style>{`:
        root {}
        :root{
          --surface-950:#030816;
          --surface-900:#0A1224;
          --primary-700:#0EA5E9; /* sky-500 */
          --primary-600:#0891B2; /* cyan-600 */
          --primary-500:#38BDF8; /* sky-400 */
          --primary-400:#7DD3FC; /* sky-300 */
          --accent-500:#22D3EE; /* cyan-400 */
          --accent-400:#67E8F9; /* cyan-300 */
          --text-400:#9FB3C8;
          --text-300:#B8C7DA;
          --text-200:#D4DEEA;
        }
        .font-display{font-family: 'IBM Plex Sans', system-ui, -apple-system, Segoe UI, Helvetica Neue, Arial, 'Noto Sans', 'Liberation Sans', sans-serif;}
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
