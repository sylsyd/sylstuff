    document.addEventListener('DOMContentLoaded', function() {

    console.log('Script loaded');

const storyTexts = [
    `In a room washed in the pallor of forgotten sunsets, a girl sat, the only spot of vibrancy. Red hair spilled over her shoulders, a defiant flame against the dull orange of the room. Her eyes, large and doe-like, held a distant, vacant quality, as if they could see beyond the confines of the room and into another world. There was a coldness to her gaze, the weight of a hurt that wouldn't heal. 

    The men had left, their promises as empty as the bed beside her. She was alone, but not defeated. Her heart bore the scars, but it still beat, a stubborn rhythm against the silence.
        
    The room would change, shedding its past. She would change too, but at her own pace. The wallpaper could be removed, but her resolve would remain, unyielding to the grip of the institutions that sought to claim her. 
        
    In the quiet of the room, she sat, the echoes of her past meeting the silence of her future. The world outside moved on, uncaring, as she navigated the chasm between who she was and who she would become. In the twilight of her dreams, the girl would find solace, a place where the past could not haunt her and the future held no terror.`,
        
    
    `In the sparsely furnitured room, the wallpaper peeling at the edges like the rind of a long-forgotten fruit, Henry found himself seated on the edge of the sagging bed. The worn springs creaked beneath his weight, mirroring the heaviness that had settled in his chest. He was a man on the precipice of understanding, teetering between the realms of past and present.

    Beside him, Mei lingered in her own purgatory. Her raven hair, a cascade of midnight silk, framed her face as she stared into her cupped hands. They were small, delicate hands that had once traced the contours of Henry's face in tender moments now lost to the ravages of time. 

    Their lives had become a jigsaw puzzle with pieces borrowed from different boxes, the jagged edges refusing to interlock, leaving only gaps and jagged voids. Henry, a man raised on the virtues of stoicism and tradition, found himself lost in a foreign landscape of emotions. His heart, now an uncharted territory, was a terrain he had never been taught to navigate. Mei, a woman bound by the expectations of her own culture, had traded one set of chains for another, the weight of her choices pressing down upon her like a yoke.`,
    
    `Under a coal-black sky, the sulky teenager, Ruby, stood next to her beaten bicycle, its once-gleaming red paint now a dull and chipped reminder of better days. 
    Life in a small Southern town weighed heavily on Ruby, her dreams and aspirations trapped like fireflies in a mason jar. Tonight, she had ventured out to escape the suffocating confines of her existence, seeking solace in the moonless night.
    
    A sudden gust of wind rustled the nearby trees, their spindly limbs reaching out like gnarled fingers. Ruby's eyes met the twisted branches, and for a moment, she saw herself reflected in their distorted forms—a girl desperate to escape, to spread her wings and take flight from this wretched place.  
    
    A sudden, shrill cry pierced the silence. Startled, Ruby turned towards the sound. A thin, bedraggled cat emerged from the underbrush. She knelt down and extended her hand, her heart aching for the creature that, like her, seemed to have nowhere to belong.
    
    The cat hesitated, then cautiously approached. As it rubbed against her hand, Ruby whispered a promise into the night air. "One day, we'll both leave this place, find a home where we're accepted and loved."
    `,

    `Dawn broke, casting long shadows on the dusty road. A family of six stood poised, starched Sunday best glistening under the newborn sun. Heat hung like a veil, silent and oppressive.

    Two houses sat behind them, white as bleached bones. One was aflame, smoke and fire reaching out to the clear sky, a jarring contrast against the tranquil morning. 
    
    This was no grand saga of heroes and villains. There were no metaphors to be unraveled, no allegories to be interpreted.

    The family watched, their faces a study of stoic acceptance. Eyes hardened, not by the fire, but by the life that brought them here.`,
    `In the flickering light of the decrepit diner, a motley group of clowns gathered around a worn-out table. The peeling vinyl seats creaked beneath their weight, while the chipped Formica tabletop threatened to give way at any moment. 

    The air inside was thick with the smell of grease and stale coffee, the scent of lingering desperation and lost dreams. Yet, these strange and frightening clowns had found a haven of sorts within the diner's crumbling walls.
        
    Their laughter, a cacophony of manic cackles and unsettling chuckles, echoed through the empty room. They took turns sharing dark and twisted stories, their words dripping with a cruel delight in the macabre. 
        
    As they spoke, the clowns picked at their meager meals, the greasy food a stark contrast to the sinister tales they shared. The adults and teenagers took turns comforting the smallest ones, their painted smiles hiding a deep, unspoken sadness that clung to their very bones.`,
    `The carousel spun. A woman stood, apart.  The corners of her mouth held a defiance and her eyes bore the weight of unshed tears. 

    Behind her, the carousel groaned like a spinning purgatory, its gears grinding against the backdrop of her quiet contemplation. A deity, if one cared to look, might have smirked at the woman's plight. She was like a reluctant Eve, bound to a carousel of damnation. 
    
    Her journey was not one of circular motions nor was it etched in the laughter of men. It was written in the silence of her defiance.`,

`Under the restaurant's soft light, the Clown sat alone. A guitar, battered but proud, cradled in his arms. Stale coffee sat untouched, the cake uneaten. Folks stared, their meals forgotten. 

He strummed a tune, raw and unrefined. Broken chords, mismatched like his garb. It was a melody that bespoke of loss and loneliness. His eyes, rimmed with kohl, held a brutal honesty. 

An eerie silence filled the air. Even the clinking silverware ceased its symphony, yielding to the raw spectacle.

The Clown didn’t play for the crowd, nor for the critics. He played for the coffee, the cake, the empty chair across him. A quiet homage to the void, a confession to the inanimate. 

He rose, his silhouette monstrous against the dim lights. He left a dollar for the coffee, a nickel for the cake.`,

`In a time and place that bore no name but the ever-humming human tide, a girl, a mere sprout in her early twenties, drifted through the masses. Red coat, brown shirt, an island of color amidst the gray. Large eyes shielded by round glasses, a barrier to the world. Her figure barely more noticeable than a single stroke of paint on a canvas of chaos. She bore her existence with a grace that echoed the fragile balance of a butterfly on the tip of a thistle.

She did not look at the camera; instead, her gaze pierced the crowd, dissecting the clamoring throng of humanity with an ineffable curiosity. Her presence was a riddle, a half-whispered joke to which only she knew the punchline.`,

`In the dim room, he sat. His face, a canvas of grotesque artistry, was unreadable. But his eyes, they held an ocean of melancholy. 

A birthday cake sat before him, pink frosting gleaming under the flickering candlelight. Unopened present lay askew, shrouded in lousy wrapping paper. The flames danced, casting eerie shadows. Nobody else was there. 

He stared at the cake, the light of the candles reflecting off his vacant gaze. The silence weighed heavy, punctuated only by the soft hissing of the burning wicks. 

"Happy birthday," he said, to no one in particular. 

And so, the party was over. But the sadness, it lingered.`,

`In the misty suburban morning, the Bear and the Cat sit. Hands clasped. Both masked. The house behind them, silent, devoid of life. Their attire neat, incongruous with the masks. The Bear, in a crisp green jacket, the Cat in a soft pink dress. Are they lovers? Or blood?

Their silence hangs heavy in the fog. Words unsaid, stories untold. Cars pass. Neighbors glance. The world moves on.

The masks remain. Their identities hidden, relationship ambiguous. The eyes, windows to their souls, hidden behind plastic. The Bear's posture protective, the Cat's submissive. A tableau of strangeness in an otherwise normal world.

Their secret shared in silence, they continue to sit, shrouded by the fog. A scene of brutal normalcy in the heart of the suburbia. Unmasked, yet unseen. A paradox, a mystery, a story untold.`,

`Silhouetted against the sprawling cityscape, she sat, high above the world. The city lived, breathed, but she was still, her thoughts as quiet as the stars above.

The buildings were mere shadows to her existence. Their towering heights dwarfed by the magnitude of her silent vigil.

In the vast expanse of glass and steel, she was but a flicker. Her solitude, the lighthouse in the sea of noise.

She bore witness, the silent sentinel. Alone, yet not lonely. In the depths of the night, she found her dawn. `,

`Under the shield of an umbrella, they stood. A picture of elegance, beauty marred by an undercurrent of unease. His features, chiseled as if from stone. Her skin, pale as porcelain, hair golden as summer wheat. 

Their smiles, perfectly formed, yet empty of warmth. Each a mirror, reflecting a world of secrets kept hidden beneath the polished surface. 

Beneath the veneer of affection, a sense of shared darkness. Each glance, each touch, was a whisper of stories untold, secrets shared. Their unity was not merely the product of passion, but the child of shared sins. 

The rain fell, but the grime of their secrets remained. Their love was their fortress, their shared guilt the mortar that held them together. `,

`Her black hair was a curtain of night against the faded blue of the old painting that stood behind her. Her angular features, sharp as the reality she defied, cut through the softness of the painted flowers.

Her eyes, large and unblinking, held the camera's gaze. A silent challenge, a dare. Surprise danced in their depths, but defiance was their song. Her mouth, painted red as the withered fruit that surrounded her, remained closed.

The world around her was wild, untamed. Amidst the wild branches and withered fruit, she stood, unbroken. `,

`In the shadowed living room, a man sat, his posture a confession of guilt. The mask, stark white against his face, eyes surrounded by dark red shapes, a macabre painting of his hidden self. He was a figure trapped in the canvas of his own creation, a silent scream in the muted tones of the room.

His hair, slicked back, mirrored the precision of his life. Everything in place, everything controlled. Yet, his body betrayed him. The awkwardness, the tension, a crack in the facade.

The room, with its antique patterns and dark red curtains, swallowed him, a maw of regret. His secrets were his chains, the mask his prison. He sat, a lone figure, his silence echoing the screams of his past.
`,

`In a sunbleached room, the Twins were arranged like mirrored echoes, pink dresses hand-stitched and faded, white sleeves capturing the afternoon light. Shadows beneath their eyes were etched deep, belying their tender years. They were slender, as though stretched by time and hardship, their symmetry undisturbed. 

The camera shuttered, seizing the moment, the echoes of an existence etched in emulsion. The portrait told of sameness, of life's unchanging rhythm. The world moved on, yet they remained, an enduring symmetry in the heart of relentless change.

They didn't need words, their existence was their narrative. A story of two, in a world made for one. Their shared gaze was an invitation, a challenge. Witness them. Witness their world. 
`,

`She laid still, swathed in the shadows and the peeling paint of her blue sanctuary. The bed creaked with years and secrets, matching the woman's frailty. 

Blue eyes were shuttered beneath painted lids, a silent reverie of dreams and nightmares.

Her dress, once vibrant, was now a weathered map of life's trials, its blue fabric mottled with the patina of time. Dark lipstick clung to her thin lips, a stark contrast to her pallor, and her hair, dark and curly, framed her face like a fading memory.

Beside her, a black cup sat on the threadbare sheet, void of warmth, an unwelcome companion. 

In her stillness, she was loud. In her silence, she was screaming. In her solitude, she was legion.`,

`By the murky river, he sat, a solitary figure against a canvas of blue and green. His sharp ears, more attuned than most, absorbed the whispers of the world around him - the secrets of the river, the confessions of the fog, the tales of the wind.

His eyes, distant and introspective, were focused on something beyond the reach of the camera. He was not looking at anything. He was looking for something - an understanding, a recognition, a connection. His music wasn't to fill the silence but to articulate it, to give it a voice, to make it tangible.

And so, he played. For the river, for the fog, for the world and for himself. Because in the end, that was all he could do. That was all he was.

`,

`Every line of this suit is wrong. Stiff. Like a mannequin dressed in my father's clothes. The velvet chair, too rich, too soft. It swallows me, this plush maw, drinking in my being.

Eyes are always on me, seeking. Cameras, people, mirrors. They gnaw at the edges of my solitude, chipping away pieces of me until I am a mosaic of their expectations. My only refuge is my wandering thoughts. I dive into them, let the current carry me far from the snapping shutters and the probing gazes.

How did I get trapped in this circus of lights and whispers? I'm a spectacle, a performance. But the play is long and the actor is weary. Each smile, each nod, each word, a pebble in a mountain of tiredness.
`,

`This sweater, this garish beacon. It screams louder than I ever could. It's not me, not my quiet, orderly world. It's a jester's costume on a man who's forgotten how to laugh.

But I am more than this moment. More than the lines on my face and the weary sag of my shoulders. More than the annoyance that bubbles up, hot and irritable, at this intrusion. More than the embarrassment that quietly nags, whispering of a time when I would have shrugged this off, laughed it off.
`,

`In the quiet corner of existence, a boy, fair as winter dawn and with hair combed back in a golden wave. Frozen in time. Eyes, twin sapphires, full yet empty, a riddle wrapped in silence.

A green shirt, light as spring leaves, kissed by the morning dew. A tie, darker, the forest's shadow at twilight. Precision in chaos, order amid uncertainty.

Eyes lost in a labyrinth of thoughts. Wanderer of the mind, explorer of the unknown. The abyss or the promise, it was hard to tell. The line between despair and desire, blurred like the edge of a dream.`,


`The green wallpaper is peeling off, just as I feel my own self peeling away, layer by layer. My humanity being stripped off, bit by bit, leaving behind something...unnatural.

I feel the weight of my existence in the world of men, the burden of being different. I've learned to bear it, like this suit I am wearing.

My eyes, my only window to the world, brim with an unspeakable sadness. I see the world as a man and feel it as an elephant. The dichotomy is a constant reminder of my otherness, my isolation.

I stand tall, not in spite of my difference, but because of it. I am not a man, not an elephant, but both, and neither.

In the silence of the room, under the unfeeling gaze of the light, I find a strange comfort. Here, I am not judged. Here, I am not an oddity. 
`,

];




const imagePaths = [ "Images/AIstories/image1.png", "Images/AIstories/image2.png", "Images/AIstories/image3.jpg", "Images/AIstories/image4.jpg", "Images/AIstories/image5.jpg", "Images/AIstories/image6.png", "Images/AIstories/image7.png","Images/AIstories/image8.png", "Images/AIstories/image9.png", "Images/AIstories/image10.png", "Images/AIstories/image11.png", "Images/AIstories/image12.png","Images/AIstories/image13.png","Images/AIstories/image14.png", "Images/AIstories/image15.png", "Images/AIstories/image16.png", "Images/AIstories/image17.png", "Images/AIstories/image18.png", "Images/AIstories/image19.png", "Images/AIstories/image20.png", "Images/AIstories/image21.png",  ];

const textContainer = document.getElementById("text-container");
const overlayImage = document.getElementById("overlay-image");

let currentIndex = 0;
let charIndex = 0;
let typingInProgress = false;
let isTypingStopped = false;

let indices = Array.from({ length: storyTexts.length }, (_, i) => i);
shuffleArray(indices);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function typeWriter() {
    typingInProgress = true;
    if (charIndex < storyTexts[indices[currentIndex]].length && !isTypingStopped) {
        const char = storyTexts[indices[currentIndex]].charAt(charIndex);
        if (char === '\n') {
            textContainer.innerHTML += '</p><p>';  // Add closing and opening paragraph tags at newline
        } else {
            textContainer.innerHTML += char;
        }
        charIndex++;
        setTimeout(typeWriter, 20);
    } else {
        typingInProgress = false;
    }
}


function changeImage() {
    if (typingInProgress) {
        isTypingStopped = true;
        setTimeout(changeImage, 100);
        return;
    }

    isTypingStopped = false;
    currentIndex++;
    if (currentIndex >= indices.length) {
        currentIndex = 0;
        shuffleArray(indices); // Shuffle only after all stories have been displayed
    }
    
    charIndex = 0;
    textContainer.innerHTML = "";
    overlayImage.src = imagePaths[indices[currentIndex]];
    typeWriter();
}

overlayImage.addEventListener("click", changeImage);

// Start
changeImage();

document.getElementById('storyForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting the old-fashioned way
    event.preventDefault();
    console.log('Form submitted'); // New log statement

    // Get the values from the form
    var readingLevel = document.getElementById('readingLevel').value;
    var characterName = document.getElementById('characterName').value;
    var genre = document.getElementById('genre').value;
    var numQuestions = document.getElementById('numQuestions').value;
    var difficultyLevel = document.getElementById('difficultyLevel').value;

    // Prepare data to send
    var data = {
        'readingLevel': readingLevel,
        'characterName': characterName,
        'genre': genre,
        'numQuestions': numQuestions,
        'difficultyLevel': difficultyLevel
    };

    // Send data to the server
    fetch('/.netlify/functions/generateStory', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Received response from server"); // New log statement
        document.getElementById('story').innerText = data.story;
        document.getElementById('questions').innerText = data.questions.join('\n');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
});