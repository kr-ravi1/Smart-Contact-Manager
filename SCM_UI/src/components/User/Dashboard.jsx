import React, { useState, useEffect } from 'react'
import Alert from '../Alerts/Alert';
import DashboardContactsDisplay from '../Utils/DashboardContactsDisplay';


function Dashboard() {

  const [recentContacts, setRecentContacts] = useState();
  const [favContacts, setFavContacts] = useState();
  const [type, setType] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("UserData"));

    if (user != null) {

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


      const fetchFavContacts = async () => {
        try {
          const response = await fetch(`http://localhost:8080/user/contact/view/fav?id=${user.userId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setFavContacts(data);
          } else {
            console.error("Error fetching fav contacts: ", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching fav contacts", error);
        }
      }

      fetchFavContacts();
    }
  }, [type]);

  const handleChildData = (res) => {
    setType(res.type);
    setMessage(res.message);
    setTimeout(() => {
      setType(null);
    }, 3000)
  }

  return (
    <>
      {type != null && <Alert type={type} message={message} />}
      <div className='flex flex-col'>
        <div id="heading" className=' flex justify-center items-center mt-5'>
          <p className='text-5xl font-semibold'>Dashboard</p>
        </div>
        <DashboardContactsDisplay heading={"Recently Added Contacts"} data={recentContacts} sendData={handleChildData} />
        <DashboardContactsDisplay heading={"Favourite Contacts"} data={favContacts} sendData={handleChildData} />
      </div>

    </>
  )
}

export default Dashboard