const openai = require('openai');

openai.apiKey = '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';

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body);

  try {
    const storyResponse = await openai.Completion.create({
      engine: "text-davinci-004",
      prompt: `A ${data.genre} story about ${data.characterName} for a ${data.readingLevel} reader.`,
      max_tokens: 1000
    });

    const story = storyResponse.choices[0].text.strip();

    const questionsResponse = await openai.Completion.create({
      engine: "text-davinci-004",
      prompt: `Generate ${data.numQuestions} reading comprehension questions of difficulty ${data.difficultyLevel} about the following story: ${story}`,
      max_tokens: 200
    });

    const questions = questionsResponse.choices[0].text.strip().split('\n');

    return {
      statusCode: 200,
      body: JSON.stringify({ story, questions })
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
}
