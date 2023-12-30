import Link from 'next/link'

export const metadata = {
    title: 'Dictionary',
}

const Brands = () => {
    return (
        <section className="bg-rd py-5 px-5">
            <div className="bg-color1 py-16">
                <div className="py-10 rounded-md">
                    <Link href="#">
                        <div className="mr-28 uppercase text-white text-end">
                            X
                        </div>
                    </Link>
                    <div className="px-20">
                        <h1 className="font-black text-4xl text-white mt-16 ml-32">
                            Dicionário
                        </h1>
                    </div>
                    <div className="border-t-2 border-b-2 w-full mt-5 px-28">
                        <h1 className="text-xl text-white m-2 ml-32">
                            Sofisticação
                        </h1>
                    </div>
                    <div className="mt-5 ml-28 mr-28 flex justify-center px-32">
                        <p className="text-white text-base font-semibold">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcor. Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat
                            volutpat. Ut wisi enim ad minim veniam, quis nostrud
                            exerci tation ullamcor. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis
                            nostrud exerci tation ullamcor
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands
