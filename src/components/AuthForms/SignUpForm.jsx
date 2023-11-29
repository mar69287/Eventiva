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
      <form className='form-container' autoComplete='off' onSubmit={handleSubmit}>
          <input className='placeholder:text-[#737C63] transition-all duration-400 hover:border-tertiary text-[#737C63] focus-none outline-none appearance-none bg-transparent border-b-2 p-2 focus-none border-b-primary w-full text-tsecondary' placeholder='Your Name' type="text" name="name" value={formData.name} onChange={handleChange} />
          <input className='placeholder:text-[#737C63] transition-all duration-400 hover:border-tertiary text-[#737C63] focus-none outline-none appearance-none bg-transparent border-b-2 p-2 focus-none border-b-primary w-full text-tsecondary' placeholder='Your Email' type="email" name="email" value={formData.email} onChange={handleChange} />
          <input className='placeholder:text-[#737C63] transition-all duration-400 hover:border-tertiary text-[#737C63] focus-none outline-none appearance-none bg-transparent border-b-2 p-2 focus-none border-b-primary w-full text-tsecondary' placeholder='Password' type="password" name="password" value={formData.password} onChange={handleChange} />
          <input
          className='placeholder:text-[#737C63] transition-all duration-400 hover:border-tertiary text-[#737C63] focus-none outline-none appearance-none bg-transparent border-b-2 p-2 focus-none border-b-primary w-full text-tsecondary' placeholder='Confirm Password'
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        {error && <p>{error}</p>}
        <button className='w-full mt-5 mb-6 rounded-full bg-[#F79257] p-2 text-[#FFF] font-bold' type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup