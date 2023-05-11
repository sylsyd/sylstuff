exports.handler = async function(event, context) {
  const params = JSON.parse(event.body);

  // TODO: Use the OpenAI API to generate the story and questions

  return {
      statusCode: 200,
      body: JSON.stringify({ story: "Generated story", questions: ["Generated question 1", "Generated question 2"]})
  }
}
