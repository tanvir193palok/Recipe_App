import React, { useEffect, useState } from "react";

//import fetch data function
import { fetchData } from "../service";

//importing icons
import { BsSearch } from "react-icons/bs";

const RecipeLists = () => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [query, setQuery] = useState("pizza");
  const [data, setData] = useState("");

  //search recipe function
  const searchRecipe = (searchQuery) => {
    fetchData(searchedTerm).then((response) => {
      setData(response);
      console.log(response);
    });
  };

  useEffect(() => {
    fetchData(query).then((response) => {
      setData(response);
      console.log(response);
    });
  }, []);
  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input
            onChange={(e) => setSearchedTerm(e.target.value)}
            value={searchedTerm}
            type="text"
            placeholder="Search Your Recipe"
          />
          <button onClick={() => searchRecipe(searchedTerm)}>
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {data &&
          data.hits.map((item, index) => (
            <div key={index} className="flexItem">
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeLists;
