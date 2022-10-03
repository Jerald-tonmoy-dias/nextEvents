
import { getAllEvents } from "../../dummy-data";
import EvetntList from '../../components/events/event-list';
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

export default function AllEventsPage() {
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };
    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <EvetntList items={events} />
        </>
    )
}
