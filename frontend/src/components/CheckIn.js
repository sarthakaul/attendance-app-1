import React from 'react';
import axios from 'axios';

const CheckIn = () => {
  const checkIn = async () => {
    const token = localStorage.getItem('token');

    try {
      const res = await axios.post('http://localhost:5000/api/attendance/checkin', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(res.data);
      alert('Check-in successful');
    } catch (err) {
      console.error(err.response.data);
      alert('Check-in failed');
    }
  };

  return (
    <div>
      <h1>Check-In</h1>
      <button onClick={checkIn}>Check-In</button>
    </div>
  );
};

export default CheckIn;
