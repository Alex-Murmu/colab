import React, { useState } from 'react';
import './home.css'; // Make sure to include your CSS file

export default function Home() {
    const [objectName, setObjectName] = useState('');
    const [drawing, setDrawing] = useState('');

    // Function to draw an elephant (you can customize this)
    function drawElephant() {
        // Create a simple string representation of the elephant
        const elephantDrawing = `
            _______
           /       \\
          /  O O  \\
         |    ^    |
          \\  ---  /
           --------
        `;

        setDrawing(elephantDrawing);
    }

    // Function to handle voice input
    function handleVoiceInput(event) {
        const userVoiceInput = event.results[0][0].transcript.toLowerCase();
        setObjectName(userVoiceInput);
        searchImage(userVoiceInput);
    }

    // Function to search images based on user input
    async function searchImage(query) {
        try {
            // Replace 'YOUR_API_KEY' and 'YOUR_CSE_ID' with your actual values
            const api_key = 'YOUR_API_KEY';
            const cse_id = 'YOUR_CSE_ID';
            const search_url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${api_key}&cx=${cse_id}&searchType=image`;

            const response = await fetch(search_url);
            const data = await response.json();

            if (data.items) {
                // Extract image URLs from the response
                const imageUrls = data.items.map(item => item.link);
                console.log(`Image search results for '${query}':`);
                console.log(imageUrls);
            } else {
                console.log(`No image results found for '${query}'.`);
            }
        } catch (error) {
            console.error(`Error searching images: ${error}`);
        }
    }

    // Initialize Speech Recognition
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.onresult = handleVoiceInput;

    return (
        <div className='main'>
            <div className="output">
                {/* Display the drawing */}
                <pre>{drawing}</pre>
            </div>
            <div className='input'>
                {/* Input button triggers voice recognition */}
                <button onClick={() => recognition.start()}>Start Voice Input</button>
            </div>
        </div>
    );
}
