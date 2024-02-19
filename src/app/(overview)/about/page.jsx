'use client'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'
import Link from 'next/link'
import languagePhoto from '../../../../utils/languagePhoto.json'

const { nasa, gramota, uley, nikolay, people } = languagePhoto

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
                    <Container>
                        <Row className="items-center">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={people} />
                                    <Card.Body>
                                        <Card.Text>
                                            Ежегодно наши ученики пишут
                                            сочинения на русском языке и
                                            участвуют в конкурсах
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={nasa} />
                                    <Card.Body>
                                        <Card.Text>
                                            Встреча с англо-русским переводчиком
                                            НАСА
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <ul>
                        Три года назад наша школа перешла в он-лайн формат,
                        который показал несомненные преимущества для
                        дополнительного образования детей:
                        <li>
                            -дети никогда не пропускают уроков из-за болезни (а
                            также болезней и занятости родителей, которым не
                            надо везти ребенка в классы). А полубольные дети не
                            приходят на уроки с риском заразить других.
                        </li>
                        <li>
                            -онлайн уроки дают возможность учителям показывать
                            интересные презентации по теме урока, кусочки
                            фильмов, играть с детьми в интерактивные
                            образовательные игры. Современным детям интересно
                            получать образование, используя современные
                            образовательные приложения.
                        </li>
                        <li>
                            -на наших онлайн уроках дети активно общаются,
                            отвечают на вопросы, делают задания.
                        </li>
                        <li>
                            -родителям не надо тратить время на поездки по
                            городу и на ожидание, когда закончатся уроки.
                        </li>
                        <li>
                            -даже если вы уехали из Сан Диего, вы все-равно
                            имеете возможность прийти на все уроки онлайн и не
                            пропустить учебный день.
                        </li>
                        <li>
                            -оплата школы не высокая, так как мы не тратим
                            деньги на aренду помещения.{' '}
                        </li>
                    </ul>
                    <Container>
                        <Row className="items-center">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={nikolay} />
                                </Card>
                            </Col>
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={uley} />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <p>
                        Русская школа Сан Диего существует 25 лет и за эти годы
                        в ней выучилось не одно поколение детей, хорошо
                        говорящих на русском языке. Сейчас наши бывшие ученики
                        уже взрослые, работают, свободно говорят на русском, и
                        этот язык не раз помог им и в жизни, и в работе
                        (посмотрите страницу{' '}
                        <Button className="bg-info uppercase">
                            <Link
                                className="no-underline text-black"
                                href="/about/alumni"
                            >
                                Alumni
                            </Link>
                        </Button>
                        ). Был у нас и отрицательный опыт, когда дети бросали
                        школу, потому что они перешли на английский дома и им
                        стало трудно заниматься на русском языке.
                    </p>
                    <p>
                        Всех родителей, которые поставили себе непростую задачу
                        сохранить свой язык детям, волнует вопрос: не окажутся
                        ли их усилия напрасными? Не придется ли, в конце концов,
                        перейти с ребенком на английский, чтобы не потерять
                        связь с ним?
                    </p>
                    <p>
                        Наш многолетний опыт уверено отвечает: Сохранить язык
                        можно! Даже когда в семье много детей и все дети
                        родились уже тут, в Америке. Даже когда один из
                        родителей не говорит на русском языке. В школе было
                        много таких учеников. Но для сохранения языка нужна
                        школа, нужны учителя! Домашних разговоров и занятий с
                        ребенком родителей недостаточно!
                    </p>
                    <p>
                        Но, может быть, достаточно одного хорошего учителя
                        русского языка, который будет 1-2 раза в неделю
                        заниматься языком и научит ребенка читать и писать?{' '}
                    </p>
                    <p>
                        Нет, этого мало для сохранения языка повзрослевшим
                        детям! Потому что без знания Русской литературы,
                        Истории, Культуры навыки читать и писать не пригодятся и
                        быстро забудутся. Нужные и уроки в школе, и домашнее
                        задание по каждому предмету. Школа нужна и потому, что в
                        ней ведут уроки не один, а несколько преподавателей,
                        которые будут передавать свои знания в разных областях,
                        создавать общее культурное поле, на котором закрепится и
                        разовьется русский язык. Именно для этого мы собрали в
                        Русской школе Сан Диего коллектив русской интеллигенции
                        и даем возможность детям заниматься с разными
                        преподавателями по разным предметам.{' '}
                    </p>
                    <Container>
                        <Row className="items-center">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={gramota} />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
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
