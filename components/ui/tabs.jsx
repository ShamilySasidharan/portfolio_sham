"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props} />
  );
}

function TabsList({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex text-fonttext h-auto rounded-md p-1 ",
        className
      )}
      {...props} />
  );
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex xl:py-2 ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-fonttext items-center w-full bg-[#011e42] justify-center whitespace-nowrap text-white  data-[state=active]:text-black data-[state-active]:font-bold data-[state=active]:shadow-sm rounded-lg text-base py-1.5 font-medium",
        className
      )}
      {...props} />
  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none min-h-[480px]", className)}
      {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
