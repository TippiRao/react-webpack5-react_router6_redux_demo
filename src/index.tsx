import React from "react";
import ReactDom from "react-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import zhCN from "antd/es/locale/zh_CN";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "element-theme-default";
import App from "./app";
import store from "./stores/index";

const Index = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Provider>
  );
};

ReactDom.render(<Index />, document.getElementById("app") as HTMLElement);

// 热更新, 调用module.hot.accept接口
if (module && module.hot) {
  module.hot.accept();
}
