"use client";
import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      alt="Avatar"
      className="rounded-full"
      height="30"
      width="30"
      src="/images/user.png"
    />
  );
};

export default Avatar;
