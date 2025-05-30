import { Header } from "@/app/_components/header"
import { Button } from '@/app/_components/ui/button'
import Image from "next/image"
import Link from 'next/link'

export default function HeroSection() {
    return (
        <>
            <Header />
            <main className="overflow-x-hidden bg-gradient-to-r from-[#0b0d17] via-[#040621] to-[#03061D] text-white">
                <section>
                    <div className="pb-24 pt-12 lg:pt-44 h-screen">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                                    Paraná Seguros
                                </h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">
                                    Highly customizable components for building modern websites and applications that look and feel the way you mean it.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base bg-blue-600 hover:bg-blue-700"
                                    >
                                        <Link href="#link">
                                            <span className="text-nowrap">Quero Fazer Meu Seguro Agora!</span>
                                        </Link>
                                    </Button>
                                    <div className="lg:absolute lg:right-0 pb-16">
                                        <Image
                                            className=""
                                            src="/img.png"
                                            alt="Abstract Object"
                                            height="500"
                                            width="500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}