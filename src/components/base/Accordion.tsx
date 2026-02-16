import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import type { ReactNode } from "react";

export interface AccordionItemProps {
	title: string;
	children: ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
	return (
		<BaseAccordion.Item className="border-b border-gray-200">
			<BaseAccordion.Header>
				<BaseAccordion.Trigger className="group relative flex w-full items-baseline justify-between gap-4 py-2 pr-1 pl-3 text-left font-medium hover:bg-gray-100 focus-visible:z-1 focus-visible:outline focus-visible:outline-blue-800 text-2xl">
					{title}
					<ChevronIcon className="mr-2 size-3 transition-all ease-out group-data-panel-open:-rotate-90 rotate-90" />
				</BaseAccordion.Trigger>
			</BaseAccordion.Header>
			<BaseAccordion.Panel className="h-(--accordion-panel-height) overflow-hidden text-base text-gray-600 transition-[height] ease-out data-ending-style:h-0 data-starting-style:h-0">
				<div className="flex justify-between gap-4 p-4">{children}</div>
			</BaseAccordion.Panel>
		</BaseAccordion.Item>
	);
}

export const Accordion = Object.assign(AccordionItem, {
	Root: BaseAccordion.Root,
});

function ChevronIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
			aria-hidden="true"
			{...props}
		>
			<path d="M3.5 9L7.5 5L3.5 1" stroke="currentcolor" />
		</svg>
	);
}
