'use client'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Link from 'next/link'

const Page = () => {
    return (
        <div>
            <div className="flex flex-col justify-center w-full p-10">
                <h1 className="text-center uppercase text-[#015ebb] ">
                    About the school
                </h1>
            </div>
            <Container>
                <div className="border border-warning rounded-4 p-2">
                    <p className="mt-4 ml-4">
                        Established in 1998, the San Diego Russian School (SDRS)
                        has been a hub of Russian language and culture
                        education. Catering to learners of all ages and
                        proficiency levels, our school is dedicated to providing
                        a diverse range of classes tailored to suit the needs of
                        children, youth, and adults.
                    </p>
                    <p className="mt-4 ml-4">
                        At SDRS, we offer three distinctive programs:
                    </p>
                </div>
            </Container>

            <div className="p-5 flex items-center md:flex md:flex-col md:items-center">
                <Container>
                    <Row className="text-center items-center">
                        <Col className="p-2">
                            <Button className="bg-info uppercase">
                                <Link
                                    className="no-underline text-black"
                                    href="/about/native"
                                >
                                    Native speaker classes
                                </Link>
                            </Button>
                            <Col>
                                <p className="p-1">
                                    Native Speaker Classes: Designed for
                                    individuals fluent in Russian, these classes
                                    provide an opportunity for advanced
                                    linguistic and cultural exploration,
                                    fostering a deeper understanding and
                                    appreciation of the Russian language and
                                    heritage.
                                </p>
                            </Col>
                        </Col>
                    </Row>
                    <Row className="text-center items-center">
                        <Col className="p-2">
                            <Button className="bg-info uppercase">
                                <Link
                                    className="no-underline text-black"
                                    href="/about/second-language"
                                >
                                    Russian as second language
                                </Link>
                            </Button>
                            <p className="p-1">
                                Classes for Non-Russian Speakers: Tailored
                                specifically for those new to the Russian
                                language, these classes offer a comprehensive
                                introduction to Russian grammar, vocabulary, and
                                culture, laying a strong foundation for language
                                proficiency and cultural immersion.
                            </p>
                        </Col>
                    </Row>
                    <Row className="text-center items-center">
                        <Col className="p-2">
                            <Button className="bg-info uppercase">
                                <Link
                                    className="no-underline text-black"
                                    href="/about/credits"
                                >
                                    Classes for High School Credit
                                </Link>
                            </Button>
                            <p className="p-2">
                                Classes for High School Credits: Recognizing the
                                importance of language education in academic
                                curricula, our high school credit classes enable
                                students to earn credits while enhancing their
                                Russian language skills, preparing them for
                                future academic and professional pursuits.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Page
