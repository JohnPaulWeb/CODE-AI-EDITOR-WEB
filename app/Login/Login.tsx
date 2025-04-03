import { Code } from "lucide-react";
import Link from "next/link";


export default function Login() {
    return(
        <div className="flex min-h-screen flex-col">
            <div className="mx-auto flex-1 flex-col  items-center justify-center px-4 py-12">
                <div className="mx-auto w-full max-w-sm space-y-6">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                           <Code className="h-6 w-6" />
                           
                           <span>Ayanokoji</span>
                        </Link>

                        <h1 className="text-2xl font-bold"></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}