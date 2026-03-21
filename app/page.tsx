import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Hero from "@/components/sections/hero"
import SocialProof from "@/components/sections/social-proof"
import DemoFlow from "@/components/sections/demo-flow"
import EarlyAccess from "@/components/sections/early-access"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <SocialProof />
        <DemoFlow />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  )
}
