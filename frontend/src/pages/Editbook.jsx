import React, { useState,useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

export default function Editbook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(()=>{
    setLoading(true);
    axios.get(`https://book-store-api-woad.vercel.app/books/${id}`)
    .then((response)=>{
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setPublishYear(response.data.title);
      setLoading(false);
    }).catch((error)=>{
      setLoading(false);
      alert('an error happended');
      console.log(error);
    })
  },[])

  const handleEditBook = async () => { // Use async/await for cleaner error handling
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);

    try {
      const response = await axios.put(`http://localhost:4000/books/${id}`, data);
      setLoading(false);
      navigate('/'); // Navigate on successful creation
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert('An error occurred:', error.message); // Provide more specific error message
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
}
