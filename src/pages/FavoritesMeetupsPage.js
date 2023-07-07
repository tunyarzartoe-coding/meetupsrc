import { useContext } from "react";
import FavoriteContext from "../store/favoriteContext";
import MeetupList from "../components/meetup/MeetupList";

function FavoritesMeetupsPage() {

  const favoriteContext = useContext(FavoriteContext);
  const favorites = favoriteContext.favorites;
  let content;

  if(favorites.length === 0){
      content = <p> No Favorite meetup yet . Try to add.....</p>
  }else{
    content = <MeetupList meetups ={favorites}/>
  }
    return (
      <section>
        <h1>Favorites Meetups Page</h1>
        {content}
      </section>
    );
  }
  
  export default FavoritesMeetupsPage;
  