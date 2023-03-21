export async function chatGptWrite(data){
    const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Correct this to standard English:\n\n" + data,
  temperature: 0,
  max_tokens: 60,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
});
console.log(response.data['choices'][0].text)
}