import { Input } from '@material-tailwind/react'
import { useContext } from 'react'
import { UserContext } from '../../context'
import { GoogleLogin } from '@react-oauth/google'

export const LoginForm = () => {
  const { success, errorMessage } = useContext(UserContext)

  return (
    <div className="container">
      <form className="mx-auto mt-40 flex w-[90%] flex-col gap-4 rounded-2xl bg-gray-100 px-10 py-8 lg:w-96">
        <h1>Faça seu login</h1>
        <Input type="email" label="E-mail" />
        <Input type="password" label="Senha" />

        <button className="mt-10 rounded-full bg-brand-900 py-3 text-gray-100 hover:bg-brand-800">
          CONECTAR
        </button>

        <div className="flex w-full items-center justify-center">
          <GoogleLogin onSuccess={success} onError={errorMessage} />
        </div>
      </form>
    </div>
  )
}
