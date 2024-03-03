import { auth } from "@clerk/nextjs";
import React from "react";

const Test = async () => {
  const { sessionClaims } = await auth();
  const data = sessionClaims;
  return <div>{JSON.stringify(data)}</div>;
};

export default Test;
