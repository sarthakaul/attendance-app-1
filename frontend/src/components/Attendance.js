import React, { useState } from 'react';
import axios from 'axios';

function Attendance() {
  const [message, setMessage] = useState('');

  const handleCheckIn = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'http://localhost:5000/api/checkin',
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Check-in failed');
    }
  };

  return (
    <div>
      <h2>Attendance</h2>
      <button onClick={handleCheckIn}>Check In</button>
      <p>{message}</p>
    </div>
  );
}

export default Attendance;
