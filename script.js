// Dyna Flow visualisation script
// This script implements a simple particle flow field simulation to
// illustrate the concept of dynamic semantic flows. Each particle moves
// according to a velocity field defined by sine and cosine functions. The
// resulting patterns evoke the continuous transformation of concepts and
// relationships described in the Dynamic Mathematics paper.

/* global window, document, requestAnimationFrame */

(function () {
  const canvas = document.getElementById('flow-canvas');
  const ctx = canvas.getContext('2d');
  const particles = [];
  const NUM_PARTICLES = 800; // Number of particles in the simulation
  const SPEED = 0.6; // Controls the overall speed of particles

  // Resize the canvas to fill the window
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Initialize particles with random positions
  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      });
    }
  }

  // Compute the velocity at a point (x, y) based on a simple vector field.
  // This uses sine and cosine functions to create swirling patterns.
  function velocityAt(x, y) {
    // Scale down coordinates to control field frequency
    const scale = 0.003;
    const vx = Math.cos(y * scale) * SPEED;
    const vy = Math.sin(x * scale) * SPEED;
    return { vx, vy };
  }

  // Update particle positions based on the velocity field.
  function updateParticles() {
    for (const p of particles) {
      const v = velocityAt(p.x, p.y);
      p.x += v.vx;
      p.y += v.vy;
      // Wrap particles around the edges to create an endless flow
      if (p.x < 0) p.x += canvas.width;
      if (p.x >= canvas.width) p.x -= canvas.width;
      if (p.y < 0) p.y += canvas.height;
      if (p.y >= canvas.height) p.y -= canvas.height;
    }
  }

  // Draw particles onto the canvas with a trailing effect.
  function drawParticles() {
    // Draw a semi-transparent rectangle over the whole canvas to fade trails
    ctx.fillStyle = 'rgba(14, 21, 36, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw each particle as a small point
    ctx.fillStyle = '#88c0d0';
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
  // Dyna Flow visualisation script
// This script implements a simple particle flow field simulation to
// illustrate the concept of dynamic semantic flows. Each particle moves
// according to a velocity field defined by sine and cosine functions. The
// resulting patterns evoke the continuous transformation of concepts and
// relationships described in the Dynamic Mathematics paper.

/* global window, document, requestAnimationFrame */

(function () {
  const canvas = document.getElementById('flow-canvas');
  const ctx = canvas.getContext('2d');
  const particles = [];
  const NUM_PARTICLES = 800; // Number of particles in the simulation
  const SPEED = 0.6; // Controls the overall speed of particles

  // Resize the canvas to fill the window
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Initialize particles with random positions
  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      });
    }
  }

  // Compute the velocity at a point (x, y) based on a simple vector field.
  // This uses sine and cosine functions to create swirling patterns.
  function velocityAt(x, y) {
    // Scale down coordinates to control field frequency
    const scale = 0.003;
    const vx = Math.cos(y * scale) * SPEED;
    const vy = Math.sin(x * scale) * SPEED;
    return { vx, vy };
  }

  // Update particle positions based on the velocity field.
  function updateParticles() {
    for (const p of particles) {
      const v = velocityAt(p.x, p.y);
      p.x += v.vx;
      p.y += v.vy;
      // Wrap particles around the edges to create an endless flow
      if (p.x < 0) p.x += canvas.width;
      if (p.x >= canvas.width) p.x -= canvas.width;
      if (p.y < 0) p.y += canvas.height;
      if (p.y >= canvas.height) p.y -= canvas.height;
    }
  }

  // Draw particles onto the canvas with a trailing effect.
  function drawParticles() {
    // Draw a semi-transparent rectangle over the whole canvas to fade trails
    ctx.fillStyle = 'rgba(14, 21, 36, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw each particle as a small point
    ctx.fillStyle = '#88c0d0';
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Main animation loop
  function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
  }

  // Set up the simulation
  function init() {
    resizeCanvas();
    initParticles();
    // Clear the canvas initially
    ctx.fillStyle = '#0e1524';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    animate();
  }

  // Handle window resizing
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  // Kick off when DOM is ready
  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
    ctx.fill();
    }
  }

  // Main animation loop
  function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
  }

  // Set up the simulation
  function init() {
    resizeCanvas();
    initParticles();
    // Clear the canvas initially
    ctx.fillStyle = '#0e1524';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    animate();
  }

  // Handle window resizing
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  // Kick off when DOM is ready
  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
