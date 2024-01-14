import React, { useEffect, useState } from "react";

//importing icons
import { CiPizza } from "react-icons/ci";
import { GiFruitBowl, GiNoodles, GiCheckMark } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import { fetchTabData } from "../service";

const Tabs = (props) => {
  const [active, setActive] = useState("Pizza");
  const [tabData, setTabData] = useState("");
  const [tabLabel, setTabLabel] = useState([
    {
      name: "Pizza",
      icon: <CiPizza />,
      id: "0209cb28fc05320434e2916988f47b71",
    },
    {
      name: "Noodles",
      icon: <GiNoodles />,
      id: "f7a9e54a5d4577e26acd72c0c9bc94ed",
    },
    {
      name: "Desert",
      icon: <GiFruitBowl />,
      id: "57c6d84688b5a63ee16a0471cc51123a",
    },
    {
      name: "Ice cream",
      icon: <MdOutlineIcecream />,
      id: "480fd56ab4d71c204c2b75e16edbbd21",
    },
  ]);

  const handleClick = (name, id) => {
    setActive(name);
    fetchTabData(id).then((response) => {
      setTabData(response);
      props.setLoader(false);
    });
  };

  useEffect(() => {
    fetchTabData(tabLabel[0].id).then((response) => {
      setTabData(response);
      props.setLoader(false);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>
      <div className="tabs">
        {tabLabel.map((item, index) => (
          <div
            onClick={() => (
              handleClick(item.name, item.id), props.setLoader(true)
            )}
            key={index}
            className={`tablist ${active === item.name ? "active" : ""}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="recipe_banner">
        {tabData !== "" && tabData.recipe && (
          <>
            <div className="left-col">
              <span className="badge">
                {tabData.recipe?.cuisineType[0].toUpperCase()}
              </span>
              <h1>{tabData.recipe.label}</h1>
              <p>
                <strong>Recipe by:</strong>
                <small>{tabData.recipe.source}</small>
              </p>
              <h3>Ingredients</h3>
              <div className="ingredients">
                <ul>
                  {tabData.recipe.ingredientLines.map((list, index) => (
                    <li key={index}>
                      <GiCheckMark size="18px" color="#6fcb9f" />
                      &nbsp;<span>{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right-col">
              <div className="image-wrapper">
                <img src={tabData.recipe.image} alt={tabData.recipe.label} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
