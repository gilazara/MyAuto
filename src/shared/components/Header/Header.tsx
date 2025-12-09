import { ReactComponent as MyAutoLogo } from '@assets/myAuto.svg';
import Container from '../Container';

const Header = () => {
  return (
    <header className="bg-surface h-20 py-[17px]">
      <Container>
        <MyAutoLogo
          className="h-[46px] w-[161px] ml-[17px] md:ml-0"
          aria-label="MyAuto"
        />
      </Container>
    </header>
  );
};

export default Header;
