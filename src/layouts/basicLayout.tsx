import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "antd";
import styles from "./basicLayout.less";
import SiteMenu from "../menus/siteMenu";

const BasicLayout = (props) => {
  return (
    <div className={styles["basic-layout"]}>
      <aside className={styles["basic-layout-header"]}>
        <div className={styles["basic-layout-header-logo"]}>
          企业自主双控平台
        </div>
        <SiteMenu />
      </aside>
      <div className={styles["basic-layout-body"]}>
        <Outlet />
      </div>
      {/* <footer>copyright Tippi 2022</footer> */}
    </div>
  );
};

export default BasicLayout;
