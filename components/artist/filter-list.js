import { useState } from "react";


const FilterList = (props) => {

    const [id, setId] = useState('');

    const filterHandler = (obj) => {
        props.onFilter(obj);
        setId(obj.id)
    };

    return (
        <div className='mb-5'>
            <ul className="list-group list-group-horizontal">
                <li className={`list-group-item ${'' == id ? 'active' : ''}`} onClick={(e) => { filterHandler({ id: '', name: 'all' }) }}>All</li>
                {props.filterData.map((item, indx, arr) => <li className={`list-group-item ${item.id == id ? 'active' : ''}`} key={item.id} onClick={(e) => { filterHandler(item) }}>{item.name.toUpperCase()}</li>)}
            </ul>
        </div>
    );
}

export default FilterList;
