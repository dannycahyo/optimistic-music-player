import { IconButton, Heading, Center } from "@chakra-ui/react";

import { BsFillPlayCircleFill } from "react-icons/bs";

import type React from "react";

type StoppingProps = {
  handlePlaySong: () => void;
};

const Stopping: React.FC<StoppingProps> = ({ handlePlaySong }) => {
  return (
    <>
      <Heading size="lg" color="white" textAlign="center" pt="8">
        Song Stopping
      </Heading>
      <Center pt="8">
        <IconButton
          onClick={handlePlaySong}
          colorScheme="orange"
          size="lg"
          aria-label="play"
          icon={<BsFillPlayCircleFill />}
        />
      </Center>
    </>
  );
};

export default Stopping;
