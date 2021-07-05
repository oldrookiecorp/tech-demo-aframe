<script context="module">
  import * as GameState from "./game.svelte";
  import { STATES } from "./index.svelte";

  export const KEYS_OF_STATE = {
    NUMBER_OF_TARGETS: "numberOfTargets",
    REMAIN_TARGETS: "remainTargets",
  };

  export const KEYS_OF_HANDLER = {
    INIT_TARGETS: "initTargets",
    DECREASE_REMAIN_TARGETS: "decreaseRemainTargets",
  };

  export const __INITIAL_STATES = {
    [KEYS_OF_STATE.NUMBER_OF_TARGETS]: 3,
    [KEYS_OF_STATE.REMAIN_TARGETS]: 0,
  };

  export const __HANDLERS = {
    [KEYS_OF_HANDLER.INIT_TARGETS]: function (state) {
      state[STATES.REMAIN_TARGETS] = __INITIAL_STATES[STATES.NUMBER_OF_TARGETS];
    },
    // 남은 타겟 setter
    [KEYS_OF_HANDLER.DECREASE_REMAIN_TARGETS]: (state) => {
      if (
        state[GameState.KEYS_OF_STATE.STATE_OF_GAME] ===
        GameState.STATES_OF_GAME.STARTED
      ) {
        state[KEYS_OF_STATE.REMAIN_TARGETS]++;
        if(state[KEYS_OF_STATE.REMAIN_TARGETS] === state[KEYS_OF_STATE.NUMBER_OF_TARGETS]){
          // 클라이언트로 데이터 전송
            window.parent.postMessage({
              functionName: "gameClear",
              user_name: state[KEYS_OF_STATES.UserName],
              clear_time: state[KEYS_OF_STATE.REMAIN_SECONDS],
              clear_heart: state[KEYS_OF_STATE.REMAIN_LIFES]
            },"*");
          AFRAME.scenes[0].emit('stopGame');
        }
      } else {
        const __ERROR = new Error("[STATE:Targets] 게임이 실행중이 아닙니다");
        console.log(__ERROR);
        throw __ERROR;
      }
    },
  };
</script>
