"use client";

import Image from "next/image";
import { useState } from "react";
import { ResumeInterface } from "@/interfaces/ResumeInterface";
import NoContent from "@/shared/NoContent";

const page: React.FC = () => {
  const [resumes, setResumes] = useState<ResumeInterface[]>([]);

  return (
    <section>
      <h1 className="text-3xl font-semibold md:text-3xl">Build Your Resume</h1>

      {/* DYNAMICALLY RENDERING THE RESUMES */}
      <div className="mt-2">
        {resumes.length > 0 ? (
          <div className="grid space-y-5 align-middle md:grid-cols-2 lg:grid-cols-3">
            {resumes.map((resume) => {
              return (
                <div
                  className="flex flex-col items-center rounded-xl border-2 border-gray-300 bg-gray-300/50 px-4 md:w-[50vh]"
                  key={resume?.createdOn}
                >
                  <Image
                    alt={resume?.resumeName}
                    width={0}
                    height={0}
                    className="w-full"
                    src={resume?.coverImage}
                  />
                  <h2 className="text-md pb-2 text-center font-medium">
                    {resume?.resumeName}
                  </h2>
                </div>
              );
            })}
          </div>
        ) : (
          <NoContent textContent={"Add Your First Resume"} />
        )}
      </div>
    </section>
  );
};

export default page;
