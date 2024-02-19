import { Col, Container, Row, Button } from 'react-bootstrap'
import { MdKeyboardBackspace } from 'react-icons/md'
import Link from 'next/link'

const Page = () => {
    return (
        <div className="bg-gradient-to-b from-[#b0dfef] via-gray-200 to-[#ff9161]">
            <div className="flex flex-col justify-center w-full  h-80 ">
                <h1 className="text-center uppercase text-[#015ebb] ">
                    About the school
                </h1>
            </div>
            <Container>
                <div className="border border-warning rounded-4 my-4 p-2">
                    <p className="mt-4 ml-4">
                        Учебный год в Русской школе Сан Диего состоит из 3х
                        триместров по 8-10 учебных дней каждый. Возраст наших
                        учеников от 9 до 18 лет.
                    </p>
                    <p className="mt-4 ml-4">Предметы:</p>
                    <ul>
                        <li>Русский язык</li>
                        <li>Литература</li>
                        <li>История</li>
                        <li>География</li>
                    </ul>
                    <p className="mt-4 ml-4">
                        Уроки он-лайн по воскресеньям с 9.00 до 12.00, три урока
                        ведут три разных учителя.
                    </p>
                    <p className="mt-4 ml-4">Оплата: $50 за учебный день.</p>
                    <p className="mt-4 ml-4">
                        Домашние задания прошедших
                        <Link href="/homework"> уроков </Link>
                        помогут вам понять, чем именно занимаются на уроках дети
                        разных классов. 
                    </p>
                    <p className="mt-4 ml-4">
                        Регулярно в школе проходят уроки «Встреча с профессией»,
                        на которых русскоязычные специалисты в разных областях
                        рассказывают о своей работе в Америке. Наши ученики
                        узнают, как им поможет русский язык в их будущей
                        профессии.
                    </p>
                </div>
            </Container>
            <div className="p-5 flex items-center  md:flex md:flex-col md:items-center">
                <Container fluid>
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
                </Container>
            </div>
        </div>
    )
}

export default Page
