import styled from "styled-components";

export const Container = styled.form`
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  width: 95%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 60px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);

  > h1 {
    color: ${({ theme }) => theme.textColors.titlePrimary};
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;

  > div {
    width: 80%;
  }
`;

export const SpanText = styled.span`
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;

  > a {
    color: ${({ theme }) => theme.textColors.linkColor};
    font-weight: 600;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.textColors.linkColor};
      transition: width 0.8s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const FooterForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
