import Providers from "@/providers/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainHeader from "@/components/root-layout/MainHeader";
import MainFooter from "@/components/root-layout/MainFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// TODO: Modify metadata as needed
export const metadata: Metadata = {
  title: {
    template: "%s | NextJS Starter",
    default: "NextJS Starter",
  },
  description: "Sensible NextJS 16 starter kit with my preffered tech stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className}  antialiased`}
      suppressHydrationWarning
    >
      <body>
        {/* This Div is so that certain parts of shadcn work correctly */}
        <div>
          <Providers>
            <div className="min-h-screen flex flex-col justify-between">
              <MainHeader />
              <main className="w-full h-full">
                <div className="container mx-auto">{children}</div>
              </main>
              <MainFooter />
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
