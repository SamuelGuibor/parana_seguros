/* eslint-disable @next/next/no-img-element */
'use client';

import { InfiniteSlider } from '@/app/_components/motion-primitives/infinite-slider';
import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react';
import { FeatureCard } from './ui/gridcards';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

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
    {
        title: 'Personalização fácil',
        icon: Pencil,
        description:
            'Ajuste coberturas e franquias para adaptar o seguro às suas necessidades.',
    },
    {
        title: 'Controle total',
        icon: Settings2,
        description:
            'Gerencie suas apólices e renovações diretamente pelo nosso painel online.',
    },
    {
        title: 'Apoio especializado',
        icon: Sparkles,
        description:
            'Nossa equipe está pronta para tirar dúvidas e oferecer suporte dedicado.',
    },
];


export default function HowWorks() {
    return (
        <section
        id="como-funciona"
        className="overflow-x-hidden bg-gradient-to-r from-[#01020A] via-[#040727] to-[#03061D] text-white"
    >
			<div className="mx-auto w-full max-w-5xl space-y-8 px-4">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<h2 className="pt-4 text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
						Power. Speed. Control.
					</h2>
					<p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
						Everything you need to build fast, secure, scalable apps.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 divide-x divide-y border border-gray-500 z-10 sm:grid-cols-2 md:grid-cols-3"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>

                <div className='flex justify-center'>
                    <Image src="/Lojacorr.png" alt="lojacorr" width={800} height={200}/>
                </div>
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-[#01020A] via-[#020312] to-[#03061D]">
                    <div className="relative py-12 px-6 md:px-12">
                        <h3 className="text-center text-xl md:text-2xl font-semibold text-gray-300 mb-20 uppercase tracking-wide">
                            Nossos parceiros
                        </h3>

                        <InfiniteSlider speed={40} speedOnHover={25} gap={112}>
                            {[
                                'nvidia',
                                'column',
                                'github',
                                'nike',
                                'lemonsqueezy',
                                'laravel',
                                'lilly',
                                'openai',
                            ].map((name) => (
                                <div key={name} className="flex">
                                    <img
                                        className="mx-auto h-5 w-fit filter brightness-0 invert"
                                        src={`https://html.tailus.io/blocks/customers/${name}.svg`}
                                        alt={`${name} logo`}
                                        height="20"
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>

                        
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#01020A] via-transparent to-transparent" />
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#03061D] via-transparent to-transparent" />
                    </div>
                </div>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
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