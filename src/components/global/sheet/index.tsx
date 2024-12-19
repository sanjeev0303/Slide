import React from 'react'

import {
    Sheet as ShadcnSheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { clearModuleContext } from 'next/dist/server/lib/render-server'



type SheetProps = {
    trigger: React.ReactNode
    children: React.ReactNode
    className?: string
}

const Sheet = ({ trigger, children, className }: SheetProps) => {
  return (
    <ShadcnSheet>
        <SheetTrigger className={className}>{trigger}</SheetTrigger>
        <SheetContent>{ children }</SheetContent>
    </ShadcnSheet>
  )
}

export default Sheet
