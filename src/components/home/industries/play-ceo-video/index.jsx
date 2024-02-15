// IMPORTING ATOMS
import Button from "@/atoms/buttons/transparent/onclick/index.jsx"

// IMPORTING COMPONENTS
import VideoModal from "@/components/common/modal/video/index.jsx"

// IMPORTING REACT
import React from "react"

const PlayCeoVideo = ( props ) => {

    const { button_text } = props

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
            <div className="w-24 hover:w-28 transition-all duration-500 aspect-square overflow-hidden">
                <img
                    src="/play.svg"
                    alt=""
                    className="w-full h-full"
                />
            </div>
            <VideoModal open={ state.open_modal } value={ state.value } close={ () => closeModal() } />
        </div>
    )

}

export default PlayCeoVideo
