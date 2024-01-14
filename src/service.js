const queryStrings = {
  app_id: process.env.REACT_APP_APP_ID,
  app_key: process.env.REACT_APP_APP_KEY,
};

//https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=2f606989&app_key=eb9f33c94789a990250781ac1cfe0254

export const fetchData = async (defaultQuery) => {
  const { app_id, app_key } = queryStrings;

  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`
    );
    const response = await data.json();

    return response;
  } catch (error) {
    console.log(error, "Something went wrong!!");
    return error;
  }
};

export const fetchTabData = async (defaultQuery) => {
  const { app_id, app_key } = queryStrings;

  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`
    );
    const response = await data.json();

    return response;
  } catch (error) {
    console.log(error, "Something went wrong!!");
    return error;
  }
};
