"use client"

import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { Separator } from "@/components/ui/separator"
import { Label } from "../ui/label"


export function SearchBar(){

    return(
        <div className="flex justify-center  rounded-full border-2 w-[900px] h-16">
            <div className="px-6 py-2 flex-row flex-grow">
            <Label className="text-xs ">Company Type</Label>
            <Input className="h-10 border-0 shadow-none px-0 " placeholder="Private Limited (SDN BHD)"/>
            </div>
            <Separator className="bg-blue-500 " orientation="vertical"/>
            <div className=" px-6 py-2 flex-row flex-grow">
            <Label className="text-xs">Region</Label>
            <Input className="h-10 border-0 shadow-none px-0" placeholder="Peninsular Malaysia (Mainland)"/>
            </div>
            <Separator className="bg-blue-500 " orientation="vertical"/>
            <div className=" px-6 py-2 flex-row flex-grow">
            <Label className="text-xs">Date of completion</Label>
            <Input className="h-10 border-0 shadow-none px-0 py-2" placeholder="17th Feb(3 Days)"/>
            </div>
            <div className="flex items-center  px-2">
                <Button className="h-12 w-24 rounded-full bg-blue-900"> Search </Button>
                
            </div>
        </div>
    )

}