import React, { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { menuList } from "../menuConfig";
const { SubMenu } = Menu;

const SiteMenu = () => {
  const [current, setCurrent] = useState("home");
  //react-router v6 使用useNavigate() 代替 useNavigate()
  const navigate = useNavigate();

  const gotoRoute = (menu) => {
    navigate(menu.path);
    setCurrent(menu.key);
  };

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
  return (
    <Menu mode="horizontal" selectedKeys={[current]}>
      {renderMenu(menuList)}
    </Menu>
  );
};

export default SiteMenu;
