import React from "react";
import Header from "./Header";
export const Layout = ({ children }) => {
  return (
    <>
      <div className='block'>
        <Header />
        <div className='w-full '>{children}</div>
      </div>
    </>
  );
};
