import { useState } from 'react';
import { useAuth } from '../../utilities/AuthContext'

const Signup = () => {
  const {registerUser} = useAuth()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return;
    }

    try {
      registerUser(formData)
      setError('')
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Sign Up Failed - Try Again')
    }
  };
  return (
    <div>
      {/* <h2>Signup</h2> */}
      <form className='form-container' onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <br />
        {error && <p>{error}</p>}
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup