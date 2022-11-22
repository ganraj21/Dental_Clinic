import React, { useEffect, useState } from "react";
import "./UserProfile.css";
function UserProfile() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/dental-clinic/slot";
    // const url = "https://dental-service.onrender.com/dental-clinic/slot";

    const getDatas = async () => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const data = await response.json();
      setApiData(data);
      console.log(data);
    };
    getDatas();
  }, []);

  const data = [
    {
      name: "Anom",
      email: "abc@gmail.com",
      phone: "1221211212",
      date: "2022-11-27",
      time: "04:45 PM",
    },
    {
      name: "Anom",
      email: "abc@gmail.com",
      phone: "1221211212",
      date: "2022-11-29",
      time: "02:45 PM",
    },
    {
      name: "Anom",
      email: "abc@gmail.com",
      phone: "1221211212",
      date: "2022-11-26",
      time: "03:45 PM",
    },
  ];
  return (
    <div>
      <h2>This is your profile</h2>

      <div className="user_data_container">
        <table>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>phone</th>
            <th>Date</th>
            <th>Time</th>
          </tr>

          {apiData.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.date}</td>
                <td>{val.time}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default UserProfile;
