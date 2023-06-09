import { useRouter } from 'next/router';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import ArtistDetail from '@/components/artist/detail/detail';
import { getAllArtists } from '@/data/artist';


const ArtistDetailPage = () => {

    const router = useRouter();
    const artistList = getAllArtists();

    const artistName = router.query.artistName ? router.query.artistName.replace('-', ' ') : '';
    let user;


    if (artistList) {
        user = artistList.find((item, indx, arr) => {
            return item.name.toLowerCase() === artistName.toLowerCase();
        });
    }



    const onBackHandler = () => {
        router.push('/artist');
    };

    return (
        <>
            <Breadcrumb name={router.query.artistName} backText={'Artists'} onBackHandler={onBackHandler} />
            <hr />
            <ArtistDetail detailProfile={user} />
        </>
    );
}

export default ArtistDetailPage;
