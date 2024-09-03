import Markdown from 'react-markdown';

type RecipeDetailPageProps = {
  // search parameter provided by nextjs
  params: {
    recipeId: string
  }
}

const mockMarkdown = '# Hi, *Pluto*!';

const RecipeDetailpage = ({ params }: RecipeDetailPageProps) => {
  return (
    <Markdown>
      {mockMarkdown}
    </Markdown>
  );
};

export default RecipeDetailpage;