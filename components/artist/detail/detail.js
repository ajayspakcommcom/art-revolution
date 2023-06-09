import classes from './artist-detail.module.css';
import Image from "next/image";
import ArtWork from '@/components/artwork/artwork';
import { getAllArts } from '@/data/artwork';

const ArtistDetail = (props) => {


    let artList = [];

    if (props.detailProfile) {
        artList = getAllArts().filter(data => data.userId === props.detailProfile.id);
    }

    const createMarkup = () => {
        return { __html: props.detailProfile.description };
    }

    return (
        <>
            <div className={classes['artist-detail']}>
                <div className={classes['art-list-wrapper']}>
                    <ArtWork data={artList} />
                </div>
                <div className={classes['profile-wrapper']}>
                    {props.detailProfile && <Image src={'/' + props.detailProfile.userImg} width="100" height="100" alt={props.detailProfile.name} className='img-thumbnail' />}
                    <hr />
                    <strong>About Me</strong>
                    {props.detailProfile && <div dangerouslySetInnerHTML={createMarkup()}></div>}
                </div>
            </div>
        </>
    );
};

export default ArtistDetail;