import React from "react";
import styled from "styled-components";

const SetChartStyle = styled.section`
  position: relative;
  top: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 260px;
`;

const SetChart = () => {
  return (
    <SetChartStyle>
      <VisitChart />
      <PostChart />
    </SetChartStyle>
  );
};

export default SetChart;

const VisitChartStyle = styled.div`
  margin-bottom: 40px;
  h2 {
    font-weight: 400;
    margin-bottom: 10px;
  }
  .chart-filter-wrap {
    height: 100px;
    width: 800px;
    border-radius: 10px;
    background: #f9fafd;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .to-vis {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      margin-left: 25px;
      height: 100%;
      .to-viti {
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 12px;
      }
      .to-num {
        font-size: 21px;
        font-weight: 400;
      }
    }
  }
  .chart-wrap {
    position: relative;
    width: 800px;
    height: 345px;
    border-radius: 10px;
    background: white;
    margin-top: 20px;
    .top-title {
      height: 30px;
      padding: 0 34px;
      padding-top: 31px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 16px;
        font-weight: 700;
      }
      button {
        width: 47px;
        height: 26px;
        border-top: 1px solid #c2cad3;
        border-bottom: 1px solid #c2cad3;
        border-left: 1px solid #c2cad3;
        border-right: none;
        background: white;
        cursor: pointer;
      }
      .mon-date {
        border-right: 1px solid #c2cad3;
      }
      button.active {
        color: white;
        background: #6d6d6d;
        border: none;
      }
    }
    .ne-pre {
      .next,
      .preview {
        width: 28px;
        height: 28px;
        border-radius: 5px;
        box-shadow: 0 0 0 1px #dce0e9 inset;
      }
      .next {
        position: absolute;
        bottom: 35px;
        left: 28px;
      }
      .preview {
        position: absolute;
        bottom: 35px;
        right: 28px;
      }
    }
  }
  .graph-wrap {
    width: 100%;
    position: relative;
    .line-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      span {
        display: block;
        border: 1px dashed #e4e4e4;
        width: 680px;
        margin: 20px 0;
      }
      span:nth-child(5) {
        margin-bottom: 15px;
      }
      span:nth-child(1) {
        margin-top: 35px;
      }
    }
    .point {
      position: absolute;
    }
    .date {
      margin-left: 70px;
      font-size: 10px;
      font-weight: 400;
      margin-bottom: 10px;
    }
    .month {
      margin-left: 66px;
      font-size: 10px;
      font-weight: 400;
    }
  }
`;

const VisitChart = () => {
  return (
    <VisitChartStyle className="chart-contain">
      <h2>방문 통계</h2>
      <div className="chart-filter-wrap">
        <div className="to-vis">
          <p className="to-viti">오늘 방문자수</p>
          <h2 className="to-num">0</h2>
        </div>
        <div className="to-vis">
          <p className="to-viti">어제 방문자수</p>
          <h2 className="to-num">0</h2>
        </div>
        <div className="to-vis">
          <p className="to-viti">누적 방문자수</p>
          <h2 className="to-num">0</h2>
        </div>
      </div>
      <div className="chart-wrap">
        <div className="top-title">
          <span className="today">2023.01.06. 금</span>
          <div className="btn-wrap">
            <button className="date-date active">일간</button>
            <button className="week-date">주간</button>
            <button className="mon-date">월간</button>
          </div>
        </div>
        <div className="graph-wrap">
          <div className="line-wrap">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <div className="point">
            <img src="" alt="" />
          </div>
          <div className="date">
            <span className="day">17</span>
          </div>
          <div className="month">
            <span>12월</span>
          </div>
        </div>
        <div className="ne-pre">
          <div className="next">
            <img src="" alt="" />
          </div>
          <div className="preview">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </VisitChartStyle>
  );
};

const PostChartStyle = styled.div`
  width: 800px;
  h2 {
    font-weight: 400;
    margin-bottom: 10px;
  }
  .post-wrap {
    width: 100%;
    background: white;
    border-radius: 5px;
    overflow: hidden;
  }
  .post {
    position: relative;
    display: flex;
    align-items: center;
    width: 800px;
    padding: 22px 0px;
    border-radius: 10px;
    .checkbox {
      width: 18px;
      height: 18px;
      margin: 0;
      margin-right: 30px;
      margin-left: 25px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      margin: 0;
      width: 610px;
    }
    .view-wrap {
      span {
        font-size: 13px;
        font-weight: 400;
      }
      .view {
        margin-right: 40px;
      }
      .view-num {
        color: #b5b5b5;
      }
    }
  }
`;

const PostChart = () => {
  return (
    <PostChartStyle>
      <h2>게시글 조회수</h2>
      <div className="post-wrap">
        <div className="post">
          <input className="checkbox" type="checkbox"></input>
          <h2 className="title">제목입니다</h2>
          <div className="view-wrap">
            <span className="view">조회수</span>
            <span className="view-num">0</span>
          </div>
        </div>
      </div>
    </PostChartStyle>
  );
};
