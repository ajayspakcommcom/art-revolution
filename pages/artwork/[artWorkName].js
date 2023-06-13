import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { useRouter } from 'next/router';
import { firstCharUpperCase } from '@/services/common';
import { useEffect } from 'react';
import { getAllArts } from '@/data/artwork';


const ArtWorkPage = (props) => {

    const router = useRouter();

    useEffect(() => {
        const dataList = getAllArts();
        console.log(dataList);
    }, []);

    const onBackHandler = () => {
        router.push('/artwork');
    };

    return (
        <>
            {/* {JSON.stringify(firstCharUpperCase(router.query.artWorkName))} */}
            <Breadcrumb name={router.query.artWorkName} backText={'Art Work'} onBackHandler={onBackHandler} />
            <hr />
            {/* <ArtistDetail detailProfile={user} /> */}
        </>
    );
};

export default ArtWorkPage;


