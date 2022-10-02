import Link from "next/link"

export default function EventItem(props) {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const exploreLink = `/events/${id}`;

    const formatedAddress = location.replace(',', '\n');
    return (
        <li>
            <img src={`/${image}`} alt={title} />
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{humanReadableDate}</time>
                </div>
                <div>
                    <address>{formatedAddress}</address>
                </div>
            </div>
            <div>
                <Link href={exploreLink}>Explore event</Link>
            </div>
        </li>
    )
}
