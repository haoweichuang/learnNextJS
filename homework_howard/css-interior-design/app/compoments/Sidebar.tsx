import React from "react";

export default function Sidebar() {
  return (
    <div className="sideBar w-[300px] bg-col-1">
      <div>DesignWorks</div>
      <section className="flex-col h-screen w-full gp-4">
        <div>Home</div>
        <div>Showcase</div>
        <div>Services</div>
        <div>Contact</div>
      </section>
    </div>
  );
}
