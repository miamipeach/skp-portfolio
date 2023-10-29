import section from '../../styles/session.module.scss';
import style from './intro.module.scss';

export default function Intro() {
  return (
    <>
      <section className={`${section.commonSection} ${style.introMe}`}>
        <header>
          <strong>박성경 🍊</strong>
          miamipeach1020@gmail.com
        </header>
        <ul>
          <li>&middot; UI개발을 좋아하는 프론트엔드 개발자</li>
          <li>&middot; 다수의 프로젝트 경험</li>
          <li>&middot; 프로젝트 리드 경험 보유</li>
        </ul>
        <div className={`${style.introText}`}>
          안녕하세요.
          <br />
          사용자에게 편리함과 친절함을 주는것에 즐거움을 찾는 프론트엔드 개발자 박성경입니다.
          <br />
          다수의 웹표준, 반응형, 하이브리드 웹앱 등 JSP, Vue, React 프로젝트 퍼블리싱 구축 경험을
          가지고 있습니다.
          <br />
          현재는 프론트엔드 개발자로써 React, Typescript, Mobx환경의 E-Commerce 플랫폼 구축 이후
          <br />
          서비스 성능 개선, 카테고리 확장 및 개편 등 운영업무를 진행하며 서비스의 안정성과 사용성을
          높이는 업무를 진행하고 있습니다.
          <br />
        </div>
      </section>
      <section className={`${section.commonSection} ${style.stack}`}>
        <header>SKILL & TOOL</header>
        <ul>
          <li>HTML, JSTL, CSS, Styled Component, CSS Modules, SCSS</li>
          <li>Javascript, Typescript, JQuery</li>
          <li>React, Vue, Mobx, Recoil, React Query, NodeJS</li>
          <li>Git, Jenkins, Storybook, Zeplin, Figma, Photoshop</li>
        </ul>
      </section>
    </>
  );
}
