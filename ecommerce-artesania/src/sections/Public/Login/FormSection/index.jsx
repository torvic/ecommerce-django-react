import styles from './index.module.scss'
import { useForm } from '../../../../hooks/useForm'
import Message from '../../../../components/Message'
import Loader from '../../../../components/Loader'

const initialForm = {
  username: '',
  password: '',
}

const FormSection = () => {
  const validationsForm = (form) => {
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
    // let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    // let regexComments = /^.{1,255}$/

    if (!form.username.trim()) {
      errors.username = "El campo 'Username' es requerido."
    } else if (!regexName.test(form.username.trim())) {
      errors.username =
        "El campo 'Username' solo acepta letras y espacios en blanco."
    }

    if (!form.password.trim()) {
      errors.password = "El campo 'Password' es requerido."
    } else if (!regexPassword.test(form.password.trim())) {
      errors.password =
        "El campo 'Password' acepta de 8 a 15 caracteres, al menos un caracter especial, un digito y no espacios en blanco"
    }

    return errors
  }

  const {
    form,
    errors,
    loading,
    auth,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm)
  return (
    <div>
			<h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='username'
            className={`form-control ${errors.username && 'is-invalid'} ${
              auth && 'is-invalid'
            }`}
            value={form.username}
						placeholder='Username..'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && (
            <div className='invalid-feedback'>{errors.username}</div>
          )}
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            className={`form-control ${errors.password && 'is-invalid'} ${
              auth && 'is-invalid'
            }`}
            value={form.password}
						placeholder='Password..'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && (
            <div className='invalid-feedback'>{errors.password}</div>
          )}
          {auth && (
            <div className='invalid-feedback'>
              "Username" or "Password" incorrect!!!
            </div>
          )}
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
      {loading && <Loader />}
    </div>
  )
}

export default FormSection
