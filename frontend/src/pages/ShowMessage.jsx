import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To access route parameters
import axios from 'axios'; // To make the API call
import { message } from 'antd';

const WishPage = () => {
  const { userId } = useParams(); // Get userId from the URL
  const [wishMessage, setWishMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch the wish message for the given userId
  useEffect(() => {
    const fetchWishMessage = async () => {
      try {
        const response = await axios.get(`http://3.90.114.192:5000/api/message/${userId}`);
        
        // If the API call is successful and wish message exists
        if (response.data) {
          setWishMessage(response.data.msg); // Set the fetched wish message
          setError(''); // Clear any previous errors
        } else {
          setWishMessage(''); // Clear wish message
          setError('Sorry, no wish available for this User ID.');
        }
      } catch (err) {
        setWishMessage(''); // Clear wish message
        setError('An error occurred. Please try again later.');
      }
    };

    if (userId) {
      fetchWishMessage();
    } else {
      setError('Invalid User ID');
    }
  }, [userId]); // Re-run the effect whenever userId changes

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white">
      <div className="bg-white text-gray-800 p-8 shadow-2xl rounded-lg w-full max-w-md">
        {/* Display the wish message */}
        {wishMessage && (
          <div className="mt-8 p-4 text-center bg-green-100 text-green-800 rounded-md shadow-md">
            <h2 className="text-xl font-bold capitalize">{wishMessage}</h2>
          </div>
        )}
        {/* Display the error message */}
        {error && (
          <div className="mt-8 p-4 text-center bg-red-100 text-red-800 rounded-md shadow-md">
            <p className="text-lg font-medium">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishPage;
