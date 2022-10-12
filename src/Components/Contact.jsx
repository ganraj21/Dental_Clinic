import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="google_map_location">
        <h2>Contact us</h2>
        <div className="gmap">
          <iframe
            title="gmap_location"
            class="gmap_iframe"
            width="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=plot no 178, Om Dental Clinic, Ulwe, Shop- C13, Sai Sapphire, 180, Sector 20, Ulwe, Maharashtra 410206, India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
