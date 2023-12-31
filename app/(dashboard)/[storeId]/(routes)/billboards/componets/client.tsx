"use client";

import {Plus} from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Heading } from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";


export const BillboardClient = () => {
    const params = useParams();
    const router = useRouter();

    return (
       <>
            <div className="flex items-center justify-between">
                <Heading title="Billboard (0)" description="Manage billboards" />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
           <Separator />
       </>
    );
}