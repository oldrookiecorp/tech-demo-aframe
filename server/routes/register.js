import { defaultHTMLHeader } from "./header";
import { default as renderPage } from "./renderer";

// 라우팅 등록하기
export const registRoute = (
  // fastify 인스턴스
  instance,
  // 등록 URL
  url,
  // 대상 모듈
  targetModule,
  // 모듈에서 추출한 파일 이름
  fileName,
  // 추가 정보
  additionalData
) => {
  // 인스턴스에 GET으로 등록하기
  instance.route({
    method: "GET",
    url,
    handler(request, response) {
      // 기본 헤더 설정
      defaultHTMLHeader(response);
      // 렌더 함수 실행
      const { html, head } = targetModule.default.render();
      // 회신
      response.send(renderPage(head, html, fileName, additionalData));
    },
  });
};
