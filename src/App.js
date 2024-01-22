import React from "react";

import './fullpage/jquery.fullPage.js';
import './fullpage/jquery.fullPage.css';
import './css/reset.css';
import './css/main.css';
import './js/main.js';

function App() {
  return (
    <>
      {/* 본문 바로가기 */}
      <p id="skipNav" class="hide"><a href="./index.html">본문 바로가기</a></p>

      {/* header */}
      <header id="header">
        <a class="menuTrigger" href="#">
          <span></span>
          <span></span>
          <span></span>
        </a>
        <nav className="nav">
          <ul className="ul">
            <li><a href="#"></a></li>
          </ul>
        </nav>
        <h1><a href="#">Jstory</a></h1>
      </header>

      {/* body */}
      <div className="wrap" id='fullpage'>
        <section className='section'>
          <div className="slide">
            
            <div className="dashBoard">
              <p className="koreanIntro">
                <a className="hello">안녕하세요!</a>제 이름은 <a className="hello">김재혁!</a><br/>
                <a className="highlight type1">훗날</a> 개발자하면 <a className="highlight type2">모두가</a> 인정할<br/>
                API 개발이 가능한<a class="highlight type3"> 프론트엔드 개발자</a>입니다.
              </p>
            </div>
          </div>
          <div className="slide">
            <h3>slide 2</h3>
          </div>
          <div className="slide">
            <h3>slide 3</h3>
          </div>
        </section>

        <section className='section'>
          <h2>project</h2>
          <ul className="projectBox">
            <li className="project">
              <h3>PROJECT <em>[ 아래 항목을 클릭해주세요 ]</em></h3>
              <p>
                ☆ 1 <br/>
                신한은행 통합단말 차세대프로젝트 [2022-02-03 ~ 2022-09-30]<br/>
                - 업무명 : 화면로직개발<br/>
                - 사용 언어 : <br/>
              </p>
              <p>
                ☆ 2 <br/>
                
                LX플랫폼 고도화 프로젝트 [2023-11 ~ 2024-01]<br/>
                - 업무명 : <br/>
                - 사용 언어 : <br/>
              </p>
            </li>
            <li className="education">
              <h3>내가 만든 프로젝트</h3>
              <p><a href="./index.html"> 1. JStory : 저의 메인 페이지입니다.</a></p>
              <p><a href="./project/bicycle/index.html"> 2. 국토종주 이야기 : 633km 국토종주 이야기</a></p>
              <p><a href="./project/jboard-lv4/assets/index.html"> 3. Jboard : 게시판 CRUD</a></p>
              <p><a href="./project/todo/index.html">4. Todo Page</a></p>
              <p><a href="./project/">5. coding Test 준비..!  </a></p>
              <p><a href="./project/manboWalk/index.html">6. team.Nivea를 소개합니다 - Python 사용  </a></p>
              <p><a href="./project/manboWalk/index.html">7. ChiolGram - Node.js 최종 프로젝트</a></p>
              <p><a href="./project/game-1/index.html">8. 내가 만든 (뼈만 있는) 첫 번째 게임 : 장애물 피하기</a></p>
              <p><a href="./project/game-2/index.html">9. 내가 만든 두 번째 게임 : 사무라이를 죽여라</a></p>
              <p><a href="./project/game-3/index.html">10. 내가 만든 세 번째 게임 : 스네이크 게임</a></p>
            </li>
          </ul>
        </section>

        {/* footer */}
        <section className='section fp-auto-height'>
          <h2>Made By KimJaeHyeok</h2>
        </section>
      </div>

      <div class='box'>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
      </div>
    </>
  );
}

export default App;
