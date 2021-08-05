import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import { cleanObject, useMount, useDebounce } from "utils";
import { _like } from "utils/jsonServerPrams";
import { SearchPanel } from "./search-panel";
import { List } from "./list";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreens = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 200);
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const query = qs.stringify(_like(cleanObject(debounceParam), "name"));
    axios.get(`${apiUrl}/projects?${query}`).then((response) => {
      if (response.status === 200) {
        setList(response.data);
      }
    });
  }, [debounceParam]);
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
