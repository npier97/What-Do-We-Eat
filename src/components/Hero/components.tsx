import { Box, Text, Input, Button } from 'components-library';
import KitchenBackground from '@assets/kitchen.png';

export const HeroContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    className='pt-40 pb-20 text-white flex flex-col items-center bg-hero bg-no-repeat bg-cover bg-center bg-fixed'
    style={{ backgroundImage: `url(${KitchenBackground})` }}
    data-testid='hero'
  >
    {children}
  </Box>
);

export const HeroTitle = ({ children }: { children: React.ReactNode }) => (
  <Text as='h1' className='mb-4 font-bold text-4xl'>
    {children}
  </Text>
);

export const HeroSubtitle = ({ children }: { children: React.ReactNode }) => (
  <Text as='h2' className='mb-4 font-semibold text-xl'>
    {children}
  </Text>
);

export const HeroInput = (props: React.ComponentProps<typeof Input>) => (
  <Input
    {...props}
    type='text'
    className='max-w-80 min-w-20 bg-white text-black outline-none shadow-2xl'
  />
);

export const HeroButton = (props: React.ComponentProps<typeof Button>) => (
  <Button
    {...props}
    className='ml-4 bg-primary hover:bg-accent-dark shadow-2xl'
  />
);

export const InputSpan = (props: React.ComponentProps<'span'>) => (
  <span
    {...props}
    className='p-2 bg-accent-light text-primary hover:bg-accent-medium shadow-2xl hover:ring-2 hover:ring-[#50A57A] flex items-center rounded-2xl cursor-pointer'
  />
);
