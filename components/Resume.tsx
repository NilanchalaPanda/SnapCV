"use client";

import { ResumeInterface } from "@/interfaces/ResumeInterface";
import Image from "next/image";
import React, { useState } from "react";

const Resume: React.FC = () => {
  const [resumes, setResumes] = useState<ResumeInterface[]>([]);
  // Create a demo resume template with keys as 'resumeName', 'coverImage', 'lastUpdatedOn, 'createdOn'.
  // const resumes = [
  //   {
  //     resumeName: "John Doe - Software Engineer",
  //     coverImage:
  //       "https://www.jobhero.com/resources/wp-content/uploads/2024/07/executive_chronological_free_example_resume_JH.svg",
  //     lastUpdatedOn: "2024-10-01",
  //     createdOn: "2023-09-15",
  //   },
  //   {
  //     resumeName: "Jane Smith - Data Scientist",
  //     coverImage:
  //       "https://www.jobhero.com/resources/wp-content/uploads/2024/07/executive_chronological_free_example_resume_JH.svg",
  //     lastUpdatedOn: "2024-09-28",
  //     createdOn: "2023-08-10",
  //   },
  //   {
  //     resumeName: "Emily Johnson - Graphic Designer",
  //     coverImage:
  //       "https://www.jobhero.com/resources/wp-content/uploads/2024/07/executive_chronological_free_example_resume_JH.svg",
  //     lastUpdatedOn: "2024-10-05",
  //     createdOn: "2023-07-20",
  //   },
  //   {
  //     resumeName: "Jane Smith - Data Scientist",
  //     coverImage:
  //       "https://www.jobhero.com/resources/wp-content/uploads/2024/07/executive_chronological_free_example_resume_JH.svg",
  //     lastUpdatedOn: "2024-09-28",
  //     createdOn: "2023-08-30",
  //   },
  //   {
  //     resumeName: "Emily Johnson - Graphic Designer",
  //     coverImage:
  //       "https://www.jobhero.com/resources/wp-content/uploads/2024/07/executive_chronological_free_example_resume_JH.svg",
  //     lastUpdatedOn: "2024-10-05",
  //     createdOn: "2023-11-20",
  //   },
  // ];
  // setResumes(resumeslist);

  return (
    <section>
      <h1 className="text-3xl font-semibold md:text-3xl">Build Your Resume</h1>

      {/* DYNAMICALLY RENDERING THE RESUMES */}
      <div className="mt-2">
        {resumes.length > 0 ? (
          <div className="grid space-y-5 md:grid-cols-3 md:space-y-10">
            {resumes.map((resume) => {
              return (
                <div
                  className="bg-gray-300/50 p-2 md:w-[50vh]"
                  key={resume?.createdOn}
                >
                  <Image
                    alt={resume?.resumeName}
                    width={0}
                    height={0}
                    className="w-full"
                    src={resume?.coverImage}
                  />
                  <div>
                    <h2 className="text-md text-center font-medium">
                      {resume?.resumeName}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="max-w-full rounded-lg border border-dotted bg-gray-100 md:h-[40vh]">
            No resumes found.
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
