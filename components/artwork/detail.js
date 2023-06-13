import classes from './detail.module.css';
import Image from "next/image";
import ArtWork from '@/components/artwork/artwork';
import { getAllArts } from '@/data/artwork';

const ArtWorkDetail = (props) => {

    // const createMarkup = () => {
    //     return { __html: props.detailProfile.description };
    // }

    return (
        <>
            <div className={classes['artist-detail']}>
                <div className={classes['art-list-wrapper']}>
                    <Image src={'/' + props.item?.image} width="200" height="200" alt={'Alternative Text'} className={`img-fluid`} />
                </div>
                <div className={classes['profile-wrapper']}>
                    Right Part
                </div>
            </div>
        </>
    );
};

export default ArtWorkDetail;