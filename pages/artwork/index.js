import React from "react";
import ArtWork from "@/components/artwork/artwork";
import { getAllArts } from "@/data/artwork";



const ArtWorkPage = () => {
    let artWorks = getAllArts();

    return (
        <>
            <h1>Art Work</h1>
            <div className="row art-wrapper">
                <ArtWork data={artWorks} />
            </div>
        </>
    );
}

export default ArtWorkPage;
