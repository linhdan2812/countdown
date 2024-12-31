(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "01/01/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            // document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "Chúc mừng năm mới";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0)
}());

function createFirework() {
    const container = document.querySelector('.firework-container');
    const firework = document.createElement('div');
    firework.className = 'firework';

    // Set random position for firework - left: 0-100vw, top: 0-100vh
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.top = `${Math.random() * 100}vh`;

    const explosion = document.createElement('div');
    explosion.className = 'explosion';

    // Create particles
    for (let i = 0; i < 36; i++) {
        const particle = document.createElement('span');
        const angle = (i * 10) * Math.PI / 180;
        const velocity = Math.random() * 50 + 50;

        particle.style.setProperty('--x', `${Math.cos(angle) * velocity}px`);
        particle.style.setProperty('--y', `${Math.sin(angle) * velocity}px`);
        particle.style.animation = `explode 12s ease-out forwards ${Math.random() * 0.3}s`;

        explosion.appendChild(particle);
    }

    firework.appendChild(explosion);
    container.appendChild(firework);

    setTimeout(() => {
        container.removeChild(firework);
    }, 6000);
}

// Create fireworks every second
setInterval(createFirework, 500);