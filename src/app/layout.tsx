import type {Metadata} from "next";
import {Roboto_Flex} from "next/font/google";
import "./globals.css";
import {Separator} from "@/components/ui/separator";

const roboto = Roboto_Flex({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Chaos Game",
    description: "Chaos Game",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} grid grid-rows-[auto,_1fr] h-screen max-h-screen w-screen max-w-[100vw] overflow-hidden`}>
                <header>
                    <div className="container grid grid-flow-col justify-between items-center py-2">
                        <h2 className="text-lg font-semibold">Chaos Game</h2>
                    </div>
                    <Separator/>
                </header>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
