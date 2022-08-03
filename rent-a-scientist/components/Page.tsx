import React, { FC } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Page: FC = ({ children }) => {
  return (
    <>
      <div className="flex flex-col max-w-screen-xl mx-auto text-rsa-blue">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
};
