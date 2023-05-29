import { useEffect, useState } from "react";
import ListPage from "./ListPage";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchDescription, setSearchDescription] = useState("");

  const handleSearchChange = (e) => {
    if (e.target.name === "id") {
      setSearchId(e.target.value);
      const resultsArray = users.filter((user) => {
        return String(user.id).includes(e.target.value);
      });
      setSearchResult(resultsArray);
    } else if (e.target.name === "name") {
      setSearchName(e.target.value);
      const resultsArray = users.filter((user) => {
        return user.name.includes(e.target.value);
      });
      setSearchResult(resultsArray);
    } else if (e.target.name === "description") {
      setSearchDescription(e.target.value);
      const resultsArray = users.filter((user) => {
        return user.description.includes(e.target.value);
      });
      setSearchResult(resultsArray);
    }
  };

  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      if (res.data.length > 0) {
        const newData = [];
        res.data.forEach((item) => {
          newData.push({
            id: item.id,
            name: item.name,
            description: item.company.bs.slice(0, 10),
          });
        });
        setUsers(newData);
        setSearchResult(newData);
      }
    } catch (e) {
      alert("False fetch data");
    }
  };

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              ID
              <div>
                <input
                  type="text"
                  name="id"
                  value={searchId}
                  onChange={handleSearchChange}
                  placeholder={`Search by id`}
                />
              </div>
            </th>
            <th>
              Name
              <div>
                <input
                  type="text"
                  name="name"
                  value={searchName}
                  onChange={handleSearchChange}
                  placeholder={`Search by name`}
                />
              </div>
            </th>
            <th>
              Description
              <div>
                <input
                  type="text"
                  name="description"
                  value={searchDescription}
                  onChange={handleSearchChange}
                  placeholder={`Search by description`}
                />
              </div>
            </th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <ListPage
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            setUsers={setUsers}
          />
        </tbody>
      </table>
    </>
  );
};

export default App;
