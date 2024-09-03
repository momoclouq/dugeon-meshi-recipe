import { redirect } from 'next/navigation';

type RecipesSearchParams = {
  option?: 'random';
}

const RecipePage = ({ searchParams }: { searchParams: RecipesSearchParams }) => {
  if (searchParams?.option) {
    // get random recipe id and navigate to recipe
    redirect('/recipes/abc');
  }

  return (
    <div>Recipe page</div>
  );
};

export default RecipePage;