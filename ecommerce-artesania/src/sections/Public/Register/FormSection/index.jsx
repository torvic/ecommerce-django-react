import styles from './index.module.scss'
import { useForm } from '../../../../hooks/useForm'

const initialForm = {
  username: '',
  email: '',
  password: '',
  password2: '',
}

const FormSection = () => {
  const validationsForm = (form) => {
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    // let regexComments = /^.{1,255}$/

    if (!form.username.trim()) {
      errors.username = "El campo 'Username' es requerido."
    } else if (!regexName.test(form.username.trim())) {
      errors.username = "El campo 'Username' solo acepta letras y espacios en blanco."
    }

    if (!form.email.trim()) {
      errors.email = "El campo 'Email' es requerido."
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Email' es incorrecto."
    }

    if (!form.password.trim()) {
      errors.password = "El campo 'Password' es requerido."
    } else if (!regexPassword.test(form.password.trim())) {
      errors.password = "El campo 'Password' acepta de 8 a 15 caracteres, al menos un caracter especial, un digito y no espacios en blanco"
    } 


    if (!form.password2.trim()) {
      errors.password2 = "El campo 'Repeat Password' es requerido."
		} else if (form.password !== form.password2) {
			errors.password2 = "'Password' diferentes."
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
    <section>
			<h3>Register User</h3>
      <form>
        <div className='form-group'>
          <input
            type='text'
            name='username'
						placeholder='Name..'
            className={`form-control ${errors.username && 'is-invalid'} `}
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.username}
          />
          {errors.username && (
            <div className='invalid-feedback'>{errors.username}</div>
          )}
        </div>
        <div className='form-group'>
          <input
            type='email'
            name='email'
            className={`form-control ${errors.email && 'is-invalid'} `}
            onChange={handleChange}
            onBlur={handleBlur}
						placeholder='Email..'
            value={form.email}
          />
          {errors.email && (
            <div className='invalid-feedback'>{errors.email}</div>
          )}
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            className={`form-control ${errors.password && 'is-invalid'} `}
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.password}
						placeholder='Password..'
          />
          {errors.password && (
            <div className='invalid-feedback'>{errors.password}</div>
          )}
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password2'
            className={`form-control ${errors.password2 && 'is-invalid'} `}
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.password2}
						placeholder='Repeat Password..'
          />
          {errors.password2 && (
            <div className='invalid-feedback'>{errors.password2}</div>
          )}
        </div>
        <button type='submit' className='btn btn-primary'>
          Register
        </button>
      </form>
    </section>
  )
}

export default FormSection
