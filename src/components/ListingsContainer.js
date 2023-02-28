import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchTerm, isSorted, gregsListings, setGregsListings}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    fetch("http://localhost:6001/listings").then(res=>res.json()).then(arr=>setGregsListings(arr)).then(setIsLoaded(true));
  }, []);

  function compareStrings(str1, str2){
    if (str1<str2){
      return -1
    }
    if (str1 > str2){
      return 1
    }
    return 0
  }

  let displayList = []
  if(isSorted){
  displayList = gregsListings.filter((element, index)=>{return element.description.includes(searchTerm)})
  .sort((ls1,ls2)=>{return compareStrings(ls1.description, ls2.description)});
  }
  else{
    displayList = gregsListings.filter((element)=>{return element.description.includes(searchTerm)});
  }
  
  if (!isLoaded) return <h3>loading...</h3>
  return (
    <main>
      <ul className="cards">
        {displayList.map((listing=>{return <ListingCard listings = {gregsListings} setListings = {setGregsListings} description = {listing.description} location = {listing.location} image = {listing.image} key = {listing.id} id = {listing.id}></ListingCard>}))
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
