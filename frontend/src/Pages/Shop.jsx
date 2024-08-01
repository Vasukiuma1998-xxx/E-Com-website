


import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offers/Offer";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import SearchBarsm from "../Components/SearchBarsm/SearchBarsm";


const Shop=()=>{
    
    return(
        <div>
            <SearchBarsm/>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollections/>
            <NewsLetter/>
            
        </div>
    )
}
export default Shop