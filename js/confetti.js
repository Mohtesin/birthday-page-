const startConfetti = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ['#ff0', '#0f0', '#00f', '#f00', '#ff00ff', '#00ffff'];

    const createParticle = () => {
        const particle = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 1,
            direction: Math.random() * 2 * Math.PI
        };
        particles.push(particle);
    };

    const updateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle, index) => {
            particle.x += Math.cos(particle.direction) * particle.speed;
            particle.y += Math.sin(particle.direction) * particle.speed;
            particle.y += 0.1; // Gravity effect

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

            if (particle.y > canvas.height) {
                particles.splice(index, 1);
            }
        });
    };

    const animate = () => {
        if (particles.length < 100) {
            createParticle();
        }
        updateParticles();
        requestAnimationFrame(animate);
    };

    animate();
};

document.addEventListener('DOMContentLoaded', () => {
    startConfetti();
});