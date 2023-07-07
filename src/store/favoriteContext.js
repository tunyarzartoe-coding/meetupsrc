import { createContext,useState } from "react";

const FavoriteContext = createContext({
    favorites :[],
    totalFavorites: 0,
    addFavorite : (meetup) => {},
    removeFavorite : (meetupId) => {},
    isItemFavorite : (meetupId) => {},
});

export  function FavoriteContextProvider(props) {
    const [userFavorites,setUserFavorite] = useState([])

    function addFavoriteHandler(meetup) {
        setUserFavorite((previousFavorites)=>{
            return previousFavorites.concat(meetup)
        })
    }
        function removeFavoriteHandaler(meetupId) {
            setUserFavorite((previousFavorites)=>{
                return previousFavorites.filter(meetup => meetup.id !== meetupId)
            })
            
        }
    function isItemFavoriteHandaler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId );
        
    }

    const context = {
        favorites : userFavorites,
        totalFavorites : userFavorites.length,
        addFavorite : addFavoriteHandler,
        removeFavorite : removeFavoriteHandaler,
        isItemFavorite : isItemFavoriteHandaler,
    }

    return (<FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>)
}

export default FavoriteContext;

