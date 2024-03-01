// IMPORTS ATOMS
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS REACT RESPONSIVE CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const Testimonials = ( props ) => {

    // GET PROPS
    const { data } = props

    return (
        <section className="w-full h-full relative">
            <Carousel showThumbs={ false } showStatus={ false } showArrows={ false } autoPlay={ true } infiniteLoop={ true } className="h-full">
                {

                    data.map(  ( value, index ) => {
                        return (
                            <div key={ "testimonial-" + index } className="relative w-full flex flex-col gap-6 justify-center items-center bg-gradient-to-tr from-saritasa_orange to-saritasa_light_orange h-full p-4">
                                <div className="border border-white rounded-full p-3 w-fit mb-2">
                                    <div className="w-6 aspect-square">
                                        <PictureInternalContain
                                            alternative_text="quote"
                                            source="/icons/quote.svg"
                                        />
                                    </div>
                                </div>
                                <p className="text-white font-avenir text-2xl text-center">{ value.description }</p>
                                <p className="text-white font-avenir text-lg text-center">{ value.author }</p>
                            </div>
                        )
                    })

                }
            </Carousel>
        </section>
    )

}

export default Testimonials
