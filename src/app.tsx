import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import config from "./routers/config";

const App = () => {
  const renderRoutes = (routers) => {
    return (
      <>
        {routers.map((route) => {
          const Element = route.component;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                Element ? ( //判断组件是否为空，如果为空则返回 null
                  <Suspense fallback={<div>加载中...</div>}>
                    <Element />
                  </Suspense>
                ) : null
              }
            >
              {route.children ? renderRoutes(route.children) : null}
            </Route>
          );
        })}
      </>
    );
  };

  console.log("config==", renderRoutes(config));
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(config)}</Routes>
    </BrowserRouter>
  );
};

export default App;
