import React from 'react'
import Layout from '../components/layout'
import Post from '../components/blog-post'
import SideBar from '../components/blog-sidebar'

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
                    <Post key={i} data={e} />
                ))}
            </div>

            <SideBar />
        </div>

    </Layout>
)

export default Blog
