// thanks to oliver: https://www.youtube.com/@olivierlarose1
import { ReactLenis } from "lenis/react";
import {
	type MotionValue,
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "motion/react";
import { useRef } from "react";

const STICKY_BAR_HIDE_THRESHOLD = 1;

import AstroLogo from "@images/tech-logos/astro.svg";
import BiomeLogo from "@images/tech-logos/biome.svg";
import BunLogo from "@images/tech-logos/bun.svg";
import CursorLogo from "@images/tech-logos/cursor.svg";
import GitHubLogo from "@images/tech-logos/github.svg";
import ReactLogo from "@images/tech-logos/react.svg";
import TailwindLogo from "@images/tech-logos/tailwindcss.svg";
import TypeScriptLogo from "@images/tech-logos/typescript.svg";

const cards = [
	{
		backgroundColor: "#14b5e5",
		header: "React",
		description: "Use React to build user interactions.",
		logo: ReactLogo.src,
	},
	{
		backgroundColor: "#ff8633",
		header: "TypeScript",
		description: "Use TypeScript to write maintainable code.",
		logo: TypeScriptLogo.src,
	},
	{
		backgroundColor: "#d485ea",
		header: "Astro",
		description: "Use Astro to fast build websites.",
		logo: AstroLogo.src,
	},
	{
		backgroundColor: "#0ca95b",
		header: "Tailwind CSS",
		description: "Use Tailwind CSS to build custom styles.",
		logo: TailwindLogo.src,
	},
	{
		backgroundColor: "#43d0ad",
		header: "Bun",
		description: "Use Bun to build instantly fast.",
		logo: BunLogo.src,
	},
	{
		backgroundColor: "#f38ba3",
		header: "GitHub",
		description: "Use GitHub to host and version control code.",
		logo: GitHubLogo.src,
	},
	{
		backgroundColor: "#a78bfa",
		header: "Biome",
		description: "Use Biome to lint and format code.",
		logo: BiomeLogo.src,
	},
	{
		backgroundColor: "#fefc78",
		header: "Cursor",
		description: "Use Cursor as a code editor.",
		logo: CursorLogo.src,
	},
];

export default function CardStack() {
	const container = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	useMotionValueEvent(scrollYProgress, "change", (v) => {
		const hide = v >= STICKY_BAR_HIDE_THRESHOLD;
		window.dispatchEvent(
			new CustomEvent("tools-sticky-bar", { detail: { hide } }),
		);
	});

	return (
		<ReactLenis root>
			<section ref={container} className="lg:w-[60%] mx-auto">
				{cards.map((card, i) => {
					const targetScale = 1 - (cards.length - i) * 0.05;
					return (
						<Card
							key={card.header}
							i={i}
							logo={card?.logo}
							header={card?.header}
							backgroundColor={card?.backgroundColor}
							description={card?.description}
							progress={scrollYProgress}
							range={[i * 0.25, 1]}
							targetScale={targetScale}
						/>
					);
				})}
			</section>
		</ReactLenis>
	);
}
interface CardProps {
	i: number;
	header: string;
	description: string;
	logo: string;
	backgroundColor: string;
	progress: MotionValue<number>;
	range: [number, number];
	targetScale: number;
}

export const Card: React.FC<CardProps> = ({
	i,
	header,
	description,
	logo,
	backgroundColor,
	progress,
	range,
	targetScale,
}) => {
	const container = useRef(null);

	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={container}
			className="h-screen flex items-center justify-center sticky top-0"
		>
			<motion.div
				style={{
					backgroundColor: backgroundColor,
					scale,
					top: `calc(-5vh + ${i * 25}px)`,
				}}
				className={`relative -top-[2%] h-[250px] w-full sm:p-4 origin-top
					border-4 border-r-8 border-b-8 rounded-xl border-[#232322] lg:p-8 p-4 flex flex-col items-center justify-center gap-4`}
			>
				<img src={logo} alt={header} className="w-12 h-12 lg:w-20 lg:h-20" />
				<article className="space-y-1">
					<h3 className="text-lg font-semibold text-center">{header}</h3>
					<p className="text-md text-center">{description}</p>
				</article>
			</motion.div>
		</div>
	);
};
