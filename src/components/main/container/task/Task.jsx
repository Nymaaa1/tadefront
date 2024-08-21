import React from "react";
import { images } from "../../constants";
import './task.scss';

const History = () => {
    return (
        <>
            <div className="container-fluid event py-5">
                <div className="container py-5">
                    <h1 className="display-3 mb-5 wow fadeIn" data-wow-delay="0.1s">Upcoming <span className="text-primary">Events</span></h1>
                    <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.1s">
                        <div className="col-3 col-lg-2 pe-0">
                            <div className="text-center border-bottom border-dark py-3 px-2">
                                <h6>01 Jan 2045</h6>
                                <p className="mb-0">Fri 06:55</p>
                            </div>
                        </div>
                        <div className="col-9 col-lg-6 border-start border-dark pb-5">
                            <div className="ms-3">
                                <h4 className="mb-3">Milad Un Nabi</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                <a href="#" className="btn btn-primary px-3">Join Now</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="overflow-hidden mb-5">
                                <img src={images.about} className="img-fluid w-100" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.3s">
                        <div className="col-3 col-lg-2 pe-0">
                            <div className="text-center border-bottom border-dark py-3 px-2">
                                <h6>01 Jan 2045</h6>
                                <p className="mb-0">Wed 11:30</p>
                            </div>
                        </div>
                        <div className="col-9 col-lg-6 border-start border-dark pb-5">
                            <div className="ms-3">
                                <h4 className="mb-3">Eid Ul Fitr</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                <a href="#" className="btn btn-primary px-3">Join Now</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="overflow-hidden mb-5">
                                <img src={images.about} className="img-fluid w-100" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.5s">
                        <div className="col-3 col-lg-2 pe-0">
                            <div className="text-center border-bottom border-dark py-3 px-2">
                                <h6>01 Jan 2045</h6>
                                <p className="mb-0">Thu 11:30</p>
                            </div>
                        </div>
                        <div className="col-9 col-lg-6 border-start border-dark pb-5">
                            <div className="ms-3">
                                <h4 className="mb-3">Eud Ul Azha</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                <a href="#" className="btn btn-primary px-3">Join Now</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="overflow-hidden mb-5">
                                <img src={images.about} className="img-fluid w-100" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;
