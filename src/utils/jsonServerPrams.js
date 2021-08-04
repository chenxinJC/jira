/*
 * @description: 封装 json-server 接口操作
 * @Author: chenxin
 * @Date: 2021-08-04 22:39:01
 * @LastEditors: chenxin
 * @LastEditTime: 2021-08-04 22:46:23
 */

/**
 * @description: 模糊搜索字段
 * @param {object} object
 * @param {string} name
 * @return {object}
 */
export const _like = (object, name) => {
  return Object.keys(object).reduce((obj, key) => {
    if (key === name) {
      obj[key + "_like"] = object[key];
    } else {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};
