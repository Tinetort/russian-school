import { Container, Row, Col } from 'react-bootstrap'
import languagePhoto from '../../../../../utils/languagePhoto.json'
import Image from 'react-bootstrap/Image'
import Link from 'next/link'
import WhereToGoButtons from '@/components/WhereToGoButtons'

const Page = () => {
    return (
        <div className="bg-gradient-to-b from-[#ff9161] via-gray-200 to-[#b0dfef]">
            <div className="flex flex-col justify-center w-full  h-48 ">
                <h1 className="text-center uppercase text-[#015ebb] ">
                    Classes for Hight School Credits
                </h1>
            </div>
            <Container>
                <div className="p-10">
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
                    </div>
                </div>
            </Container>
            <Container className="pb-16">
                <Row className="justify-center">
                    <Col xs={6} md={4}>
                        <Image src={languagePhoto.credits} thumbnail />
                    </Col>
                </Row>
            </Container>
            <WhereToGoButtons />
        </div>
    )
}

export default Page
