// 기본 HTML Response header

export const defaultHTMLHeader = (response) => {
  response.header("Content-Type", "text/html");
};
