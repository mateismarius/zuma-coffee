'use client'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Separator } from "../ui/separator"
import { Menu } from "lucide-react"
import {Button} from "../ui/button";

export default function MobileNavigation() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6 text-stone-600" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>☕ Zuma Coffee</SheetTitle>
                    <SheetDescription>
                        Meniul principal
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <a href="#" className="text-stone-600 hover:text-coffee-primary transition-colors">Acasa</a>
                    <a href="#" className="text-stone-600 hover:text-coffee-primary transition-colors">Meniu</a>
                    <a href="#" className="text-stone-600 hover:text-coffee-primary transition-colors">Coworking</a>
                    <a href="#" className="text-stone-600 hover:text-coffee-primary transition-colors">Despre</a>
                    <a href="#" className="text-stone-600 hover:text-coffee-primary transition-colors">Contact</a>
                    <Separator />
                    <Button className="bg-coffee-primary hover:bg-coffee-accent text-white">
                        Rezerva Masa
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}