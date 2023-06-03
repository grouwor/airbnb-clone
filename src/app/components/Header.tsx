'use client';

import Link from "next/link";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";

export default function Header() {
    return <header className="flex flex-row justify-between">
            <Link href="/"><Logo/></Link>
            <SearchBar></SearchBar>
            <MenuBar></MenuBar>
    </header>;
}
