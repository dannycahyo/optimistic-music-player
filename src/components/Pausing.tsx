import { HStack, IconButton, Heading, Center } from "@chakra-ui/react";

import { BsFillPlayCircleFill, BsStopCircleFill } from "react-icons/bs";

import type React from "react";

type PausingProps = {
  handleStopSong: () => void;
  handlePlaySong: () => void;
};

const Pausing: React.FC<PausingProps> = ({
  handleStopSong,
  handlePlaySong,
}) => {
  return (
    <>
      <Heading size="lg" color="white" textAlign="center" pt="8">
        Pausing Song
      </Heading>
      <HStack gap={6} pt="8" justifyContent="center">
        <IconButton
          onClick={handlePlaySong}
          colorScheme="orange"
          size="lg"
          aria-label="play"
          icon={<BsFillPlayCircleFill />}
        />
        <IconButton
          onClick={handleStopSong}
          colorScheme="orange"
          size="lg"
          aria-label="stop"
          icon={<BsStopCircleFill />}
        />
      </HStack>
    </>
  );
};

export default Pausing;
