import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import Image from "next/image"

import { Button } from "../ui/button"

  

  
type Product = {
    name: string;
    description: string;
    rating: number;
    ratingCount: number;
    promo: string;
    completion: string;
    price: number;
    image: string;
  };
  
  export function ProductCard({
    name,
    description,
    rating,
    ratingCount,
    promo,
    completion,
    price,
    image,
  }: Product) {
    return (
      <Card className="w-[300px] h-[550px] flex flex-col justify-between rounded-t-4xl rounded-b-xl">
        <CardHeader className="flex p-0">
          <Image src={image} width={200} height={200} alt="" className="w-96 h-64 border-0 rounded-t-4xl" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-rows-2 grid-cols-3 h-10 ">
            <div className="font-bold col-span-2 line-clamp-1">{name}</div>
            <div className="text-xs col-span-2 row-start-2 line-clamp-1">{description}</div>
            <div className="font-bold row-span-2 justify-self-end content-center">
              <div className="flex">
                <div className="pr-2">{rating}</div>
                <Image src="/star-svgrepo-com.svg" alt="" width={20} height={20} />
              </div>
            </div>
          </div>
          <div className="pt-2 h-20 font-semibold line-clamp-3">{promo}</div>
          <div className="pt-2 text-xs">{completion}</div>
          <div className="flex items-center">
            <div className="flex-grow font-bold text-xl">RM {price.toLocaleString()}</div>
            <div className="text-xs justify-end">({ratingCount} clients)</div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="rounded-full w-30">Message</Button>
          <Button className="rounded-full w-30 bg-blue-900">Incorporate</Button>
        </CardFooter>
      </Card>
    );
  }
  