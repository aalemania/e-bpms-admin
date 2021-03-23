import React from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body min-vh-100">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
