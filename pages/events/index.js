
import { getAllEvents } from "../../helpers/api-util";
import EvetntList from '../../components/events/event-list';
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

export default function AllEventsPage(props) {
    const router = useRouter();
    const events = props.events;

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

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events: events
        },
        revalidate: 60
    }
}