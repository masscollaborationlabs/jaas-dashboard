import React from "react";
import { useSelector } from "react-redux";
import PrimaryNav from "components/PrimaryNav/PrimaryNav";
import classNames from "classnames";
import useHover from "hooks/useHover";

import { isSidebarCollapsible } from "app/selectors";

import "./_layout.scss";

const Layout = ({ children }) => {
  const [sidebarRef, isSidebarHovered] = useHover();
  const sidebarCollapsible = useSelector(isSidebarCollapsible);
  return (
    <div
      className={classNames("l-container", {
        "is-collapsible": sidebarCollapsible && !isSidebarHovered
      })}
    >
      <div className="l-side" ref={sidebarRef}>
        <PrimaryNav />
      </div>
      <div className="l-main">
        <main id="main-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
