import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
`;

export const ModalContetnt = styled.div`
  border-radius: 24px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px 16px;
  width: 100%;
  max-width: 540px;
  height: 640px;

  background-color: #fcfcfc;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  transition: transform 250ms linear;
`;

export const FirstContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const CloseButton = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 0;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.theme.radius.round};
  box-shadow: ${(props) => props.theme.shadows.boxShadowCard};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #403d43;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const FirstList = styled.ul`
  display: flex;

  li {
    color: ${(props) => props.theme.colors.text};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -6px;
      transform: translateY(-50%);
      height: 16px;
      width: 1px;
      background-color: ${(props) => props.theme.colors.after};
    }
  }
`;

export const SecondList = styled.ul`
  display: flex;
  margin-bottom: 10px;

  li {
    color: ${(props) => props.theme.colors.text};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis; /* Додає три крапочки для обрізання тексту */
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -6px;
      transform: translateY(-50%);
      height: 16px;
      width: 1px;
      background-color: ${(props) => props.theme.colors.after};
    }
  }
`;

export const Image = styled.img`
  border-radius: 20px;
  height: 248px;
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 1.43;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 12px;
  line-height: 1.43;
  margin-bottom: 5px;
`;

export const ThirdList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;

  li {
    color: ${(props) => props.theme.colors.text};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    margin-right: 12px;
    margin-bottom: 5px;

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
      overflow: hidden;
      white-space: nowrap;
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -6px;
      transform: translateY(-50%);
      height: 16px;
      width: 1px;
      background-color: ${(props) => props.theme.colors.after};
    }
  }
`;

export const FourthList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 7px;

  li {
    position: relative;
    display: inline-block;
    margin-right: 12px;
    margin-bottom: 5px;
    padding: 7px 14px;

    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;

    color: ${(props) => props.theme.colors.text};
    background-color: #f9f9f9;
    border-radius: 35px;

    &:last-child {
      margin-right: 0;
      overflow: hidden;
      white-space: nowrap;
    }

    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -6px;
      transform: translateY(-50%);
      height: 16px;
      width: 1px;
      background-color: ${(props) => props.theme.colors.after};
    }
  }
`;

export const SpanLi = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Button = styled.button`
  padding: 12px 50px;
  width: 168px;
  height: 44px;

  font-size: ${(props) => props.theme.fontSizes.s};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: 1.43;
  border: ${(props) => props.theme.borders.none};
  border-radius: ${(props) => props.theme.radius.normal};
  background-color: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
