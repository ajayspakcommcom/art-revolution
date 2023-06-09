import Image from "next/image";

const CarouselItem = (props) => {
    return (
        <Image src={'/' + props.data.image} width="300" height="300" alt={props.data.name} className='img-thumbnail' />
    );
}

export default CarouselItem;
