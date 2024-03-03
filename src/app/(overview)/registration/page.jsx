import { Col, Container, Row, Button } from 'react-bootstrap'
import Link from 'next/link'

const Page = () => {
    return (
        <div className="flex flex-col justify-between">
            <div>
                <h1 className="text-center uppercase text-[#015ebb] p-6">
                    Registration
                </h1>
            </div>
            <Container className="flex-grow">
                <div className="border border-warning rounded-4">
                    <h2 className="text-center uppercase text-black p-6">
                        Click on one of the buttons below to register for
                        classes:
                    </h2>
                    <Container className=" items-center hidden md:block">
                        <Container fluid>
                            <Row className="text-center items-center pb-44">
                                <Col className="p-2">
                                    <Button className="bg-info uppercase">
                                        <Link
                                            className="no-underline text-black"
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSeMJHazhZwL0ZgzQI4rpo9NtaIdITjtf0OYNVhVufOCm0v2PA/viewform"
                                        >
                                            Native speaker classes
                                        </Link>
                                    </Button>
                                </Col>
                                <Col className="p-2">
                                    <Button className="bg-info uppercase">
                                        <Link
                                            className="no-underline text-black"
                                            href="https://docs.google.com/forms/d/e/1FAIpQLScLMPmSES7x7DV1cutaNQsD5OLS6hasX8gwoeMy2Uqx9vq5OA/viewform"
                                        >
                                            Russian as second language
                                        </Link>
                                    </Button>
                                </Col>
                                <Col className="p-2">
                                    <Button className="bg-info uppercase">
                                        <Link
                                            className="no-underline text-black"
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSeOSLrSnFzdoFdEH3FioZB5VpROGHjdDwgEY2SctsQLojHfAw/viewform"
                                        >
                                            Classes for High School Credit
                                        </Link>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                    <Container className="p-5 items-center block md:hidden">
                        <Row className="text-center items-center">
                            <Col className="p-2">
                                <Button className="bg-info uppercase">
                                    <Link
                                        className="no-underline text-black"
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSeMJHazhZwL0ZgzQI4rpo9NtaIdITjtf0OYNVhVufOCm0v2PA/viewform"
                                    >
                                        Native speaker classes
                                    </Link>
                                </Button>
                            </Col>
                        </Row>
                        <Row className="text-center items-center">
                            <Col className="p-2">
                                <Button className="bg-info uppercase">
                                    <Link
                                        className="no-underline text-black"
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSeOSLrSnFzdoFdEH3FioZB5VpROGHjdDwgEY2SctsQLojHfAw/viewform"
                                    >
                                        Russian as second language
                                    </Link>
                                </Button>
                            </Col>
                        </Row>
                        <Row className="text-center items-center">
                            <Col className="p-2">
                                <Button className="bg-info uppercase">
                                    <Link
                                        className="no-underline text-black"
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSeOSLrSnFzdoFdEH3FioZB5VpROGHjdDwgEY2SctsQLojHfAw/viewform"
                                    >
                                        Classes for High School Credit
                                    </Link>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    )
}

export default Page
