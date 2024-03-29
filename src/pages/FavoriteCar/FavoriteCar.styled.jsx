import styled from '@emotion/styled';

export const Section = styled.section`
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 35px;
`;

export const CarsList = styled.ul`
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

export const VintageCarImg = styled.img`
  margin: 0px auto;
`;
