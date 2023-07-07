import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import { useContext } from "react";
import FavoriteContext from "../../store/favoriteContext";

function MainNavigation() {

    const favoriteContext = useContext(FavoriteContext);
    return(

        <header className={classes.header}>
            <div className={classes.logo}>
                React Meetup
            </div>
            <nav>
                <ul>
                    <li><Link to="/"> AllMeetups</Link></li>
                    <li><Link to="/new-meetup"> NewMeetup</Link></li>
                    <li><Link to="/favorites"> FavoritesMeetup</Link>
                        <span className={classes.badge}>{favoriteContext.totalFavorites}</span>
                    </li>

                </ul>
            </nav>

        </header>

    );
}

export default MainNavigation