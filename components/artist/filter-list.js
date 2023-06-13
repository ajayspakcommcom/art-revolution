import { useState } from "react";


const FilterList = (props) => {

    const [id, setId] = useState('');

    const filterHandler = (obj) => {
        props.onFilter(obj);
        setId(obj.id)
    };

    const changeGridHandler = (event) => {
        props.onChangeGridHandler(event.target.value);
    };

    return (
        <div className='filter-wrapper'>
            <ul className="list-group list-group-horizontal inline-category">
                <li className={`list-group-item ${'' == id ? 'active' : ''}`} onClick={(e) => { filterHandler({ id: '', name: 'all' }) }}>All</li>
                {props.filterData.map((item, indx, arr) => <li className={`list-group-item ${item.id == id ? 'active' : ''}`} key={item.id} onClick={(e) => { filterHandler(item) }}>{item.name.toUpperCase()}</li>)}
            </ul>
            <form className="grid-selection">
                <select className="form-select" onChange={changeGridHandler}>
                    <option value={'list'}>List</option>
                    <option value={'grid'}>Grid</option>
                </select>
            </form>
        </div>
    );
}

export default FilterList;
