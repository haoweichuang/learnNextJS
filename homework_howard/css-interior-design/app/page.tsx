import Image from "next/image";
import Sidebar from "./compoments/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <section className="">
        <Sidebar />
      </section>

      {/* <section className="mainContent flex justify-center"> */}
      <section className="flex size-full flex-col">
        <div className="flex flex-col items-center">
          <div className="">
            <h1 className="text-left">Interior Design</h1>
          </div>

          <section className="">
            <h2 className="text-[48px] text-col-1">Showcase.</h2>
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="/public/bedroom.jpeg"
                width={498}
                height={277}
                alt="bedroom"
              />
              <Image
                src="/public/diningroom.jpeg"
                width={498}
                height={277}
                alt="diningroom"
              />
              <Image
                src="/public/livingroom.jpeg"
                width={498}
                height={277}
                alt="livingroom"
              />
              <Image
                src="/public/livingroom2.jpeg"
                width={498}
                height={277}
                alt="livingroom2"
              />
            </div>
          </section>

          <section id="services" className="">
            <h2 className="text-[48px] text-col-1">Services.</h2>
            <div>
              We are a interior design service that focus on what's best for
              your home and what's best for you!
              <div />
              <div>
                Some text about our services - what we do and what we offer. We
                are lorem ipsum consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </div>
            </div>
          </section>

          <section id="contact" className="w-full">
            <h2 className="text-[48px] text-col-1">Contact.</h2>
            <div className="contact-form flex flex-col gap-2 text-xs">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="w-1/6">Name</div>
                <input
                  className="flex-grow border border-gray-300 p-2"
                  type="text"
                  name="name"
                  id=""
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="w-1/6">Email</div>
                <input
                  type="text"
                  className="flex-grow border border-gray-300 p-2"
                  name="email"
                  id=""
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="w-1/6">Message</div>
                <input
                  type="text"
                  className="flex-grow border border-gray-300 p-2"
                  name="message"
                  id=""
                />
              </div>
              <input
                type="button"
                value="Send Message"
                className="bg-red-1 p-2 text-white"
              />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
