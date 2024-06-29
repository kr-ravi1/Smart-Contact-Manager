import React, { useState, useEffect } from 'react';

function Home() {
  const [user, setUser] = useState(null); // Initialize user as null

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/api/home', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.text();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='bg-slate-300'>
      {user ? `Hello ${user}` : 'Loading...'}
    </div>
  );
}

export default Home;
