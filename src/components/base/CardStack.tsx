import { motion } from "motion/react";
import { useState } from "react";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

function moveToEnd<T>(arr: T[]): T[] {
	if (arr.length <= 1) return [...arr];
	const [first, ...rest] = arr;
	return [...rest, first as T];
}

interface Card {
	backgroundColor: string;
	header: string;
	description: string;
	logo: string;
}

interface CardStackProps {
	cardsData: Card[];
}

export const CardStack = ({ cardsData }: CardStackProps) => {
	const [cards, setCards] = useState(cardsData);

	const handleDragEnd = () => {
		// Wait for snap-back animation to complete, then move to back
		setTimeout(() => {
			setCards((prev) => moveToEnd(prev));
		}, 200);
	};

	return (
		<div className="relative flex items-center justify-center h-[80vh]">
			<ul className="relative w-[70vh] h-[40vh] lg:w-[50vh] lg:h-[50vh]">
				{cards.map((card, index) => {
					const canDrag = index === 0;

					return (
						<motion.li
							key={card.header}
							style={{
								backgroundColor: card.backgroundColor,
								cursor: canDrag ? "grab" : "auto",
							}}
							className="absolute origin-top flex flex-col items-center justify-center gap-4 w-full h-full p-4 border-4 border-r-8 border-b-8 rounded-xl border-[#232322]"
							animate={{
								top: index * -CARD_OFFSET,
								scale: 1 - index * SCALE_FACTOR,
								zIndex: cards.length - index,
							}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 30,
							}}
							drag={canDrag}
							dragConstraints={{
								top: -120,
								bottom: 120,
								left: -120,
								right: 120,
							}}
							dragElastic={0.2}
							dragSnapToOrigin={true}
							onDragEnd={canDrag ? handleDragEnd : undefined}
						>
							<img
								src={card.logo}
								alt={card.header}
								className="w-12 h-12 lg:w-20 lg:h-20"
							/>
							<article className="space-y-1 text-center">
								<h3 className="text-lg font-semibold">{card.header}</h3>
								<p className="text-sm">{card.description}</p>
							</article>
						</motion.li>
					);
				})}
			</ul>
		</div>
	);
};
