var excuses = [
    "My team won't commit to a group project idea.",
    "My client has sent a 10th revision today.",
    "My client has still not sent our copy.",
    "Shannon won't stop talking about Nachos.",
    "I'm not mad...I'm just disappointed.",
    "The Taco Bell handheld nachos are NOT as good as advertised.",
    ];

function randomText (randNo) {
    var excuse = document.getElementById('excuse');
    excuse.innerHTML = excuses[randNo];
}

function randomNumber () {
    return Math.floor(Math.random() * excuses.length) + 1;
}

randomText(randomNumber());
