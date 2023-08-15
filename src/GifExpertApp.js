import { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch Man']);

    return(
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />

            <ol>
                {categories.map((category) => 
                    <GifGrid
                        key={category}
                        category={category}
                    ></GifGrid>
                )}
            </ol>
        </Fragment>
    );
};

export default GifExpertApp;