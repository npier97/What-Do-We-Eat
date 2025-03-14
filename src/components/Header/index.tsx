import { Navbar } from 'components-library';
import Logo from '@assets/logo.png';

const Header = () => (
  <Navbar
    logo={<img src={Logo} alt='Logo' width={'50px'} />}
    brand='WhatDoWeEat'
    links={[
      {
        href: '/',
        name: 'Home'
      },
      {
        href: '/recipes',
        name: 'Recipes'
      }
    ]}
    size='md'
    fixed={true}
    themeOnScroll={{
      backgroundColor: 'bg-white',
      textColor: 'text-primary',
      shadow: 'shadow-lg'
    }}
    className='bg-transparent text-white'
    data-testid='navbar'
  />
);

export default Header;
