import { HeroSection } from "../components"
import { About } from "../components"

export const Home = () => {
  return (
    <main>
        <section className="max-w-7xl mx-auto pt-6">
            <HeroSection/>
            <About/>
        </section>
    </main>
  )
}
