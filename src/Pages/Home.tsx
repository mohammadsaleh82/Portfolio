import { Box, Typography } from "@mui/material";
import HomeImage from "../assets/wallhaven-2eqpzm.png";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useTheme } from "@emotion/react";
import ParticlesBg from "../Components/Particles/ParticlesBg";

const Home = () => {
  const strings = [
    "من یک توسعه دهنده فول استک هستم",
    "من یک توسعه دهنده .NET هستم",
    "من یک توسعه دهنده ReactJs هستم",
  ];
  const theme = useTheme();
  const nameRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const nameType = new Typed(nameRef.current, {
      strings: ["[[محمد صالح انجم شعاع]]"],
      typeSpeed: 60,
      showCursor: false,
      backDelay: 80,
    });

    const infoType = new Typed(infoRef.current, {
      strings: strings,
      typeSpeed: 80,
      backDelay: 80,
      startDelay: 1500,
      showCursor: false,
      loop: true,
    });

    return () => {
      nameType.destroy();
      infoType.destroy();
    };
  }, [strings]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${HomeImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
     <ParticlesBg/> 
      <Typography color="tomato" variant="h3" ref={nameRef}>
        [[محمد صالح انجم شعاع]]
      </Typography>
      <Typography
        ref={infoRef}
        variant="h4"
        color="whitesmoke"
        sx={{
          textDecoration: "underline",
          textDecorationColor: theme.palette.primary.main,
        }}
      />
      <Typography variant="h4">Hello World</Typography>
    </Box>
  );
};

export default Home;
