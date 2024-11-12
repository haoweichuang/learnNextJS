"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

const MobileNav = () => {
  return (
    <section id="MobileNav" className="bg-col-1">
      <Sheet>
        <SheetTrigger className="flex items-center font-bold text-[24px]">
          <Image
            src="/icons/hamburger.svg"
            width="50"
            height="50"
            alt="menu"
            className="cursor-pointer m-6 h-6"
          />
          DesignWorks
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-col-1">
          <SheetClose asChild>
            <section id="sideBar" className="flex w-[300px]">
              <div className="ml-6 mt-16">
                <div className="text-[24px] mb-5 font-bold">DesignWorks</div>
                <section className="flex flex-col h-screen w-full gap-4 text-[18px] mt-24">
                  <Link href="#mainContent">Home</Link>
                  <Link href="#showCase">Showcase</Link>
                  <Link href="#services">Services</Link>
                  <Link href="#contact">Contact</Link>
                </section>
              </div>
            </section>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
