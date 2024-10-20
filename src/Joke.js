import React from "react";
import './Joke.css';
import Button from './button';



const Joke = () => {
    const [joke, setJoke] = React.useState("");
    const fetchApi = () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then((res) => res.json())
            .then((data) => setJoke(`${data.setup} - ${data.punchline}`));

    };
    return (
        <div className="joke">
            <Button callApi={fetchApi} />
            <p>{joke}</p>

        </div>
    );
}
export default Joke;