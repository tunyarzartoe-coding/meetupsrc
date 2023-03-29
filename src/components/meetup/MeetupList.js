import classes from './MeetupList.module.css';

import MeetupItem from "./MeetupItem";

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => <MeetupItem
                key = {meetup.id}
                id ={meetup.id}
                title={meetup.title}
                dsecription ={meetup.dsecription}
                image = {meetup.image}
                address = {meetup.address}
            />)}
        </ul>

    );
    
}

export default MeetupList