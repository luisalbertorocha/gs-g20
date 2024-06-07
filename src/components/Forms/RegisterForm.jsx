import { Input } from '@material-tailwind/react'
import { GoogleLogin } from '@react-oauth/google'
import { UserContext } from '../../context'
import { useContext } from 'react'

export const RegisterForm = () => {
  const { success, errorMessage } = useContext(UserContext)

  return (
    <div className="container">
      <form className="mx-auto mt-40 flex w-[90%] flex-col gap-4 rounded-2xl bg-gray-100 px-10 py-8 lg:w-96">
        <h1>Crie sua conta</h1>

        <Input type="text" label="Nome" />
        <Input type="email" label="E-mail" />
        <Input type="password" label="Senha" />

        <button className="mt-10 rounded-full bg-brand-900 py-3 text-gray-100 hover:bg-brand-800">
          CADASTRAR
        </button>

        <div className='w-full flex justify-center items-center'>
          <GoogleLogin onSuccess={success} onError={errorMessage} />
        </div>
      </form>
    </div>
  )
}
