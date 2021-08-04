/*
 * @description: 公共方法库
 * @Author: chenxin
 * @Date: 2021-08-04 20:32:40
 * @LastEditors: chenxin
 * @LastEditTime: 2021-08-04 23:23:23
 */

import { useState, useEffect } from "react";

// 判断是false-假
export const isFalsy = (value) => (value === 0 ? false : !value);

// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object) => {
  return Object.keys(object)
    .filter((key) => !isFalsy(object[key]))
    .reduce((obj, i) => {
      obj[i] = object[i];
      return obj;
    }, {});
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

/* const debounce = (func, delay = 500) => {
  let timeout;
  return (...parma) => {
    if (timerout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(function() {
      func(...parma);
    }, delay)
  }
} */

export const useDebounce = (value, delay = 500) => {
  // 每次在value变化以后，设置一个定时器
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完以后在运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
