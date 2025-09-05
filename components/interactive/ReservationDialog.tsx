"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Label } from "../ui/label"
import { Laptop } from "lucide-react"

interface ReservationDialogProps {
    variant?: "default" | "outline"
}

export default function ReservationDialog({ variant = "default" }: ReservationDialogProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        setIsOpen(false)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {variant === "outline" ? (
                    <Button variant="outline" size="lg">
                        <Laptop className="w-5 h-5 mr-2" />
                        Rezerva Spatiul de Lucru
                    </Button>
                ) : (
                    <Button className="bg-coffee-primary hover:bg-coffee-accent text-white">
                        Rezerva Masa
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Rezerva Masa la Zuma Coffee</DialogTitle>
                    <DialogDescription>
                        Completeaza formularul pentru a rezerva o masa in cafeneaua nostra din Focsani.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nume complet</Label>
                        <Input id="name" placeholder="Ion Popescu" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" placeholder="0737 123 456" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="guests">Numar persoane</Label>
                        <Select required>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecteaza numarul de persoane" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1 persoana</SelectItem>
                                <SelectItem value="2">2 persoane</SelectItem>
                                <SelectItem value="3">3 persoane</SelectItem>
                                <SelectItem value="4">4 persoane</SelectItem>
                                <SelectItem value="5+">5+ persoane</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="type">Tip rezervare</Label>
                        <Select required>
                            <SelectTrigger>
                                <SelectValue placeholder="Alege tipul de rezervare" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="coffee">Cafea si relaxare</SelectItem>
                                <SelectItem value="work">Spatiu de lucru</SelectItem>
                                <SelectItem value="meeting">Intalnire business</SelectItem>
                                <SelectItem value="event">Eveniment privat</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Mesaj (optional)</Label>
                        <Textarea id="message" placeholder="Cerinte speciale sau alte detalii..." />
                    </div>
                    <div className="flex justify-end gap-3 mt-4">
                        <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                            Anuleaza
                        </Button>
                        <Button type="submit" className="bg-coffee-primary hover:bg-coffee-accent text-white">
                            Trimite Rezervarea
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}