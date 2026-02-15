import { ScrollArea } from '@base-ui/react/scroll-area';

interface ScrollAreaProps {
  children: React.ReactNode;
}

export default function ScrollAreaPanel({ children }: ScrollAreaProps) {
  return (
    <ScrollArea.Root className="w-full max-w-[calc(100vw-8rem)]">
      <ScrollArea.Viewport className="h-full rounded-md outline outline-1 -outline-offset-1 outline-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800">
          {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="relative flex rounded bg-gray-200 opacity-0 transition-opacity pointer-events-none before:absolute before:content-[''] data-[orientation=vertical]:m-2 data-[orientation=vertical]:w-1 data-[orientation=vertical]:before:h-full data-[orientation=vertical]:before:w-5 data-[orientation=vertical]:before:left-1/2 data-[orientation=vertical]:before:-translate-x-1/2 data-[orientation=horizontal]:m-2 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:before:h-5 data-[orientation=horizontal]:before:w-full data-[orientation=horizontal]:before:left-0 data-[orientation=horizontal]:before:right-0 data-[orientation=horizontal]:before:-bottom-2 data-[hovering]:pointer-events-auto data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[scrolling]:pointer-events-auto data-[scrolling]:opacity-100 data-[scrolling]:duration-0"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="w-full rounded bg-gray-500" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}