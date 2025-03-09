import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [formData,setFormData] = useState({username: '',email: '',password: ''})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
        console.log(response);

      if(Response.ok)
      {
        navigate('/login');
      }
    }

    catch(err)
    {
      console.log('Can not register user' + {err});
    }
  }

  function goToLogin()
  {
    navigate('/login');
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="username" className="text-gray-600 mb-1">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            name='username'
            value={formData.username}
            onChange={handleChange}
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="email" className="text-gray-600 mb-1">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name='email'
            value={formData.value}
            onChange={handleChange}
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="password" className="text-gray-600 mb-1">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name='password'
            value={formData.password}
            onChange={handleChange}
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            id="registerBtn"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
        <div className='flex flex-col justify-center items-center'>
          Already a User then
          <button onClick={goToLogin} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"> Login </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
