<script context="module">
  import * as Game from "./game.svelte";
  import * as Lifes from "./lifes.svelte";
  import * as Targets from "./targets.svelte";
  import * as Timers from "./timer.svelte";
  import * as TimerLib from "../../lib/UI/Timer";
  export const ENUMS = {
    [Game.KEYS_OF_STATE.STATE_OF_GAME]: Game.STATES_OF_GAME,
  };

  export const HANDLERS = {
    ...Game.KEYS_OF_HANDLER,
    ...Lifes.KEYS_OF_HANDLER,
    ...Targets.KEYS_OF_HANDLER,
    ...Timers.KEYS_OF_HANDLER,
    SET_CURRENT_SCENE: "setCurrentScene",
    // 실제 UI의 메인 실행 함수
    START_GAME: "startGame",
    // 실제 UI의 메인 종료 함수
    STOP_GAME: "stopGame",
  };

  export const STATES = {
    ...Game.KEYS_OF_STATE,
    ...Lifes.KEYS_OF_STATE,
    ...Targets.KEYS_OF_STATE,
    ...Timers.KEYS_OF_STATE,
    CURRENT_SCENE: "CURRENT_SCENE",
    CURRENT_SCENE_ID: "CURRENT_SCENE_ID",
  };

  if (typeof window !== "undefined") {
    AFRAME.registerState({
      initialState: {
        ...Game.__INITIAL_STATES,
        ...Lifes.__INITIAL_STATES,
        ...Targets.__INITIAL_STATES,
        ...Timers.__INITIAL_STATES,
        // [Timers.KEYS_OF_STATE.SECONDS]:TimeProps ,

        // [Timers.KEYS_OF_STATE.REMAIN_SECONDS]: TimeProps,
        [STATES.CURRENT_SCENE]: null,
      },
      handlers: {
        ...Game.__HANDLERS,
        ...Lifes.__HANDLERS,
        ...Targets.__HANDLERS,
        ...Timers.__HANDLERS,
        [HANDLERS.SET_CURRENT_SCENE]: (state, action) => {
          state[STATES.CURRENT_SCENE] = action[STATES.CURRENT_SCENE];
          state[STATES.CURRENT_SCENE_ID] = action[STATES.CURRENT_SCENE_ID];
        },
        [HANDLERS.START_GAME]: (state) => {
          // 게임이 실행중이 아닌경우
          if (
            state[STATES.STATE_OF_GAME] !== ENUMS[STATES.STATE_OF_GAME].STARTED
          ) {
            // 게임 상태를 시작상태로 변경
            state[STATES.STATE_OF_GAME] = ENUMS[STATES.STATE_OF_GAME].STARTED;
            // 시작 시간을 현재로 변경
            state[STATES.STARTED_AT] = new moment();

            // 타이머 초기화
            const _seconds = state[STATES.SECONDS];
            const _startedAt = state[STATES.STARTED_AT];
            const _currentScene = state[STATES.CURRENT_SCENE];
            // 인터벌 set
            state[STATES.INTERVAL] = window.setInterval(() => {
              // 스테이트로 부터 값 계산
              const __remainSeconds = TimerLib.calcRemainSeconds(
                _startedAt,
                _seconds
              );
              // 계산된 초를 state에 삽입
              if (__remainSeconds <= 0) {
                // 시간이 모두 소진된 경우 게임 종료 처리
                console.log("[STATE:Global] 시간이 모두 소진되었습니다");
                _currentScene.emit(HANDLERS.STOP_GAME);
              } else {
                _currentScene.emit(HANDLERS.SET_REMAIN_SECONDS, {
                  [STATES.REMAIN_SECONDS]: __remainSeconds,
                });
              }
            }, 500);
            console.log("[STATE:Global] 게임이 실행되었습니다");
          } else {
            const _error = new Error(
              `[GLOBAL STATE COMPONENT] 이미 게임이 실행중입니다`
            );
            console.log(_error);
          }
        },
        [HANDLERS.STOP_GAME]: (state) => {
          // 게임이 실행중인 경우에만 실행
          if (
            state[STATES.STATE_OF_GAME] === ENUMS[STATES.STATE_OF_GAME].STARTED
          ) {
            // 인터벌을 클리어
            window.clearInterval(state[STATES.INTERVAL]);
            // 게임 상태를 시작상태로 변경
            state[STATES.STATE_OF_GAME] = ENUMS[STATES.STATE_OF_GAME].FINISHED;
            // 스테이트의 인터벌 초기화
            state[STATES.INTERVAL] = null;
            // 스테이트의 시작일자 초기화
            state[STATES.STARTED_AT] = null;
            // 남은 라이프 초기화
            state[STATES.REMAIN_LIFES] = Lifes.__INITIAL_STATES[STATES.LIFES];
            // 남은 시간 초기화
            state[STATES.REMAIN_SECONDS] =
              Timers.__INITIAL_STATES[STATES.SECONDS];
            // 남은 타겟 수 초기화
            state[STATES.REMAIN_TARGETS] =
              Targets.__INITIAL_STATES[STATES.REMAIN_TARGETS];
            console.log("[STATE:Global] 게임이 종료되었습니다");
          } else {
            const _error = new Error(
              `[STATE:Global] 게임이 아직 실행되지 않았습니다`
            );
            console.log(_error);
            throw _error;
          }
        },
      },
    });
    console.log("state registered", HANDLERS, STATES);
  }
</script>
