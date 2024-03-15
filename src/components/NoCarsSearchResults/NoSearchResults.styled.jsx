import styled from '@emotion/styled';

export const Wrapper = styled.div`
  @media screen and (min-width: 375px) {
    display: inline-block;
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 92px;
  }
`;

export const Text = styled.p`
  color: #121417;

  @media screen and (min-width: 375px) {
    display: inline-block;
    width: 335px;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28;
  }

  @media screen and (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const BlueTextSpan = styled.span`
  color: #0b44cd;

  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 1.28;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const BlueTextBlock = styled.p`
  color: #0b44cd;

  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 1.28;
  }

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 16px;
    line-height: 1.5;
  }
`;
