"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";


const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleFilter = (value:string)=>{

        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`${pathname}?${params.toString()}`,{scroll:false})

    }

    return (
        <div className="flex items-center justify-end gap-2 text-gray-500 my-6">
            <span>Sort by :</span>
            <select name="sort" id="sort" className="ring-1 p-1 shadow-md rounded-sm" onChange={(e)=>handleFilter(e.target.value)}>
                <option value="newest">Newest</option>
                <option value="oldest">oldest</option>
                <option value="asc">Price : Low to hight</option>
                <option value="desc">Price : Hight to low</option>
            </select>

        </div>
    )
}

export default Filter
