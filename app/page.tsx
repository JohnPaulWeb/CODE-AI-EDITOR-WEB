import Image from "next/image";
import Link from "next/link";

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

        </div>
      </div>

    </header>
   </div>
  );
}
