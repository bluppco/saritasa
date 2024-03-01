// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import ListItem from "@/atoms/header/mobile/list-item/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

const MobileHeader = () => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden px-6 py-6 z-20 w-full">
            <div className="flex justify-between items-center z-20">
                <Link href="/" aria_label="">
                    <div className="w-28 aspect-video">
                        <PictureInternalContain
                            alternative_text="logo"
                            source="/logo/saritasa-logo.svg"
                        />
                    </div>
                </Link>
                <div onClick={ () => updateOpen( !isOpen ) }>
                    {

                        isOpen &&
                        <PictureInternalContain
                            alternative_text="close icon"
                            source="/icons/close.svg"
                        />

                    }
                    {

                        !isOpen &&
                        <PictureInternalContain
                            alternative_text="menu icon"
                            source="/icons/menu.svg"
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
                                <ListItem>Home</ListItem>
                                <ListItem>Portfolio</ListItem>
                                <ListItem>Services</ListItem>
                                <ListItem>Technologies</ListItem>
                                <ListItem>Resources</ListItem>
                                <ListItem>About Us</ListItem>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default MobileHeader
