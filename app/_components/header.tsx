
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { SheetTrigger, Sheet } from "./ui/sheet";
import { Button } from "./ui/button";
import SiderbarSheet from "./siderbar-sheet";
import Link from "next/link";


const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 flex flex-row  items-center justify-between">
                <Link href="/">
                    <Image src="/logo.png" height={18} width={120} alt="FSW Barber" />
                </Link>

                <Sheet>
                    <SheetTrigger>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                        <SiderbarSheet />
                    </SheetTrigger>
                </Sheet>
            </CardContent>
        </Card>
    );
}

export default Header;