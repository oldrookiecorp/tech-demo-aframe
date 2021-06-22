<script context="module">
  export const STATES_OF_GAME = {
    IDLE: "IDLE",
    STARTED: "STARTED",
    FINISHED: "FINISHED",
  };

  export const KEYS_OF_STATE = {
    STATE_OF_GAME: "stateOfGame",
    CURRENT_STAGE: "currentStage",
  };

  export const KEYS_OF_HANDLER = {
    INIT: "initGame",
    SET_GAME_STATE: "setGameState",
    SET_CURRENT_STAGE: "setCurrentStage",
  };

  export const __INITIAL_STATES = {
    [KEYS_OF_STATE.STATE_OF_GAME]: STATES_OF_GAME.IDLE,
  };

  export const __HANDLERS = {
    [KEYS_OF_HANDLER.INIT]: function (state, action) {
      state = {
        ...state,
        ...action,
      };
    },
    // 스테이지 정보 setter
    [KEYS_OF_HANDLER.SET_CURRENT_STAGE](state, action) {
      state[KEYS_OF_STATE.CURRENT_STAGE] = action[KEYS_OF_STATE.CURRENT_STAGE];
    },
    // 게임 상태 setter
    [KEYS_OF_HANDLER.SET_GAME_STATE]: (state, action) => {
      const __keys = Object.keys(STATES_OF_GAME);
      const __found = __keys.find(
        (key) => key === action[KEYS_OF_STATE.STATE_OF_GAME]
      );
      if (__found) {
        state[KEYS_OF_STATE.STATE_OF_GAME] =
          action[KEYS_OF_STATE.STATE_OF_GAME];
      } else {
        const _error = new Error(
          `[STATE:Game] '${
            action[KEYS_OF_STATE.STATE_OF_GAME]
          }은/는 올바른 상태값이 아닙니다'`
        );
        console.log(_error);
        throw _error;
      }
    },
  };
</script>
