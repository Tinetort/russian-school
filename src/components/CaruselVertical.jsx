'use client'
import Link from 'next/link'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row } from 'react-bootstrap'

function CaruselVertical() {
    return (
        <div>
            <h1 className="sm:text-center text-[#015ebb] text-3xl md:text-7xl text-center p-5">
                San Diego Russian School
            </h1>
            <div className="flex flex-col z-20 items-center p-5">
                <button class="rounded-md relative h-[50px] w-40 overflow-hidden border border-[#b0dfef] bg-white black shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-black hover:shadow-[#ff854e] hover:before:w-2/4 hover:before:bg-[#ff854e] hover:after:w-2/4 hover:after:bg-[#ff854e]">
                    <Link
                        className="relative z-30 cursor-pointer uppercase no-underline text-black"
                        href="/registration"
                    >
                        Registration
                    </Link>
                </button>
            </div>
            <Container>
                
            </Container>
            <Carousel className="hidden md:block" fade data-bs-theme="dark">
                <Carousel.Item>
                    <div>
                        <img
                            className="h-full"
                            src="/1.jpg"
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img
                            className="bg-cover d-block w-100"
                            src="/2.jpg"
                            alt="Second slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img
                            className="bg-cover d-block w-100"
                            src="/3.jpg"
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img
                            className="bg-cover d-block w-100"
                            src="/4.jpg"
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img
                            className="bg-cover d-block w-100"
                            src="/5.jpg"
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
            <Container className="block md:hidden" fluid="md">
                <Row className='p-2'>
                    <img className="h-full" src="/1.jpg" alt="First slide" />
                </Row>
                <Row className='p-2'>
                    <img
                        className="bg-cover d-block w-100"
                        src="/2.jpg"
                        alt="Second slide"
                    />
                </Row>
                <Row className='p-2'>
                    <img
                        className="bg-cover d-block w-100"
                        src="/3.jpg"
                        alt="Third slide"
                    />
                </Row>
                <Row className='p-2'>
                    <img
                        className="bg-cover d-block w-100"
                        src="/4.jpg"
                        alt="Third slide"
                    />
                </Row>
                <Row className='p-2'>
                    <img
                        className="bg-cover d-block w-100"
                        src="/5.jpg"
                        alt="Third slide"
                    />
                </Row>
            </Container>
        </div>
    )
}

export default CaruselVertical
