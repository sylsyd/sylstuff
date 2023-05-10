const storyTexts = [
    `The girl, no older than nineteen, perched on the edge of the bed, her legs drawn up and her arms wrapped tightly around her knees. The sunlight filtered through the grimy window, casting a warm glow on her pale skin, which seemed almost translucent against the vibrant orange wallpaper. The garish pattern behind her seemed to writhe and twist, as if it were a living thing eager to engulf her in its monstrous embrace.`,
    
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

    `Placeholder for now 4`,
    `In the dim, flickering light of the decrepit diner, a motley group of clowns gathered around a worn-out table. The peeling vinyl seats creaked beneath their weight, while the chipped Formica tabletop threatened to give way at any moment. The clowns, a bizarre assembly of adults, teenagers, and children, wore a variety of tattered costumes, their faces painted in garish colors, and their eyes filled with a mix of sorrow and malice.

    Outside, the twilight sky seemed to press down on the diner, its cracked neon sign buzzing and sputtering in the encroaching darkness. The air inside was thick with the smell of grease and stale coffee, the scent of lingering desperation and lost dreams. Yet, these strange and frightening clowns had found a haven of sorts within the diner's crumbling walls.
    
    Their laughter, a cacophony of manic cackles and unsettling chuckles, echoed through the empty room. They took turns sharing dark and twisted stories, their words dripping with a cruel delight in the macabre. The youngest clown, no more than six, told a tale of a haunted carousel, its ghostly horses ridden by the spirits of long-lost children. The oldest, a hunched figure with a grotesque grin, whispered about a sinister puppet show that stole the souls of its unsuspecting audience.
    
    As they spoke, the clowns picked at their meager meals, the greasy food a stark contrast to the sinister tales they shared. The adults and teenagers took turns comforting the smallest ones, their painted smiles hiding a deep, unspoken sadness that clung to their very bones.`,
    `The carousel, an emblem of whimsy, bore the weight of grime and despair. A woman, her raven hair cropped short and adorned with a fringe, stood in its orbit. Her eyes, framed by weary crescents, glimmered with a cocktail of sadness, defiance, and exhaustion. Behind her, a motley crew of men, equally aged yet unburdened by the gravity of existence, clung to their painted steeds. As the ride turned, their laughter pierced the air, a cacophony of misplaced joy.

A deity, if one cared to look, might have smirked at the woman's plight, this incongruous juxtaposition of mirth and misery. She was like a reluctant Eve, bound to a carousel of damnation. The carousel groaned, its gears grinding against the backdrop of her quiet contemplation. One could almost hear the echoes of a thousand philosophers, whispering of the human condition, our cursed dance with life and all its absurdities.

In this scene, a priest might have perceived redemption, but the woman's face betrayed no such hope. In this spinning purgatory, she lingered between the poles of grace and despair, her expression a frozen testament to the bitter joke of existence. And so, the carousel turned, indifferent to the burdens it carried, as the woman stood, rooted in her private darkness, a lone figure bearing witness to the cosmic irony of the human condition.`
  ];
    
  const imagePaths = ["image1.png", "image2.png", "image3.jpg", "image4.jpg", "image5.jpg", "image6.png"];

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