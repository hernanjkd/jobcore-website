import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SideBar from '../components/blog-sidebar'

import People from '../images/blog-people.png'

/* eslint-disable */

export default () => (
    <Layout>
        <SEO title="Blog" />
        <div className="darkgreen-top-image d-flex align-items-center px-10">
            <div className="text-center w-100 px-10">
                <h1 className="font-size-4em">
                    <span className="p-2 px-4 bg-black-opacity">
                        Blog
                    </span>
                </h1>
            </div>
        </div>

        <div className="d-flex justify-content-center my-5 px-5">
            <div className="w-620px mr-3">
                <div className="pb-3">
                    <img src={People} />
                    <h4 className="pt-3">Everything you need to know about events</h4>
                    <small className="text-secondary">
                        12 Mar, 2019 <a className="text-brightblue">Meras Zabria</a>
                    </small>
                    <div className="text-gray py-3">
                        <p className="py-1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur unde debitis pariatur architecto minus, quam facere praesentium. Maxime id rem doloremque! Quidem nemo modi odit et voluptates animi corporis illo.
                        </p>
                        <p className="py-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad at sequi dignissimos, maiores quasi.
                        </p>
                        <p className="py-1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime delectus laboriosam expedita fuga laborum debitis temporibus, porro eveniet veniam facilis.
                        </p>
                        <p className="py-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, unde?
                        </p>
                        <p className="py-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut vel vitae expedita aliquid atque provident consequatur rem qui cupiditate.
                        </p>
                        <p className="py-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quisquam ut, odit voluptatibus soluta eos dignissimos consectetur minima voluptas nam velit quas, dolorum, aliquam cupiditate!
                        </p>
                    </div>

                    <div className="py-2 mt-3 d-flex justify-content-start align-items-center border-top border-bottom">
                        <span className="mr-3">Share Now:</span>
                        <div className="bg-facebook mx-1 round-links d-flex justify-content-center align-items-center">
                            <a href="#">
                                <i class="fab fa-facebook-f text-white"></i>
                            </a>
                        </div>
                        <div className="bg-success mx-1 round-links d-flex justify-content-center align-items-center">
                            <a href="#">
                                <i class="fab fa-whatsapp text-white"></i>
                            </a>
                        </div>
                        <div className="bg-pinterest mx-1 round-links d-flex justify-content-center align-items-center">
                            <a href="#">
                                <i class="fab fa-pinterest-p text-white"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <SideBar />
        </div>

    </Layout>
)
