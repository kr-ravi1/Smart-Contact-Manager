import React from 'react'
import { useState } from 'react';
import Alert from '../Alerts/Alert'



function Signup() {

    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    const [showMessage, setShowMessage] = useState(false);


    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/api/doRegister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const res = await response.json();
        // console.log(response);
        // console.log(res.data);
        // console.log(res.message);
        // console.log(res.type);

        if(res.message != null) {
            setMessage(res.message);
            setType(res.type);
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }


    };


    return (
        <div id="content">
            {showMessage && (<Alert message={message} type={type}/>)}
            <div className="grid grid-cols-12 mt-4">
                <div className="col-span-4 md:col-span-2 lg:col-span-3 xl:col-span-4"></div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-4">
                    <div
                        className="block p-6 border-t-[7px] border-blue-700 bg-white rounded-xl shadow dark:bg-gray-800 dark:border-blue-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Signup Here
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Start managing contacts on cloud ...
                        </p>

                        {/* <!-- this is  form --> */}
                        <form
                            className="mt-3"
                            onSubmit={handleSubmit}
                        >

                            {/* <!-- name  --> */}

                            <div className="mb-3">
                                <label htmlFor="name"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text"
                                    id="name"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter here" required />
                            </div>
                            <p className="text-red-600 px-1 py-2"></p>

                            {/* <!-- email field --> */}

                            <div className="mb-3">
                                <label htmlFor="email"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email"
                                    id="email"
                                    name='email'
                                    onChange={handleChange}
                                    value={formData.email}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="example@gmail.com" required />
                            </div>
                            <p className="text-red-600 px-1 py-2"></p>

                            {/* <!-- password field --> */}

                            <div className="mb-2">
                                <label htmlFor="password"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Password</label>
                                <input type="password"
                                    id="password"
                                    name='password'
                                    onChange={handleChange}
                                    value={formData.password}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required />
                            </div>
                            <p className="text-red-600 px-1 py-2"></p>

                            {/* <!-- Phone field --> */}

                            <div className="mb-2">
                                <label htmlFor="phone"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Contact
                                    Number</label>
                                <input type="text"
                                    id="phone"
                                    name='phoneNumber'
                                    onChange={handleChange}
                                    value={formData.phoneNumber}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required />
                            </div>
                            <p className="text-red-600 px-1 py-1"></p>

                            {/* <!-- about textarea --> */}
                            {/* <div className="mb-2">
                            <label for="about"
                                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Write something
                                about yourself</label>
                            <textarea id="about" rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write here..."></textarea>
                        </div>
                        <p className="text-red-600 px-1 py-2"></p> */}

                            {/* <!-- button --> */}

                            <div className="mb-2 flex justify-center space-x-3">
                                <button type="submit"
                                    className="px-3 py-2 rounded bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
                                    Singup
                                </button>
                                <button type="reset"
                                    className="px-3 py-2 rounded bg-[#ff0000] hover:bg-[#ff0000] text-white dark:bg-[#ff0000] dark:hover:bg-[#ff0000]">
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup