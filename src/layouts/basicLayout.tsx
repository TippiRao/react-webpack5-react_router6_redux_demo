import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "antd";
import styles from "./basicLayout.less";
import SiteMenu from "../menus/siteMenu";

const BasicLayout = (props) => {
  return (
    <>
      <header className={styles.layoutHeader}>
        <SiteMenu />
      </header>
      <div className={styles.layoutBody}>
        <Outlet />
      </div>
      <footer>copyright Tippi 2022</footer>
    </>
  );
};

export default BasicLayout;
