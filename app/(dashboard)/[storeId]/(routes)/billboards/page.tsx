import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import {BillboardClient} from "./componets/client";
import {BillboardColumn} from "@/app/(dashboard)/[storeId]/(routes)/billboards/componets/columns";

const BillboardsPage = async ({
  params
}: {
    params: { storeId: string }
}) => {

    const billboards = await prismadb.billboard.findMany({
        where: {
            id: params.storeId
        },
        orderBy: {
            createdAt: 'desc',
        }

    });
    console.log("h3", billboards.entries())

    const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
        id: item.id,
        label: item.label,
        createdAt: format(item.createdAt, 'MMMM do, yyyy'),
    }));
    console.log("hella", formattedBillboards)

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardClient data={formattedBillboards} />
            </div>
        </div>
    );
}

export default BillboardsPage;