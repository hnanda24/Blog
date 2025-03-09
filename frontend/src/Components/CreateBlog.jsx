import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const [formData, setFormData] = useState({title: '', content: '', author:''})
    const navigate = useNavigate();

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
      try {
        const response = await fetch("http://localhost:3000/blogData/data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        console.log(response)
        if (response.ok) {
          navigate('/');
        }
      } catch (error) {
        console.error("Error adding blog:", error);
      }
    }

    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create New Blog</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            value={formData.title} 
            onChange={handleChange} 
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
            name="content" 
            placeholder="Content" 
            value={formData.content} 
            onChange={handleChange} 
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <input 
            type="text" 
            name="author" 
            placeholder="Author" 
            value={formData.author} 
            onChange={handleChange} 
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    
  )
}

export default CreateBlog