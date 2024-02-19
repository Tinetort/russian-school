import { Container, Row, Col } from 'react-bootstrap'
import { MdKeyboardBackspace } from 'react-icons/md'
import languagePhoto from '../../../../../utils/languagePhoto.json'
import Image from 'react-bootstrap/Image'
import Link from 'next/link'

const Page = () => {
    return (
        <div className="bg-gradient-to-b from-[#b0dfef] via-gray-200 to-[#ff9161]">
            <div className="flex flex-col justify-center w-full  h-80 ">
                <h1 className="text-center uppercase text-[#015ebb] ">
                    Classes for Hight School Credits
                </h1>
            </div>
            <Container>
                <div className="p-16">
                    <div className="border border-warning rounded-4">
                        <p className="ml-4 mt-4">
                            We partner with{' '}
                            <Link href="https://www.bistrolanguages.com/">
                                BISTROLanguages
                            </Link>
                            , a nationally accredited independent language
                            school to provide 1-on-1 and group Russian language
                            classes for High School Credits. Our courses are
                            accredited by{' '}
                            <Link href="https://www.acswasc.org/">
                                Western Association of Schools and Colleges
                                (WASC)
                            </Link>
                            , fully approved for A-G purpose by the{' '}
                            <Link href="https://hs-articulation.ucop.edu/agcourselist/publisher-directory">
                                High School Articulation division of the UCOP
                                Office of Undergraduate Admissions,
                            </Link>{' '}
                            and also are NCAA-approved (NCAA HS code 853458.)
                            High school students may transfer our credits to
                            their school transcripts. Our curricula cover
                            language, history, culture and literature. Our
                            programs prepare students to function in real-world
                            situations, academic, and career-related settings.
                            By engaging students in various interdisciplinary
                            projects we inspire them to use the language to
                            develop critical thinking, collaborate with their
                            peers around the world and to solve real-life
                            problems. We also prepare student for{' '}
                            <Link href="https://www.americancouncils.org/newl">
                                National Examinations in World Languages (NEWL)
                            </Link>{' '}
                            - a proficiency exam for Russian language learners
                            and heritage speakers that produces AP-style score
                            reports, which can be used to apply for college
                            credit and/or placement.
                        </p>
                        <p className="ml-4 mt-2">
                            Our educational courses cover all aspects of
                            language acquisition. We teach our students how to
                            speak, read, and write in Russian, ensuring that
                            they develop a strong foundation. But we go beyond
                            language basics – our curriculum also delves into
                            the captivating world of Russian literature, art,
                            and history, providing our students with a
                            well-rounded cultural experience.
                        </p>

                        <p className="ml-4 mt-2">
                            Our program features a proven method that allows our
                            students to start speaking and understanding basic
                            Russian in as little as two months! We understand
                            the importance of efficient language learning, and
                            we're committed to helping our students reach their
                            goals quickly.
                        </p>
                        <p className="ml-4 mt-2">
                            Whether you prefer the convenience of online classes
                            or the personal touch of in-person instruction,
                            we've got you covered. Our classes are available
                            both online and in physical classrooms to cater to
                            your specific needs and preferences.
                        </p>
                    </div>
                </div>
            </Container>
            <Container className="pb-16">
                <Row className="justify-center">
                    <Col xs={6} md={4}>
                        <Image src={languagePhoto.credits} thumbnail />
                    </Col>
                </Row>
                <Link className='no-underline text-black' href='/about'>
                    <MdKeyboardBackspace size={30} />
                </Link>
            </Container>
        </div>
    )
}

export default Page
