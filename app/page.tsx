import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";

interface Recipe {
	title: string;
	image: string;
	time: number;
	description: string;
	vegan: boolean;
	id: string;
}

async function getRecipes(): Promise<Recipe[]> {
	const result = await fetch("http://localhost:4000/recipes");

	return result.json();
}

export default async function Home() {
	const recipes = await getRecipes();
	return (
		<main>
			<div className="grid grid-cols-3 gap-3">
				{recipes.map((recipe: Recipe) => (
					<Card key={recipe.id}>
						<CardHeader>
							<CardTitle>{recipe.title}</CardTitle>
							<CardDescription>{recipe.time} mins to cook.</CardDescription>
						</CardHeader>
						<CardContent>
							<p>{recipe.description}</p>
						</CardContent>
						<CardFooter className="flex justify-between">
							<button>View Recipe</button>
							{recipe.vegan && <p>Vegan!</p>}
						</CardFooter>
					</Card>
				))}
			</div>
		</main>
	);
}
