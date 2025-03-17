import SparkleIcon from '@/icons/SparkeIcon';
import { GenerateRecipeButton } from './components';

const RandomRecipeGenerator = ({ onClick }: { onClick: () => void }) => (
  <GenerateRecipeButton onClick={onClick} data-testid='random-recipe-generator'>
    Generate <SparkleIcon />
  </GenerateRecipeButton>
);

export default RandomRecipeGenerator;
