import MeetupList from "../components/meetup/MeetupList";
import { useState, useEffect } from "react";
// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },

//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetupsPage() {
  console.log("#######")
  const [isloading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-meetup-f46de-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((resoponse) => {
        return resoponse.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          meetups.push({
            id: key,
            ...data[key],
          });
        }
        setLoadedMeetups(meetups);
        setIsLoading(false);
        console.log("#######"+meetups)
      });
  }, []);

  let content =  (
    <section>
      <p>Loading ....</p>
    </section>
  );

  if (!isloading) {
    content = (<section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>); 
  }

  return content;
}

export default AllMeetupsPage;
