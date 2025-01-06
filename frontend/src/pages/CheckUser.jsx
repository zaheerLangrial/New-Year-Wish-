import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import axios from 'axios';
import { Input, Button, message } from 'antd';

const CheckUser = () => {
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  // Fetch the wish message from the server
  const fetchMessage = async () => {
    // Check if userId is empty, show error and return
    if (!userId.trim()) {
      setError('Please enter a valid User ID.');
      return;
    }

    try {
      const response = await axios.get(`http://3.90.114.192:5000/api/message/${userId}`);
      
      // Check if the response indicates that the user has a wish
      if (response.data) {
        setError(''); // Clear any previous errors
          navigate(`wish/${userId}`, { state: { wishMessage: '🎉 Happy New Year! 🎉', userId } });
      } else {
        setError('Sorry, no wish available for this User ID.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white">
      <div className="bg-white text-gray-800 p-8 shadow-2xl rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Enter ID</h1>

        {/* 🎁 Check Your New Year Wish */}

        {/* Input Field */}
        <Input
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="mb-4"
          size="large"
        />

        {/* Error message display */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Button to trigger fetchMessage */}
        <Button
          type="primary"
          block
          onClick={fetchMessage}
          className="bg-blue-600 hover:bg-blue-700 text-lg h-12 rounded-md"
        >
          Show Wish
        </Button>
      </div>
    </div>
  );
};

export default CheckUser;
