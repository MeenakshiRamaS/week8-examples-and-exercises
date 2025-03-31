import { Link } from 'react-router'
const Home = () => {
    return (
        <>
        <p>
            This is a blog for Subway. Eat Fresh!
        </p>
        <h1>Home</h1>
        <Link to = "/about">About</Link>
        <Link to = "/destination">Destination</Link>
        </>
    )
}

export default Home;