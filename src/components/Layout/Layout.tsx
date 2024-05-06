import React, { PropsWithChildren } from "react";
import "../../components/Layout/Layout.css";

interface Props {
  sideElement: React.ReactNode;
}

const Layout: React.FC<Props & PropsWithChildren> = ({
  sideElement,
  children,
}) => {
  return (
    <div className="layout-container">
      <div className="view-container">{sideElement}</div>
      <div className="outlet-container">{children}</div>
    </div>
  );
};

export default Layout;
