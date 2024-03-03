import { Container, Col, Button, Row } from 'react-bootstrap'
import Link from 'next/link'

const WhereToGoButtons = () => {
    return (
        <div>
            <Container fluid>
                <div className="p-5 hidden items-center md:block md:flex-col md:items-center">
                    <Row className="text-center items-center">
                        <Col className="p-2">
                            <Button className="bg-info uppercase">
                                <Link
                                    className="no-underline text-black"
                                    href="/about/native"
                                >
                                    Native speaker
                                    classes
                                </Link>
                            </Button>
                        </Col>
                        <Col className="p-2">
                            <Button className="bg-info uppercase">
                                <Link
                                    className="no-underline text-black"
                                    href="/about/second-language"
                                >
                                    Russian as second language
                                </Link>
                            </Button>
                        </Col>
                        <Col className="p-2">
                            <Button className="bg-info uppercase">
                                <Link
                                    className="no-underline text-black"
                                    href="/about/credits"
                                >
                                    Classes for High School Credit
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </div>
                <div className="block md:hidden">
                    <Row className="text-center items-center block md:hidden">
                        <Col className="p-2">
                            <Button className="bg-info uppercase">
                                <Link
                                    className="no-underline text-black"
                                    href="/about/native"
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
                                    href="/about/second-language"
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
                                    href="/about/credits"
                                >
                                    Classes for High School Credit
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default WhereToGoButtons
