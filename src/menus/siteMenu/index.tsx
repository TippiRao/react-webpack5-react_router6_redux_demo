import React, { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { menuList } from "../menuConfig";
const { SubMenu } = Menu;
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = any[][];

const SiteMenu = () => {
  const [current, setCurrent] = useState("home");
  //react-router v6 使用useNavigate() 代替 useNavigate()
  const navigate = useNavigate();

  const gotoRoute = (menu) => {
    navigate(menu.path);
    setCurrent(menu.key);
  };

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: any = [
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem(
        "Item 1",
        "g1",
        null,
        [getItem("Option 1", "1"), getItem("Option 2", "2")],
        "group"
      ),
      getItem(
        "Item 2",
        "g2",
        null,
        [getItem("Option 3", "3"), getItem("Option 4", "4")],
        "group"
      ),
    ]),

    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),

    { type: "divider" },

    getItem("Navigation Three", "sub4", <SettingOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),

    getItem(
      "Group",
      "grp",
      null,
      [getItem("Option 13", "13"), getItem("Option 14", "14")],
      "group"
    ),
  ];

  const renderMenu = (menus) => {
    return (
      <>
        {menus.map((menu) => {
          if (!menu.children) {
            return (
              <Menu.Item key={menu.key} onClick={gotoRoute.bind("", menu)}>
                {menu.name}
              </Menu.Item>
            );
          } else {
            return (
              <SubMenu key={menu.key} title={menu.name}>
                {renderMenu(menu.children)}
              </SubMenu>
            );
          }
        })}
      </>
    );
  };
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    // <Menu mode="vertical" selectedKeys={[current]}>
    //   {renderMenu(menuList)}
    // </Menu>

    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default SiteMenu;
