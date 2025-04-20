import React, { useEffect, useState } from 'react';

const About = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>

        {loading ? (
          <p className="text-gray-500">Loading users...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-400">{user.company.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;