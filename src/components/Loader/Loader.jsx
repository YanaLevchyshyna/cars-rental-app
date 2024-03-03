import { LoaderBackdrop } from './Loader.styled';
import RingLoader from 'react-spinners/RingLoader';

function Loader() {
  return (
    <LoaderBackdrop>
      <RingLoader
        color="#0c37c3"
        size={180}
        cssOverride={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </LoaderBackdrop>
  );
}

export default Loader;
