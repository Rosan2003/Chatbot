/*const API_KEY = 'sk-proj-wFci82CZT3ZNG7AmJvODT3BlbkFJunFIbU2qLIK0LImph27b';
const sendBtn = document.querySelector('#send');
const Output = document.querySelector('#output');
const Input = document.querySelector('input');
const newChat = document.querySelector('.newChat');

async function getResponse(){
        console.log("clicked");
        const options = {
        method: 'POST',
        headers: {
            'Authorization' : `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: Input.value }],
            })
    }

    try{
        const response =  await fetch('https://api.openai.com/v1/chat/completions',options);
        const data = await response.json();
        console.log(data)
        //Output.textContent = data.choices[0].message.content;
    }

    catch (error){
        console.error(error);
    }
}

sendBtn.addEventListener('click', getResponse);
newChat.addEventListener('click', () => {
    Input.value = '';
})*/




document.addEventListener('DOMContentLoaded', function() {
    const API_KEY = 'sk-proj-wFci82CZT3ZNG7AmJvODT3BlbkFJunFIbU2qLIK0LImph27b';
    const sendBtn = document.querySelector('#send');
    const Output = document.querySelector('#output');
    const Input = document.querySelector('input');
    const newChat = document.querySelector('.newChat');

    async function getResponse() {
        console.log("clicked");
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: Input.value }],
            })
        }

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', options);
            const data = await response.json();
            console.log(data)
            // Output.textContent = data.choices[0].message.content;
        } catch (error) {
            console.error(error);
        }
    }

    sendBtn.addEventListener('click', getResponse);
    newChat.addEventListener('click', () => {
        Input.value = '';
    });
});

