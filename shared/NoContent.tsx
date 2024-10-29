import { NoContentProps } from "@/interfaces/NoContentInterface";
import { PlusCircle } from "lucide-react";
import React from "react";

const NoContent: React.FC<NoContentProps> = ({ textContent }) => {
  return (
    <div className="flex max-w-full flex-col items-center justify-center rounded-[14px] border-2 border-dotted border-gray-300 bg-gray-100 p-4 text-center md:h-[40vh]">
      <div className="my-4 flex items-center rounded-xl border-2 border-gray-400 bg-gray-400/50 p-3 hover:cursor-pointer">
        <PlusCircle className="mr-2 h-8 w-8 text-black/50" />{" "}
        <span className="text-lg font-medium text-gray-700">{textContent}</span>
      </div>
    </div>
  );
};

export default NoContent;
