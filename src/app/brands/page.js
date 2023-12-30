import Link from 'next/link'

export const metadata = {
    title: 'My Brands',
}

const Brands = () => {
    return (
        <section className="bg-rd py-24">
            <div>
                <h1 className="font-black text-3xl pb-5 text-center">
                    Minhas marcas
                </h1>
            </div>

            <div className="grid grid-rows-5">
                <h1 className="font-black text-white text-3xl border-t-2 border-white border-b-2 border-white pt-5 pl-24">
                    Linkezy
                </h1>
                <h1 className="font-black text-white text-3xl border-b-2 border-white pt-5 pl-24">
                    Diamond Med
                </h1>
                <h1 className="font-black text-white text-3xl border-b-2 border-white pt-5 pl-24">
                    Joquempô
                </h1>
                <h1 className="font-black text-white text-3xl border-b-2 border-white pt-5 pl-24">
                    Baden 6
                </h1>
                <div className="flex items-center justify-center pt-6">
                    <Link href="#">
                        <button
                            className="middle none center rounded-full bg-gray-900 py-3 px-10 font-sans text-md font-black text-white shadow-md shadow-gray-900/20 transition-all hover:shadow-lg hover:shadow-gray-900/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true">
                            Adicionar nova
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Brands
