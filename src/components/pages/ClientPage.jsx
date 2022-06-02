import React, { useState } from "react";

import ClientAppointments from "./ClientAppointments";

export default function ClientPage() {
  return (
    <div className="mainBox">
      <div className="topBox">
        <h2>Welcome To Barber Shop</h2>
      </div>
      <div className="MidBox">
        <h2>Upcoming Meetings</h2>
        <ClientAppointments />
      </div>
      <div className="buttom">
        <button type="button" class="block">
          Made an appointment
        </button>
      </div>
    </div>
  );
}
