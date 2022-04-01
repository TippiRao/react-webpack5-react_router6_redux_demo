export const menuList = [
  {
    key: "home",
    path: "/",
    name: "首页",
  },
  {
    key: "menu1",
    path: "/menu1",
    name: "菜单1",
    children: [
      {
        key: "childrenMenu1",
        path: "/menu1/childrenMenu1",
        name: "子菜单1",
      },
      {
        key: "childrenMenu2",
        path: "/menu1/childrenMenu2",
        name: "子菜单2",
      },
    ],
  },
];
