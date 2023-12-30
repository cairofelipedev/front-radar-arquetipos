import Link from 'next/link'

export const metadata = {
    title: 'Result',
}

const Brands = () => {
    return (
        <section className="bg-rd py-5 px-5">
            <div className="bg-white py-10 bg-color1 rounded-md">
                <div className="px-28">
                    <h2 className="font-black text-xl mt-16 ml-32">
                        Arquétipo
                    </h2>
                    <h1 className="font-black text-4xl ml-32">Guerreiro</h1>
                </div>
                <div className="grid grid-cols w-full py-7">
                    <div className="border-t-2 border-b-2 border-black">
                        <h1 className="font-black text-2xl p-2 px-28 ml-32">
                            Descrição
                        </h1>
                    </div>
                    <div className="px-28 ml-32">
                        <p className="text-base mt-2">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcor.
                        </p>
                    </div>
                    <div>
                        <h1 className="font-black text-2xl mt-4 p-2 px-28 ml-32">
                            Promessa
                        </h1>
                    </div>
                    <div className="px-28 ml-32">
                        <p className="text-base mt-2">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit.
                        </p>
                    </div>
                    <div>
                        <h1 className="font-black text-2xl mt-4 p-2 px-28 ml-32">
                            Discurso
                        </h1>
                    </div>
                    <div className="px-28 ml-32">
                        <p className="text-base mt-2">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands
