import { Accordion } from "@base-ui/react/accordion";
import AccordionItem from "@components/base/AccordionItem";

import PortfolioImage from "@images/projects/portfolio.png";
import SKSLogo from "@images/projects/sks-solar-myanmar.png";
import AstroLogo from "@images/tech-logos/astro.svg";
import ReactLogo from "@images/tech-logos/react.svg";
import SimpleIconsLogo from "@images/tech-logos/simpleicons.svg";
import TailwindLogo from "@images/tech-logos/tailwindcss.svg";
import TypeScriptLogo from "@images/tech-logos/typescript.svg";

const projectsData = [
	{
		title: "Portfolio",
		description:
			"A website that collects my projects to show my skills, how I work, and my experience. It presents what I built and the technologies I used in a clear and simple way.",
		image: PortfolioImage.src,
		technologies: [
			{ logo: TypeScriptLogo.src, name: "TypeScript" },
			{ logo: AstroLogo.src, name: "Astro" },
			{ logo: ReactLogo.src, name: "React" },
			{ logo: TailwindLogo.src, name: "Tailwind" },
			{ logo: SimpleIconsLogo.src, name: "Simple Icons" },
		],
	},
	{
		title: "SKS Solar Myanmar",
		description:
			"A website for SKS SOLAR (SALES & SERVICES) COMPANY LIMITED, a solar energy company based in Myanmar. It shows their solar products, services, and company information, helping customers learn about their solutions and contact them easily.",
		image: SKSLogo.src,
		technologies: [
			{ logo: TypeScriptLogo.src, name: "TypeScript" },
			{ logo: AstroLogo.src, name: "Astro" },
			{ logo: TailwindLogo.src, name: "Tailwind" },
		],
	},
	{
		title: "Tenasserim",
		description:
			"A website that collects local foods from Thailand, Vietnam, and Cambodia. It shows each dish with clean images and short descriptions so users can quickly learn about traditional foods and culture.",
		technologies: [
			{ logo: TypeScriptLogo.src, name: "TypeScript" },
			{ logo: AstroLogo.src, name: "Astro" },
			{ logo: ReactLogo.src, name: "React" },
			{ logo: TailwindLogo.src, name: "Tailwind" },
		],
	},
];

export default function Projects() {
	return (
		<section>
			<hr />
			<h1 className="text-2xl lg:text-4xl font-bold text-center py-2">
				Projects
			</h1>
			<hr />

			<Accordion.Root className="flex w-full flex-col justify-center text-gray-900">
				{projectsData.map((project) => (
					<AccordionItem
						key={project.title}
						title={project.title}
						image={project.image}
					>
						<article className="space-y-4">
							<p>{project.description}</p>
							<ul className="flex gap-4">
								{project.technologies.map((technology) => (
									<li key={technology.name}>
										<img
											src={technology.logo}
											alt={technology.name}
											className="w-6 h-6"
										/>
									</li>
								))}
							</ul>
						</article>
					</AccordionItem>
				))}
			</Accordion.Root>
		</section>
	);
}
