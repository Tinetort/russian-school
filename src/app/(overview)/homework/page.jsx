import { Col, Container, Row, Button } from 'react-bootstrap'
import Link from 'next/link'

const Page = () => {
    return (
        <div className="bg-gradient-to-b from-[#b0dfef] via-gray-200 to-[#ff9161]">
            <div className="flex flex-col justify-center w-full">
                <div className="text-center uppercase text-[#015ebb] mb-10 mt-16 p-4">
                    <h1>
                        Домашнее задание для отделения “Образование на Русском
                        языке”
                    </h1>
                    <h2>Native Speakers Program home assignments</h2>
                </div>
                <Container className="p-8">
                    <Row className="text-center items-center">
                        <Col>
                            <Button className="bg-info">
                                <Link
                                    className="no-underline text-black"
                                    href="https://docs.google.com/spreadsheets/d/1q50uUCsbULQ758cm_pgtsiYF7VYBDeDS5XTYGNUm6kQ/edit#gid=0"
                                >
                                    5th Grade
                                </Link>
                            </Button>
                        </Col>
                        <Col>
                            <Button className="bg-info">
                                <Link
                                    className="no-underline text-black"
                                    href="https://docs.google.com/spreadsheets/d/1OGJ3WHvAso7YbeAOUcALDoaI2bQR-c3ZE5JQmETW1Uo/edit#gid=0"
                                >
                                    8th Grade
                                </Link>
                            </Button>
                        </Col>
                        <Col>
                            <Button className="bg-info text-center">
                                <Link
                                    className="no-underline text-black"
                                    href="https://docs.google.com/spreadsheets/d/1wY0PKKZrae_BTO68-b_hkxC7Op3LCzmu68AS3vIQPhc/edit#gid=0"
                                >
                                    10th Grade
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <p>
                                После каждого учебного дня на сайте учителя
                                выкладывают Домашнее задание к следующему
                                воскресенью. Дети делают задание вместе с
                                родителями.{' '}
                            </p>
                        </Col>
                    </Row>
                    <Row className="text-center items-center p-16">
                        <h3>2023-2024 Calendar</h3>
                        <p>
                            1st Quarter (9 days): October 1,8,15,22,29; November
                            5, 12; December 3, 10
                        </p>
                        <p>
                            2nd Quarter (11 days): January 7 14, 21, 28;
                            February 4, 11, 25; March 3, 10, 17,24
                        </p>
                        <p>
                            3rd Quarter (6 days): April 14, 21, 28; May 5, 12,
                            19
                        </p>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Page
