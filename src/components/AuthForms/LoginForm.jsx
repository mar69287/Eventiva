import { useState } from 'react';
import { useAuth } from '../../utilities/AuthContext'

export default function LoginForm() {
  const {loginUser} = useAuth()
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    loginUser(credentials)
  }

  return (
    <>
      <div className="form-container ">
        <form className='form w-full' autoComplete="off" onSubmit={handleSubmit}>
          <input className='placeholder:text-[#737C63] transition-all duration-400 hover:border-tertiary text-[#737C63] focus-none outline-none appearance-none bg-transparent border-b-2 p-2 focus-none border-b-primary w-full text-tsecondary' type="text" name="email" placeholder='Your Email' value={credentials.email} onChange={handleChange} required />
          <input className='placeholder:text-[#737C63] transition-all duration-400 hover:border-tertiary focus-none outline-none appearance-none bg-transparent border-b-2 p-2 focus-none border-b-primary w-full text-tsecondary' type="password" name="password" placeholder='Your Password' value={credentials.password} onChange={handleChange} required />
          <button className='w-full mt-5 rounded-full bg-[#F79257] p-2 text-[#FFF] font-bold' type="submit">Sign in</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}