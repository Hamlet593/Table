import { useEffect, useState } from "react";
import SearchBar from './SearchBar'
import ListPage from './ListPage'
import axios from "axios";

const App = () => {

  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      if (res.data.length > 0) {
        const newData = [];
        res.data.forEach(item => {
          newData.push({ id: item.id, name: item.name, description: item.company.bs.slice(0, 10) })
        })
        setPosts(newData)
      };
    } catch (e) {
      alert('False fetch data')
    }
  }

  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/users');
  }, [])

  return <>
    {/* <SearchBar posts={posts} setSearchResults={setSearchResults} /> */}
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
        <ListPage posts={posts} searchResults={searchResults} setSearchResults={setSearchResults} />
      </tbody>
    </table>
  </>
}

export default App;

