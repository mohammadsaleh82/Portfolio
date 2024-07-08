import { IOptions, RecursivePartial } from "tsparticles-engine";

export const Links= {
  fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: {
        enable: true,
        mode: "attract",
        parallax: { enable: false, force: 60, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      attract: { distance: 200, duration: 0.4, factor: 5 },
    },
  },
  particles: {
    color: { value: "#3CABBB" },
    line_linked: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
    //   image: {
    //     height: 100,
    //     replace_color: true,
    //     src: "images/github.svg",
    //     width: 100,
    //   },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle",
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5,
    },
  },
  polygon: {
    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: "",
  },
  retina_detect: true,
};

export const three= {
    backgroundMask: {
      enable: true,
      cover: {
        value: {
          r: 0,
          g: 0,
          b: 0
        }
      }
    },
    background: {
      image:
        "linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)",
      size: "100% 100%",
      repeat: "no-repeat"
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      color: {
        value: "#000000",
        animation: {
          enable: true,
          speed: 30
        }
      },
      move: {
        direction: "bottom",
        enable: true,
        outModes: {
          default: "out"
        },
        size: true,
        speed: {
          min: 1,
          max: 3
        }
      },
      number: {
        value: 500,
        density: {
          enable: true,
          area: 800
        }
      },
      opacity: {
        value: 1,
        animation: {
          enable: false,
          startValue: "max",
          destroy: "min",
          speed: 0.3,
          sync: true
        }
      },
      rotate: {
        value: {
          min: 0,
          max: 360
        },
        direction: "random",
        move: true,
        animation: {
          enable: true,
          speed: 60
        }
      },
      tilt: {
        direction: "random",
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360
        },
        animation: {
          enable: true,
          speed: 60
        }
      },
      shape: {
        type: ["triangle", "circle", "square"]
      },
      size: {
        value: {
          min: 3,
          max: 5
        }
      },
      roll: {
        darken: {
          enable: true,
          value: 30
        },
        enlighten: {
          enable: true,
          value: 30
        },
        enable: true,
        speed: {
          min: 15,
          max: 25
        }
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15
        }
      }
    }
}

 

export const options: RecursivePartial<IOptions> = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 3,
    },
    move: {
      enable: true,
      speed: 1,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 100,
      },
      push: {
        quantity: 4, // changed from particles_nb to quantity
      },
    },
  },
};