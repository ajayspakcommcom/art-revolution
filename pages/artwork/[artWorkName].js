import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { useRouter } from 'next/router';
import { firstCharUpperCase } from '@/services/common';
import { useCallback, useEffect, useState } from 'react';
import { getAllArts } from '@/data/artwork';
import Image from "next/image";
import ArtWorkDetail from '@/components/artwork/detail';


const ArtWorkPage = (props) => {

    const router = useRouter();
    const [artWork, setArtWork] = useState({});
    console.log('Main Art');

    const getArtData = useCallback(() => {
        const dataList = getAllArts();
        const name = router.query.artWorkName?.trim().toLowerCase()?.replace(/-/gi, ' ');
        const artWorkData = dataList.find((item) => {
            return item.name?.trim().toLowerCase().replace(/-/gi, ' ') == name;
        });
        setArtWork(artWorkData);
    }, []);

    useEffect(() => {
        getArtData()
    }, [getArtData]);

    const onBackHandler = () => {
        router.push('/artwork');
    };

    return (
        <>
            <Breadcrumb name={router.query.artWorkName} backText={'Art Work'} onBackHandler={onBackHandler} />
            <hr />
            <ArtWorkDetail item={artWork} />
        </>
    );
};

export default ArtWorkPage;


