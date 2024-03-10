import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
			<div className="grid grid-cols-3 gap-8">
				{recipes.map((recipe: Recipe) => (
					<Card key={recipe.id} className="flex flex-col justify-between">
						<div className="flex flex-col justify-between">
							<CardHeader className="flex-row gap-4 items-center">
								<Avatar>
									<Avatar>
										<AvatarImage src={`/img/${recipe.image}`} alt="@shadcn" />
										<AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
									</Avatar>
								</Avatar>
								<div>
									<CardTitle>{recipe.title}</CardTitle>
									<CardDescription>{recipe.time} mins to cook.</CardDescription>
								</div>
							</CardHeader>
							<CardContent>
								<p>{recipe.description}</p>
							</CardContent>
						</div>
						<CardFooter className="flex justify-between">
							<Button variant="secondary">View Recipe</Button>
							{recipe.vegan && <Badge variant="destructive">Vegan!</Badge>}
						</CardFooter>
					</Card>
				))}
			</div>
		</main>
	);
}
