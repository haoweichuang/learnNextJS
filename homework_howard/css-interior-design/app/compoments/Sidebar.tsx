import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <section id="sideBar" className="flex w-[300px] bg-col-1">
      <div className="ml-8 mt-24">
        <div className="text-[24px] mb-5 font-bold">DesignWorks</div>
        <section className="flex flex-col h-screen w-full gap-4 text-[18px] mt-24">
          <Link href="#mainContent">Home</Link>
          <Link href="#showCase">Showcase</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </section>
      </div>
    </section>
  );
}
