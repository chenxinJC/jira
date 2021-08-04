import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import { SearchPanel } from "./search-panel";
import { List } from "./list";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreens = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const query = qs.stringify(
      Object.keys(param)
        .filter((key) => param[key])
        .reduce((obj, key) => {
          if (key === "name") {
            obj[key + "_like"] = param[key];
          } else {
            obj[key] = param[key];
          }
          return obj;
        }, {})
    );
    axios.get(`${apiUrl}/projects?${query}`).then((response) => {
      if (response.status === 200) {
        setList(response.data);
      }
    });
  }, [param]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
