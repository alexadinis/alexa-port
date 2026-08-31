"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cn } from "../../utils/utils";

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "group/switch relative inline-flex h-[18.4px] w-8 shrink-0 items-center rounded-full border border-transparent bg-green outline-none transition-all after:absolute after:-inset-x-3 after:-inset-y-[13px] focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-current data-checked:bg-blue data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-4 translate-x-0 rounded-full bg-white transition-transform group-data-checked/switch:translate-x-[calc(100%-2px)]"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
