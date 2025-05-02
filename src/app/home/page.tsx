import { ProductCard } from "@/components/card/ProductCard";
import { SearchBar } from "@/components/search/SearchBar";
import { Separator } from "@/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

const products = [
    {
      name: "Gobiz Cosec Firm",
      description: "Secretarial service firm",
      rating: 4.9,
      ratingCount: 2483,
      promo: "Incorporate your company with us and get 2 FREE CTC copies",
      completion: "Complete in 2-3 working days",
      price: 1600,
      image: "/anycomp.png",
    },
    {
      name: "Alpha Biz Solutions",
      description: "Accounting and tax services",
      rating: 4.7,
      ratingCount: 1820,
      promo: "Free 1-year tax filing for new clients",
      completion: "Complete in 3-5 working days",
      price: 1200,
      image: "/alphabiz.png",
    },
    {
      name: "EZStart Malaysia",
      description: "Company registration & advisory",
      rating: 4.8,
      ratingCount: 2050,
      promo: "Free consultation + 1 year secretary",
      completion: "Complete in 1-2 working days",
      price: 1800,
      image: "/ezstart.png",
    },
    {
      name: "SmartIncorp Hub",
      description: "Startup incorporation specialist",
      rating: 4.6,
      ratingCount: 1305,
      promo: "Get a FREE domain and email setup",
      completion: "Complete in 2-4 working days",
      price: 1500,
      image: "/smartincorp.png",
    },
    {
      name: "IncoPro Malaysia",
      description: "Legal & company registration",
      rating: 4.9,
      ratingCount: 2760,
      promo: "50% off for new business owners",
      completion: "Complete in 1-3 working days",
      price: 1700,
      image: "/incopro.png",
    },
    {
      name: "BizSecure Incorporation",
      description: "Professional SSM registration",
      rating: 4.5,
      ratingCount: 998,
      promo: "Includes 3 CTC copies and SSM fee",
      completion: "Complete in 2 days",
      price: 1400,
      image: "/bizsecure.png",
    },
    {
      name: "IncoXpress",
      description: "Fast track incorporation firm",
      rating: 4.8,
      ratingCount: 1902,
      promo: "Same-day processing available",
      completion: "Complete in 1 day",
      price: 2000,
      image: "/incoxpress.png",
    },
    {
      name: "CTBiz Solutions",
      description: "CTC, accounting",
      rating: 4.7,
      ratingCount: 1675,
      promo: "Bundle: Company + Accounting = Save 15%",
      completion: "Complete in 3 working days",
      price: 1650,
      image: "/ctbiz.png",
    },
  ];

export default function home(){

    return(
        <div>
            <div className="flex justify-center pt-10">
                <SearchBar></SearchBar>
            </div>
            <div className="pt-10 w-2/4 m-auto">
                <Separator className="bg-gray-400"></Separator>
                <h1 className="font-bold text-3xl pt-2">Incorporate new company</h1>
                <div className="flex">
                <h2 className=" flex items-center  text-sm text-gray-600 flex-grow"> Over 350 Company Secretaries ready to assist you</h2>
                <h2 className="flex items-center text-sm font-semibold pr-2"> Sort by: </h2>
                <Select >
                    <SelectTrigger className="font-bold items-start w-[100px]  border-0 shadow-none">
                        <SelectValue className="" placeholder="Rating" />
                    </SelectTrigger>
                    <SelectContent className="">
                        <SelectItem value="Rating">Rating</SelectItem>
                        <SelectItem value="Price">Price</SelectItem>
                        <SelectItem value="Client">Client</SelectItem>
                    </SelectContent>
                </Select>
                <h2 className="flex items-center text-sm font-semibold pl-2 pr-2"> Filter </h2>
                
                <DropdownMenu>
                    <DropdownMenuTrigger><Image className=""  src="/menu-alt-svgrepo-com.svg" alt="" width={20} height={20} /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Filter A</DropdownMenuLabel>
                        <DropdownMenuItem>Filter B</DropdownMenuItem>
                        <DropdownMenuItem>Filter C</DropdownMenuItem>
                        <DropdownMenuItem>Filter D</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                
                </div>
            </div>
            <div className="grid place-items-center grid-cols-4 w-3/4 m-auto py-4 gap-y-4">
                {products.map((product, index) => (
                    <div key={index} className="">
                    <ProductCard  {...product} />
                    </div>
                ))}   
            </div>

        </div>
    
    )
}