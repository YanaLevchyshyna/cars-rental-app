import styled from '@emotion/styled';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Section = styled.section`
  margin-bottom: 100px;
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
