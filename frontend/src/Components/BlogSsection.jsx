import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/blogData/displayData");
        const result = await response.json();
        // console.log("Fetched Blogs:", result); 
        setBlogs(result.data); 
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]); 
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6"> 
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Latest blogs</h2>
        <button 
          onClick={() => navigate('/create')}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add New Blog
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {
          blogs.map((blog) => (
            <div key={blog._id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.content}</p>
              <p className="text-sm text-gray-500">By {blog.author}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default BlogSection;
