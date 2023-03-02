import { createMachine } from "xstate";

// TODO: Add infinite state to the context
type Context = {};

type MusicPlayerState =
  | {
      value: "stopped";
      context: Context;
    }
  | {
      value: "playing";
      context: Context;
    }
  | {
      value: "paused";
      context: Context;
    };

type MusicPlayerEvents =
  | { type: "PLAY" }
  | { type: "STOP" }
  | { type: "PAUSE" };

const machineConfig = {
  /** @xstate-layout N4IgpgJg5mDOIC5QFsCusCWBjACgGwEMBPMAJwDpYAXAewAc7IBiHAGQEEBNAbQAYBdRKDo1MVDDQB2QkAA9EAZgDsS8gCZeCgIxqArAE41ADn0KjAFgA0IIoi0K15Xs+e7zRpbqUA2LUoC+-tZomLiEJBR04RiSUCzsAKoAygCifIJIICJiEtKZ8gjKqhraeoYmZlY2ikoK5LouvJ5enkpqgcHo2PjEZORRxDFxSQAqAPI46TLZGOJSMgVmuuSGWkZGWuYNat663grWtggb9Y0K5n4K+g1GHSAh3eF9dATozGxcU5kzc3mgBVo3OQlJodAY1KVvNdDog9I5PC5dmodt5UQEgvcumFepFXrBmKMJl9hKJZrkFnYgSDSuDIdDqggdHV9FpUVDeOYdhsoYEMZIaBA4DIHtiItNSb8KQgALTeGEy5b6JXKlXKozeO4inoRSi0BiQcU5eb5WG6IzkTa8XzXBpKLT6dXynTmcgXNlNcwKXjrDaarHa57RWKGsnG-6IBr6cgKAzKW1KIxmtzyhTeXiu8zK1NeGOev2hAO4t4QEOSk0ITnyvTLJSZpVGZFe2oN3n+IA */
  id: "musicPlayer",
  initial: "stopped",
  schema: {
    events: {} as MusicPlayerEvents,
  },
  predictableActionArguments: true,
  states: {
    stopped: {
      on: {
        PLAY: {
          target: "playing",
        },
      },
    },
    playing: {
      on: {
        PAUSE: {
          target: "paused",
        },
        STOP: {
          target: "stopped",
        },
      },
    },
    paused: {
      on: {
        PLAY: {
          target: "playing",
        },
        STOP: {
          target: "stopped",
        },
      },
    },
  },
};

const musicPlayerMachine = createMachine<
  {},
  MusicPlayerEvents,
  MusicPlayerState
>(machineConfig);

export { musicPlayerMachine, machineConfig };
export type { MusicPlayerState, MusicPlayerEvents };
