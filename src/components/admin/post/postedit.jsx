import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import NavEdit from "../nav/navedit";

const PostEditStyle = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  .post-wrap {
    padding: 200px;
    width: 846px;
    .select-wrap {
      position: relative;
      width: 170px;
      height: 37px;
      border: 1px solid #d2d2d2;
      select {
        width: 170px;
        height: 37px;
        border: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        padding: 10px;
        z-index: 3;
      }
      span {
        position: absolute;
        width: 35px;
        height: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        right: 0;
        cursor: pointer;
        img {
          height: 10px;
          transition: 0.3s;
        }
        &:focus + img {
          transform: rotate(180deg);
        }
      }
    }

    .write-contain {
      .title-wrap {
        width: 100%;
        margin-top: 25px;
        margin-bottom: 50px;
        padding-bottom: 15px;
        border-bottom: 1px solid #b1b1b1;
        input {
          border: none;
          background: none;
          font-family: "Nanum Gothic", sans-serif;
          font-size: 28px;
          font-weight: 400;
          &::placeholder {
            color: #8b8b8b;
          }
          &:focus {
            outline: none;
          }
        }
      }
      .write-wrap {
        width: 100%;
        textarea {
          width: 100%;
          height: 500px;
          border: none;
          background: none;
          resize: none;
          font-family: "Nanum Gothic", sans-serif;
          font-size: 14px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
`;

const PostEdit = () => {
  const textarea = useRef();
  const handleResizeHeight = () => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };
  return (
    <PostEditStyle>
      <NavEdit />
      <div className="post-wrap">
        <div className="select-wrap">
          <select name="categori" id="">
            <option value="categori">카테고리</option>
          </select>
          <span>
            <img src="/assets/icons/arrow.png" alt="" />
          </span>
        </div>
        <div className="write-contain">
          <div className="title-wrap">
            <input type="text" placeholder="제목을 입력하세요 " />
          </div>
          <div className="write-wrap">
            <textarea rows={1} name="textarea" id="" placeholder="내용을 입력하세요" ref={textarea} onChange={handleResizeHeight}></textarea>
          </div>
        </div>
      </div>
    </PostEditStyle>
  );
};

export default PostEdit;
