import React from "react";
import "./AppointmentSection.css";
import ap_img from "../../images/admin_images/appointment_admin_img.png";
import { useNavigate } from "react-router-dom";
function AppointmentSection() {
  const navigate = useNavigate();
  const ref = () => {
    navigate("/dental-clinic/user/profile");
  };
  return (
    <>
      <div className="appointment_section_container">
        <button className="ap_lower_container" onClick={ref}>
          <div className="button_items">
            <img src={ap_img} alt="" />
            <h3>Appointment Section</h3>
          </div>
        </button>
      </div>
    </>
  );
}

export default AppointmentSection;
