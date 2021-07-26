import styles from './index.module.scss'

const FormSection = () => {
  return (
    <section>
			<h3>Register new User !!!</h3>
      <form>
        <div className='form-group'>
          <label for='name'>Name</label>
          <input
            type='text'
            name='name'
            className='form-control is-invalid'
            id='name'
          />
          {/* <div className="valid-feedback">
          Looks good!
        </div> */}
        </div>
        <div className='form-group'>
          <label for='surnames'>Surnames</label>
          <input
            type='text'
            name='surnames'
            className='form-control is-valid'
            id='surnames'
          />
        </div>
        <div className='form-group'>
          <label for='email'>Email</label>
          <input
            type='email'
            name='email'
            className='form-control is-invalid'
            id='email'
          />
          <div className='invalid-feedback'>
            Incorrect Email!
          </div>
        </div>
        <div className='form-group'>
          <label for='password1'>Password</label>
          <input
            type='password'
            name='password'
            className='form-control is-invalid'
            id='password1'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Register
        </button>
      </form>
    </section>
  )
}

export default FormSection
