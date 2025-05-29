import { Header } from "@/app/_components/header"
import { Button } from '@/app/_components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <>
            <Header />
            <main className="overflow-x-hidden bg-gradient-to-r from-[#01020A] via-[#020312] to-[#03061D] text-white">
                <section>
                    <div className="pb-24 pt-12 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                                    Ship 10x Faster with NS
                                </h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">
                                    Highly customizable components for building modern websites and applications that look and feel the way you mean it.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base"
                                    >
                                        <Link href="#link">
                                            <span className="text-nowrap">Start Building</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base"
                                    >
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="h-px w-full bg-white opacity-70" />
            </main>

        </>
    )
}