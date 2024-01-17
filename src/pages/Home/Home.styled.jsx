import styled from '@emotion/styled';
import homePageCar from '../../static/media/home-page-car.jpg';

export const Div = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${homePageCar});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
