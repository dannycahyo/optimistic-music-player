import { HStack, IconButton, Heading } from "@chakra-ui/react";

import { BsStopCircleFill, BsPauseCircleFill } from "react-icons/bs";

import type React from "react";

type PlayingProps = {
  handleStopSong: () => void;
  handlePauseSong: () => void;
};

const Playing: React.FC<PlayingProps> = ({
  handleStopSong,
  handlePauseSong,
}) => {
  return (
    <>
      <Heading size="lg" color="white" textAlign="center" pt="8">
        Playing Song
      </Heading>
      <HStack gap={6} pt="8" justifyContent="center">
        <IconButton
          onClick={handleStopSong}
          colorScheme="orange"
          size="lg"
          aria-label="stop"
          icon={<BsStopCircleFill />}
        />
        <IconButton
          onClick={handlePauseSong}
          colorScheme="orange"
          size="lg"
          aria-label="pause"
          icon={<BsPauseCircleFill />}
        />
      </HStack>
    </>
  );
};

export default Playing;
