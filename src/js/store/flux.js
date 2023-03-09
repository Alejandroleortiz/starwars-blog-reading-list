const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // demo: [
      // 	{
      // 		title: "FIRST",
      // 		background: "white",
      // 		initial: "white"
      // 	},
      // 	{
      // 		title: "SECOND",
      // 		background: "white",
      // 		initial: "white"
      // 	}
      // ],
      characters: null,
      planets: null,
    },
    actions: {
      // Use getActions to call a function within a fuction

      getCharacter: () => {
        const url = "https://www.swapi.tech/api";
        console.log("fetching data...");
        console.log(url);
        fetch(`${url}/people`)
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({
              characters: data,
            });
          })
          .catch((error) => console.log(error));
      },

      getPlanets: () => {
        const url = "https://www.swapi.tech/api";
        console.log("fetching data...");
        console.log(url);
        fetch(`${url}/planets`)
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({
              planets: data,
            });
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
