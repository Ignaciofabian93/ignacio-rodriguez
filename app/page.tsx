import React from "react";
import Profile from "@/components/layouts/profile";
import Content from "../components/layouts/content";
import CustomSwitch from "@/components/switch/switch";

const page = () => {
  return (
    <main className="w-screen h-screen background-gradient overflow-hidden">
      <div className="pl-4 pt-4">
        <CustomSwitch />
      </div>
      <section className="w-11/12 h-[90%] flex justify-between m-auto">
        <div className="w-1/4 px-6 py-16">
          <Profile />
        </div>
        <div className="w-3/4 px-6 py-6">
          <Content />
        </div>
      </section>
    </main>
  );
};

export default page;
