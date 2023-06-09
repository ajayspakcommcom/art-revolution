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
    const [isGrid, setIsGrid] = useState('list');

    const [artistList, setArtistList] = useState([]);
    const [char, setChar] = useState('all');

    const filterHandler = (obj) => {
        setChar(obj.name)
        setCounter((prevState) => {
            return prevState + 1;
        });
    };

    const changeGridHandler = (val) => {
        setIsGrid(val);
        //console.log(val);
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
            <FilterList filterData={characterData} onFilter={filterHandler} onChangeGridHandler={changeGridHandler} />
            <div className="row artist-wrapper">
                {artistList.length > 0 && artistList.map((item, indx, arr) => <ArtistItem key={item.id} data={item} isGridTemplate={isGrid} />)}
                {artistList.length == 0 && <p className='text-center'>There is no Artist Found!</p>}
            </div>
            <div className='text-center'>
                <button type="button" className="btn btn-primary">Load More...</button>
            </div>
        </>
    );
}

export default ArtistList;
