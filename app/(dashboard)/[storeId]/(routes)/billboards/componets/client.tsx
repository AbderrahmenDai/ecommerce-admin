"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from 'react';

import { Heading } from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import {ApiList} from "@/components/ui/api-list";

import { columns, BillboardColumn } from "./columns";

interface BillboardClientProps {
    data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({
   data
}) => {
    const params = useParams();
    const router = useRouter();
    const [count, setCount] = useState(0);

    console.log("data", typeof data );

    return (
       <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Billboards (${data.entries()})`}
                    description="Manage billboards"
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
           <Separator />
           <DataTable searchKey="label" columns={columns} data={data} />
           <Heading title="API" description="API Calls for Billboards" />
           <Separator />
           <ApiList entityName="billboards" entityIdName="billboardId" />
       </>
    );
}