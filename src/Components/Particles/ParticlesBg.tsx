import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine, Container } from "tsparticles-engine";
import { loadFull } from "tsparticles";
// import { options } from "../../Constants/Particles";

const ParticlesBg: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          destroy: {
            mode: "split",
            split: {
              count: 1,
              factor: {
                value: {
                  min: 2,
                  max: 4,
                },
              },
              rate: {
                value: 100,
              },
              particles: {
                life: {
                  count: 1,
                  duration: {
                    value: {
                      min: 2,
                      max: 3,
                    },
                  },
                },
                move: {
                  speed: {
                    min: 10,
                    max: 15,
                  },
                },
              },
            },
          },
          number: {
            value: 80,
          },
          color: {
            value: [
              "#3998D0",
              "#2EB6AF",
              "#A9BD33",
              "#FEC73B",
              "#F89930",
              "#F45623",
              "#D62E32",
              "#EB586E",
              "#9952CF",
            ],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1,
          },
          size: {
            value: {
              min: 10,
              max: 15,
            },
          },
          collisions: {
            enable: true,
            mode: "bounce",
          },
          move: {
            enable: true,
            speed: 3,
            outModes: "bounce",
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "pop",
            },
          },
        },
        background: {
          color: "#000000",
        },
      }}
    />
  );
};

export default ParticlesBg;
