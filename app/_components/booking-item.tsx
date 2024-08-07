import { Badge } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const BookingItem = () => {
    return (
        <>
            <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-4">Agendamentos</h2>
            <Card>
                <CardContent className="flex justify-between p-0">
                    <div className="flex flex-col gap-2 py-5 pl-5">
                        <Badge className="w-fit">Confirmado</Badge>
                        <h3 className="font-semibold">Corte de Cabelo</h3>

                        <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png" />
                            </Avatar>
                            <p className="text-sm">Barbearia FSW</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
                        <p className="text-sm">Agosto</p>
                        <p className="text-2xl">05</p>
                        <p className="text-sm">20:00</p>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default BookingItem;