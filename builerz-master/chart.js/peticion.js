const axios = require('axios');

const apiKey = "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";
async function main() {
    try {
        const response = await axios.post(
            'https://api.deepseek.com/v1/chat/completions',
            {
                model: 'deepseek-chat', // o 'deepseek-reasoner'
                messages: [
                    { role: 'user', content: '¿Cuál es el sentido de la vida?' },
                ],
                stream: false,
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log(response.data.choices[0].message);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();