// src/components/MenuTabs.tsx
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

export default function MenuTabs() {
    const menuItems = {
        cafea: [
            {
                id: 1,
                title: "Espresso",
                description: "Shot perfect de cafea intensa, signature Zuma",
                price: "12 RON",
                badges: ["Intens", "Premium"]
            },
            {
                id: 2,
                title: "Cappuccino",
                description: "Espresso cu lapte spumos si art latte delicat",
                price: "16 RON",
                badges: ["Cremos", "Art Latte"]
            },
            {
                id: 3,
                title: "Flat White",
                description: "Combinatie perfecta cafea-lapte, style australian",
                price: "18 RON",
                badges: ["Echilibrat", "Popular"]
            },
            {
                id: 4,
                title: "Americano",
                description: "Espresso diluat cu apa calda, pentru gustatorul clasic",
                price: "14 RON",
                badges: ["Clasic", "Light"]
            },
            {
                id: 5,
                title: "Latte",
                description: "Cafea cu lapte si spuma delicata, perfect echilibrat",
                price: "17 RON",
                badges: ["Cremos", "Dulce"]
            },
            {
                id: 6,
                title: "Mocha",
                description: "Combinatie indrazneata cafea-ciocolata pentru iubitorii de dulce",
                price: "19 RON",
                badges: ["Ciocolata", "Indulgent"]
            }
        ],
        mancare: [
            {
                id: 7,
                title: "Breakfast Sandwich",
                description: "Sandwich proaspat cu oua, bacon si branza pentru breakfast perfect",
                price: "22 RON",
                badges: ["Fresh", "Breakfast"]
            },
            {
                id: 8,
                title: "Croissant",
                description: "Croissant frantuzesc proaspat copt zilnic cu unt de calitate",
                price: "12 RON",
                badges: ["Proaspat", "Vegetarian"]
            },
            {
                id: 9,
                title: "Avocado Toast",
                description: "Paine artizanala cu avocado, rosii cherry si feta",
                price: "25 RON",
                badges: ["Healthy", "Vegetarian"]
            },
            {
                id: 10,
                title: "Quiche Lorraine",
                description: "Tarta frantuzeasca cu bacon, branza si ceapa",
                price: "28 RON",
                badges: ["Frantuzesc", "Consistent"]
            }
        ],
        deserturi: [
            {
                id: 11,
                title: "Cheesecake",
                description: "Desert cremos cu fructe de padure, reteta proprie",
                price: "18 RON",
                badges: ["Cremos", "Vegetarian"]
            },
            {
                id: 12,
                title: "Tiramisu",
                description: "Desert italian clasic cu mascarpone si cafea",
                price: "20 RON",
                badges: ["Italian", "Cafea"]
            },
            {
                id: 13,
                title: "Brownie",
                description: "Brownie cu ciocolata belgiană si nuci, servit cald",
                price: "16 RON",
                badges: ["Ciocolata", "Cald"]
            }
        ],
        bauturi: [
            {
                id: 14,
                title: "Fresh de portocale",
                description: "100% natural, stors la momentul comenzii din portocale proaspete",
                price: "15 RON",
                badges: ["Natural", "Vegan"]
            },
            {
                id: 15,
                title: "Limonada",
                description: "Bautura racoritoare cu lamaia si menta proaspata",
                price: "13 RON",
                badges: ["Racoritor", "Vegan"]
            },
            {
                id: 16,
                title: "Ceai verde",
                description: "Ceai premium cu antioxidanti, perfect pentru relaxare",
                price: "10 RON",
                badges: ["Healthy", "Relaxant"]
            }
        ]
    }

    return (
        <Tabs defaultValue="cafea" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="cafea">☕ Cafea</TabsTrigger>
                <TabsTrigger value="mancare">🥪 Mancare</TabsTrigger>
                <TabsTrigger value="deserturi">🧁 Deserturi</TabsTrigger>
                <TabsTrigger value="bauturi">🥤 Bauturi</TabsTrigger>
            </TabsList>

            <TabsContent value="cafea" className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.cafea.map((item) => (
                        <Card key={item.id} className="hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg">{item.title}</CardTitle>
                                        <CardDescription>{item.description}</CardDescription>
                                    </div>
                                    <Badge className="bg-coffee-primary text-white ml-2">{item.price}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {item.badges.map((badge, index) => (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className={
                                                badge === "Popular" ? "bg-secondary text-secondary-foreground" :
                                                    badge === "Vegetarian" ? "bg-green-100 text-green-800" :
                                                        badge === "Vegan" ? "bg-green-100 text-green-800" : ""
                                            }
                                        >
                                            {badge}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </TabsContent>

            <TabsContent value="mancare" className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.mancare.map((item) => (
                        <Card key={item.id} className="hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg">{item.title}</CardTitle>
                                        <CardDescription>{item.description}</CardDescription>
                                    </div>
                                    <Badge className="bg-coffee-primary text-white ml-2">{item.price}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {item.badges.map((badge, index) => (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className={
                                                badge === "Popular" ? "bg-secondary text-secondary-foreground" :
                                                    badge === "Vegetarian" ? "bg-green-100 text-green-800" :
                                                        badge === "Vegan" ? "bg-green-100 text-green-800" : ""
                                            }
                                        >
                                            {badge}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </TabsContent>

            <TabsContent value="deserturi" className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.deserturi.map((item) => (
                        <Card key={item.id} className="hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg">{item.title}</CardTitle>
                                        <CardDescription>{item.description}</CardDescription>
                                    </div>
                                    <Badge className="bg-coffee-primary text-white ml-2">{item.price}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {item.badges.map((badge, index) => (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className={
                                                badge === "Popular" ? "bg-secondary text-secondary-foreground" :
                                                    badge === "Vegetarian" ? "bg-green-100 text-green-800" :
                                                        badge === "Vegan" ? "bg-green-100 text-green-800" : ""
                                            }
                                        >
                                            {badge}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </TabsContent>

            <TabsContent value="bauturi" className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.bauturi.map((item) => (
                        <Card key={item.id} className="hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg">{item.title}</CardTitle>
                                        <CardDescription>{item.description}</CardDescription>
                                    </div>
                                    <Badge className="bg-coffee-primary text-white ml-2">{item.price}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {item.badges.map((badge, index) => (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className={
                                                badge === "Popular" ? "bg-secondary text-secondary-foreground" :
                                                    badge === "Vegetarian" ? "bg-green-100 text-green-800" :
                                                        badge === "Vegan" ? "bg-green-100 text-green-800" : ""
                                            }
                                        >
                                            {badge}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    )
}