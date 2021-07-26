import styles from './index.module.scss'
import { useForm } from '../../../../hooks/useForm'

const FormSection = () => {
  return (
    <form>
      <div className='form-group'>
        <label for='username'>Username</label>
        <input
          type='text'
					name='username'
          className='form-control is-invalid'
          id='username'
        />
				{/* <div className="valid-feedback">
          Looks good!
        </div> */}
      </div>
      <div className='form-group'>
        <label for='password1'>Password</label>
        <input
          type='password'
					name='password'
          className='form-control is-invalid'
          id='password1'
        />
				<div className="invalid-feedback">
          Incorrect password or Username!
        </div>
      </div>
      <button type='submit' className='btn btn-primary'>
        Login
      </button>
    </form>
  )
}

export default FormSection
