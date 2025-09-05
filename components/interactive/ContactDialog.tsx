"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { Mail } from "lucide-react"

export default function ContactDialog() {
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        setIsOpen(false)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="w-full">
                    <Mail className="w-5 h-5 mr-2" />
                    Trimite Mesaj
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Contacteaza Zuma Coffee</DialogTitle>
                    <DialogDescription>
                        Trimite-ne un mesaj si iti raspundem in maximum 24 de ore.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="contact-name">Nume</Label>
                        <Input id="contact-name" placeholder="Numele tau" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="email@exemplu.ro" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subiect</Label>
                        <Input id="subject" placeholder="Despre ce vrei sa vorbesti?" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="contact-message">Mesaj</Label>
                        <Textarea id="contact-message" placeholder="Scrie mesajul tau aici..." rows={4} required />
                    </div>
                    <div className="flex justify-end gap-3 mt-4">
                        <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                            Anuleaza
                        </Button>
                        <Button type="submit" className="bg-coffee-primary hover:bg-coffee-accent text-white">
                            <Mail className="w-4 h-4 mr-2" />
                            Trimite Mesajul
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
