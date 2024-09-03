import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Recipe } from '@/types/Recipe';
import { convertDateToString } from '@/app/helper/dateHelper';
import Link from 'next/link';

export type RecipeCardProps = {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle><Link href={`/recipes/${recipe.id}`}>{recipe.name}</Link></CardTitle>
        <CardDescription>{convertDateToString(recipe.updateDate)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{recipe.summary}</p>
      </CardContent>
      <CardFooter>
        <p><Link href={`/users/${recipe.author.id}`}>{recipe.author.name}</Link></p>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;