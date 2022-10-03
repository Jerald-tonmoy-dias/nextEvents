import { getAllEvents } from "../../dummy-data";
import EvetntList from '../../components/events/event-list';
import EventsSearch from "../../components/events/events-search";

export default function AllEventsPage() {
    const events = getAllEvents();
    return (
        <>
            <EventsSearch />
            <EvetntList items={events} />
        </>
    )
}
