
import Image from "next/image";
import { useEffect, useState, } from "react";
import { useRouter } from "next/router";
import ViewIcon from "../icons/view-icon";
import classes from './artwork.module.css';


const ArtWork = (props) => {

    const router = useRouter();
    let artList = props.data;
    const [artWorkList, setArtWorkList] = useState(artList);
    const [counter, setCounter] = useState(0);


    const likeHandler = (obj) => {
        let artData = artList.findIndex(data => data.id == obj.id);
        artList[artData].likes = artList[artData].likes + 1;
        setArtWorkList(artList);
        setCounter(counter + 1);
    };

    const gotoDetail = (name) => {
        let urlParam = name.toLowerCase().trim().replace(/ /g, "-");
        console.log(urlParam);
        router.push(`/artwork/${urlParam}`);
    };

    useEffect(() => {
        setArtWorkList(artList);
        console.log('Ram');
    }, [counter]);

    return (
        <>
            {
                artWorkList.map(item => {
                    return (
                        <div className={classes.card} key={item.id} onClick={() => { gotoDetail(item.name) }}>
                            <Image src={'/' + item.image} width="100" height="100" alt={item.name} className={`img-fluid ${classes['img-full']}`} />
                            <div className="card-body">
                                <h4 className={classes['card-title']}>{item.name}</h4>
                                <div className={classes['footer']}>
                                    <span>{item.medium}</span>
                                    <div className={classes['like-view']}>
                                        <span><ViewIcon onLikeClick={() => { likeHandler(item) }} /> <b>{item.views}</b> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default ArtWork;