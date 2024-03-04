// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

const HeaderMobile = ( props ) => {

    const { header_data } = props

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden top-14 fixed z-50 w-full bg-white px-4 border-b border-b-gray-100">
            <nav>
                <div className="flex justify-between items-center z-30 relative">
                    <Link href="/" aria_label="saritasa logo">
                        <div className="w-28 aspect-video">
                            <PictureInternalContain
                                alternative_text="saritasa logo"
                                source="/logo/saritasa-logo.svg"
                            />
                        </div>
                    </Link>
                    <div onClick={ () => updateOpen( !isOpen ) }>
                        {

                            isOpen &&
                            <div className="w-6 aspect-square">
                                <PictureInternalContain
                                    alternative_text="close icon"
                                    source="/icons/close.svg"
                                />
                            </div>

                        }
                        {

                            !isOpen &&
                            <div className="w-6 aspect-square">
                                <PictureInternalContain
                                    alternative_text="menu icon"
                                    source="/icons/menu.svg"
                                />
                            </div>

                        }
                    </div>
                </div>
                <AnimatePresence initial={ false }>
                    {

                        <motion.div
                            key="content"
                            initial="collapsed"
                            animate={ isOpen ? "open" : "collapsed" }
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, display: "block" },
                                collapsed: { opacity: 0, display: "none" }
                            }}
                            transition={{ duration: 0.3 }}
                            className="grow !h-[calc(100vh-6rem)] bg-white !p-0"
                        >
                            <ul className="flex flex-col gap-8 items-center justify-center h-full z-10">
                                {

                                    header_data.map( ( value ) => {

                                        return(
                                            <Link href={ value.data.slug } aria_label={ value.data.title }>
                                                <li className="uppercase font-avenir">{ value.data.title }</li>
                                            </Link>
                                        )

                                    })

                                }
                            </ul>
                        </motion.div>

                    }
                </AnimatePresence>
            </nav>
        </header>
    )

}

export default HeaderMobile
