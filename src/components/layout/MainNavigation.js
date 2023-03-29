import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return(

        <header className={classes.header}>
            <div className={classes.logo}>
                React Meetup
            </div>
            <nav>
                <ul>
                    <li><Link to="/"> AllMeetups</Link></li>
                    <li><Link to="/new-meetup"> NewMeetup</Link></li>
                    <li><Link to="/favorites"> FavoritesMeetup</Link></li>
                </ul>
            </nav>

        </header>

    );
}

export default MainNavigation