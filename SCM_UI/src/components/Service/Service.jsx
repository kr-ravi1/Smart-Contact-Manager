import React from 'react'

function Service() {
  return (
    <div className='flex justify-center items-center min-h-[80vh] flex-col pb-10 pt-10'>
      <div>
        <p className='text-5xl font-semibold mb-10'>Services</p>
      </div>
      <div className='w-[50%] flex justify-center items-start'>
        <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400 border-l-2 pl-5">
          <li>
          Search Functionality
            <ul type='bullet' className="ps-5 mt-2 space-y-1 list-inside">
              <li>Quickly find contacts using an intuitive search feature. Whether you need to locate a contact by name, email, or phone number, the search function ensures you can find the information you need in an instant.</li>
            </ul>
          </li>
          <li>
          Pagination
            <ul type='bullet' className="ps-5 mt-2 space-y-1 list-inside">
              <li>Efficiently navigate through large lists of contacts with pagination. This feature divides your contact list into manageable sections, making it easier to browse and locate specific entries without being overwhelmed by a long list.
              </li>
            </ul>
          </li>
          <li>
          Create Contacts
            <ul type='bullet' className="ps-5 mt-2 space-y-1 list-inside">
              <li>Easily add new contacts to your list. The user-friendly interface allows you to input all necessary details, including name, email, phone number, and any additional information, ensuring your contact list is comprehensive and organized.</li>
            </ul>
          </li>
          <li>
          Read Contacts
            <ul type='bullet' className="ps-5 mt-2 space-y-1 list-inside">
              <li>View detailed information about each contact. With just a click, you can access all the stored details, ensuring you have all the information you need right at your fingertips.</li>
            </ul>
          </li>
          <li>
          Update Contacts
            <ul type='bullet' className="ps-5 mt-2 space-y-1 list-inside">
              <li>Keep your contact information current with the update feature. Effortlessly modify existing entries to reflect changes in contact details, ensuring your information is always accurate and up-to-date.
              </li>
            </ul>
          </li>
          <li>
          Delete Contacts
            <ul type='bullet' className="ps-5 mt-2 space-y-1 list-inside">
              <li>Maintain the relevance of your contact list by removing outdated or unnecessary entries. The delete function ensures that your contact manager remains clean and clutter-free, containing only the most important contacts.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Service