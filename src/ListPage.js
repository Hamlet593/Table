const ListPage = ({ searchResult, setSearchResult, setUsers }) => {
  const handleChange = (e) => {
    let { name, value, id } = e.target;
    if (name === "id") value = +value;
    const newObj = JSON.parse(JSON.stringify(searchResult));
    newObj[id][name] = value;
    setSearchResult(newObj);
    setUsers(newObj);
  };

  return searchResult.map((curUser, curIndex) => {
    const { id, name, description } = curUser;
    return (
      <tr key={curIndex}>
        <td>
          <div>
            <input
              type="number"
              name="id"
              id={curIndex}
              value={id}
              onChange={handleChange}
            />
          </div>
        </td>
        <td>
          <div>
            <input
              type="text"
              name="name"
              id={curIndex}
              value={name}
              onChange={handleChange}
            />
          </div>
        </td>
        <td>
          <textarea
            name="description"
            id={curIndex}
            value={description}
            onChange={handleChange}
          />
        </td>
        <td>
          <input type="date" name="date" id={curIndex} />
        </td>
        <td>
          <input list="options" id={curIndex} placeholder="Choose one..." />
          <datalist id="options">
            <option value="Active" />
            <option value="Pernding" />
            <option value="Cancelled" />
          </datalist>
        </td>
      </tr>
    );
  });
};
export default ListPage;
