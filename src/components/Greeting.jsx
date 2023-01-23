import { h } from 'preact'

import { useState, useCallback } from 'preact/hooks';

export default function Greeting(props) {
    const greetings = [
        'hey',
        'oi',
        'helo ther!'
    ]
    const getRandomGreeting = () => {
        return greetings[Math.floor(Math.random() * greetings.length)]
    }
    const [greeting, setGreeting] = useState(getRandomGreeting())

    const getNewGreeting = useCallback(() => {
        setGreeting(oldGreeting => {
            let newGreeting = oldGreeting;

            while (newGreeting === oldGreeting) {
                newGreeting = getRandomGreeting()
            }

            return newGreeting;
        });
    }, [greeting]);

    return (
        <div>
            <p>{greeting}</p>
            <button onClick={getNewGreeting}>New Greeting!</button>
        </div>
    )
}