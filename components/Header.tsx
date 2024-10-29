"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { UserDetails } from "@/interfaces/UserDetailsInterface";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { DialogHeader } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const { register, handleSubmit } = useForm<UserDetails>();
  const onSubmit = (data: UserDetails) => {
    setUserDetails(data);
  };

  return (
    <section>
      <div>
        <h1 className="text-3xl font-semibold md:text-3xl">User Details</h1>

        <div className="flex flex-col items-center">
          <Dialog>
            <DialogTrigger>
              <button className="mt-4 flex items-center rounded-md border border-gray-400 bg-gray-400/50 p-2 hover:cursor-pointer">
                <PlusCircle className="mr-2 h-6 w-6 text-black/50" />
                <span>Add User Details</span>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add User Details</DialogTitle>
                <DialogDescription>
                  Please fill in the details below.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", { required: true })}
                />
                <Input
                  type="number"
                  placeholder="Phone Number"
                  {...register("phoneNo", { required: true })}
                />
                <Input
                  type="email"
                  placeholder="Email ID"
                  {...register("emailID", { required: true })}
                />
                <Input
                  type="text"
                  placeholder="GitHub Link"
                  {...register("githubLink")}
                />
                <Input
                  type="text"
                  placeholder="LinkedIn Link"
                  {...register("linkedInLink")}
                />
                <Input
                  type="text"
                  placeholder="Address"
                  {...register("address")}
                />
                <Button type="submit" className="w-full bg-blue-500 text-white">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center">
        {userDetails && (
          <div className="flex flex-col items-center rounded-xl border-2 border-gray-300 bg-gray-300/50 px-4 py-2">
            <h2 className="text-md font-medium">{userDetails.fullName}</h2>
            <p>{userDetails.phoneNo}</p>
            <p>{userDetails.emailID}</p>
            {userDetails.githubLink && <p>{userDetails.githubLink}</p>}
            {userDetails.linkedInLink && <p>{userDetails.linkedInLink}</p>}
            {userDetails.address && <p>{userDetails.address}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
