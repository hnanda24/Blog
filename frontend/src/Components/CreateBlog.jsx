import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const [formData, setFormData] = useState({title: '', content: '', author:''})
    const navigate = useNavigate();
    
    


  return (
    <div>
        
    </div>
  )
}

export default CreateBlog