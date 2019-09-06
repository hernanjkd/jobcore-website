import React from 'react'
import Layout from '../components/layout'
import BlogPost from '../components/blog-post'

import People from '../images/blog-people.png'

/* eslint-disable */

const posts = [
    {
        image: People,
        title: "Everything you need to know about events",
        date: "12 Mar, 2019",
        author: "Meras Zabria",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores alias temporibus sequi ex modi consectetur nam pariatur ad, totam vel eius, animi quo repellat reprehenderit maxime quibusdam earum aspernatur."
    },
    {
        image: People,
        title: "Getting married during the summer and the risks",
        date: "4 Jan, 2019",
        author: "Meras Zabria",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores alias temporibus sequi ex modi consectetur nam pariatur ad, totam vel eius, animi quo repellat reprehenderit maxime quibusdam earum aspernatur."
    },
    {
        image: People,
        title: "Everything you need to know about banking",
        date: "2 Dec, 2018",
        author: "Meras Zabria",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores alias temporibus sequi ex modi consectetur nam pariatur ad, totam vel eius, animi quo repellat reprehenderit maxime quibusdam earum aspernatur."
    },
    {
        image: People,
        title: "10 reasons why you should use JobCore and not another company",
        date: "7 Feb, 2018",
        author: "Meras Zabria",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores alias temporibus sequi ex modi consectetur nam pariatur ad, totam vel eius, animi quo repellat reprehenderit maxime quibusdam earum aspernatur."
    },
]

const Blog = () => (
    <Layout>
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
                {posts.map((e, i) => (
                    <BlogPost key={i} data={e} />
                ))}
            </div>

            <div className="w-300px text-center s800-hide">
                <input
                    className="form-control w-100 shadow mb-5"
                    type="text"
                    placeholder="Search..."
                />

                <div className="border p-3 pb-5">
                    <h3 className="pt-5 pb-2">
                        There are lots of
                    <span className="text-brightblue"> new jobs available </span>
                        on JobCore
                    </h3>
                    <h6 className="mb-2">
                        Sign up today to get started.
                    </h6>
                    <button className="btn radius btn-purple w-220px mt-5 mb-2 py-3">
                        Get Started
                    </button>
                    <button className="btn radius btn-darkgreen w-220px mt-3 mb-4 py-3">
                        View Positions
                    </button>
                </div>

                <h5 className="text-brightblue text-left mt-5">Keywords</h5>
            </div>
        </div>

    </Layout>
)

export default Blog
