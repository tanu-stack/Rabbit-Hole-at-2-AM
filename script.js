const curiosities = [
    // Psychology
    {
      title: "Baader-Meinhof Phenomenon",
      category: "Psychology",
      description: "Also known as the frequency illusion. It occurs when a thing you just found out about suddenly seems to crop up everywhere. It’s driven by two psychological processes: selective attention and confirmation bias.",
      fact: "Once your brain learns a new word, car model, or concept, it starts subconsciously seeking it out in the background of your environment.",
      link: "https://en.wikipedia.org/wiki/Frequency_illusion"
    },
    {
      title: "Jamais Vu",
      category: "Psychology",
      description: "The opposite of Deja Vu. It’s the phenomenon of experiencing a situation that one recognizes in some fashion, but that nonetheless seems very unfamiliar. It often involves a sudden sense of eeriness.",
      fact: "You can induce Jamais Vu by writing or saying a familiar word repeatedly until it loses its meaning and looks absurd. This is called 'semantic satiation'.",
      link: "https://en.wikipedia.org/wiki/Jamais_vu"
    },
    {
      title: "The Tetris Effect",
      category: "Psychology",
      description: "When people devote so much time and attention to an activity that it begins to pattern their thoughts, mental images, and dreams. People playing Tetris for hours often see falling blocks in their peripheral vision or dreams.",
      fact: "It can apply to almost anything: sorting algorithms, chess games, or even spatial packing when looking at real-world objects in a grocery store.",
      link: "https://en.wikipedia.org/wiki/Tetris_effect"
    },
    {
      title: "The Overview Effect",
      category: "Psychology",
      description: "A cognitive shift in awareness reported by some astronauts during spaceflight, often while viewing the Earth from orbit or the Moon. They report feeling a deep connection to humanity and a realization of Earth's extreme fragility.",
      fact: "Astronauts describe a profound permanent shift where national boundaries literally vanish before their eyes and the need to protect our pale blue dot becomes overwhelming.",
      link: "https://en.wikipedia.org/wiki/Overview_effect"
    },
    {
      title: "Capgras Delusion",
      category: "Psychology",
      description: "A bizarre psychiatric disorder in which a person holds a delusion that a friend, spouse, parent, or other close family member has been replaced by an identical impostor.",
      fact: "It's believed to be caused by a disconnection between the visual recognition center of the brain and the area governing deep emotional response.",
      link: "https://en.wikipedia.org/wiki/Capgras_delusion"
    },
    // Everyday Phenomena
    {
      title: "Phantom Vibration Syndrome",
      category: "Everyday",
      description: "The perception that one's mobile phone is vibrating or ringing when it is not. As we become hyper-vigilant for social signals, our brains misinterpret sensory noise—like clothing rubbing against skin—as a notification.",
      fact: "Studies suggest over 80% of frequent smartphone users report experiencing this false sensation.",
      link: "https://en.wikipedia.org/wiki/Phantom_vibration_syndrome"
    },
    {
      title: "Semantic Satiation",
      category: "Everyday",
      description: "A psychological phenomenon in which repetition causes a word or phrase to temporarily lose meaning for the listener, who then perceives the speech as repeated meaningless sounds.",
      fact: "It happens because the rapid firing of specific neural pathways causes a phenomenon called 'reactive inhibition'—your brain basically gets tired of processing the word.",
      link: "https://en.wikipedia.org/wiki/Semantic_satiation"
    },
    {
      title: "The Doorway Effect",
      category: "Everyday",
      description: "Ever walk into a room and instantly forget why you went in? This is the boundary-updating problem. The brain organizes memories by environment. Walking through a doorway 'updates' your mental event model, severely disrupting short-term memory.",
      fact: "Studies have shown memory recall drops off significantly when moving from one conceptual space to another, even in virtual reality.",
      link: "https://en.wikipedia.org/wiki/Location-updating_effect"
    },
    {
      title: "Earworms",
      category: "Everyday",
      description: "A catchy piece of music that continually repeats through a person's mind after it is no longer playing. It’s a form of involuntary musical imagery.",
      fact: "One highly effective and scientifically backed way to stop an earworm is to vigorously chew gum. The motor pathways for vocalizing and chewing interfere with the auditory looping.",
      link: "https://en.wikipedia.org/wiki/Earworm"
    },
    {
      title: "Lethologica",
      category: "Everyday",
      description: "The psychological phenomenon where you temporarily cannot remember a specific word. More commonly known as 'Tip of the Tongue' syndrome.",
      fact: "It happens because your brain has successfully retrieved the meaning and context of the word, but temporarily failed to retrieve its specific phonological code.",
      link: "https://en.wikipedia.org/wiki/Tip_of_the_tongue"
    },
    // The Bizarre / Archive
    {
      title: "Paris Syndrome",
      category: "Culture",
      description: "A sense of severe disappointment exhibited by individuals when visiting Paris, who find that the city genuinely was not what they expected. It mostly affects Japanese tourists and can lead to severe physiological and psychiatric symptoms.",
      fact: "The Japanese embassy in Paris reputedly maintains a 24-hour hotline for citizens experiencing extreme culture shock and delusion.",
      link: "https://en.wikipedia.org/wiki/Paris_syndrome"
    },
    {
      title: "Folie à Deux",
      category: "Psychology",
      description: "Also known as shared psychosis. A psychiatric syndrome in which symptoms of a delusional belief, and sometimes hallucinations, are transmitted from one individual to another.",
      fact: "It usually occurs between individuals living in close proximity and social isolation. When the two are separated, the delusion in the secondary person often rapidly resolves.",
      link: "https://en.wikipedia.org/wiki/Folie_%C3%A0_deux"
    },
    {
      title: "Aphantasia",
      category: "Psychology",
      description: "The inability to voluntarily create mental images in one's head. When asked to picture an apple, they don't see a faint outline—they physically see nothing but the back of their eyelids.",
      fact: "Many people with aphantasia live their whole lives not realizing that when people say 'picture this', they actually mean forming a visual image. They assume it's just a metaphor.",
      link: "https://en.wikipedia.org/wiki/Aphantasia"
    },
    {
      title: "Blind Sight",
      category: "Psychology",
      description: "The bewildering ability of people who are cortically blind (due to lesions in their primary visual cortex) to respond to visual stimuli that they emphatically do not consciously see.",
      fact: "People with blind sight will claim they are just guessing, yet they can correctly navigate dynamic obstacles, catch thrown objects, or guess emotions on faces with incredible accuracy.",
      link: "https://en.wikipedia.org/wiki/Blindsight"
    },
    {
      title: "The Mandela Effect",
      category: "Culture",
      description: "A phenomenon where a large mass of people collectively misremember a fact or event occurring; named after the false memory that Nelson Mandela died in prison in the 1980s.",
      fact: "Others vividly remember the Monopoly man having a monocle, or Pikachu having a black tip on his tail. Neither of those have ever been true.",
      link: "https://en.wikipedia.org/wiki/False_memory#Mandela_Effect"
    }
];
  
// App State
let currentDepth = 0;
let viewedIndices = new Set();
let todayIndex = Math.floor(Math.random() * curiosities.length);
// DOM Elements
const rabbitHoleBtn = document.getElementById('rabbit-hole-btn');
const goDeeperBtn = document.getElementById('go-deeper-btn');
const depthValue = document.getElementById('depth-value');
const resultArea = document.getElementById('result-area');
const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-description');
const factText = document.getElementById('fact-text');
const resultLink = document.getElementById('result-link');
const categoryBadge = document.getElementById('category-badge');
const todayCuriosityArea = document.getElementById('today-curiosity');
const relatedGrid = document.getElementById('related-grid');
const mainCard = document.getElementById('main-result-card');
// Random utility avoiding already viewed
function getRandomCuriosityIndex(excludeIndices = []) {
    let available = curiosities.map((_, i) => i).filter(i => !excludeIndices.includes(i));
    if (available.length === 0) {
        available = curiosities.map((_, i) => i).filter(i => i !== todayIndex);
        viewedIndices.clear(); 
    }
    return available[Math.floor(Math.random() * available.length)];
}
// Reveal a rabbit hole
function revealRabbitHole() {
    currentDepth++;
    depthValue.textContent = currentDepth;
    depthValue.classList.remove('pulse');
    void depthValue.offsetWidth; // trigger reflow
    depthValue.classList.add('pulse');
    const nextIndex = getRandomCuriosityIndex([...viewedIndices, todayIndex]);
    viewedIndices.add(nextIndex);
    const data = curiosities[nextIndex];
    // Hide briefly for animation
    resultArea.style.opacity = '0';
    resultArea.style.transform = 'translateY(20px)';
    
    // Reset 3d tilt instantly
    if(mainCard) {
        mainCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
    
    setTimeout(() => {
        resultTitle.textContent = data.title;
        resultDesc.textContent = data.description;
        factText.textContent = data.fact;
        resultLink.href = data.link;
        categoryBadge.textContent = data.category;
        
        // Clean classification
        if(data.category === 'Everyday') {
            categoryBadge.className = 'category-badge everyday';
        } else if (data.category === 'Culture') {
            categoryBadge.className = 'category-badge culture';
        } else {
            categoryBadge.className = 'category-badge';
        }
        resultArea.classList.remove('hidden');
        
        // Retrigger transition
        requestAnimationFrame(() => {
            resultArea.style.opacity = '1';
            resultArea.style.transform = 'translateY(0)';
            
            // Scroll to the result area smoothly if not visible
            const rect = resultArea.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
                resultArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }, 400); 
}
function initializeStaticSections() {
    // Populate Today's Curiosity
    const todayData = curiosities[todayIndex];
    let badgeClass = '';
    if (todayData.category === 'Everyday') badgeClass = 'everyday';
    if (todayData.category === 'Culture') badgeClass = 'culture';
    todayCuriosityArea.innerHTML = `
        <div class="card-header" style="margin-bottom: 1.5rem;">
            <span class="category-badge ${badgeClass}">${todayData.category}</span>
        </div>
        <h4 class="card-title" style="font-size: 2rem; margin-bottom: 1rem;">${todayData.title}</h4>
        <p class="card-desc" style="margin-bottom: 1.5rem;">${todayData.description}</p>
        <div class="hidden-fact" style="margin-bottom: 2rem;">
            <span class="fact-label">Fascinating Fact</span>
            <p>${todayData.fact}</p>
        </div>
        <div class="card-actions">
            <a href="${todayData.link}" target="_blank" rel="noopener noreferrer" class="read-more-btn">
                Dive into the Research 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
        </div>
    `;
    // Populate Archives
    const shownRelated = [];
    let exclude = [todayIndex];
    for (let i = 0; i < 4; i++) {
        const rIndex = getRandomCuriosityIndex(exclude);
        if (rIndex !== undefined) {
            shownRelated.push(curiosities[rIndex]);
            exclude.push(rIndex);
        }
    }
    relatedGrid.innerHTML = shownRelated.map(item => `
        <div class="mini-card group">
            <span class="mini-category">${item.category}</span>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="mini-link">
                Investigate 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
        </div>
    `).join('');
}
// Add scrolling behavior to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        navbar.style.padding = '1rem 5%';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '1.5rem 5%';
    }
});
// Interactive 3D Tilt Effect on Main Card
document.addEventListener('mousemove', (e) => {
    if(resultArea.classList.contains('hidden') || window.innerWidth < 768) return;
    
    const rect = mainCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if(x > -50 && x < rect.width + 50 && y > -50 && y < rect.height + 50) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltX = (y - centerY) / 30;
        const tiltY = (centerX - x) / 30;
        
        const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
        
        mainCard.style.transform = `perspective(1000px) rotateX(${clamp(tiltX, -5, 5)}deg) rotateY(${clamp(tiltY, -5, 5)}deg)`;
    } else {
        mainCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
});
document.addEventListener('mouseleave', () => {
    if(mainCard) mainCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});
// Buttons
rabbitHoleBtn.addEventListener('click', () => {
    if (currentDepth === 0) {
        document.querySelector('.btn-text').textContent = "Probe Deeper into the Mind";
        document.querySelector('.hero-action-area').classList.remove('delay-3'); // remove animation delay class on click so it doesn't wait
    }
    revealRabbitHole();
});
goDeeperBtn.addEventListener('click', revealRabbitHole);
// Mobile Menu Toggle logic
const mobileBtn = document.querySelector('.mobile-menu-btn');
mobileBtn.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.right = '0';
        navLinks.style.background = '#FAFAFC';
        navLinks.style.padding = '2rem';
        navLinks.style.border = '1px solid #E2E8F0';
        navLinks.style.borderRadius = '0 0 0 16px';
        navLinks.style.boxShadow = '-5px 5px 15px rgba(0,0,0,0.05)';
    }
});
// Initialization
initializeStaticSections();
// Canvas Background Light dust particles (Emerald hint)
const canvas = document.getElementById('particle-canvas');
if(canvas) {
    const ctx = canvas.getContext('2d');
    let particlesArray;
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
    class Particle {
        constructor(x, y, dx, dy, size, alpha) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.size = size;
            this.alpha = alpha;
            this.baseAlpha = alpha;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
            gradient.addColorStop(0, `rgba(16, 185, 129, ${this.alpha})`); // Emerald trace
            gradient.addColorStop(1, `rgba(16, 185, 129, 0)`);
            ctx.fillStyle = gradient;
            ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
            if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;
            
            this.x += this.dx;
            this.y += this.dy;
            
            // Soft pulse
            this.alpha = this.baseAlpha + Math.sin(Date.now() / 2000 + this.x) * 0.05;
            this.draw();
        }
    }
    function initParticles() {
        particlesArray = [];
        let numParticles = (canvas.height * canvas.width) / 15000;
        if (numParticles > 60) numParticles = 60;
        
        for (let i = 0; i < numParticles; i++) {
            let size = (Math.random() * 20) + 5;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let dx = (Math.random() * 0.4) - 0.2;
            let dy = (Math.random() * 0.4) - 0.2;
            let alpha = Math.random() * 0.1 + 0.01;
            particlesArray.push(new Particle(x, y, dx, dy, size, alpha));
        }
    }
    function animateParticles() {
        requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
    }
    initParticles();
    animateParticles();
}

