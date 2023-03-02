import { render, screen, fireEvent } from "@testing-library/react";
import { createTestMachine, createTestModel } from "@xstate/test";

import App from "../App";
import { machineConfig } from "../machines/musicPlayer";

describe("Renders App Correctly", () => {
  const machine = createTestMachine(machineConfig);

  const model = createTestModel(machine);

  model.getPaths().forEach((path) => {
    it(path.description, async () => {
      render(<App />);
      path.testSync({
        events: {
          PLAY: () => {
            fireEvent.click(screen.getByRole("button", { name: "play" }));
          },
          PAUSE: () => {
            fireEvent.click(screen.getByRole("button", { name: "pause" }));
          },
          STOP: () => {
            fireEvent.click(screen.getByRole("button", { name: "stop" }));
          },
        },
        states: {
          stopped: () => {
            const stopButton = screen.getByRole("button", {
              name: "play",
            });
            expect(stopButton).toBeInTheDocument();
            const stopSongText = screen.getByRole("heading", {
              name: "Song Stopping",
            });
            expect(stopSongText).toBeInTheDocument();
          },
          playing: () => {
            const playSongText = screen.getByRole("heading", {
              name: "Playing Song",
            });
            expect(playSongText).toBeInTheDocument();

            const pauseButton = screen.getByRole("button", {
              name: "pause",
            });
            expect(pauseButton).toBeInTheDocument();

            const stopButton = screen.getByRole("button", {
              name: "stop",
            });
            expect(stopButton).toBeInTheDocument();
          },
          paused: () => {
            const pauseSongText = screen.getByRole("heading", {
              name: "Pausing Song",
            });
            expect(pauseSongText).toBeInTheDocument();

            const playButton = screen.getByRole("button", {
              name: "play",
            });
            expect(playButton).toBeInTheDocument();

            const stopButton = screen.getByRole("button", {
              name: "stop",
            });
            expect(stopButton).toBeInTheDocument();
          },
        },
      });
    });
  });
});
