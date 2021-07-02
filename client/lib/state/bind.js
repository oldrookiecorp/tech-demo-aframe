/**
 * state를 바인드 하기 위해 속성들을 만들어줍니다
 * @param {string[]} keys 대상 속성 이름
 * @returns 속성
 */
export const bind = (keys) => {
  if (!keys || !keys.map) {
    throw new Error("올바른 키가 아닙니다");
  }
  const _generated = keys.map((_key) => `${_key}:${_key}`);
  return _generated.join(";");
};
