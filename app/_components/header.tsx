import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";



const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 flex flex-row  items-center justify-between">
                <Image src="/logo.png" height={18} width={120} alt="FSW Barber" />

                <Sheet>
                    <SheetTrigger>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle className="text-left">
                                Menu
                            </SheetTitle>
                        </SheetHeader>

                        <div className="py-5 border-b flex items-center border-solid gap-3">
                            <Avatar>
                                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGLfMcRQLeG6HSAfx7kym7mqEfQMQAiykHg&s" />
                            </Avatar>

                            <div>
                                <p className="font-bold">John Doe</p>
                                <p className="text-xs">Jonh@fullstack.io</p>
                            </div>
                        </div>
                        <div className="flex flex-col  gap-2 py-5 border-b border-solid">
                            <SheetClose asChild>
                                <Button className="justify-start gap-2" variant="ghost" asChild>
                                    <Link href="/">
                                        <HomeIcon size={18} />
                                        Início
                                    </Link>
                                </Button>
                            </SheetClose>
                            <Button className="justify-start gap-2" variant="ghost">
                                <CalendarIcon size={18} />
                                Agendamento
                            </Button>
                        </div>

                        <div className="flex flex-col  gap-2 py-5 border-b border-solid">
                            {quickSearchOptions.map((option) => (
                                <Button
                                    className="justify-start gap-2"
                                    variant="ghost"
                                    key={option.title}
                                >
                                    <Image
                                        src={option.imageUrl}
                                        height={18}
                                        width={18}
                                        alt={option.title}
                                    />
                                    {option.title}
                                </Button>
                            ))}

                        </div>

                        <div className="flex flex-col  gap-2 py-5">
                            <Button variant="ghost" className="justify-start gap-2">
                                <LogOutIcon size={18} />
                                Sair da Conta
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
}

export default Header;