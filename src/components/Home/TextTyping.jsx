"use client"
import Typewriter from 'typewriter-effect';
const TextTyping = () => {
    return (
        <Typewriter
            options={{
                strings: 'Welcome to the AS Programming Course Platform',
                autoStart: true,
                loop: false,
                cursor: ' ',
                delay: 30,

            }}

        />
    )
}
export default TextTyping;