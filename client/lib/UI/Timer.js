/**
 * 비교 일자로부터 현재 시간의 차이를 최대 초에서 빼서 전달 해줌
 * @param {moment} startedAt 비교 일자
 * @param {number} threshold 최대 초
 * @returns {number} 최대 초 - 대상으로 부터 지난 초
 */
export const calcRemainSeconds = (startedAt, threshold) => {
  const _now = new moment();
  return threshold - _now.diff(startedAt, "seconds");
};

/**
 * @description 초를 mm:ss 형식으로 표기
 * @param {number} seconds 대상 초
 * @returns {string} mm:ss 형식의 시간
 */
export const convertSecondsToMinutes = (seconds) => {
  const _minutes = Math.floor(seconds / 60) + "";
  const _seconds = (seconds % 60) + "";

  return `${_minutes.padStart(2, "0")}:${_seconds.padStart(2, "0")}`;
};
