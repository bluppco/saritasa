// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

// IMPORTS COMPONENTS
import Li from "./li/index.jsx"

// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"

const MobileHeader = () => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden px-6 py-6 z-20 w-full">
            <div className="flex justify-between items-center z-20">
                <Link href="/" aria_label="">
                    <div className="w-28 aspect-video">
                        <img
                            src="/logo/saritasa-logo.svg"
                            alt="logo"
                            className="w-28 aspect-video"
                        />
                    </div>
                </Link>
                <div onClick={ () => updateOpen( !isOpen ) }>
                    {

                        isOpen &&
                        <img
                            src="/icons/close.svg"
                            className="w-6 aspect-square"
                        />

                    }
                    {

                        !isOpen &&
                        <img
                            src="/icons/menu.svg"
                            className="w-6 aspect-square"
                        />

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
                            open: { opacity: 1, height: "100vh" },
                            collapsed: { opacity: 0, height: "0px" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="grow"
                    >
                        <div className="flex flex-col gap-1 items-center justify-center h-full z-10">
                            <ul className="flex flex-col gap-8">
                                <Li>Home</Li>
                                <Li>Portfolio</Li>
                                <Li>Services</Li>
                                <Li>Technologies</Li>
                                <Li>Resources</Li>
                                <Li>About Us</Li>
                            </ul>
                            <div>
                            </div>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default MobileHeader
