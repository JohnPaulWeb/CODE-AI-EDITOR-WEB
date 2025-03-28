import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import FeatureHighlights from "./components/FeatureHighlights";
import PricingCards from "./components/PricingCards";

export default function Home() {
  return (
   <div className="flex flex-col min-h-screen">

    <header className="border-b">

      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">

          {/* <Code className="h-6 w-6" /> */}
          <span>Collab</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>

          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>

          <Link href="#f" className="text-sm font-medium hover:underline underline-offset-4">
            Documentation
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
             Login
          </Link>

          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>

    <main className="flex-1">
      <HeroSection />
      <FeatureHighlights />
      <PricingCards />
    </main>

    <footer className="border-t py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                Price
                </Link>
              </li>

              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Comapany</h3>
            <ul className="space-y-2 text-sm">
            <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                 About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                 Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
            <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                 Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Guides
                </Link>
              </li>

              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                 Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
            <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t">
          <p className="">
            &copy; {new Date().getFullYear()} Ayanokoji
          </p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Twitts</span>

              <svg xmlns="" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="h-5 w-5">
                
                                
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
   </div>
  );
}
