import React from 'react'
import { Link } from 'react-router-dom';

function ContactTable({data, setShowModal, setContactId, setShowPopUp}) {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-4">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center ml-[93px]">Name</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center justify-center">Phone Number</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center justify-center">LinkedIn</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center justify-center">Action</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <div onClick={() => { setShowModal(true); setContactId(item.id) }} className="flex items-center justify-start ml-10">
                  <img className="w-10 h-10 rounded-full" src={item.picture} alt={item.name} />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{item.name}</div>
                    <div className="font-normal text-gray-500">{item.email}</div>
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                <div className='flex items-center justify-center gap-2'>
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                  </svg>
                  <span>{item.phoneNumber}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center">
                  <a href={item.linkedInLink} target='blank'>
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </a>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-3">
                  {/* view */}
                  <div onClick={() => { setShowModal(true); setContactId(item.id) }} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {/* edit */}
                  <Link to={`/user/contact/update/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                    <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  {/* delete */}
                  <div onClick={() => { setShowPopUp(true); setContactId(item.id) }} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                    <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default ContactTable