import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>Nome do Repositório.: {name}</S.WrapperTitle>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        Link.: {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
