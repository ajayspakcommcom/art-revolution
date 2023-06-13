import Image from "next/image";
import { useRouter } from "next/router";
import RatingIcon from "../icons/rating-icon";
import classes from './item.module.css';


const ArtistItem = (props) => {

    const router = useRouter();
    console.log(props.isGridTemplate)

    const gotoDetail = () => {
        let urlParam = props.data.name.toLowerCase().trim().replace(/ /g, "-");
        router.push(`/artist/${urlParam}`);
    };

    if (props.isGridTemplate?.toLowerCase() == 'list') {
        return (
            <div className={`col-lg-2 col-md-2 col-sm-2 col-xs-12 ${classes['item-wrapper']}`} onClick={gotoDetail}>
                <Image src={'/' + props.data.image} width="100" height="100" alt={props.data.name} className='img-thumbnail image-item' />
                <p>{props.data.name}</p>
            </div>
        );
    }

    return (
        <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-12 ${classes['item-wrapper']}`} onClick={gotoDetail}>
            <div className="list-wrapper">
                <div className="left-part">
                    <Image src={'/' + props.data.image} width="100" height="100" alt={props.data.name} className='img-thumbnail' />
                    <p>{props.data.name}</p>
                </div>
                <div className="right-part">
                    <RatingIcon />
                </div>
            </div>
        </div>
    );

}

export default ArtistItem;
