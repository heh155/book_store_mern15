import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BookCard from '../components/home/BookCard';
import BookTable from '../components/home/BookTable';

export default function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showtype, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        getBooks();
    }, []);

    const getBooks = async () => {
        try {
            const response = await axios.get('http://localhost:4000/books');
            setBooks(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            // Handle error - Show error message to user
        }
    };

    const handleShowTypeChange = (type) => {
        setShowType(type);
    };

    return (
        <div className='p-4'>
            <div className="flex justify-center items-center gap-x-4">
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => handleShowTypeChange('table')}>
                    Table
                </button>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => handleShowTypeChange('card')}>
                    Card
                </button>
            </div>
            <div className='p-4'>
                <div className="flex justify-between items-center">
                    <h1 className='text-3xl my-8'>Books List</h1>
                    <Link to='/books/create'>
                        <MdOutlineAddBox className='text-sky-800 text-4xl'/>
                    </Link>
                </div>
            </div>
            {loading ? <Spinner/> : (showtype === 'table' ? <BookTable books={books}/> : <BookCard books={books}/>)}
        </div>
    );
}
