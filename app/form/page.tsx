'use client'

import { Footer } from "@/app/_components/footer";
import { Header } from "@/app/_components/header";
import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        cpf: '',
        endereco: ''
    });

    // Começa com os dois primeiros visíveis (índices 0 e 1)
    const [visibleIndexes, setVisibleIndexes] = useState([0, 1]);

    const inputs = [
        { name: 'nome', type: 'text', placeholder: 'Nome completo' },
        { name: 'email', type: 'email', placeholder: 'E-mail' },
        { name: 'telefone', type: 'tel', placeholder: 'Telefone' },
        { name: 'cpf', type: 'text', placeholder: 'CPF' },
        { name: 'endereco', type: 'text', placeholder: 'Endereço' },
    ];

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleNextInput(index: number) {
        const name = inputs[index].name;
        const value = formData[name as keyof typeof formData];

        if (value.trim() !== '') {
            const nextIndex = index + 1;
            if (nextIndex < inputs.length && !visibleIndexes.includes(nextIndex)) {
                setVisibleIndexes((prev) => [...prev, nextIndex]);
            }
        }
        if (value.trim() !== '') {
            const nextIndex = index + 2;
            if (nextIndex < inputs.length && !visibleIndexes.includes(nextIndex)) {
                setVisibleIndexes((prev) => [...prev, nextIndex]);
            }
        }
    }

    function handleBlur(index: number) {
        handleNextInput(index);
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
        if (e.key === 'Enter') {
            e.preventDefault();

            // Libera o input com índice + 2
            handleNextInput(index);

            // Foca no próximo campo sequencial (índice + 1)
            const nextInput = document.querySelector<HTMLInputElement>(
                `input[name="${inputs[index + 1]?.name}"]`
            );

            if (nextInput) nextInput.focus();
        }
    }


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log('Dados enviados:', formData);
    }

    return (
        <>
            <Header />

            <main className="min-h-screen bg-gradient-to-r from-[#0b0d17] via-[#040621] to-[#03061D] text-gray-800 pt-28 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 max-w-7xl mx-auto">
                    <aside className="bg-white rounded-xl shadow p-6 md:col-span-3">
                        <h2 className="text-lg font-bold mb-4">Como funciona?</h2>
                        <p className="text-sm">
                            Preencha seus dados para iniciarmos sua cotação de seguro.
                            Nossa equipe entrará em contato com uma proposta personalizada
                            em até 24h. É rápido, simples e seguro!
                        </p>
                    </aside>

                    <main
                        id="formulario"
                        className="bg-white rounded-xl shadow p-6 space-y-4 md:col-span-6 max-h-[600px] overflow-y-auto"
                    >
                        <h2 className="text-lg font-bold mb-4">Dados do segurado</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {inputs.map(({ name, type, placeholder }, index) => (
                                <input
                                    key={name}
                                    name={name}
                                    type={type}
                                    placeholder={placeholder}
                                    value={formData[name as keyof typeof formData]}
                                    onChange={handleChange}
                                    onBlur={() => handleBlur(index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className={`w-full p-3 border rounded-md transition-all duration-300
                    ${visibleIndexes.includes(index) ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 pointer-events-none overflow-hidden'}
                  `}
                                    autoComplete="off"
                                />
                            ))}

                            {visibleIndexes.includes(inputs.length - 1) && (
                                <button
                                    type="submit"
                                    className="w-full bg-blue-800 text-white py-3 rounded-md hover:bg-blue-900 transition"
                                >
                                    Enviar dados
                                </button>
                            )}
                        </form>
                    </main>

                    <aside className="bg-white rounded-xl shadow p-6 md:col-span-3">
                        <h2 className="text-lg font-bold mb-4">Vantagens do nosso seguro</h2>
                        <ul className="text-sm list-disc list-inside space-y-2">
                            <li>Atendimento 24h em todo o Brasil</li>
                            <li>Cobertura contra roubo, furto e colisões</li>
                            <li>Assistência residencial e automotiva</li>
                            <li>Descontos progressivos por bom histórico</li>
                        </ul>
                    </aside>
                </div>
            </main>

            <Footer />
        </>
    );
}
