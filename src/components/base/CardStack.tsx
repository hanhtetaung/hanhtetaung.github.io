import { motion } from "motion/react";
import type React from "react";
import { useState } from "react";

const CARD_COLORS = ["#266678", "#cb7c7a", " #36a18b", "#cda35f", "#747474"];
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

function moveToEnd<T>(arr: T[]): T[] {
	if (arr.length <= 1) return [...arr];
	const [first, ...rest] = arr;
	return [...rest, first as T];
}

export const CardStack = () => {
	const [cards, setCards] = useState(CARD_COLORS);

	const handleDragEnd = () => {
		// Wait for snap-back animation to complete, then move to back
		setTimeout(() => {
			setCards((prev) => moveToEnd(prev));
		}, 200);
	};

	return (
		<div style={wrapperStyle}>
			<ul style={cardWrapStyle}>
				{cards.map((color, index) => {
					const canDrag = index === 0;

					return (
						<motion.li
							key={color}
							style={{
								...cardStyle,
								backgroundColor: color,
								cursor: canDrag ? "grab" : "auto",
							}}
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
						/>
					);
				})}
			</ul>
		</div>
	);
};
const wrapperStyle: React.CSSProperties = {
	position: "relative",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "100vh",
};

const cardWrapStyle: React.CSSProperties = {
	position: "relative",
	width: "350px",
	height: "220px",
};

const cardStyle: React.CSSProperties = {
	position: "absolute",
	width: "350px",
	height: "220px",
	borderRadius: "8px",
	transformOrigin: "top center",
	listStyle: "none",
};
