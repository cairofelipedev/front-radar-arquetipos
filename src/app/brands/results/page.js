import Link from 'next/link'

export const metadata = {
    title: 'Result',
}

const Brands = () => {
    return (
        <section className="bg-rd py-5 px-5">
            <div className="bg-white py-10 bg-color1 rounded-md">
                <div className="px-28 pb-5">
                    <h2 className="font-black text-xl mt-12 ml-32">
                        Arquétipo
                    </h2>
                    <h1 className="font-black text-4xl ml-32">Guerreiro</h1>
                </div>
                <div className="grid grid-cols w-full">
                    <div className="border-t-2 border-b-2 border-black">
                        <h1 className="font-black text-2xl p-2 px-28 ml-32">
                            Principais atributos
                        </h1>
                    </div>
                    <div className="px-28 ml-32">
                        <p className="text-base mt-2 mb-2">
                            Agilidade <br></br>
                            Ambição <br></br>
                            Aprimoramento <br></br>
                            Aspiração <br></br>
                            Atenção <br></br>
                        </p>
                    </div>
                    <div className="border-t-2 border-b-2 border-black">
                        <h1 className="font-black text-2xl p-2 px-28 ml-32">
                            O que abomina
                        </h1>
                    </div>
                    <div className="px-28 ml-32">
                        <p className="text-base mt-2 mb-2">
                            Carinho <br></br>
                            Delicadeza <br></br>
                            Elegância <br></br>
                            Emoção <br></br>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands
