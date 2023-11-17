"use client";
import React from "react";
import CustomCard from "../card/card";
import { useLanguage } from "@/context/language";

const Profile = () => {
  const { language } = useLanguage();
  return (
    <aside className="w-full h-full max-h-[420px] rounded-[24px] shadow-lg shadow-secondary/30">
      <div className="bg-background w-full h-full max-h-[420px] rounded-[24px]">
        <CustomCard language={language} />
      </div>
    </aside>
  );
};

export default Profile;
