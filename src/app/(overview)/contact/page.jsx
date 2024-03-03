'use client'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { FaPhone } from 'react-icons/fa'
import { FiMessageSquare } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLocationDot } from 'react-icons/fa6'

import Link from 'next/link'

const Page = () => {
    return (
        <div>
            <div className="flex flex-col justify-center w-full mb-14">
                <div className="text-center uppercase text-[#015ebb] mb-10 mt-20 p-4">
                    <h1>Contact Us</h1>
                </div>
                <Container className="p-8 hidden md:block">
                    <Row className="text-center items-center">
                        <Col className="p-3">
                            <Link
                                className="no-underline"
                                href="tel:+1 (858) 779-4914"
                            >
                                <Card className="p-10">
                                    <Card.Body>
                                        <Card.Title className="flex items-center justify-center">
                                            <FaPhone
                                                size={40}
                                                className="text-[#ff854e] border-2 border-[#ff854e] rounded-full p-1"
                                            />
                                        </Card.Title>
                                        <Card.Text>Call Us</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col className="p-3">
                            <Link
                                className="no-underline"
                                href="sms:+1 (858) 779-4914"
                            >
                                <Card className="p-10">
                                    <Card.Body>
                                        <Card.Title className="flex items-center justify-center">
                                            <FiMessageSquare
                                                size={40}
                                                className="text-[#ff854e] border-2 border-[#ff854e] rounded-full p-1"
                                            />
                                        </Card.Title>
                                        <Card.Text>
                                            Write text message
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col className="p-3">
                            <Link
                                className="no-underline"
                                href="mailto:info@sdrussianschool.com"
                            >
                                <Card className="p-10">
                                    <Card.Body>
                                        <Card.Title className="flex items-center justify-center">
                                            <HiOutlineMail
                                                size={40}
                                                className="text-[#ff854e] border-2 border-[#ff854e] rounded-full p-1"
                                            />
                                        </Card.Title>
                                        <Card.Text>Email</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Container className="p-8 block md:hidden">
                    <Row className="text-center items-center">
                        <Col className="p-3">
                            <Link
                                className="no-underline"
                                href="tel:+1 (858) 779-4914"
                            >
                                <Card className="p-10">
                                    <Card.Body>
                                        <Card.Title className="flex items-center justify-center">
                                            <FaPhone
                                                size={40}
                                                className="text-[#ff854e] border-2 border-[#ff854e] rounded-full p-1"
                                            />
                                        </Card.Title>
                                        <Card.Text>Call Us</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="text-center items-center">
                        <Col className="p-3">
                            <Link
                                className="no-underline"
                                href="sms:+1 (858) 779-4914"
                            >
                                <Card className="p-10">
                                    <Card.Body>
                                        <Card.Title className="flex items-center justify-center">
                                            <FiMessageSquare
                                                size={40}
                                                className="text-[#ff854e] border-2 border-[#ff854e] rounded-full p-1"
                                            />
                                        </Card.Title>
                                        <Card.Text>
                                            Write text message
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="text-center items-center">
                        <Col className="p-3">
                            <Link
                                className="no-underline"
                                href="mailto:info@sdrussianschool.com"
                            >
                                <Card className="p-10">
                                    <Card.Body>
                                        <Card.Title className="flex items-center justify-center">
                                            <HiOutlineMail
                                                size={40}
                                                className="text-[#ff854e] border-2 border-[#ff854e] rounded-full p-1"
                                            />
                                        </Card.Title>
                                        <Card.Text>Email</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="flex flex-col justify-center w-full items-center p-20">
                <FaLocationDot
                    size={44}
                    className="text-[#ff854e] border-2 border-[#ff854e] rounded-full p-1"
                />
                <h2>We are located at</h2>
                <p>UCSD Campus Location</p>
                <p>9500 Gilman Dr</p>
                <p>La Jolla, CA 92093</p>
            </div>
        </div>
    )
}

export default Page
