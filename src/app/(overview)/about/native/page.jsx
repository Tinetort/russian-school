'use client'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'

import Link from 'next/link'
import languagePhoto from '../../../../../utils/languagePhoto.json'
import WhereToGoButtons from '@/components/WhereToGoButtons'

const { nasa, gramota, uley, nikolay, people, georg } = languagePhoto
const Page = () => {
    return (
        <div>
            <div className="flex flex-col justify-center w-full p-10">
                <h1 className="text-center uppercase text-[#015ebb] ">
                    Native Speaker Classes
                </h1>
                <div className="flex flex-col z-20 items-center pt-5">
                    <button className="rounded-full relative h-[50px] w-44 overflow-hidden border border-[#b0dfef] bg-[#025dbb]">
                        <Link
                            className="relative z-30 cursor-pointer uppercase no-underline text-white"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeMJHazhZwL0ZgzQI4rpo9NtaIdITjtf0OYNVhVufOCm0v2PA/viewform"
                        >
                            Registration
                        </Link>
                    </button>
                </div>
            </div>
            <Container className="p-10">
                <p className="ml-4">
                    Это программа для детей, хорошо владеющих русским языком.
                    Учебный год в Русской школе Сан Диего состоит из 3-ех
                    триместров по 8-10 учебных дней каждый. Возраст наших
                    учеников от 9 до 18 лет. Занятия проходят в zoom по
                    воскресеньям с 9.00 до 12.00. Три урока ведут три
                    преподавателя.
                </p>
                <p>Предметы:</p>
                <div className="flex justify-around items-center">
                    <Row className="border border-warning rounded-4 p-2 m-1">
                        <Col>
                            <p> Младшие классы:</p>

                            <ul>
                                {' '}
                                <li>Русский язык</li>
                                <li>Чтение/Литература</li>
                                <li>Развитие речи</li>
                            </ul>
                        </Col>
                        <Col>
                            {' '}
                            <p>Старшие классы:</p>
                            <ul>
                                {' '}
                                <li>Русский язык</li>
                                <li>Литература</li>
                                <li>История</li>
                                <li>География</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
                <p className="mt-4 ml-4">
                    Регулярно в школе проходят уроки «Встреча с профессией», на
                    которых русскоязычные специалисты в разных областях
                    рассказывают о своей работе в Америке. Наши ученики узнают,
                    как им поможет русский язык в их будущей профессии.
                </p>

                <p className="mt-4 ml-4">
                    Домашние задания прошедших
                    <Link href="/homework"> уроков </Link>
                    помогут вам понять, чем именно занимаются на уроках дети
                    разных классов. 
                </p>
                <p className="ml-4">
                    Оплата. Один день занятий стоит $50. Плюс одноразовый
                    ежегодный регистрационный взнос $50 (старые ученики) $100
                    (новые)
                </p>
                <div className="hidden md:block">
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
                                            Один из уроков “Встреча с
                                            профессией”. Урок ведет
                                            англо-русский переводчик НАСА.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="block md:hidden">
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
                        </Row>
                        <Row>
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={nasa} />
                                    <Card.Body>
                                        <Card.Text>
                                            Один из уроков “Встреча с
                                            профессией”. Урок ведет
                                            англо-русский переводчик НАСА.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <ul>
                    Три года назад наша школа перешла в он-лайн формат, который
                    показал несомненные преимущества для дополнительного
                    образования детей:
                    <li>
                        -дети никогда не пропускают уроков из-за болезни (а
                        также болезней и занятости родителей, которым не надо
                        везти ребенка в классы). А полубольные дети не приходят
                        на уроки с риском заразить других.
                    </li>
                    <li>
                        -онлайн уроки дают возможность учителям показывать
                        интересные презентации по теме урока, кусочки фильмов,
                        играть с детьми в интерактивные образовательные игры.
                        Современным детям интересно получать образование,
                        используя современные образовательные приложения.
                    </li>
                    <li>
                        -на наших онлайн уроках дети активно общаются, отвечают
                        на вопросы, делают задания.
                    </li>
                    <li>
                        -родителям не надо тратить время на поездки по городу и
                        на ожидание, когда закончатся уроки.
                    </li>
                    <li>
                        -даже если вы уехали из Сан Диего, вы все-равно имеете
                        возможность прийти на все уроки онлайн и не пропустить
                        учебный день.
                    </li>
                    <li>
                        -оплата школы не высокая, так как мы не тратим деньги на
                        aренду помещения.{' '}
                    </li>
                </ul>
                <div className="hidden md:block">
                    <Container>
                        <Row className="items-center">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={uley} />
                                </Card>
                            </Col>
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={nikolay} />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="block md:hidden">
                    <Container>
                        <Row className="items-center">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={uley} />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={nikolay} />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <p>
                    Русская школа Сан Диего существует 25 лет и за эти годы в
                    ней выучилось не одно поколение детей, хорошо говорящих на
                    русском языке. Сейчас наши бывшие ученики уже взрослые,
                    работают, свободно говорят на русском, и этот язык не раз
                    помог им и в жизни, и в работе (посмотрите страницу{' '}
                    <Button className="bg-info uppercase">
                        <Link
                            className="no-underline text-black"
                            href="/about/alumni"
                        >
                            Alumni
                        </Link>
                    </Button>
                    ). Был у нас и отрицательный опыт, когда дети бросали школу,
                    потому что они перешли на английский дома и им стало трудно
                    заниматься на русском языке.
                </p>
                <p>
                    Всех родителей, которые поставили себе непростую задачу
                    сохранить свой язык детям, волнует вопрос: не окажутся ли их
                    усилия напрасными? Не придется ли, в конце концов, перейти с
                    ребенком на английский, чтобы не потерять связь с ним?
                </p>
                <p>
                    Наш многолетний опыт уверено отвечает: Сохранить язык можно!
                    Даже когда в семье много детей и все дети родились уже тут,
                    в Америке. Даже когда один из родителей не говорит на
                    русском языке. В школе было много таких учеников. Но для
                    сохранения языка нужна школа, нужны учителя! Домашних
                    разговоров и занятий с ребенком родителей недостаточно!
                </p>
                <p>
                    Но, может быть, достаточно одного хорошего учителя русского
                    языка, который будет 1-2 раза в неделю заниматься языком и
                    научит ребенка читать и писать?{' '}
                </p>
                <p>
                    Нет, этого мало для сохранения языка повзрослевшим детям!
                    Потому что без знания Русской литературы, Истории, Культуры
                    навыки читать и писать не пригодятся и быстро забудутся.
                    Нужные и уроки в школе, и домашнее задание по каждому
                    предмету. Школа нужна и потому, что в ней ведут уроки не
                    один, а несколько преподавателей, которые передают свои
                    знания в разных областях и создают общее культурное поле с
                    детьми, на котором может закрепиться и развиться русский
                    язык. Именно для этого мы собрали в Русской школе Сан Диего
                    коллектив русской интеллигенции и даем возможность детям
                    заниматься с разными преподавателями по разным предметам.{' '}
                </p>
                <div className="hidden md:block">
                    <Container>
                        <Row className="items-center">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={gramota} />
                                </Card>
                            </Col>
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={georg} />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <div className="block md:hidden">
                        <Row className="items-center">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={gramota} />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={georg} />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <WhereToGoButtons />
        </div>
    )
}

export default Page
