import { SheetClose, SheetContent, SheetHeader, SheetTitle,  } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";


const SiderbarSheet = () => {
    return (
       
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

                <div className="flex flex-col gap-2 border-b border-solid py-5">
                    {quickSearchOptions.map((option) => (
                        <SheetClose key={option.title} asChild>
                            <Button className="justify-start gap-2" variant="ghost" asChild>
                                <Link href={`/barbershops?service=${option.title}`}>
                                    <Image
                                        alt={option.title}
                                        src={option.imageUrl}
                                        height={18}
                                        width={18}
                                    />
                                    {option.title}
                                </Link>
                            </Button>
                        </SheetClose>
                    ))}
                </div>

                <div className="flex flex-col  gap-2 py-5">
                    <Button variant="ghost" className="justify-start gap-2">
                        <LogOutIcon size={18} />
                        Sair da Conta
                    </Button>
                </div>
            </SheetContent>
       
        );
}

export default SiderbarSheet;