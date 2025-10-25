"use client";
import React from "react";

const RetryBtn = () => {
  return (
    <button
      onClick={() => window.location.reload()}
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Retry
    </button>
  );
};

export default RetryBtn;
