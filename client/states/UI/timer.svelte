<script context="module">
  import { STATES, ENUMS, HANDLERS } from "./index.svelte";

  import {getGamesEnv} from "../../api/game";

  export const KEYS_OF_STATE = {
    SECONDS: "seconds",
    INTERVAL: "interval",
    STARTED_AT: "startedAt",
    REMAIN_SECONDS: "remainSeconds",
  };

  export const KEYS_OF_HANDLER = {
    INIT_TIMERS: "initTimers",
    // 남은 초 setter
    SET_REMAIN_SECONDS: "setRemainSeconds",
    // 타이머 시작 함수
    START_TIMER: "startTimer",
    // 타이머 클리어 함수
    STOP_TIMER: "stopTimer",
  };

  export const __INITIAL_STATES = {
    [KEYS_OF_STATE.SECONDS]: 180,
    [KEYS_OF_STATE.REMAIN_SECONDS]: 180,
    [KEYS_OF_STATE.INTERVAL]: null,
    [KEYS_OF_STATE.STARTED_AT]: null,
  };

  export const __HANDLERS = {
    // 여기를 보기
    [KEYS_OF_HANDLER.INIT_TIMERS]: function (state) {
      getGamesEnv(state[STATES.CURRENT_SCENE_ID]).then((response)=>{
        state[KEYS_OF_STATE.SECONDS] = response.limitTime;
        state[KEYS_OF_STATE.REMAIN_SECONDS] = response.limitTime;
      })
    },
    // 남은 시간 setter
    [KEYS_OF_HANDLER.SET_REMAIN_SECONDS]: (state, action) => {
      state[KEYS_OF_STATE.REMAIN_SECONDS] = action[KEYS_OF_STATE.REMAIN_SECONDS];
    },
    // 타이머 시작하기
    [KEYS_OF_HANDLER.START_TIMER]: (state, action) => {
      state[KEYS_OF_STATE.INTERVAL] = action[KEYS_OF_STATE.INTERVAL];
      state[KEYS_OF_STATE.STARTED_AT] = action[KEYS_OF_STATE.STARTED_AT];
    },
    // 타이머 종료하기
    [KEYS_OF_HANDLER.STOP_TIMER]: (state) => {
      if (typeof window !== "undefined") {
        window.clearInterval(state[KEYS_OF_STATE.INTERVAL]);
        state[KEYS_OF_STATE.INTERVAL] = null;
      } else {
        const __ERROR = new Error("[STATE:Timer] window 객체가 존재하지 않습니다");
        console.log(__ERROR);
        throw __ERROR;
      }
    },
  };
</script>
