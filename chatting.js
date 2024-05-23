const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("API_KEY");

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "제 이름은 정현서입니다." }],
            },
            {
                role: "model",
                parts: [{ text: "만나서 반가워요. 이름이 무엇인가요?" }],
            },
        ],
        generationConfig: {
            maxOutputTokens: 100,
        },
    });

    const msg = "제 이름이 뭐라고요?";

    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();
