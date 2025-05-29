'use client';

import { InfiniteSlider } from '@/app/_components/motion-primitives/infinite-slider';
import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react';
import { FeatureCard } from './ui/gridcards';

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
            className="overflow-x-hidden bg-gradient-to-r from-[#01020A] via-[#020312] to-[#03061D] text-white"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Como Funciona?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300">
                        Tudo que voce precisa saber sobre os seus seguros!
                    </p>
                </div>

                {/* Grid dos cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20 border border-dashed divide-x divide-y divide-dashed rounded-2xl overflow-hidden">
                    {features.map((feature, i) => (
                        <FeatureCard key={i} feature={feature} />
                    ))}
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

                        {/* Gradientes laterais */}
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#01020A] via-transparent to-transparent" />
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#03061D] via-transparent to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}