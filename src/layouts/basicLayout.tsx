import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "antd";
import SiteMenu from "../menus/siteMenu";

const BasicLayout = (props) => {
  return (
    <>
      <header>
        <SiteMenu />
      </header>

      <Outlet />
    </>
  );
};

export default BasicLayout;
