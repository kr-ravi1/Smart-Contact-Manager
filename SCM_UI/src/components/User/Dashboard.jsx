import React, { useState, useEffect } from 'react'

function Dashboard() {

  const [recentContacts, setRecentContacts] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("UserData"));

    if (user != null) {
      setId(user.userId);

      const fetchRecentContacts = async () => {
        try {
          const response = await fetch(`http://localhost:8080/user/contact/recent_contacts?id=${user.userId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setRecentContacts(data);
          } else {
            console.error("Error fetching recent contacts: ", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching recent contacts", error);
        }
      };

      fetchRecentContacts();
    }
  }, [id]);

  return (
    <div className='flex flex-col min-h-[80vh]'>
      <div id="heading" className=' flex justify-center items-center mt-5 mb-5'>
        <p className='text-5xl font-semibold'>Dashboard</p>
      </div>
      <div id='contents-1' className='flex flex-col lg:flex-row'>
        <div className='border-sky-500 border shadow-lg h-[21rem] p-10 rounded-lg'>
          <div className='flex justify-center items-center rounded-lg font-semibold'>Recently Added Contacts</div>
          <div>
            {recentContacts.length === 0 ? (
              <p className='mt-12'>No recent contacts found</p>
            ) : (
              recentContacts.map(item => (
                <div key={item.id} className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="flex items-center justify-start">
                    <img className="w-10 h-10 rounded-full" src={item.picture} alt={item.name} />
                    <div className="ps-3">
                      <div className="text-base font-semibold">{item.name}</div>
                      <div className="font-normal text-gray-500">{item.email}</div>
                    </div>
                  </div>
                </div>
              )))}
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard