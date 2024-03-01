// IMPORTS ATOMS
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

const Button = ( props ) => {

    // PROPS
    const { onClick } = props

    return(
        <div className="hover:mb-10 transition-all duration-300">
            <button className="h-12 px-6 flex gap-3 items-center justify-center text-white border-2 border-white bg-transparent rounded-full text-lg font-semibold font-avenir hover:shadow-2xl hover:-translate-y-1 duration-300" onClick={ () => onClick() }>
                <div className="w-6 aspect-square">
                    <PictureInternalContain
                        alternative_text="play icon"
                        className="w-6 aspect-square"
                        source="/icons/play.svg"
                    />
                </div>
                { props.children }
            </button>
        </div>

    )

}

export default Button
