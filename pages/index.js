import { getFeaturedEvents } from "../dummy-data"
import EventList from "../components/events/event-list";

export default function HomePage() {

  const featurtedEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featurtedEvents} />
    </div>
  )
}
