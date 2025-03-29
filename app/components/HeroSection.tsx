import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";



export default function HeroSection() {
    return(
       <section className="w-full py-12 md:py24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">We Code Together.</h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit optio,
                             adipisci dicta inventore quod eaque dignissimos autem ea debitis soluta mollitia doloremque dolorum sint dolor nihil nostrum saepe delectus expedita.</p>
                    </div>

                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button asChild size="lg">
                            <Link href="/signup">
                            Let's Start <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>

                        <Button variant="outline" size="lg" asChild>
                            <Link href="/demo">Try Demo</Link>
                        </Button>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-[600px] aspect-video overflow-hidden rounded-xl border bg-background  shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-700 opacity-10" />
                        <div className="absolute inset-0 p-4">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-3 w-3 rounded-full bg-red-500" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                <div className="h-3 w-3 rounded-full bg-green-500" />
                                <div className="ml-2 text-xs font-medium">koji.tsx - Ayanokoji</div>
                            </div>

                            <div className="font-mono text-xs text-left overflow-hidden">
                                <pre className="text-green-500">
                                    <code>{'// Lets Collaborate in real time World export default function HeroSection() {}'}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </section>
    )
}