import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoriteContext from "../../store/favoriteContext";


function MeetupItem(props) {

  const favoriteContext = useContext(FavoriteContext)

  const  isItemFavorite =favoriteContext.isItemFavorite(props.id)

  function toggleFavoriteHandler() {
    const meetupId = props.id
    
    if(isItemFavorite){
      favoriteContext.removeFavorite(meetupId)
    }else{
      favoriteContext.addFavorite({
        id: meetupId,
        title: props.title,
        image : props.image,
        address : props.address,
        description : props.description,
      })
    }
  }

  return (
    <Card >
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}> {isItemFavorite ? 'Remove From Favorites ' : 'Add to Favorite'}</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
