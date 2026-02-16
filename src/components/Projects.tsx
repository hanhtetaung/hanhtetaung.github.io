import { Accordion } from "@components/base/Accordion";
import sksSolarMyanmar from "../images/sks-solar-myanmar.png";

export default function Projects() {
	return (
		<section>
			<hr />
			<h1 className="text-4xl font-bold text-center py-2">Projects</h1>
			<hr />
			<Accordion.Root className="flex w-full flex-col justify-center text-gray-900">
				<Accordion title="Portfolio">
					<article className="space-y-4">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Aut iste quo libero quia qui, nam fugiat eum optio voluptas?
							Suscipit nisi blanditiis rerum ex accusantium temporibus aliquam
							reiciendis. Mollitia, nobis!
						</p>

						<a
							href="https://github.com/hanhtetaung/hanhtetaung.github.io"
							target="_blank"
							className="bg-[#232322] text-white px-4 py-2 rounded-md"
							rel="noopener"
						>
							View Project
						</a>
					</article>

					<img src="/portfolio.png" alt="Portfolio website screenshot" />
				</Accordion>

				<Accordion title="SKS Solar">
					<article className="space-y-4">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Aut iste quo libero quia qui, nam fugiat eum optio voluptas?
							Suscipit nisi blanditiis rerum ex accusantium temporibus aliquam
							reiciendis. Mollitia, nobis!
						</p>

						<a
							href="https://skssolarmyanmar.com"
							target="_blank"
							className="bg-[#232322] text-white px-4 py-2 rounded-md"
							rel="noopener"
						>
							View
						</a>
					</article>
					<img
						src={sksSolarMyanmar.src}
						alt="Portfolio website screenshot"
						className="w-1/2 h-1/2"
					/>
				</Accordion>

				<Accordion title="Tenasserim">
					<article className="space-y-4">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Aut iste quo libero quia qui, nam fugiat eum optio voluptas?
							Suscipit nisi blanditiis rerum ex accusantium temporibus aliquam
							reiciendis. Mollitia, nobis!
						</p>

						{/* <a
								href="https://skssolarmyanmar.com"
								target="_blank"
								className="bg-[#232322] text-white px-4 py-2 rounded-md"
								rel="noopener"
							>
								View 
							</a> */}
					</article>
					<img
						// src={sksSolarMyanmar.src}
						alt="Tenasserim website"
						className="w-1/2 h-1/2"
					/>
				</Accordion>
			</Accordion.Root>
		</section>
	);
}
