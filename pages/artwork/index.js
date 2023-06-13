import React from "react";
import ArtWork from "@/components/artwork/artwork";
import { getAllArtists } from '@/data/artist';


const ArtWorkPage = () => {
    let artList = getAllArtists();

    return (
        <>
            <h1>Art Work</h1>
            <div className="row art-wrapper">
                <ArtWork data={artList} />
            </div>
        </>
    );
}

export default ArtWorkPage;
