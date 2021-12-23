import { useTheme } from "styled-components";

export const useParticlesConfig = () => {
  const theme = useTheme();

  return {
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    particles: {
      number: {
        value: 70,
        limit: 300,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.5,
          sync: false,
        },
      },
      size: {
        value: 25,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 10,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: theme.particles.lineColor,
        opacity: 1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: false,
          mode: "repulse",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        onClick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 100,
          duration: 2,
          opacity: 1,
          speed: 2,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    backgroundMask: {
      enable: true,
      cover: {
        color: {
          value: theme.particles.backgroundColor,
        },
      },
    },
    retina_detect: true,
    fps_limit: 60,
    background: {
      color: theme.colors[1],
    },
  };
};
