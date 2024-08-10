import React, { useEffect, useState } from 'react'
import Modal from '../Utils/Modal';
import SweetAlert from '../Utils/SweetAlert';
import Alert from '../Alerts/Alert';
import ContactTable from '../Utils/ContactTable';
import Pagination from '../Utils/Pagination';

function ContactsView() {

  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);
  const [field, setField] = useState('All');
  const [keyword, setKeyword] = useState('');
  const [all, setAll] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [contactId, setContactId] = useState();
  const [showPopUp, setShowPopUp] = useState(false);
  const [type, setType] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!showPopUp) {
      const user = JSON.parse(localStorage.getItem("UserData"));

      if (user && user.email) {

        const fetchData = async () => {
          try {

            let url = `http://localhost:8080/user/contact/search?email=${user.email}&page=${page}&field=${field}`;

            if (keyword !== '') {
              url += `&keyword=${keyword}`;
            }

            const response = await fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const res = await response.json();
            setData(res);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchData();
      }
    }

  }, [page, keyword, all, type])

  const handleChildData = (res) => {
    setType(res.type);
    setMessage(res.message);
    setTimeout(() => {
      setType(null);
    }, 3000)
  }



  if (data == null) {
    return (
      <div>Loading...</div>
    )
  }

  return (<>
    {type != null && <Alert type={type} message={message} />}
    <div className=" overflow-x-auto shadow-md sm:rounded-lg p-5 min-h-[85vh] ">
      <p className='flex justify-center items-center text-lg font-semibold mb-3'>All Contacts</p>
      <div className="flex gap-4 items-center justify-start flex-column flex-wrap md:flex-row pb-4 bg-gray-100 dark:bg-gray-900 p-3">

        <div className="">
          <button onClick={() => setShowDropDown((prev) => !prev)} className="w-28 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 " type="button">
            <div className='w-28'>{field}</div>
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div id="dropdown" className={`z-10 ${showDropDown ? "" : "hidden"} absolute bg-white divide-gray-100 rounded-lg shadow w-[112px] dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li onClick={() => { setShowDropDown(false); setPage("0"); setField('All'); setAll((prev) => prev + 1) }} >
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All</a>
              </li>
              <li onClick={() => { setShowDropDown(false); setField('Name') }} >
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Name</a>
              </li>
              <li onClick={() => { setShowDropDown(false); setField('Phone') }}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Phone</a>
              </li>
              <li onClick={() => { setShowDropDown(false); setField('Email') }}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Email</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex">
          <input type="text" id="search" name='keyword' value={keyword} onChange={(e) => setKeyword(e.target.value)} className="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 inline-flex min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-e-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
          </span>
        </div>

      </div>

      <ContactTable 
        data={data.content}
        setShowModal={setShowModal}
        setContactId={setContactId}
        setShowPopUp={setShowPopUp}
      />

      {/* Pgination */}
      <Pagination data={data} setPage={setPage} page={page} />

    </div>

    {showModal && <Modal 
      onClose={() => setShowModal(false)}
      api={`http://localhost:8080/user/contact/view/${contactId}`}
    />}
    {showPopUp && <SweetAlert
      onClose={() => setShowPopUp(false)}
      api={`http://localhost:8080/user/contact/delete/${contactId}`}
      message='Are you sure to delete the Contact?'
      sendData={handleChildData}
    />}
  </>

  )
}

export default ContactsView