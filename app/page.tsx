import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"
import { Promotions } from "@/components/promotions"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <Promotions />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </main>
  )
}
