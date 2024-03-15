import {
  BlueTextSpan,
  BlueTextBlock,
  Text,
  Wrapper,
} from './NoSearchResults.styled';

const NoCarsSearchResult = () => {
  return (
    <Wrapper>
      <Text>
        <BlueTextSpan>Sorry, no results were found</BlueTextSpan> for the cars
        filters you selected. You may want to consider other search options to
        find the car you want. Our range is wide and you have the opportunity to
        find more options that suit your needs.
      </Text>
      <BlueTextBlock>Try changing the search parameters.</BlueTextBlock>
    </Wrapper>
  );
};

export default NoCarsSearchResult;
