// IMPORTS COMPONENTS
import VideoModal from "@/components/common/modal/video/index.jsx"

// IMPORTS ATOMS
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS REACT
import React from "react"

const PlayCeoVideo = ( props ) => {

    const [ state, updateState ] = React.useState({

        value: null,
        open_modal: false

    })
    const closeModal = () => {

        updateState({

            value: null,
            open_modal: false

        })

    }

    const openModal = () => {

        updateState({

            value: null,
            open_modal: true

        })

    }

    return(
        <div className="px-2 md:px-0 w-fit" onClick={ () => openModal() }>
            <div className="w-16 md:w-24 hover:scale-110 transition-all duration-500 aspect-square overflow-hidden">
                <PictureInternalContain
                    alternative_text="play"
                    source="/play.svg"
                />
            </div>
            <VideoModal open={ state.open_modal } value={ state.value } close={ () => closeModal() } />
        </div>
    )

}

export default PlayCeoVideo
