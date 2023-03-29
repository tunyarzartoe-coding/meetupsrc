import NewMeetupForm from "../components/meetup/NewMeetupForm"
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {

  const navigate = useNavigate();

    function addMeetupHandler(meetup) {
        fetch('https://react-meetup-f46de-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',{
            method:'POST',
            body:JSON.stringify(meetup),
            headers:{
                'Content-Type':'application/json',
            }
        }
        ).then((response) =>{

          console.log(response.status)

          navigate('/');

        });
    }

    return (
        <section>
            <h1>New Meetup Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage