import React from "react";
import { FadeLoader } from "react-spinners";

export default function Loading() {
  return (
    <>
    <div className="w-full h-screen flex flex-col justify-center items-center">
    <FadeLoader loading={true} height={30} size={60} color="red" />
    Loading...
    </div>
    </>
  );
}