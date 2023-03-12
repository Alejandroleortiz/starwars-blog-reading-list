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

      getCharacter: async () => {
        const url = "https://www.swapi.tech/api/people";
        console.log("fetching characters...");
        console.log(url);
        try {
          const response = await fetch(url);
          const characters = await response.json();
          for (let i = 0; i < characters.results.length; i++) {
            try {
              const resp = await fetch(characters.results[i].url);
              const data = await resp.json();
              characters.results[i].properties = data?.result?.properties;
              console.log(characters);
            } catch (error) {
              console.log(error);
            }
          }
         setStore({
          characters: characters,
        });
          
        } catch (error) {
          console.log(error);
        }
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
