import { RecipeContainerProps } from '@/types/Recipe';
import { Button, Stack, Text } from 'components-library';

export const RecipeSubtitle = ({ children }: { children: React.ReactNode }) => (
  <Text as='h2' className='mb-15 font-bold text-xl'>
    {children}
  </Text>
);

export const RecipeContainer = ({ children, index }: RecipeContainerProps) => (
  <Stack
    className='max-w-xs h-400px rounded-lg shadow-2xl overflow-hidden'
    aria-label={`Recipe ${index + 1}`} // We add 1 to the index for voice-over readability
  >
    {children}
  </Stack>
);

export const RecipeButton = (props: React.ComponentProps<typeof Button>) => (
  <Button
    {...props}
    className={`w-full bg-primary hover:bg-accent-dark shadow-2xl`}
  />
);

export const DescriptionContainer = ({
  children
}: {
  children: React.ReactNode;
}) => <Stack className='p-6 h-full justify-between gap-2'>{children}</Stack>;

export const DescriptionTitle = ({
  children
}: {
  children: React.ReactNode;
}) => (
  <Text as='h3' className='font-bold'>
    {children}
  </Text>
);

export const DescriptionText = ({ summary }: { summary: string }) => (
  <Text
    className='mb-8 line-clamp-5'
    dangerouslySetInnerHTML={{ __html: summary }}
  />
);
