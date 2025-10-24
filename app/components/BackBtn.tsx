"use client";
import React from "react";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button onClick={handleBackClick} className="btn btn-primary">
      Go Back
    </button>
  );
};

export default BackBtn;
