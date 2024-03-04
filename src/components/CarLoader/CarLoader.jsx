import {
  LoaderBackdrop,
  LoadingWindow,
  Car,
  Strike,
  Strike2,
  Strike3,
  Strike4,
  Strike5,
  Spoiler,
  Back,
  Center,
  Center1,
  Front,
  Wheel,
  Wheel2,
  Text,
} from './CarLoader.styled';

const CarLoader = () => {
  return (
    <LoaderBackdrop>
      <LoadingWindow>
        <Car>
          <Strike></Strike>
          <Strike2></Strike2>
          <Strike3></Strike3>
          <Strike4></Strike4>
          <Strike5></Strike5>
          <Spoiler></Spoiler>
          <Back></Back>
          <Center></Center>
          <Center1></Center1>
          <Front></Front>
          <Wheel></Wheel>
          <Wheel2></Wheel2>
        </Car>

        <Text>
          <p>Loading</p>
          <span>...</span>
        </Text>
      </LoadingWindow>
    </LoaderBackdrop>
  );
};

export default CarLoader;
