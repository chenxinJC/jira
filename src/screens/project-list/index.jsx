import React, { useEffect, useState } from "react"
import axios from 'axios'
import { SearchPanel } from "./search-panel"
import { List } from "./list"

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreens = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(`${apiUrl}/projects`).then(async response => {
      if(response.status === 200) {
        setList(await response.data)
      }
    })
  }, [param])
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])
  return <div>
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List users={users} list={list} />
  </div>
}