import { useNavigate } from 'react-router'

const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    };
    return (
        <>
        <h1>About</h1>
        <p>My name is Meena</p>
        <button onClick = {handleClick}>Home</button>
        </>
    )
}

export default About;