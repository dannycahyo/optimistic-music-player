import { useEffect } from "react";
import { Container, Box, AspectRatio, Image } from "@chakra-ui/react";

import { useMachine } from "@xstate/react";
import { match } from "ts-pattern";

import { musicPlayerMachine } from "./machines/musicPlayer";
import type { MusicPlayerState } from "./machines/musicPlayer";

import Playing from "./components/Playing";
import Pausing from "./components/Pausing";
import Stopping from "./components/Stopping";

function App() {
  const [state, send, service] = useMachine(musicPlayerMachine);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const subscription = service.subscribe((state) => {
        console.log(state);

        return () => {
          subscription.unsubscribe();
        };
      });
    }
  }, [service]);

  const handlePlaySong = () => send({ type: "PLAY" });

  const handlePauseSong = () => send({ type: "PAUSE" });

  const handleStopSong = () => send({ type: "STOP" });

  return (
    <Container centerContent maxW="2xl" minH="100vh" justifyContent="center">
      <Box>
        <AspectRatio maxW="400px" ratio={4 / 3}>
          <Image
            src="https://bit.ly/naruto-sage"
            alt="naruto"
            objectFit="cover"
          />
        </AspectRatio>
        {match<MusicPlayerState>(state as MusicPlayerState)
          .with({ value: "stopped" }, () => (
            <Stopping handlePlaySong={handlePlaySong} />
          ))
          .with({ value: "playing" }, () => (
            <Playing
              handleStopSong={handleStopSong}
              handlePauseSong={handlePauseSong}
            />
          ))
          .with({ value: "paused" }, () => (
            <Pausing
              handleStopSong={handleStopSong}
              handlePlaySong={handlePlaySong}
            />
          ))
          .exhaustive()}
      </Box>
    </Container>
  );
}

export default App;
