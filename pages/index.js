import { getFeaturedEvents } from "../helpers/api-util"
import EventList from "../components/events/event-list";

export default function HomePage(props) {


  return (
    <div>
      <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps() {
  const featurtedEvents = await getFeaturedEvents();
  return {
    props: {
      events: featurtedEvents
    },
    revalidate: 1800
  }
}
