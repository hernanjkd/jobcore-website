import React from 'react'
import Layout from '../components/layout'

import PhoneApp from '../images/phone-app.png'
import StepOne from '../images/step-one.png'
import StepTwo from '../images/step-two.png'
import StepThree from '../images/step-three.png'

/* eslint-disable */

const About = () => (
    <Layout>
        <div className="pink-top-image text-light d-flex align-items-center">
            <div className="text-center w-100 px-10">
                <h1 className="font-size-4em">
                    <span className="p-2 px-4 bg-black-opacity">
                        Our <span className="text-brightblue"> Story</span>
                    </span>
                </h1>
            </div>
        </div>


        <div className="container my-5 d-flex justify-content-around align-items-center">
            <img className="s1000-hide" height="450" src={PhoneApp} />

            <div className="w-500px px-2 py-5">
                <h1>About <span className="text-brightblue">Jobcore</span></h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ad mollitia sit repellat cum labore perspiciatis sed saepe adipisci architecto rem similique maxime numquam accusamus provident et facere a culpa optio id eius reprehenderit quas dignissimos. Aperiam porro repudiandae consequuntur temporibus qui illum! Tempora voluptatem et assumenda, at doloribus id.</p>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae facilis ex facere ratione quibusdam soluta molestias est sapiente eius illo excepturi velit commodi reiciendis, illum et doloribus corporis. Nemo?</p>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus veritatis temporibus illo alias harum officia necessitatibus? Quisquam!</p>
            </div>
        </div>

        <div className="container my-5 d-flex justify-content-around align-items-center s800-display-column">
            <div className="w-450px px-2 py-5">
                <h1>Our <span className="text-brightblue">Vision</span></h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ad mollitia sit repellat cum labore perspiciatis sed saepe adipisci architecto rem similique maxime numquam accusamus provident et facere a culpa optio id eius reprehenderit quas dignissimos. Aperiam porro repudiandae consequuntur temporibus qui illum! Tempora voluptatem et assumenda, at doloribus id.</p>
            </div>

            <div className="w-450px px-5 py-4 text-white bg-brightblue-opacity text-center">
                <h1>Our <span className="text-purple">Mission</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, et facere a culpa optio id eius reprehenderit quas dignissimos. Aperiam porro repudiandae consequuntur temporibus qui illum! Tempora voluptatem et assumenda, at doloribus id.</p>
            </div>
        </div>

        <div className="text-center px-10 my-5 pb-5 pt-5">
            <h1>How We <span className="text-brightblue">Work</span></h1>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur ullam asperiores possimus pariatur assumenda quae.</p>
            <div className="d-flex justify-content-center s900-display-column">
                <div className="shadow w-300px m-3 p-3 s900-mx-auto">
                    <img className="m-3" src={StepOne} />
                    <h4>Step One</h4>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam</p>
                </div>
                <div className="shadow w-300px m-3 p-3 s900-mx-auto">
                    <img className="m-3" src={StepTwo} />
                    <h4>Step Two</h4>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam</p>
                </div>
                <div className="shadow w-300px m-3 p-3 s900-mx-auto">
                    <img className="m-3" src={StepThree} />
                    <h4>Step Three</h4>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam</p>
                </div>
            </div>
        </div>

        <div className="bg-lightgray px-5 py-10 m-0 text-center">
            <h3 className="mb-1">
                It's never been easier to
                <span className="text-brightblue"> find jobs and hire</span> in
                the hospitality industry.
            </h3>

            <p>
                Sign up today and experience the difference. It's fast and easy!
            </p>

            <div className="mt-4 d-flex align-items-center justify-content-center">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email"
                />
                <button
                    className="btn radius btn-purple my-2 ml-2 px-4 py-2"
                >
                    Get Started
                </button>
            </div>

        </div>

    </Layout>
)

export default About
