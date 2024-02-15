const Button = ( props ) => {

    const { onClick } = props

    return(
        <div className="hover:mb-10 transition-all duration-300">
            <button className="h-12 px-6 flex gap-3 items-center justify-center text-white border-2 border-white bg-transparent rounded-full text-lg font-semibold font-avenir hover:shadow-2xl hover:-translate-y-1 duration-300" onClick={ () => onClick() }>
                <div className="w-6 aspect-square">
                    <img
                        src="/icons/play.svg"
                        alt=""
                        className="w-6 aspect-square"
                    />
                </div>
                { props.children }
            </button>
        </div>

    )

}

export default Button
