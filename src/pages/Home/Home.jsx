import { Container } from './Home.styled';

function Home() {
  return (
    <>
      <main>
        <Container>
          <div>
            <h1
              style={{
                position: 'absolute',
                top: '15%',
                right: '5%',
                color: '#0b0b0b',
                fontFamily: 'Anta',
              }}
            >
              Faster, easier, stylish - feel the freedom <br /> with our Car
              Rental service!
            </h1>
          </div>
        </Container>
      </main>
    </>
  );
}
export default Home;
