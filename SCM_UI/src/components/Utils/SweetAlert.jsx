import React from 'react'
import { useRef } from 'react';

function SweetAlert({ message, api, onClose, sendData }) {

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    const handleClick = () => {
        const fetchData = async () => {

            const response = await fetch(api, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            sendData(data);
            // console.log(data);
        }

        fetchData();

    }



    return (
        <div ref={modalRef} onClick={closeModal}  className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg  flex justify-center items-center flex-col space-y-4">
                <div>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                    </svg>
                </div>
                <div className="text-center mb-4 text-xl font-semibold dark:text-white">{message}</div>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => {handleClick(); onClose()}}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => onClose()}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SweetAlert