import Link from 'next/link'

export const metadata = {
    title: 'Attributes',
}

const Brands = () => {
    return (
        <section className="bg-rd py-16">
            <div className="flex items-center justify-center">
                <h1 className="font-black text-4xl">
                    Escolha os 5 principais<br></br> atributos que definem
                    <br></br> a sua marca
                </h1>
            </div>
            <div className="grid grid-cols gap-2 w-full flex items-center justify-center py-8">
                <div>
                    <h1 className="font-black text-white text-2xl border-2 rounded-md p-2 pl-8">
                        Inovação
                    </h1>
                    <p className="p-2 text-sm text-white font-semibold  pl-8">
                        Clique aqui e leia a definição de inovação para as
                        marcas
                    </p>
                </div>
                <div>
                    <h1 className="font-black text-white text-2xl border-2 rounded-md p-2 pl-8">
                        Responsabilidade
                    </h1>
                    <p className="p-2 text-sm text-white font-semibold  pl-8">
                        Clique aqui e leia a definição de inovação para as
                        marcas
                    </p>
                </div>
                <div>
                    <div className="border-2 rounded-md">
                        <h1 className="font-black text-white text-2xl p-2 pl-8">
                            Disciplina
                        </h1>
                        <h1 className="font-black text-white border-t-2 text-2xl p-2 pl-8">
                            Firmeza
                        </h1>
                        <h1 className="font-black text-white border-t-2 text-2xl p-2 pl-8 bg-black">
                            Tecnologia
                        </h1>
                        <h1 className="font-black text-white border-t-2 text-2xl p-2 pl-8">
                            Zelo
                        </h1>
                    </div>
                    <p className="p-2 text-sm text-white font-semibold  pl-8">
                        Clique aqui e leia a definição de inovação para as
                        marcas
                    </p>
                </div>
                <div>
                    <h1 className="font-black text-white text-2xl border-2 rounded-md p-2 pl-8">
                        Escolha o 4º atributo
                    </h1>
                    <p className="p-2 text-sm text-white font-semibold  pl-8">
                        Clique aqui e leia a definição de inovação para as
                        marcas
                    </p>
                </div>
                <div>
                    <h1 className="font-black text-white text-2xl border-2 rounded-md p-2 pl-8">
                        Escolha o 5º atributo
                    </h1>
                    <p className="p-2 text-sm text-white font-semibold  pl-8">
                        Clique aqui e leia a definição de inovação para as
                        marcas
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Brands
