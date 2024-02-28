import React, { ReactNode } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
const SideBarTile = ({ url, icon, title }: { url: string, icon?: ReactNode, title: string }) => {
    const pathName = usePathname();

    return (
        <li>
            <Link
                href={url}
                className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${(pathName === url || pathName.includes(url)) && "text-white"
                    }`}
            >
                {icon}
                {title}
            </Link>
        </li>
    );
};

export default SideBarTile;