// IMPORTS MODAL FROM REACT
import Modal from "react-modal"

// IMPORTS CUSTOM MODAL STYLING
import { modalStyling } from "../styling/index.jsx"

const VideoModal = ( props ) => {

    const { open, close } = props

    return (
        <Modal
            isOpen={ open }
            onRequestClose={ close }
            style={ modalStyling }
        >
            <div className="w-full md:w-[1200px] h-full md:h-[500px] md:p-4 relative">
                <div className="absolute -top-[18px] -right-[18px] md:-top-2 md:-right-3">
                    <div className="hover:bg-zinc-200 p-1 cursor-pointer" onClick={ () => close() }>
                        <img
                            src="/icons/cross.svg"
                            className="w-3 md:w-4 aspect-square"
                        />
                    </div>
                </div>
                <div className="h-full w-full">
                    <iframe
                        title="vimeo-player"
                        src="https://player.vimeo.com/video/736199672?h=46e621f52c"
                        width="1200"
                        height="480"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </Modal>
    )

}

export default VideoModal
