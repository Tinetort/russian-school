import { Container } from 'react-bootstrap'
import { MdKeyboardBackspace } from 'react-icons/md'
import Link from 'next/link'

const Page = () => {
    return (
        <div className="bg-gradient-to-b from-[#b0dfef] via-gray-200 to-[#ff9161]">
            <div className="flex flex-col justify-center w-full  h-80 ">
                <h1 className="text-center uppercase text-[#015ebb] ">
                    Native Speaker Classes
                </h1>
            </div>
            <Container className="p-16">
                <div>
                    <div className="border border-warning rounded-4">
                        <h2 className="uppercase text-black p-8">
                            Образование на русском языке
                        </h2>
                        <p className="ml-4 mt-2">
                            Занятия в zoom проходят по воскресеньям с 9.00 до
                            12.00
                        </p>
                        <p className="ml-4 mt-2">Младшие классы:</p>
                        <ul>
                            <li>Русский язык</li>
                            <li>Чтение</li>
                            <li>Развитие речи</li>
                        </ul>
                        <p className="ml-4 mt-2">Старшие классы:</p>
                        <ul>
                            <li>Русский язык</li>
                            <li>Литература</li>
                            <li>История</li>
                            <li>География</li>
                        </ul>
                        <p className="ml-4 mt-2">
                            Оценить программу школы можно на{' '}
                            <Link href="/homework"> странице </Link> с домашними
                            заданиям прошлого года. Один день занятий с 9.00 до
                            12.00 (три урока у трех разных учителей) - $50. Плюс
                            одноразовый ежегодный регистрационный взнос $50
                            (старые ученики) $100 (новые)
                        </p>
                    </div>
                </div>
                <div className="mt-5">
                    <Link className="no-underline text-black" href="/about">
                        <MdKeyboardBackspace size={30} />
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Page
