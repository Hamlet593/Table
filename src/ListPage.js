
const ListPage = ({ posts, searchResults, setSearchResults }) => {

    const handleChange = e => {
        let { name, value, id } = e.target;
        if (name === 'id') value = +value;
        const newObj = JSON.parse(JSON.stringify(searchResults));
        newObj[id][name] = value;
        setSearchResults(newObj);
    };

    return posts.map((curUser, curIndex) => {
        const { id, name, description } = curUser;
        return (
            <tr key={curIndex}>
                <td>
                    <input type="number" name='id' id={curIndex} value={id} onChange={handleChange} />
                </td>
                <td>
                    <input type="text" name="name" id={curIndex} value={name} onChange={handleChange} />
                </td>
                <td>
                    <textarea name='description' id={curIndex} value={description} onChange={handleChange} />
                </td>
                <td>
                    <input type="date" name='date' id={curIndex} />
                </td>
                <td>
                    <input list="options" id={curIndex} placeholder="Choose one..." />
                    <datalist id="options" >
                        <option value="Active" />
                        <option value="Pernding" />
                        <option value="Cancelled" />
                    </datalist>
                </td>
            </tr>
        )
    });
}
export default ListPage;