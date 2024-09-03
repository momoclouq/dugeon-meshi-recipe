import Image from 'next/image';

import banner from '@/public/homepage/banner.jpg';
import RecipeCard from './components/RecipeCard/RecipeCard';
import { generateRecipe } from '@/types/mock/generateDataMock';
import { Recipe } from '@/types/Recipe';

const mockRecipes: Recipe[] = [
  generateRecipe(),
  generateRecipe(),
  generateRecipe()
];

export default function Home() {
  return (
    <main>
      <section className='flex flex-col justify-center items-center py-7 px-7 bg-yellow-100 px-3'>
        <h1 className='my-5 text-3xl font-medium'>Dungeon Meshi Cook book</h1>
        <p className='mb-5'>Access fantastic recipes with exotic ingredients</p>
        <Image
          style={
            { borderRadius: '1em', }
          }
          src={banner}
          width={700}
          alt='Dungeon Meshi cookbook banner'
        />
      </section>
      <section className='px-3 pb-1'>
        <h1 className='text-2xl font-medium my-2 text-center'>Latest recipes</h1>
        <div className='flex flex-col sm:flex-row'>
          {mockRecipes.map((recipe) => (
              <div className='my-2 mx-3 lg:mx-3 lg:my-0' key={`recipe-card-${recipe.id}`}>
                <RecipeCard  recipe={recipe} />
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
