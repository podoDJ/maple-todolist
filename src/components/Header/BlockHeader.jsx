import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { getUsers, updateUsers } from "../../api/users";
import { useAuth } from "../../api/AuthContex";

const BlockHeader = () => {
  const navigate = useNavigate();

  const {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn
  } = useAuth()

  const logIn = (event) => {
    event.preventDefault()
    setIsLoggedIn(true)
    setAuthUser({
      name: 'John Doe'
    })
  }
  const logOut = (event) => {
    event.preventDefault()
    setIsLoggedIn(false)
    setAuthUser(null)
  }

  return (
    <S.Header>
      <div>
        뭐라도 나와야 할텐데?
      </div>
      <div>
        <S.MenuSpan onClick={() => navigate("/signup")}>회원가입</S.MenuSpan>
        {/* <S.MenuSpan onClick = {(event) => logIn(event)}>로그인</S.MenuSpan>
        <S.MenuSpan onClick = {(event) => logOut(event)}>로그아웃</S.MenuSpan> */}
        {isLoggedIn ? 
        <S.MenuSpan onClick = {(event) => logOut(event)}>로그아웃</S.MenuSpan> : 
        <S.MenuSpan onClick = {() => navigate("/login")}>로그인</S.MenuSpan>}
        <S.MenuSpan>프로필 위치</S.MenuSpan>
      </div>
    </S.Header>
  );
};

export default BlockHeader;

const S = {
  Header: styled.header`
    background-color: beige;
    border: 1px solid black;
    width: 100wh;
    height: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  MenuSpan: styled.span`
    border: 1px solid black;
    padding: 0.8rem;
    cursor: pointer;
  `,
};