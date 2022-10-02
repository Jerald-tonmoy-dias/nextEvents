import { getAllEvents } from "../../dummy-data"
import EvetntList from '../../components/events/event-list'
export default function AllEventsPage() {
    const events = getAllEvents();
    return (
        <div>
            <EvetntList items={events} />
        </div>
    )
}
