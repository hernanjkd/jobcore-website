import React from 'react'

/* eslint-disable */

const BlogSideBar = () => (
    <div className="w-300px text-center s800-hide">
        <input
            className="form-control w-100 shadow mb-5"
            type="text"
            placeholder="Search..." />

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
        <div className="text-gray d-flex justify-content-between font-size-13px">
            <div className="border w-100 py-2">events</div>
            <div className="border w-100 py-2 mx-2">article</div>
            <div className="border w-100 py-2">bartenders</div>
        </div>
        <div className="text-gray d-flex justify-content-between font-size-13px py-2">
            <div className="border w-100 py-2">servers</div>
            <div className="border w-100 py-2 mx-2">maid</div>
            <div className="border w-100 py-2">safety</div>
        </div>
        <div className="text-gray d-flex justify-content-between font-size-13px">
            <div className="border w-100 py-2">jobs</div>
            <div className="border w-100 py-2 mx-2">event</div>
            <div className="w-100 py-2 mx-2"></div>
        </div>
    </div>
)

export default BlogSideBar
