import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData,setFormData] = useState({email: '',password: ''})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
        console.log(data.token);
      if(response.ok)
      {
        localStorage.setItem('token', data.token);
        navigate('/')
      }
    }

    catch(err)
    {
      console.log('Error logging in' + {err});
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-gray-600 mb-1">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name='email'
            value={formData.email}
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
            id="loginBtn"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;