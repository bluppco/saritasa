// IMPORTS USESTATE
import { useState } from "react"

// IMPORTS LAYOUTS
import ContainerJSX from "../../../layouts/Container"

// IMPORTS COMPONENTS
import MobileHeader from "./MobileHeader"

// IMPORTS COMPONENTS
import HeaderIcon from "./HeaderIcon.jsx"

// IMPORT HEADER COLLECTION
import { getCollection } from "astro:content"


let header_data = await getCollection("header")
header_data = header_data.sort((a, b) => a.data.order - b.data.order)

const Header = ( props ) => {

    const { environment } = props

    const [ activePage, setActivePage ] = useState("Home")

    return(
        <>
            <header className={`h-24 hidden md:flex items-center fixed top-0 z-50 w-full bg-white ${ environment === "staging" ? "mt-10" : "" }`}>
                <ContainerJSX>
                    <nav className="flex items-center justify-between">
                        <a href="/" aria-label="logo">
                            <div className="w-56 aspect-[4/1]">
                                <img
                                    src="/logo/saritasa-logo.svg"
                                    alt="Saritasa logo"
                                    className="w-56 aspect-[4/1]"
                                />
                            </div>
                        </a>
                        <div className="flex gap-10 items-center">
                            <ul className="flex md:gap-6">
                                {

                                    header_data.map( ( item, index ) => {

                                        return (
                                            <li className="group">
                                                <div key={ index } className={` ${ activePage === item.data.title ? "border-saritasa_primary" : "border-transparent" } pb-1 border-b-2 text-base text-slate-500 font-avenir font-semibold uppercase flex items-center gap-2 relative group cursor-pointer`} onClick={() => setActivePage( item.data.title )}>

                                                    <a href={ "/" + item.data.slug } className="group-hover:text-saritasa_black" aria-label={"explore " + item.data.title }>{ item.data.title }</a>
                                                    {

                                                        item.data.has_dropdown &&
                                                        <div>
                                                            <img
                                                                src="/icons/arrow_down.svg"
                                                                className="w-3 aspect-square"
                                                                alt="dropdown menu icon"
                                                            />
                                                            <div className="hidden group-hover:block group-hover:flex-col absolute p-6 bg-white left-0 z-20 top-8 w-[460px] gap-2 shadow transition-all duration-300 delay-1000">
                                                                <div className="grid grid-cols-2 gap-x-4">
                                                                    {

                                                                        item.data.items.map( ( sub_item, sub_item_index ) => {

                                                                            return(
                                                                                <div className="py-1">
                                                                                    <a
                                                                                        href={ "/" + sub_item.slug }
                                                                                        className="text-slate-700 hover:text-saritasa_black hover:underline"
                                                                                        aria-label={ "explore" + sub_item.title }
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
                                    src="/icons/orange_phone.svg"
                                    alt=""
                                    text="888.646.2688"
                                    href="tel:8886462688"
                                />
                                <HeaderIcon
                                    src="/icons/orange_project.svg"
                                    alt=""
                                    text="Scope My Project"
                                    href=""
                                />
                            </div>
                        </div>
                    </nav>
                </ContainerJSX>
            </header>
            <MobileHeader client:load />
        </>
    )

}

export default Header
