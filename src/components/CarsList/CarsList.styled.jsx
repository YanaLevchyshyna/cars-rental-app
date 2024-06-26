import styled from '@emotion/styled';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Section = styled.section`
  margin-top: 35px;
  margin-bottom: 50px;
`;

export const CarsListEl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
  margin: 0px auto;
`;

export const ListItem = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 274px;
  height: 426px;

  img {
    display: block;
    height: 268px;
    width: 100%;
    border-radius: ${(props) => props.theme.radius.normal};

    object-fit: cover;
    object-position: center;
  }

  p {
    color: ${(props) => props.theme.colors.black};
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const Button = styled.button`
  border: ${(props) => props.theme.borders.none};
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};

  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: 1.5;
  text-decoration-line: underline;

  margin-bottom: 70px;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 18px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 50px;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 50px;
    flex-direction: row;
    gap: 0;
  }
`;

export const InputFromEl = styled.input`
  padding: 0;
  padding-left: 24px;

  width: 136px;
  height: 48px;

  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-bottom: none;
  border-left: none;
  border-top: none;
  background-color: ${(props) => props.theme.colors.accent};

  &::placeholder {
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    line-height: ${(props) => props.theme.lineHeights.body};
  }
`;

export const InputToEl = styled.input`
  padding: 0;
  padding-left: 24px;
  width: 136px;
  height: 48px;
  border: none;
  background-color: ${(props) => props.theme.colors.accent};
  /* padding: 14px 115px 14px 24px; */

  border-radius: 0px 14px 14px 0px;
  &::placeholder {
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    line-height: ${(props) => props.theme.lineHeights.body};
  }
`;
export const SearchButton = styled.button`
  padding: 14px 44px;
  margin-left: 18px;
  color: #ffffff;
  font-size: ${(props) => props.theme.fontSizes.s};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: 1.43;
  border: ${(props) => props.theme.borders.none};
  border-radius: ${(props) => props.theme.radius.normal};
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const SpanBrand = styled.span`
  position: absolute;
  top: -25px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #8a8a89;
`;

export const SpanPrice = styled.span`
  position: absolute;
  top: -25px;
  left: 25.5%;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #8a8a89;
`;

export const SpanMl = styled.span`
  position: absolute;
  top: -25px;
  right: 38%;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #8a8a89;
`;
