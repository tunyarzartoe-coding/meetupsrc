import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const meetup = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetup);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea id="description" required rows="5" ref={descriptionRef} />
        </div>

        <div className={classes.actions}>
          <button>Create</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
