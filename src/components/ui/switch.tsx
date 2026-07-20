"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange?.(!checked)}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full border border-border/70 bg-muted transition-colors",
          checked && "bg-primary",
          className,
        )}
      >
        <span
          className={cn(
            "absolute left-0.5 size-5 rounded-full bg-background shadow transition-transform",
            checked && "translate-x-5",
          )}
        />
        <input ref={ref} type="checkbox" hidden checked={checked} readOnly {...props} />
      </button>
    );
  },
);
Switch.displayName = "Switch";

export { Switch };
