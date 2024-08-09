import BarbershopItem from "../_components/barbershop-item";
import Header from "../_components/header";
import Search from "../_components/search";
import { db } from "../_lib/prisma";

interface BarbershopsPage {
    searchParams: {
        search?: string
    }
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPage) => {
    const barbershops = await db.barbershop.findMany({
        where: {
            name: {
                contains: searchParams?.search,
                mode: "insensitive",
            },
        },
    })
    return (
        <div className="h-screen">
            <Header />
            <div className="mt-6 px-5">
                <Search />
            </div>
            <div className="px-5">
                <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-4">Resultados para &quot;{searchParams.search}&quot;</h2>
                <div className="grid grid-cols-2 gap-4">
                    {barbershops.map(barbershops => (
                        <BarbershopItem key={barbershops.id} barbershop={barbershops} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BarbershopsPage;