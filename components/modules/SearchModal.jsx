import { useState } from "react";
import { TfiSearch } from "react-icons/tfi";



const SearchModal = () => {

   const [serchValue ,setSearchValue] = useState("")

    return ( 
        <div className="relative">
        <div id="search-modal" className="w-[580px]  bg-gray-50 rounded-md absolute  left-0 p-6 z-50 mx-2 top-2 hidden ">
            <input id="search-input" className="w-full outline-none p-3 relative border rounde border-r-gray-200 rounded-lg" type="text" placeholder="جستجو در محصولات" 
            value={serchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            />
            <button id="btn-search" className="absolute left-10 top-10 cursor-pointer"><TfiSearch className="w-6 h-6"/></button>
        </div>
        </div>
     );
}
 
export default SearchModal;