import React from "react";
import collectionImage1 from "..//images/WomensImage.png";
import collectionImage2 from "..//images/MensImage.png";
import collectionImage3 from "..//images/AccessoriesImage.png";
import CollectionCard from "./CollectionCard";

const CollectionList = () => {
    return (
        <>
            <div className="collection">
                <div className="site_container">
                    <div className="collection_list d-flex flex-md-nowrap flex-wrap justify-content-between" >
                        <CollectionCard visit="/" image={collectionImage1} title="Women’s" />
                        <CollectionCard visit="/" image={collectionImage2} title="Men’s" />
                        <CollectionCard visit="/" image={collectionImage3} title="Accessories" />
                    </div>
                </div>
            </div>

        </>
    )
}
export default CollectionList;