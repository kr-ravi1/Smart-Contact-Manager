import React, { useRef, useState, useEffect } from 'react'

function Modal({ onClose, id }) {

    const [res, setRes] = useState(null);

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }
    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(`http://localhost:8080/user/contact/view/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response == null) {
                navigate('/error');
                return;
            }

            const data = await response.json();
            setRes(data);
            // console.log(data);
        }

        fetchData();

    }, [id])

    if (res == null) {
        return (
            <div>Loading....</div>
        )
    }

    return (
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-0 flex justify-center items-center'>
        <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full'>
            <div className='flex justify-center mb-4'>
                <img src={res.picture} className='h-24 w-24 rounded-full' alt={res.name} />
            </div>
            <div className='text-center'>
                <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-2'>{res.name}</h2>
                <p className='text-sm text-gray-500 dark:text-gray-300 mb-4'>{res.email}</p>
                <div className='text-left'>
                    <p className='text-gray-700 dark:text-gray-200'><strong>Phone:</strong> {res.phoneNumber}</p>
                    <p className='text-gray-700 dark:text-gray-200'><strong>Description:</strong> {res.description}</p>
                    <p className='text-gray-700 dark:text-gray-200'><strong>Location:</strong> {res.address}</p>
                    <p className='text-gray-700 dark:text-gray-200'><strong>Website:</strong> <a href={res.websiteLink} target='_blank' rel='noopener noreferrer' className='text-blue-600 dark:text-blue-400'>{res.websiteLink}</a></p>
                    <p className='text-gray-700 dark:text-gray-200'><strong>LinkedIn:</strong> <a href={res.linkedInLink} target='_blank' rel='noopener noreferrer' className='text-blue-600 dark:text-blue-400'>{res.linkedInLink}</a></p>
                    <p className='text-gray-700 dark:text-gray-200'><strong>Added on:</strong> {res.createdAt}</p>
                </div>
            </div>
            <div className='flex justify-center mt-4'>
                <button type="button" onClick={() => onClose()} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">OK</button>
            </div>
        </div>
    </div>
    )
}

export default Modal