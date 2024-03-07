import React, { ReactNode } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
const SideBarTile = ({ url, icon, onSelect, title, selected }: { url: string, icon?: ReactNode, title: string, selected?: boolean, onSelect: () => void }) => {

    return (
        <li onClick={onSelect}>
            <Link
                href={url}
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:text-white hover:bg-graydark dark:hover:bg-meta-4 dark:text-white ${(selected) && "text-white bg-graydark dark:bg-meta-4"
                    }`}
            >
                {icon}
                {title}
            </Link>
        </li>
    );
};

export default SideBarTile;