import Image from "next/image";
import { useRouter } from "next/router";
import classes from './item.module.css';


const ArtistItem = (props) => {

    const router = useRouter();

    const gotoDetail = () => {
        let urlParam = props.data.name.toLowerCase().trim().replace(/ /g, "-");
        router.push(`/artist/${urlParam}`);
    };

    return (
        <div className={`col-lg-2 col-md-2 col-sm-2 col-xs-12 ${classes['item-wrapper']}`} onClick={gotoDetail}>
            <Image src={'/' + props.data.image} width="100" height="100" alt={props.data.name} className='img-thumbnail' />
            <p>{props.data.name}</p>
        </div>
    );
}

export default ArtistItem;
