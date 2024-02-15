import { useState, useEffect, useRef } from "react"
import { useInView, useAnimation } from "framer-motion"

const Counter = ( props ) => {

    const { statistics, title } = props

    const [ count, setCount ] = useState(1)
    const ref = useRef()
    const isInView = useInView(ref)
    const controls = useAnimation()

    useEffect(() => {

        const interval = setInterval(() => {

            if ( count < statistics && isInView ) {

                setCount( count + 1 )
            }

        }, statistics < 20 ? 200 : statistics <= 100 ? 10 : 2 )

        return () => clearInterval( interval )

    }, [ count, statistics, isInView ])

    useEffect( () => {

        if( isInView ){

            controls.start("visible")

        }


    }, [ isInView ])

    return(
        <p className="text-5xl text-saritasa_primary font-avenir font-semibold text-center" ref={ ref }>
            { count }
            {

                title === "Years In Business" &&
                <span>+</span>

            }
            {

                title === "Fueled By Passion" &&
                <span>%</span>

            }
        </p>
    )

}

export default Counter
