'use client'

import { Header } from "@/app/_components/header"
import { Button } from '@/app/_components/ui/button'
import Image from "next/image"
import Link from 'next/link'
import { Cpu, Fingerprint, Zap } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const features = [
    {
        title: 'Simulação rápida',
        icon: Zap,
        description:
            'Responda perguntas simples para obter cotações personalizadas em segundos.',
    },
    {
        title: 'Análise detalhada',
        icon: Cpu,
        description:
            'Compare diferentes planos e escolha o que oferece a melhor cobertura para você.',
    },
    {
        title: 'Segurança garantida',
        icon: Fingerprint,
        description:
            'Transações 100% seguras para proteger seus dados e seu pagamento.',
    },
]

export default function HeroSection() {
    return (
        <>
            <Header />
            <main className="bg-gradient-to-r from-[#0b0d17] via-[#040621] to-[#03061D] text-white">
                <section>
                    <div className="pt-12 pb-8 sm:pb-16 lg:pt-16 min-h-screen flex flex-col justify-center">
                       <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between">
                            <div className="order-1 max-w-lg text-center lg:pl-20 lg:text-left">
                                <h1 className="mt-6 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium">
                                    Proteja seu futuro em minutos!
                                </h1>
                                <p className="mt-10 text-sm sm:text-base md:text-lg">
                                    Faça sua simulação gratuita, sem burocracia
                                </p>
                                <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-4 sm:px-5 text-sm sm:text-base bg-blue-600 hover:bg-blue-700"
                                    >
                                        <Link href="/form">
                                            <span className="text-nowrap">Quero Fazer Meu Seguro Agora!</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="order-2 w-full max-w-lg lg:absolute lg:right-0 lg:pr-10 mt-8 lg:mt-0">
                                <AnimatedContainer delay={0.4} className="space-y-6">
                                    {features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="relative border border-white backdrop-blur-md p-4 sm:p-6 rounded-lg"
                                        >
                                            <feature.icon
                                                className="text-white size-5 sm:size-6"
                                                strokeWidth={1}
                                                aria-hidden
                                            />
                                            <h3 className="mt-3 text-sm sm:text-base md:font-bold text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="mt-2 text-xs sm:text-sm font-light text-white">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </AnimatedContainer>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

type ViewAnimationProps = {
    delay?: number;
    className?: React.ComponentProps<typeof motion.div>['className'];
    children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}