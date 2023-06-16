import { Rings } from 'react-loader-spinner';
import { Division } from './Loader.styled';

function Loader() {
  return (
    <Division>
      <Rings
        height="180"
        width="180"
        color="#4fa94d"
        radius="180"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </Division>
  );
}

export default Loader;
