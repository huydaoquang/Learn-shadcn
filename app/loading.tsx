import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
	const items = "skeletonn".split("").map((i) => <SkeletonCard key={i} />);
	return (
		<main>
			<div className="grid grid-cols-3 gap-8">{items}</div>
		</main>
	);
}
