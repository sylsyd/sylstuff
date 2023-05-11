document.getElementById('readingActivityForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting

    // Get the form data
    var readingLevel = document.getElementById('readingLevel').value;
    var characterName = document.getElementById('characterName').value;
    var genre = document.getElementById('genre').value;
    var numQuestions = document.getElementById('numQuestions').value;
    var questionDifficulty = document.getElementById('questionDifficulty').value;

    // Log the form data to the console for now
    console.log('Reading Level: ', readingLevel);
    console.log('Character Name: ', characterName);
    console.log('Story Genre: ', genre);
    console.log('Number of Questions: ', numQuestions);
    console.log('Question Difficulty: ', questionDifficulty);

    // TODO: Send the form data to the server-side function
    document.getElementById('readingActivityForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting
    
        // Get the form data
        var readingLevel = document.getElementById('readingLevel').value;
        var characterName = document.getElementById('characterName').value;
        var genre = document.getElementById('genre').value;
        var numQuestions = document.getElementById('numQuestions').value;
        var questionDifficulty = document.getElementById('questionDifficulty').value;
    
        // Send the form data to the server-side function
        fetch('/.netlify/functions/generateStory', {
            method: 'POST',
            body: JSON.stringify({
                readingLevel: readingLevel,
                characterName: characterName,
                genre: genre,
                numQuestions: numQuestions,
                questionDifficulty: questionDifficulty
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Story:', data.story);
            console.log('Questions:', data.questions);
        });
    });
    
});
