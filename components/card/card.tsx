"use client";
import React from "react";
import { profile } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import { githubIcon, instagramIcon, linkedinIcon } from "@/constants/icons";
import { PageProps } from "@/interfaces/views";
import { spanish, english } from "@/context/text";

const CustomCard: React.FC<PageProps> = ({ language }) => {
  return (
    <div className="rounded-[24px] flex flex-col h-full justify-between">
      <div>
        <div className="p-0 flex-col items-center">
          <Image
            alt="Profile picture"
            className="rounded-t-[24px]"
            src={profile}
            width={5472}
            height={3648}
            priority={true}
          />
        </div>
        <div className="py-4 px-2">
          <h4 className="font-bold text-large">Ignacio Rodríguez Rulas</h4>
          <p className="text-tiny font-bold">React Js & React Native</p>
          <small className="text-default-500">
            {language === "en"
              ? english.profile.description
              : spanish.profile.description}
          </small>
        </div>
      </div>
      <div className="flex px-2 mb-4">
        <Link href={"https://github.com/Ignaciofabian93"} target="_blank">
          <Image
            src={githubIcon.src}
            className="tint-color cursor-pointer mx-2"
            width={24}
            height={24}
            alt="Github"
          />
        </Link>
        <Link
          href={"https://www.instagram.com/ignaciofabian.r/"}
          target="_blank"
        >
          <Image
            className="cursor-pointer mx-2"
            src={instagramIcon}
            width={24}
            height={24}
            alt="Instagram"
          />
        </Link>
        <Link
          href={
            "https://www.linkedin.com/in/ignacio-rodr%C3%ADguez-rulas-9553b21a2/"
          }
          target="_blank"
        >
          <Image
            className="cursor-pointer mx-2"
            src={linkedinIcon}
            width={24}
            height={24}
            alt="LinkedIn"
          />
        </Link>
      </div>
    </div>
  );
};

export default CustomCard;
