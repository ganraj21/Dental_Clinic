import React, { useEffect, useState } from 'react';
import './UserProfile.css';
function UserProfile() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // const url = "http://localhost:5000/dental-clinic/user/profile";
    const url =
      'https://dental-service.onrender.com/dental-clinic/user/profile';

    const getDatas = async () => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      const data = await response.json();
      setApiData(data);
      console.log(data);
    };
    getDatas();
  }, []);

  return (
    <>
      <div className="profile_section">
        <div className="user_data_container">
          {apiData.map((val, key) => {
            return (
              <div key={key} className="data_values" data-aos="fade-right">
                <p>
                  <span className="your_name">Name : </span>
                  {val.name}
                </p>
                <p>
                  <span className="your_email">Email : </span>
                  {val.email}
                </p>
                <p>
                  <span className="your_phone">Phone : </span>
                  {val.phone}
                </p>
                <p>
                  <span className="your_date">Date : </span>
                  {val.date}
                </p>
                <p>
                  <span className="your_time">Time : </span>
                  {val.time}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
