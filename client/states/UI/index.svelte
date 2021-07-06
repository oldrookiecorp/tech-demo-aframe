<script context="module">
  import * as Game from "./game.svelte";
  import * as Lifes from "./lifes.svelte";
  import * as Targets from "./targets.svelte";
  import * as Timers from "./timer.svelte";
  import * as TimerLib from "../../lib/UI/Timer";
  import {getGamesEnv} from '../../api/game';
  
  export const ENUMS = {
    [Game.KEYS_OF_STATE.STATE_OF_GAME]: Game.STATES_OF_GAME,
  };

  export const HANDLERS = {
    ...Game.KEYS_OF_HANDLER,
    ...Lifes.KEYS_OF_HANDLER,
    ...Targets.KEYS_OF_HANDLER,
    ...Timers.KEYS_OF_HANDLER,
    SET_CURRENT_SCENE: "setCurrentScene",
    INITIAL_WITH_API : 'initWithAPI',
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
    UserName: "UserName",
    GameID: "GameID",
    CURRENT_SCENE: "CURRENT_SCENE",
    CURRENT_SCENE_ID: "CURRENT_SCENE_ID",
  };
  
  if (typeof window !== "undefined") {
    AFRAME.registerState({
      initialState: {
        ...Game.__INITIAL_STATES,
        // ...Targets.__INITIAL_STATES,
        ...Timers.__INITIAL_STATES,
        [STATES.CURRENT_SCENE]: null,
        [STATES.UserName]: "userName"
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

            // 유저 닉네임 및 게임 id 확인
            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());
            STATES.UserName = params.user;
            STATES.GameID = params.gameId;

            console.log(`Username ; ${params.user}`);

            const _currentScene = state[STATES.CURRENT_SCENE];
            //life 초기화
            _currentScene.emit("initLifes");
            //target obj 초기화
            _currentScene.emit("initTargets");

            
            // 타이머 초기화
            _currentScene.emit("initTimers");

            const _startedAt = state[STATES.STARTED_AT];
            const _seconds = state[STATES.SECONDS];
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
            const _currentScene = state[STATES.CURRENT_SCENE];

            // 인터벌을 클리어
            window.clearInterval(state[STATES.INTERVAL]);
            // 게임 상태를 시작상태로 변경
            state[STATES.STATE_OF_GAME] = ENUMS[STATES.STATE_OF_GAME].FINISHED;
            // 스테이트의 인터벌 초기화
            state[STATES.INTERVAL] = null;
            // 스테이트의 시작일자 초기화
            state[STATES.STARTED_AT] = null;
            // 남은 라이프 멈춤
            state[STATES.REMAIN_LIFES] = Lifes.__INITIAL_STATES[STATES.LIFES];
            // 남은 시간 멈춤
            _currentScene.emit("startTimer");
            // 남은 타겟 수 초기화
            state[STATES.REMAIN_TARGETS] =
              Targets.__INITIAL_STATES[STATES.REMAIN_TARGETS];
             
            //VR모드 종료
            _currentScene.exitVR();

            console.log("[STATE:Global] 게임이 종료되었습니다");
          } else {
            const _error = new Error(
              `[STATE:Global] 게임이 아직 실행되지 않았습니다`
            );
            console.log(_error);
            throw _error;
          }
        },
        [HANDLERS.INITIAL_WITH_API](state , action){
          state[STATES.LIFES] = action[STATES.LIFES];
          state[STATES.REMAIN_LIFES] = action[STATES.LIFES];
          state[STATES.SECONDS] = action[STATES.SECONDS];
          state[STATES.SECONDS] = action[STATES.SECONDS];
        }
      },
    });
    console.log("state registered", HANDLERS, STATES);
  }
</script>
