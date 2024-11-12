"use client";

import Image from "next/image";
import Sidebar from "./compoments/Sidebar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/lib/utils";
import CustomInput from "./compoments/CustomInput";
import { Button } from "@/components/ui/button";
import MobileNav from "./compoments/MobileNav";

export default function Home() {
  const formSchema = FormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div className="flex">
      <section className="hidden md:flex">
        <Sidebar />
      </section>

      <div>
        <div className="w-full md:hidden">
          <MobileNav />
        </div>

        <section id="mainContent" className="flex justify-center">
          <div className="m-8 md:m-16">
            <div className="w-full">
              <h1 className="text-left text-[68px] font-bold">
                Interior Design
              </h1>
            </div>

            <section id="showCase" className="mb-12">
              <h2 className="text-[48px] text-col-1">Showcase.</h2>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <Image
                  src="/bedroom.jpeg"
                  width={498}
                  height={277}
                  alt="bedroom"
                />
                <Image
                  src="/diningroom.jpeg"
                  width={498}
                  height={277}
                  alt="diningroom"
                />
                <Image
                  src="/livingroom.jpeg"
                  width={498}
                  height={277}
                  alt="livingroom"
                />
                <Image
                  src="/livingroom2.jpeg"
                  width={498}
                  height={277}
                  alt="livingroom2"
                />
              </div>
            </section>

            <section id="services" className="mx-auto mb-12">
              <h2 className="text-[48px] text-col-1">Services.</h2>
              <div className="text-[16px]">
                <p>
                  We are a interior design service that focus on what's best for
                  your home and what's best for you!
                  <br />
                  <br />
                  Some text about our services - what we do and what we offer.
                  We are lorem ipsum consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </section>

            <section id="contact" className="w-full">
              <h2 className="text-[48px] text-col-1">Contact.</h2>
              <div className="mb-3">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2"
                  >
                    <CustomInput
                      control={form.control}
                      name="name"
                      label="Name"
                    />
                    <CustomInput
                      control={form.control}
                      name="email"
                      label="Email"
                    />
                    <CustomInput
                      control={form.control}
                      name="message"
                      label="Message"
                    />
                  </form>
                </Form>
              </div>

              <Button type="submit" className="bg-col-1 text-white p-3 w-full">
                Send Message
              </Button>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
