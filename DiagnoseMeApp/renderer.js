console.log('renderer.js loaded');
document.querySelector('#submitBtn').addEventListener('click', () => {
    const input = document.querySelector('#myTextBox').value;
    fetch('http://127.0.0.1:5000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gemini-pro', // or whatever model you want to use
            contents: [
                {
                    role: 'user',
                    parts: [{ text: input }]
                }
            ],
            "safety_settings": {
                "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                "threshold": "BLOCK_LOW_AND_ABOVE"
            },
            "generation_config": {
                "temperature": 0.2,
                "topP": 0.8,
                "topK": 40,
                "maxOutputTokens": 200,
            }
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        const jsonString = data.replace('data: ', ''); // Remove 'data: ' from the start
        const parsedData = JSON.parse(jsonString);
        document.querySelector('#responseText').textContent = parsedData.text;
    })
    .catch(error => console.error('Error:', error));
});