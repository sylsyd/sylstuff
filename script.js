    document.addEventListener('DOMContentLoaded', function() {

    console.log('Script loaded');

const storyTexts = [
    `The girl, no older than nineteen, perched on the edge of the bed, her legs drawn up and her arms wrapped tightly around her knees. The sunlight filtered through the grimy window, casting a warm glow on her pale skin, which seemed almost translucent against the vibrant orange wallpaper. The garish pattern behind her seemed to writhe and twist, as if it were a living thing eager to engulf her in its monstrous embrace. She was not looking at the camera, but rather seemed lost in the labyrinth of her own thoughts, a place where reality and fantasy were indistinguishable. Her eyes, large and doe-like, held a distant, vacant quality, as if they could see beyond the confines of the room and into another world. Her hair, a tangle of chestnut curls, framed her face like a halo, further enhancing the ethereal quality of her visage.

    In the twilight of her dreams, the girl would find solace, a place where the past could not haunt her and the future held no terror. And though the asylum sought to confine her, to strip her of her identity and her hope, she would endure. For within the depths of her soul, a flame burned brightly, a spark that could not be quenched by the cold, unyielding grip of the institution that sought to claim her.`,
    
    `In the dimly lit room, the wallpaper peeling at the edges like the rind of a long-forgotten fruit, Henry found himself seated on the edge of the sagging bed. The worn springs creaked beneath his weight, mirroring the heaviness that had settled in his chest. His gaze was fixed on the floor, the dust motes floating in the shafts of afternoon light that filtered through the grimy window. He was a man on the precipice of understanding, teetering between the realms of past and present, like a ghost caught between worlds.
    Beside him, Mei lingered in her own purgatory. Her raven hair, a cascade of midnight silk, framed her face as she stared into her cupped hands. They were small, delicate hands that had once traced the contours of Henry's face in tender moments now lost to the ravages of time. In the silence that stretched between them, she could feel the heat of his body, an unbearable warmth that threatened to singe her very soul. The red flush that colored her cheeks spoke of her shame, but the downcast eyes held a glimmer of defiance.    
    Their lives had become a jigsaw puzzle with pieces borrowed from different boxes, the jagged edges refusing to interlock, leaving only gaps and jagged voids. Henry, a man raised on the virtues of stoicism and tradition, found himself lost in a foreign landscape of emotions. His heart, now an uncharted territory, was a terrain he had never been taught to navigate. Mei, a woman bound by the expectations of her own culture, had traded one set of chains for another, the weight of her choices pressing down upon her like a yoke.`,
    
    `Under a coal-black sky, the sulky teenager, Ruby, stood next to her beaten bicycle, its once-gleaming red paint now a dull and chipped reminder of better days. A lone streetlamp cast eerie shadows across the deserted road, enveloping the girl in a pool of sickly yellow light. The silent night seemed to hold its breath as Ruby's flame-red hair shone defiantly in the otherwise dark world.

    Life in a small Southern town weighed heavily on Ruby, her dreams and aspirations trapped like fireflies in a mason jar. The locals treated her like an outcast, their judgmental whispers a constant companion to her solitude. But tonight, she had ventured out to escape the suffocating confines of her existence, seeking solace in the moonless night.
    
    A sudden gust of wind rustled the nearby trees, their spindly limbs reaching out like gnarled fingers. Ruby's eyes met the twisted branches, and for a moment, she saw herself reflected in their distorted forms—a girl desperate to escape, to spread her wings and take flight from this wretched place.
    
    As Ruby leaned against the bicycle, her thoughts wandered to the stories her mother used to tell, stories of far-off lands and adventurous souls. The woman's voice had been warm and soothing, a balm against the harsh reality of their lives. But the cancer had taken her mother, leaving Ruby alone to navigate the treacherous waters of this cruel town.
    
    A sudden, shrill cry pierced the silence. Startled, Ruby turned towards the sound. A thin, bedraggled cat emerged from the underbrush, its emerald eyes fixed on Ruby with a mixture of curiosity and suspicion. She knelt down and extended her hand, her heart aching for the creature that, like her, seemed to have nowhere to belong.
    
    The cat hesitated, then cautiously approached. As it rubbed against her hand, Ruby whispered a promise into the night air. "One day, we'll both leave this place, find a home where we're accepted and loved."
    `,

    `In the cold light of dawn, the sun breached the horizon, throwing its harsh, unforgiving heat on the tableau before it. A family of six – a man and woman, their countenances etched with the weary lines of an old, overused joke, stood beside their brood of three boys and a girl, the youngest. Each one was suited up in their Sunday best, all starched collars and polished shoes, a stark contrast to the dust-laden country road beneath them.

    Off in the distance, two houses stood – white and identical. Twins birthed from the same architectural plan. One was pristine, a beacon of the American Dream, its white picket fence gleaming under the morning sun. The other, though, was caught in the throes of a wild, uncontrollable fire, its screams silenced by the crackling of its devouring.
    
    The family watched, their expressions a mix of dread and acceptance. There was no rush to douse the flames, no cries of despair. Just a quiet acknowledgment of the absurdity before them.
    
    The children stared, wide-eyed and silent, their innocence flickering under the harsh reality. Perhaps they were learning, that sometimes, homes caught fire under the indifferent gaze of the morning sun, and all one could do was stand by the side of the road in their neat clothes and watch.
    
    The father, his face chiseled with lines of age and wisdom, held his wife close, her eyes reflecting the dancing flames, a silent lament for the life being consumed by the fire. It was a sight that would have moved the most hardened of hearts, but on this lonely country road, their audience was the indifferent expanse of the world.
    
    This was no grand saga of heroes and villains. There were no metaphors to be unraveled, no allegories to be interpreted. It was a simple, stark truth – as raw and real as the fire that raged on.`,
    `In the dim, flickering light of the decrepit diner, a motley group of clowns gathered around a worn-out table. The peeling vinyl seats creaked beneath their weight, while the chipped Formica tabletop threatened to give way at any moment. The clowns, a bizarre assembly of adults, teenagers, and children, wore a variety of tattered costumes, their faces painted in garish colors, and their eyes filled with a mix of sorrow and malice.

    Outside, the twilight sky seemed to press down on the diner, its cracked neon sign buzzing and sputtering in the encroaching darkness. The air inside was thick with the smell of grease and stale coffee, the scent of lingering desperation and lost dreams. Yet, these strange and frightening clowns had found a haven of sorts within the diner's crumbling walls.
    
    Their laughter, a cacophony of manic cackles and unsettling chuckles, echoed through the empty room. They took turns sharing dark and twisted stories, their words dripping with a cruel delight in the macabre. The youngest clown, no more than six, told a tale of a haunted carousel, its ghostly horses ridden by the spirits of long-lost children. The oldest, a hunched figure with a grotesque grin, whispered about a sinister puppet show that stole the souls of its unsuspecting audience.
    
    As they spoke, the clowns picked at their meager meals, the greasy food a stark contrast to the sinister tales they shared. The adults and teenagers took turns comforting the smallest ones, their painted smiles hiding a deep, unspoken sadness that clung to their very bones.`,
    `The carousel, an emblem of whimsy, bore the weight of grime and despair. A woman, her raven hair cropped short and adorned with a fringe, stood in its orbit. Her eyes, framed by weary crescents, glimmered with a cocktail of sadness, defiance, and exhaustion. Behind her, a motley crew of men, equally aged yet unburdened by the gravity of existence, clung to their painted steeds. As the ride turned, their laughter pierced the air, a cacophony of misplaced joy.

A deity, if one cared to look, might have smirked at the woman's plight, this incongruous juxtaposition of mirth and misery. She was like a reluctant Eve, bound to a carousel of damnation. The carousel groaned, its gears grinding against the backdrop of her quiet contemplation. One could almost hear the echoes of a thousand philosophers, whispering of the human condition, our cursed dance with life and all its absurdities.

In this scene, a priest might have perceived redemption, but the woman's face betrayed no such hope. In this spinning purgatory, she lingered between the poles of grace and despair, her expression a frozen testament to the bitter joke of existence. And so, the carousel turned, indifferent to the burdens it carried, as the woman stood, rooted in her private darkness, a lone figure bearing witness to the cosmic irony of the human condition.`,

`Under the restaurant's soft light, a man sat, his face a palette of white, a caricature of joy. Clown makeup traced his features, a deceiving mask of merriment. His hair, styled in a defiant pompadour, contrasted with the large red bow tie and the black and white dotted jacket he wore.

In his hands, an acoustic guitar hummed, its notes weaving through the clatter of cutlery and hushed conversations. It sang tales of love and loss, a symphony of life echoed in the confines of a restaurant.

Before him, untouched, sat a cup of coffee, its steam curling upwards, and a piece of cake, its icing as flawless as his painted smile.

This scene, drenched in irony and absurdity, was a silent song in itself. A clown, the harbinger of laughter, sat immersed in a melody, as melancholic as it was beautiful. Each strum, a veiled secret, each note, a teardrop hidden behind the clown's eyes.`,

`In a time and place that bore no name but the ever-humming human tide, a girl, a mere sprout in her early twenties, drifted through the masses. She, with her large eyes the color of twilight and spectacles of a magnified diameter, wore a red coat that announced itself like a poppy in a field of wheat. Underneath this startling spectacle was a simpler brown shirt, as humble as the earth it resembled.

She wandered, adrift in the sea of bodies, her figure no more noticeable than a single stroke of paint on a canvas of chaos. That was her way, never quite becoming the focus, never quite fading into the obscurity. A paradoxical existence, she bore with a grace that echoed the fragile balance of a butterfly on the tip of a thistle.

There was something about her, an oddity, an uncanny aura that drew the onlookers in, yet kept them at an arm's length. Her presence was a riddle, a half-whispered joke to which only she knew the punchline. She did not look at the camera; instead, her gaze pierced the crowd, dissected the clamoring throng of humanity with an ineffable curiosity.

She had the look of a girl who had seen the world for what it was - a parade of grimaces and grins, pretensions and promises. Yet, she was not cynical, her heart not hardened by the grotesque spectacle of life. She bore the weight of wisdom and innocence, a peculiar blend of knowing yet not being burdened by it.

Her spectacles, large and round as they were, hinted at her observant nature. Through them, the world was a story, a series of narratives that unfolded before her eyes. The crowd, a motley of faces, each with a tale to tell, each a chapter in the grand book of existence.
`,

`The smell of freshly baked birthday cake permeated the room. An array of lit candles flickered atop its pink frosting, their warm glow throwing dancing shadows against the impassive face of a man in a satan costume.

He sat there, an oddity in an otherwise mundane scene, donning plastic horns and a black leather vest. His face was a canvas of eerie makeup, giving him a ghastly appearance. And yet, beneath this facade, a certain sadness lingered. His eyes, windows to his soul, bore the weight of a thousand untold stories.

On the table, a present sat, haphazardly wrapped as if it were an afterthought, its paper crinkling under the strain of whatever secret it held within. It sat there, as out of place as the man himself, adding to the absurdity of the scene.

No cheer, no laughter, no celebratory clinking of glasses. Just a man, dressed as the devil himself, sitting in the disquieting silence, the chorus of 'Happy Birthday' replaced with the soft whisper of the burning candles.


In the quietude, one could almost hear the soft sigh of the universe. A sigh that filled the room, mingling with the smell of the birthday cake, hanging heavy in the air like a reminder of the absurdity of it all.

There was no grand revelation, no profound wisdom to be gleaned. Just a man, a cake, and a present - an unlikely trinity, bound together by the silent chords of irony and sadness. A slice of life served with a side of existential ennui.`,

`On a day when autumn had painted its melancholy across the suburban landscape, two figures emerged from the fog, as if stepping out of a dream. Their faces concealed behind masks - one a bear or perhaps a mouse, the other a cat - they sat before a nondescript house, holding hands.

Who they were behind those masks, no one could tell. A couple lost in their little world? A father sharing a moment with his daughter? The masks kept their secrets well, adding to the enigma of the scene.

The man, if indeed it was a man, was dressed in a green jacket, a white shirt, and a red bow - an unlikely blend of formality and the bizarre. The girl, clad in a pink dress, was a splash of color against the gray backdrop of the day. They sat there, a pair of surreal characters in an otherwise ordinary suburban tableau.

This was no ordinary day, though. The fog, the masks, the silent house in the background - they all conspired to create a scene that belonged more in the pages of a storybook than in the mundane reality of a suburban neighborhood. And yet, here they were, their hands entwined, silent spectators to the unfurling drama of life.

Their story was a silent song, sung in the key of irony and melancholy. Was it a dance of love, or a shared moment of solitude? Were they hiding from the world, or revealing their true selves behind those masks?

Life had placed them there, in front of that house, on that foggy autumn day. And there they sat, holding hands, their silence more telling than any words could ever be.`,

];




const imagePaths = ["image1.png", "image2.png", "image3.jpg", "image4.jpg", "image5.jpg", "image6.png", "image7.png","image8.png", "image9.png", "image10.png"];

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
        textContainer.innerHTML += storyTexts[indices[currentIndex]].charAt(charIndex);
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