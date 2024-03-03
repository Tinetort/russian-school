'use client'
import { Container } from 'react-bootstrap'
import AlumniPc from '@/components/AlumniPc'
import AlumniMobile from '@/components/AlumniMobile'



const Page = () => {
    return (
        <div className="bg-gradient-to-b from-[#ff9161] via-gray-200 to-[#b0dfef]">
            <div className="flex flex-col justify-center w-full p-10 ">
                <h1 className="text-center uppercase text-[#015ebb] ">
                    Alumni
                </h1>
            </div>
            <Container>
                <div className="border border-warning rounded-4 p-2">
                    <p className="mt-4 ml-4">
                        The Russian school is proud of its alumni students, who
                        have found successful careers after finishing
                        prestigious colleges in the U.S. Our school not only
                        helped them preserve their Russian language and widen
                        the scope of their knowledge but also aided them in the
                        application process, finding a relevant practicum in
                        their field, and launching their careers.
                    </p>
                    <p className="mt-4 ml-4">
                        We asked our alumni to tell us how their lives have
                        progressed since their graduation from our school and
                        how the material they learned in the San Diego Russian
                        School benefited their adult life.
                    </p>
                    <div className="hidden md:block">
                        <AlumniPc />
                    </div>
                    <div className="block md:hidden">
                        <AlumniMobile />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Page
