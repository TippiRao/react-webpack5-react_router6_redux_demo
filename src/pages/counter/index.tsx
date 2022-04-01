import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { decrement, increment } from "../../stores/slice/counterSlice";

import { Button } from "antd";
import styles from "./index.less";
// import "./index.less";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementClick = () => {
    dispatch(increment());
  };

  const decrementClick = () => {
    dispatch(decrement());
  };

  return (
    <div className={styles.homeWrapper}>
      <Button onClick={incrementClick} type={"primary"} icon={<PlusOutlined />}>
        新增
      </Button>
      <Button onClick={decrementClick} icon={<MinusOutlined />}>
        减少
      </Button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
