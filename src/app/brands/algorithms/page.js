import Link from 'next/link'

export const metadata = {
    title: 'Algorithm',
}

const Brands = () => {
    return (
        <section className="bg-rd flex items-center justify-center">
            <div className="grid grid-cols w-1/2 gap-2 w-full py-8">
                <div>
                    <h1 className="font-black text-white text-2xl border-2 rounded-md p-2 pl-8">
                        Radar Categorias
                    </h1>
                </div>
                <div>
                    <h1 className="font-black text-white text-2xl border-2 rounded-md p-2 pl-8">
                        Radar Arquétipos
                    </h1>
                </div>
                <div>
                    <h1 className="font-black text-white text-2xl border-2 rounded-md p-2 pl-8">
                        Lista Categorias
                    </h1>
                </div>
                <div>
                    <h1 className="font-black text-white text-2xl border-2 rounded-md p-2 pl-8 bg-black border-black">
                        Lista Arquétipos
                    </h1>
                </div>
                <div className="flex justify-center items-center mt-8">
                    <img
                        src="/img2.png"
                        className="rounded-md"
                    />
                </div>
            </div>
        </section>
    )
}

export default Brands
