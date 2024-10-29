import Link from "next/link";

const page = () => {
  return (
    <div className="text-4xl text-center">
      Go to <Link href={"resumes"} className="underline">Section</Link>
    </div>
  );
};

export default page;
