import { Box } from 'components-library';
import {
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  RecipeButton,
  RecipeContainer
} from './components';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { mockedRecipes } from '@mocks/mockedRecipes';

const PopularRecipes = () => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const loading = useSelector((state: RootState) => state.recipe.loading);

  if (recipes.length > 0 || loading) return null;

  return (
    <Box
      className='flex max-[1023px]:flex-col gap-8'
      data-testid='popular-recipes'
    >
      {Object.entries(mockedRecipes).map(([id, recipe], index) => (
        <RecipeContainer key={id} index={index}>
          <img src={recipe.image} alt={recipe.title} width='100%' />
          <DescriptionContainer>
            <DescriptionTitle>{recipe.title}</DescriptionTitle>
            <DescriptionText>{recipe.description}</DescriptionText>
            <RecipeButton>See full recipe</RecipeButton>
          </DescriptionContainer>
        </RecipeContainer>
      ))}
    </Box>
  );
};

export default PopularRecipes;
