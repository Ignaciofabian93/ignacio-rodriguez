import React from "react";
import { PageProps } from "@/interfaces/views";
import { spanish, english } from "@/context/text";

const About: React.FC<PageProps> = ({ language }) => {
  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-semibold">
        {language === "en" ? english.about.title : spanish.about.title}
      </h2>
      <div>
        <div className="mt-6">
          <p className="italic mb-2 text-md">
            {language === "en"
              ? english.about.sections[0]
              : spanish.about.sections[0]}
          </p>
          <p className="text-sm">
            {language === "en"
              ? english.about.description
              : spanish.about.description}
          </p>
        </div>
        <div className="mt-6">
          <p className="italic mb-2 text-md">
            {language === "en"
              ? english.about.sections[1]
              : spanish.about.sections[1]}
          </p>
          <p className="text-sm">
            {language === "en"
              ? english.about.education[0]
              : spanish.about.education[0]}
          </p>
          <p className="text-sm">
            {language === "en"
              ? english.about.education[1]
              : spanish.about.education[1]}
          </p>
          <p className="text-sm">
            {language === "en"
              ? english.about.education[2]
              : spanish.about.education[2]}
          </p>
        </div>
        <div className="mt-6">
          <p className="italic mb-2 text-md">
            {language === "en"
              ? english.about.sections[2]
              : spanish.about.sections[2]}
          </p>
          <p className="text-sm">
            {language === "en"
              ? english.about.experience
              : spanish.about.experience}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
