import React from "react";
import profile_one_img from "./images/Profile_images/single-team-1-286x286.jpg";
import profile_two_img from "./images/Profile_images/single-team-2-286x286.jpg";

const Profile = () => {
  const your_profile_details = [
    {
      id: 1,
      photo: profile_one_img,
      name: "Dr.Rahul Achare",
      occupation: "Dentist",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 2,
      photo: profile_two_img,
      name: "Dr.Komal Achare",
      occupation: "Dentist",
      description:
        "Leslie is one of the most experienced dental hygienists in the whole Potter county, PA. She works at our dental clinic since day 1. No",
    },
  ];
  return (
    <>
      <div className="profile_section_container">
        <h2>Meet Our Teem</h2>
        {your_profile_details.map((e, index) => (
          <div className="profile_detaila" key={index}>
            <img src={e.photo} alt="profile_image" id="your_profile_image" />
            <h3 className="profile_name">{e.name}</h3>
            <h4 className="profile_occupation">{e.occupation}</h4>
            <p className="profile_description">{e.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;