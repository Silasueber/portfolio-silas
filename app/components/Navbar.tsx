'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const pathname = usePathname()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Set up default class names first
    const aboutClass = mounted && pathname !== "/projects" ? "font-bold" : ""
    const projectsClass = mounted && pathname === "/projects" ? "font-bold" : ""

    return (
        <section className="flex gap-8 justify-center text-l">
            <a className={aboutClass} href="/">About me</a>
            <a className={projectsClass} href="/projects">Projects</a>
            <a download href="./Silas_Ueberschaer_CV.pdf">Download CV</a>
        </section>
    )
}
