import React from "react";
import Header from "./header";
import Footer from "./footer";
import AppointmentDetails from "./appointment_details";

function Appointment() {
  return (
    <React.Fragment>
      <Header />
      <AppointmentDetails />

      <Footer />
    </React.Fragment>
  );
}

export default Appointment;
