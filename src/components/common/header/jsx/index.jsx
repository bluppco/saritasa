// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import MobileHeader from "@/components/common/header/mobile/index.jsx"
import HeaderIcon from "@/components/common/header/icon/index.jsx"

// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS USESTATE
import { useState } from "react"

// IMPORTS HEADER COLLECTION
import { getCollection } from "astro:content"


let header_data = await getCollection("header")
header_data = header_data.sort((a, b) => a.data.order - b.data.order)

const Header = ( props ) => {

    // GET PROPS
    const { ENVIRONMENT } = props

    const [ activePage, setActivePage ] = useState(1)

    return(
        <>
            <header className={`h-24 hidden md:flex items-center fixed top-0 z-50 w-full bg-white ${ ENVIRONMENT === "staging" ? "mt-10" : "" }`}>
                <Container>
                    <nav className="flex items-center justify-between">
                        <Link href="/" aria_label="logo">
                            <div className="w-56 aspect-[4/1]">
                                <PictureInternalContain
                                    alternative_text="Saritasa logo"
                                    source="/logo/saritasa-logo.svg"
                                />
                            </div>
                        </Link>
                        <div className="flex gap-10 items-center">
                            <ul className="flex md:gap-6">
                                {

                                    header_data.map( ( item, index ) => {

                                        return (
                                            <li className="group" key={ index } onClick={() => setActivePage( item.data.order )}>
                                                <div className={` ${ activePage === item.data.order ? "border-saritasa_primary" : "border-transparent" } pb-1 border-b-2 text-base text-slate-500 font-avenir font-semibold uppercase flex items-center gap-2 relative group cursor-pointer`}>
                                                    <a href={ "/" + item.data.slug } className="group-hover:text-saritasa_black" aria_label={"explore " + item.data.title }>{ item.data.title }</a>
                                                    {

                                                        item.data.has_dropdown &&
                                                        <div>
                                                            <div className="w-3 aspect-square">
                                                                <PictureInternalContain
                                                                    alternative_text="dropdown menu icon"
                                                                    source="/icons/arrow_down.svg"
                                                                />
                                                            </div>
                                                            <div className="opacity-0 -z-10 group-hover:z-20 group-hover:opacity-100 group-hover:flex-col absolute p-6 bg-white left-0 top-10 w-[460px] gap-2 shadow transition-all duration-0 delay-200">
                                                                <div className="grid grid-cols-2 gap-x-4">
                                                                    {

                                                                        item.data.items.map( ( sub_item, sub_item_index ) => {

                                                                            return(
                                                                                <div className="py-1">
                                                                                    <a
                                                                                        aria-label={ "explore" + sub_item.title }
                                                                                        className="text-slate-700 hover:text-saritasa_black hover:underline"
                                                                                        href={ "/" + sub_item.slug }
                                                                                    >
                                                                                        <div className="font-light capitalize tracking-wide text-t font-avenir">{ sub_item.title }</div>
                                                                                    </a>
                                                                                </div>
                                                                            )

                                                                        })

                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>

                                                    }
                                                </div>
                                                <div className="w-0 bg-saritasa_primary group-hover:w-full h-[2px] transition-width duration-200 ease-in"></div>
                                            </li>
                                        )

                                    })

                                }
                            </ul>
                            <div className="flex gap-6 items-center">
                                <HeaderIcon
                                    alternative_text="call"
                                    aria_label="call"
                                    href="tel:8886462688"
                                    source="/icons/orange_phone.svg"
                                    text="888.646.2688"
                                />
                                <HeaderIcon
                                    alternative_text="Scope My Project"
                                    aria_label="scope my project"
                                    href=""
                                    source="/icons/orange_project.svg"
                                    text="Scope My Project"
                                />
                            </div>
                        </div>
                    </nav>
                </Container>
            </header>
            <MobileHeader />
        </>
    )

}

export default Header
