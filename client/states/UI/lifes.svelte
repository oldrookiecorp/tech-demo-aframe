<script context="module">
  import { STATES, ENUMS, HANDLERS } from "./index.svelte";
  import {getGamesEnv} from '../../api/game';

  export const KEYS_OF_STATE = {
    LIFES: "lifes",
    REMAIN_LIFES: "remainLifes",
  };

  export const KEYS_OF_HANDLER = {
    INIT_LIFES: "initLifes",
    DECREASE_REMAIN_LIFES: "decreaseRemainLifes",
  };

  export const __INITIAL_STATES = {
    [KEYS_OF_STATE.LIFES]: 5,
    [KEYS_OF_STATE.REMAIN_LIFES]: 5,
  };

  export const __HANDLERS = {
    [KEYS_OF_HANDLER.INIT_LIFES]: function (state) {
      getGamesEnv(state[STATES.CURRENT_SCENE_ID]).then((response)=>{
        state[KEYS_OF_STATE.LIFES] = response.heartCnt;
        state[KEYS_OF_STATE.REMAIN_LIFES] = state[KEYS_OF_STATE.LIFES];
      })
    },

    // 남은 생명 setter
    [KEYS_OF_HANDLER.DECREASE_REMAIN_LIFES]: (state, action) => {
      if (state[STATES.STATE_OF_GAME] === ENUMS[STATES.STATE_OF_GAME].STARTED) {
        state[KEYS_OF_STATE.REMAIN_LIFES]--;
        if (state[KEYS_OF_STATE.REMAIN_LIFES] <= 0) {
          // 0보다 작아진 경우 게임을 종료처리
          console.log("[STATE:Lifes] 남은 라이프가 모두 소진되었습니다");
          // 클라이언트로 데이터 전송
          window.parent.postMessage({
              functionName: "gameOver",
              user_name: state[STATES.UserName],
              cur_obj: state[STATES.REMAIN_TARGETS],
              cur_time: state[STATES.REMAIN_SECONDS],
              cur_heart: state[STATES.REMAIN_LIFES],
              total_time: state[STATES.SECONDS],
              total_heart: state[STATES.LIFES],
              total_obj: state[STATES.NUMBER_OF_TARGETS]
            },"*");
            
          state[STATES.CURRENT_SCENE].emit(HANDLERS.STOP_GAME);
          
        }
      } else {
        const __ERROR = new Error("[STATE:Lifes] 게임이 실행중이 아닙니다");
        console.log(__ERROR);
        throw __ERROR;
      }
    },
  };
</script>
