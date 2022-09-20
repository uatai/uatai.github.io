particlesJS("particles", {
  particles: {
    number: { value: 150 },
    opacity: {
      value: 0.5,
      anim: {
        enable: true,
        speed: 1,
      },
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 5,
      direction: "left",
      random: true,
      straight: true,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
    },
  },
});
