import { AppBar, Box, Toolbar, styled } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const Header = () => {
  const logoURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: '55px' }}>
        <Component>
          <img src={logoURL} alt="logo" className=" w-20 " />
          <div className="italic text-[10px] mt-1 flex gap-1 items-center">
            <p>
              Explore&nbsp;<span className="text-[#ffe500]">Plus</span>
            </p>
            <img src={subURL} alt="sub logo" className="w-2" />
          </div>
        </Component>
        <Search />
        <CustomButtons />
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
