import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

// IMPORT JSX COMPONENTS
import MobileHeaderItem from "./MobileHeaderItem"

const MobileHeader = () => {

    const [ isOpen, updateOpen ] = useState( false )
    return (
        <header className="md:hidden px-6 py-6 z-20 w-full">
            <div className="flex justify-between items-center z-20">
                <a href="/">
                <div className="w-28 aspect-video">
                    <img
                        src="/logo/saritasa-logo.svg"
                        alt="logo"
                        className="w-28 aspect-video"
                    />
                </div>
                </a>
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
                                <MobileHeaderItem>Home</MobileHeaderItem>
                                <MobileHeaderItem>Portfolio</MobileHeaderItem>
                                <MobileHeaderItem>Services</MobileHeaderItem>
                                <MobileHeaderItem>Technologies</MobileHeaderItem>
                                <MobileHeaderItem>Resources</MobileHeaderItem>
                                <MobileHeaderItem>About Us</MobileHeaderItem>

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
