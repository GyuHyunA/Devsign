import React, { useState } from "react";
import styled from "styled-components";
import SetCate from "./setcate/setcate";

const SettingContentStyle = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  .contents-align {
    margin-top: 180px;
    display: flex;
    justify-content: center;
  }
  .content-wrap {
    width: 800px;
    height: 85px;
    background-color: white;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    .checkbox {
      width: 18px;
      height: 18px;
      margin-left: 25px;
    }
    .title-wrap {
      display: flex;
      align-items: center;
      border-right: 1px solid #eff1f4;
      margin-right: 10px;
      h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        margin: 0;
        margin-left: 30px;
        width: 235px;
      }
      span {
        font-size: 13px;
        font-weight: 400;
        line-height: 13px;
        width: 80px;
      }
    }
    .categori {
      width: 140px;
      border-right: 1px solid #eff1f4;
      margin-right: 10px;
    }
    .del_eidt_pu {
      button {
        height: 25px;
        border: none;
        margin-right: 10px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0);
      }
      select {
        width: 70px;
        height: 25px;
        border: none;
      }
      .active:active {
        background-color: #ff7a41;
        border: 0px solid rgba(0, 0, 0, 0);
        color: white;
      }
    }
  }
`;

const ContentsAlign = styled.div`
  h2 {
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

const FilterWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 800px;
  padding: 22px 0px;
  background-color: #f9fafd;
  border-radius: 10px;
  .checkbox {
    width: 18px;
    height: 18px;
    margin-right: 15px;
    margin-left: 25px;
  }
  .pu_pr_del {
    button {
      margin-right: 10px;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid #c0c8d3;
      border-radius: 5px;
      padding: 2px 10px;
    }
    .active:active {
      background-color: #ff7a41;
      border: 1px solid rgba(0, 0, 0, 0);
      color: white;
    }
  }
  .search {
    position: relative;
    left: 510px;
    img {
      height: 20px;
    }
  }
`;

const SettingContents = () => {
  const [isclick, setIsclick] = useState(false);
  return (
    <SettingContentStyle>
      <div className="contents-align">
        <SetCate />
        <ContentsAlign>
          <h2>글 관리</h2>
          <FilterWrap className="filter-wrap">
            <input type="checkbox" className="checkbox" />
            <div className="pu_pr_del">
              <button className={`public ${isclick === true ? "active" : " "}`} onMouseDown={() => setIsclick(true)}>
                공개
              </button>
              <button className="private">비공개</button>
              <button className="delete">삭제</button>
            </div>
            <div className="search">
              {/* <input type="text" /> */}
              <img src="/assets/icons/search.png" alt="" />
            </div>
          </FilterWrap>
          <div className="content-wrap">
            <input type="checkbox" className="checkbox" />
            <div className="title-wrap">
              <h3>제목입니다</h3>
              <span className="date">2022.11.11</span>
            </div>
            <div className="categori">
              <p>카테고리</p>
            </div>
            <div className="del_eidt_pu">
              <button onClick={() => setIsclick(true)} className={`delete ${isclick === true ? "active" : " "}`}>
                삭제
              </button>
              <button>수정</button>
              <select name="" id="">
                <option value="">공개</option>
                <option value="">비공개</option>
              </select>
            </div>
          </div>
        </ContentsAlign>
      </div>
    </SettingContentStyle>
  );
};

export default SettingContents;
