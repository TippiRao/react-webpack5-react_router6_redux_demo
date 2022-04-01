import React, { lazy } from "react";

const config = [
  {
    path: "/login",
    component: lazy(() => import("../pages/login")),
  },
  {
    path: "/",
    component: lazy(() => import("../layouts/basicLayout")),
    children: [
      {
        path: "/",
        name: "首页",
        component: lazy(() => import("../pages/counter")),
      },
      {
        path: "/menu1",
        name: "菜单1",
        component: lazy(() => import("../layouts/blankLayout")),
        // component: lazy(() => {return <Outlet />}),
        children: [
          {
            path: "/menu1/childrenMenu1",
            name: "子菜单1",
            component: lazy(() => import("../pages/subpage/subpage1")),
          },
        ],
      },
      {
        path: "*", //优先级最低
        name: "",
        component: lazy(() => import("../pages/404")),
      },
    ],
  },
];

export default config;
