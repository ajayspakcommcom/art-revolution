import { useState, useEffect } from 'react';

import { getAllArtists } from '../../data/artist';
import { getAllCharacters } from '../../data/characters';
import Carousel from '../owl-carousel/carousel';
import FilterList from './filter-list';
import ArtistItem from './item';


const ArtistList = (props) => {

    const artistData = getAllArtists();
    const characterData = getAllCharacters();
    const [counter, setCounter] = useState(0);

    const [artistList, setArtistList] = useState([]);
    const [char, setChar] = useState('all');

    const filterHandler = (obj) => {
        setChar(obj.name)
        setCounter((prevState) => {
            return prevState + 1;
        });
    };

    useEffect(() => {

        setArtistList((prevState) => {
            return [...artistData.filter((item) => {
                return char == 'all' ? item.name : item.name.charAt(0).toLowerCase() == char;
            })];
        });
    }, [counter]);

    return (
        <>
            <Carousel />
            <FilterList filterData={characterData} onFilter={filterHandler} />
            <div className="row">
                {artistList.length > 0 && artistList.map((item, indx, arr) => <ArtistItem key={item.id} data={item} />)}
                {artistList.length == 0 && <p className='text-center'>There is no Artist Found!</p>}
            </div>
        </>
    );
}

export default ArtistList;
