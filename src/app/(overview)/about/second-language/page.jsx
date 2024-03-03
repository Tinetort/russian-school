import { Container, Row, Col } from 'react-bootstrap'
import { MdKeyboardBackspace } from 'react-icons/md'
import languagePhoto from '../../../../../utils/languagePhoto.json'
import Image from 'react-bootstrap/Image'
import Link from 'next/link'
import WhereToGoButtons from '@/components/WhereToGoButtons'

const Page = () => {
    return (
        <div className="bg-gradient-to-b from-[#ff9161] via-gray-200 to-[#b0dfef]">
            <div className="flex flex-col justify-center w-full h-48 ">
                <h1 className="text-center uppercase text-[#015ebb] ">
                    RUSSIAN AS A SECOND LANGUAGE
                </h1>
            </div>
            <Container>
                <div className="p-10">
                    <div className="border border-warning rounded-4">
                        <h2 className="uppercase text-black p-2">
                            Russian as a Second Language
                        </h2>
                        <p className="p-2">
                            Russian as a Second Language classes are open to
                            individuals of all ages and backgrounds, with or
                            without prior experience in Russian. Whether you're
                            drawn to Russian for your professional aspirations,
                            want to connect with your Russian-speaking family,
                            or desire for your kids to embrace the language that
                            will strengthen their bond with you, we have a place
                            for you in our program.
                        </p>
                        <p className="p-2">
                            Our educational courses cover all aspects of
                            language acquisition. We teach our students how to
                            speak, read, and write in Russian, ensuring that
                            they develop a strong foundation. But we go beyond
                            language basics – our curriculum also delves into
                            the captivating world of Russian literature, art,
                            and history, providing our students with a
                            well-rounded cultural experience.
                        </p>

                        <p className="p-2">
                            Our program features a proven method that allows our
                            students to start speaking and understanding basic
                            Russian in as little as two months! We understand
                            the importance of efficient language learning, and
                            we're committed to helping our students reach their
                            goals quickly.
                        </p>
                        <p className="p-2">
                            Whether you prefer the convenience of online classes
                            or the personal touch of in-person instruction,
                            we've got you covered. Our classes are available
                            both online and in physical classrooms to cater to
                            your specific needs and preferences.
                        </p>
                    </div>
                </div>
            </Container>
            <Container className="hidden md:block p-16">
                <Row>
                    <Col>
                        {' '}
                        <Image src={languagePhoto.firstPhoto} fluid />
                    </Col>
                    <Col>
                        {' '}
                        <Image src={languagePhoto.secondPhoto} fluid />
                    </Col>
                </Row>
            </Container>
            <Container className="block md:hidden">
                <Row>
                    <Col className="py-4">
                        <Image src={languagePhoto.firstPhoto} fluid />
                    </Col>
                </Row>
                <Row>
                    <Col className="py-4">
                        <Image src={languagePhoto.secondPhoto} fluid />
                    </Col>
                </Row>
            </Container>
            {/* <div className="pb-10 ml-10 ">
                <Link className="no-underline text-black" href="/about">
                    <MdKeyboardBackspace size={30} />
                </Link>
            </div> */}
            <WhereToGoButtons/>
        </div>
    )
}

export default Page
