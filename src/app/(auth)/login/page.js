'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={submitForm} className="">
                {/* Email Address */}
                <div>
                    <Label htmlFor="email"></Label>

                    <Input
                        placeholder="Usuário"
                        id="email"
                        type="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError messages={errors.email} className="mt-2" />
                </div>

                {/* Password */}
                <div className="mt-4">
                    <Label htmlFor="password"></Label>

                    <Input
                        placeholder="Senha"
                        id="password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full"
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoComplete="current-password"
                    />

                    <InputError messages={errors.password} className="mt-2" />
                </div>

                {/* Remember Me
                <div className="block mt-4">
                    <label
                        htmlFor="remember_me"
                        className="inline-flex items-center">
                        <input
                            id="remember_me"
                            type="checkbox"
                            name="remember"
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={event =>
                                setShouldRemember(event.target.checked)
                            }
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div> */}
            </form>
            <div className="flex items-center justify-center mt-24">
                <p>2023</p>
            </div>

            <section className="bg-rd py-16">
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

            <section className="bg-rd py-16">
                <div>
                    <h1 className="font-black text-3xl pl-16">
                        Escolha os 5 principais atributos que definem a sua marca
                    </h1>
                </div>
                <div className="grid grid-rows">
                </div>
            </section>
        </>
    )
}

export default Login
