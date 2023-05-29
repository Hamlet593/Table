// import { getPosts } from './api/axios'
// import { useState, useEffect } from 'react'
// import SearchBar from './SearchBar'
// import ListPage from './ListPage'

// function App() {
//   const [posts, setPosts] = useState([])
//   const [searchResults, setSearchResults] = useState([])

//   useEffect(() => {
//     getPosts().then(json => {
//       setPosts(json)
//       setSearchResults(json)
//     })
//   }, [])



//   return (
//     <>
//       <SearchBar posts={posts} setSearchResults={setSearchResults} />
//       <ListPage searchResults={searchResults} />
//     </>
//   )
// }

// export default App;

import { useEffect, useState } from "react";
import UserData from "./components/UserData.js";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      if (res.data.length > 0) {
        const newData = [];
        res.data.forEach(item => {
          newData.push({ id: item.id, name: item.name, description: item.company.bs.slice(0, 10) })
        })
        setUsers(newData)
      };
    } catch (e) {
      alert('False fetch data')
    }
  }

  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/users');
  }, [])

  return <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={users} setUsers={setUsers} />
      </tbody>
    </table>
  </>
}

export default App;

