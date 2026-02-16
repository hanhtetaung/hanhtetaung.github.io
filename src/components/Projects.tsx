import { Accordion } from "@base-ui/react/accordion";
import AccordionItem from "@components/base/AccordionItem";
import PortfolioImage from "@images/projects/portfolio.png";
import sksSolarMyanmar from "@images/projects/sks-solar-myanmar.png";
import AstroLogo from "@images/tech-logos/astro.svg";
import ReactLogo from "@images/tech-logos/react.svg";
import SimpleIconsLogo from "@images/tech-logos/simpleicons.svg";
import TailwindLogo from "@images/tech-logos/tailwindcss.svg";
import TypeScriptLogo from "@images/tech-logos/typescript.svg";

export default function Projects() {
	return (
		<section>
			<hr />
			<h1 className="text-2xl lg:text-4xl font-bold text-center py-2">
				Projects
			</h1>
			<hr />
			<Accordion.Root className="flex w-full flex-col justify-center text-gray-900">
				<AccordionItem title="Portfolio" image={PortfolioImage.src}>
					<article className="space-y-4 mb-4">
						<p>
							A website that collects my projects to show my skills, how I work,
							and my experience. It presents what I built and the technologies I
							used in a clear and simple way.
						</p>

						<ul className="flex gap-4">
							<li>
								<img
									src={TypeScriptLogo.src}
									alt="TypeScript"
									className="w-6 h-6"
								/>
							</li>
							<li>
								<img src={AstroLogo.src} alt="Astro" className="w-6 h-6" />
							</li>
							<li>
								<img src={ReactLogo.src} alt="React" className="w-6 h-6" />
							</li>
							<li>
								<img
									src={TailwindLogo.src}
									alt="Tailwind"
									className="w-6 h-6"
								/>
							</li>

							<li>
								<img
									src={SimpleIconsLogo.src}
									alt="Simple Icons"
									className="w-6 h-6"
								/>
							</li>
						</ul>

						{/* <a
							href="https://github.com/hanhtetaung/hanhtetaung.github.io"
							target="_blank"
							className="bg-[#ff6900] text-white px-4 py-2 border-4 border-[#242323]"
							rel="noopener"
						>
							View Details
						</a> */}
					</article>
				</AccordionItem>

				<AccordionItem title="SKS Solar" image={sksSolarMyanmar.src}>
					<article className="space-y-4">
						<p>
							A website for SKS SOLAR (SALES & SERVICES) COMPANY LIMITED, a
							solar energy company based in Myanmar. It shows their solar
							products, services, and company information, helping customers
							learn about their solutions and contact them easily.
						</p>

						<ul className="flex gap-4">
							<li>
								<img
									src={TypeScriptLogo.src}
									alt="TypeScript"
									className="w-6 h-6"
								/>
							</li>
							<li>
								<img src={AstroLogo.src} alt="Astro" className="w-6 h-6" />
							</li>

							<li>
								<img
									src={TailwindLogo.src}
									alt="Tailwind"
									className="w-6 h-6"
								/>
							</li>
						</ul>

						{/* <a
							href="https://skssolarmyanmar.com"
							target="_blank"
							className="bg-[#232322] text-white px-4 py-2 rounded-md"
							rel="noopener"
						>
							View
						</a> */}
					</article>
				</AccordionItem>

				<AccordionItem title="Tenasserim">
					<article className="space-y-4">
						<p>
							A website that collects local foods from Thailand, Vietnam, and
							Cambodia. It shows each dish with clean images and short
							descriptions so users can quickly learn about traditional foods
							and culture.
						</p>

						<ul className="flex gap-4">
							<li>
								<img
									src={TypeScriptLogo.src}
									alt="TypeScript"
									className="w-6 h-6"
								/>
							</li>
							<li>
								<img src={AstroLogo.src} alt="Astro" className="w-6 h-6" />
							</li>
							<li>
								<img src={ReactLogo.src} alt="React" className="w-6 h-6" />
							</li>
							<li>
								<img
									src={TailwindLogo.src}
									alt="Tailwind"
									className="w-6 h-6"
								/>
							</li>
						</ul>

						{/* <a
								href="https://skssolarmyanmar.com"
								target="_blank"
								className="bg-[#232322] text-white px-4 py-2 rounded-md"
								rel="noopener"
							>
								View 
							</a> */}
					</article>
				</AccordionItem>
			</Accordion.Root>
		</section>
	);
}
