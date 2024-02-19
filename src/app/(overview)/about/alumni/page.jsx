'use client'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Link from 'next/link'
import languagePhoto from '../../../../../utils/languagePhoto.json'

const { nadya, michael, maxim, lev, alexandra, ivan, alice, olga, konstantin } =
    languagePhoto

const Page = () => {
    return (
        <div className="bg-gradient-to-b from-[#b0dfef] via-gray-200 to-[#ff9161]">
            <div className="flex flex-col justify-center w-full  h-80 ">
                <h1 className="text-center uppercase text-[#015ebb] ">
                    Alumni
                </h1>
            </div>
            <Container>
                <div className="border border-warning rounded-4 my-4 p-2">
                    <p className="mt-4 ml-4">
                        The Russian school is proud of it's alumni students, who
                        have found successful careers after finishing
                        prestigious colleges in U.S. Our school not only helped
                        them preserve their Russian language and widen the scope
                        of their knowledge but also aided them in the
                        application process, finding a relevant practicum in
                        their field and launching their careers.
                    </p>
                    <p className="mt-4 ml-4">
                        We asked our alumni to tell us how their lives have
                        progressed since their graduation out of our school and
                        how the material they learned in San Diego Russian
                        School benefited their adult life.
                    </p>
                    <Container>
                        <h2>Надя Горелов</h2>
                        <Row className="items-center mb-5">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={nadya} />
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                ...тогда учитель истории Torrey
                                                Pines High School сказал всему
                                                классу: «I was proven wrong! As
                                                you can see, Russian people know
                                                the history of their country
                                                well, even better than me, a
                                                historian! Take an example from
                                                them!»
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Я родилась в Сан Диего и
                                                    училась в Русской школе 10
                                                    лет. Сейчас я свободно
                                                    говорю на русском языке,
                                                    читаю и пишу. Студенткой
                                                    SDSU подрабатывала
                                                    переводами и редакцией
                                                    переводов с русского на
                                                    английский. Сейчас работаю в
                                                    компании CBRI.
                                                </p>
                                                <p>
                                                    Русский язык постоянно
                                                    участвует в моей жизни: я
                                                    разговариваю с родителями
                                                    только на их родном языке, и
                                                    это обогащает наше общение,
                                                    мы пишем друг другу каждый
                                                    день на русском свои новости
                                                    в мессенджерах. Я могу
                                                    говорить с моими
                                                    многочисленными русскими
                                                    родственниками,
                                                    разбросанными по миру. Я
                                                    слушаю русскую музыку. Моя
                                                    лучшая подруга говорит на
                                                    русском, и мы иногда
                                                    «секретничаем» на
                                                    вечеринках, пользуясь тем,
                                                    что никто нас не понимает.
                                                    Кроме этого, в моей
                                                    американской жизни все время
                                                    происходят удивительные
                                                    истории, связанные с русским
                                                    языком. Вот несколько из
                                                    них.
                                                </p>
                                                <p>
                                                    На уроке Современной Истории
                                                    в High School учитель
                                                    рассказывал о России: «Тема
                                                    сегодняшнего урока – сказал
                                                    учитель, - Августовский путч
                                                    1990-ого года.» Я подняла
                                                    руку и поправила учителя:
                                                    «Это было не в 1990-ом году,
                                                    а в 1991-ом.» Учитель
                                                    ответил, что я ошибаюсь, он
                                                    точно знает, что
                                                    государственный переворот
                                                    случился в 1990. Я
                                                    настаивала на 91-ом. «Ну
                                                    хорошо, ребята, давай
                                                    проверим кто из нас прав,
                                                    учитель Истории или ученик!»
                                                    Гуугл подтвердил, что в путч
                                                    случился именно 1991-ом. И
                                                    тогда учитель сказал классу:
                                                    «Вот, дети, я оказался
                                                    неправ! Запомните – русские
                                                    люди хорошо знают историю
                                                    своей страны! Лучше учителей
                                                    истории!» На самом деле, это
                                                    была заслуга нашего учителя
                                                    Истории в Русской школе Наум
                                                    Исааковича, который очень
                                                    интересно рассказывал нам
                                                    историю России.
                                                </p>
                                                <p>
                                                    Однажды, благодаря русскому,
                                                    я проникла внутрь больницы,
                                                    куда на скорой помощи была
                                                    привезена в критическом
                                                    состоянии моя американская
                                                    подруга. В ее палату никого
                                                    не пускали - вход туда был
                                                    разрешен только для близких
                                                    родственников, а ее родители
                                                    жили в другом штате. Ее
                                                    родители были на постоянной
                                                    связи со мной по телефону,
                                                    но я не могла их успокоить,
                                                    так как не была рядом с
                                                    подругой. Тут оказалось, что
                                                    медсестра моей подруги
                                                    русская и, увидев мою
                                                    фамилию Горелова, она вышла
                                                    ко мне и строго спросила:
                                                    «На русском говоришь?»,
                                                    «Да!», «Тогда пойдем со
                                                    мной!», и она провела меня в
                                                    палату к больной как
                                                    переводчика для нее.
                                                    Родители были мне очень
                                                    благодарны за помощь в такой
                                                    критической ситуации.
                                                </p>
                                                <p>
                                                    Когда я была студенткой
                                                    SDSU, мне очень хотелось
                                                    попасть на вечеринки клуба
                                                    иностранных студентов из
                                                    Европы - мне самой предстоял
                                                    Study Abroad в Европе, и я
                                                    хотела познакомиться с
                                                    европейскими студентами. Но
                                                    я было local, американкой,
                                                    меня не пускали. Зато у меня
                                                    хорошо получалось изображать
                                                    русский акцент в английском
                                                    (так говорят мои родители).
                                                    И я смогла себя выдать за
                                                    «иностранную студентку из
                                                    России» и приходила на их
                                                    вечеринки. Кстати, потом в
                                                    мой полугодовой Study Abroad
                                                    в Швейцарии я встретила
                                                    очень много русскоговорящих
                                                    людей.
                                                </p>
                                                <p>
                                                    В моей работе в CBRI важны
                                                    networking opportunities. На
                                                    большой официальной рабочей
                                                    встрече я познакомилась с
                                                    очень интересным человеком,
                                                    большим начальников в нашей
                                                    компании. Он оказался
                                                    американцем, влюбленным в
                                                    русскую историю и культуру,
                                                    и даже путешествовал по
                                                    Сибири. Мы с ним
                                                    подружились.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card>
                            </Col>
                        </Row>
                        <h2>Michael Rabinovich</h2>
                        <Row className="items-center mb-5">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={michael} />
                                    <Accordion defaultActiveKey="1">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header className="w-full">
                                                I'm grateful to the San Diego
                                                Russian School for instilling in
                                                me pride in my family heritage.
                                                Through their teachings, I've
                                                learned to appreciate the rich
                                                cultural legacy passed down
                                                through generations.
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    "I am currently a senior at
                                                    Stanford University studying
                                                    Management Science &
                                                    Engineering and will begin
                                                    work next year at Credit
                                                    Suisse in the Technology
                                                    Investment Banking division
                                                    in San Francisco. Knowledge
                                                    of Russian has allowed me to
                                                    communicate with my parents,
                                                    grandparents and family
                                                    friends in addition to
                                                    giving me a global
                                                    perspective on many
                                                    political and economic
                                                    issues facing the world
                                                    today. I am grateful to the
                                                    San Diego Russian School for
                                                    instilling in me a pride in
                                                    my family heritage and
                                                    language that will persist
                                                    with me for the rest of my
                                                    life."
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card>
                            </Col>
                        </Row>
                        <h2>Maxim Zaslavsky</h2>
                        <Row className="items-center mb-5">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={maxim} />
                                    <Accordion defaultActiveKey="2">
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header className="w-full">
                                                The Russian history lectures
                                                were my favorite – because we
                                                talked about the logic of
                                                historical events…
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Maxim is currently a
                                                    sophomore at Princeton
                                                    University studying computer
                                                    science. He was listed among
                                                    the 25 most impressive high
                                                    school graduates in 2013 by
                                                    Business Insider.
                                                </p>
                                                <p>
                                                    "SDRS was more than just a
                                                    fun way to spend the
                                                    weekends. It was a way to
                                                    make friends, to get to
                                                    understand my parents and
                                                    grandparents, and get
                                                    connected with culture that
                                                    seemed so remote and yet so
                                                    close. The Russian history
                                                    lectures were my favorite –
                                                    because we talked about the
                                                    logic of historical events
                                                    and historical parallels
                                                    between different countries
                                                    – much more than just a
                                                    collection of facts. I think
                                                    this ability to find reason
                                                    and meaning in a different
                                                    culture gave me a worldly
                                                    view that I have to thank
                                                    for getting into the college
                                                    of my dreams. And it has
                                                    profoundly changed the way I
                                                    interact with the world
                                                    around me."
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card>
                            </Col>
                        </Row>
                        <h2>Lev Gorelov</h2>
                        <Row className="items-center mb-5">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={lev} />
                                    <Accordion defaultActiveKey="3">
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header className="w-full">
                                                Russian School enriched my life
                                                in innumerable ways…
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    "I graduated out of UC Santa
                                                    Cruz with a degree in
                                                    psychology and cognitive
                                                    sciences. My Russian
                                                    education not only sustained
                                                    my ability to talk to my
                                                    parents but also gave me a
                                                    basis of knowledge to
                                                    understand contemporary
                                                    international events. I'm
                                                    very glad that I gained the
                                                    historic backdrop about
                                                    Russian history from Russian
                                                    School because now political
                                                    and economic news has an
                                                    enriching shading to it. As
                                                    a psychology major, I could
                                                    not directly apply the
                                                    knowledge form Russian
                                                    school into my academic work
                                                    but it enriched my life in
                                                    innumerable ways and my
                                                    bilingual abilities looks
                                                    great on my Resumes."
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card>
                            </Col>
                        </Row>
                        <h2>Alexandra Mushigyan</h2>
                        <Row className="items-center mb-5">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={alexandra} />
                                    <Accordion defaultActiveKey="4">
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header className="w-full">
                                                I'm working on my PhD and
                                                professors in my department
                                                occasionally ask me to translate
                                                information for them from old,
                                                obscure scientific manuscripts
                                                published only in Russian…
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    "I studied biology at
                                                    Harvard, where my knowledge
                                                    of Russian exempted me from
                                                    the language requirement
                                                    (and earned me a bit of cash
                                                    a few times, when I was a
                                                    subject in studies by the
                                                    linguistics department!)
                                                    After graduation I moved to
                                                    Sweden and then Switzerland
                                                    for scientific research, and
                                                    in both places, knowing
                                                    another language and having
                                                    previous experience with
                                                    moving between cultures
                                                    helped me adjust to the new
                                                    languages and cultures. Now
                                                    I'm working on my PhD and
                                                    professors in my department
                                                    occasionally ask me to
                                                    translate information for
                                                    them from old, obscure
                                                    scientific manuscripts
                                                    published only in Russian."
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card>
                            </Col>
                        </Row>
                        <h2>Ivan Yulaev</h2>
                        <Row className="items-center mb-5">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={ivan} />
                                    <Accordion defaultActiveKey="5">
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header className="w-full">
                                                In tech there are a frightening
                                                number of Russian folks. Being
                                                able to speak has greatly helped
                                                with meeting new people at work
                                                and networking in general…
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    "After I graduated from high
                                                    school, I went to college at
                                                    UCSD, where I studied
                                                    Computer Science and
                                                    Electrical Engineering. I
                                                    also worked at a local tech
                                                    company as a hardware
                                                    engineer doing digital and
                                                    VLSI design to support my
                                                    studies. I now work as a
                                                    software engineer at
                                                    Google.In tech there are a
                                                    frightening number of
                                                    Russian folks. Being able to
                                                    speak and understand Russian
                                                    language & idioms has
                                                    greatly helped with meeting
                                                    new people at work and
                                                    networking in general.
                                                    Thanks San Diego Russian
                                                    School for helping me keep
                                                    up my Russian language &
                                                    cultural skills even though
                                                    I've lived in the US for so
                                                    long!"
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card>
                            </Col>
                        </Row>
                        <h2>Alice Giliarini</h2>
                        <Row className="items-center mb-5">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={alice} />
                                    <Accordion defaultActiveKey="7">
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>
                                                … it was also through Russian
                                                School that I got my first
                                                internship…
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    "Attending SDRS, was like
                                                    stepping into a small
                                                    version of the country of my
                                                    culture. I have never been
                                                    to Russia, but SDRS made me
                                                    feel Russian, and a part of
                                                    the Russian Community. SDRS
                                                    gave me what simply speaking
                                                    Russian and reading Russian
                                                    books at home, did not. It
                                                    gave me the chance to learn
                                                    in Russian and discuss
                                                    topics in Russian. American
                                                    schools tend to only briefly
                                                    touch upon the history of
                                                    Russia and the rest of the
                                                    world. SDRS not only gave me
                                                    the chance to learn Russian
                                                    history in detail, but to
                                                    see the rest of the world
                                                    with a different
                                                    perspective. What I
                                                    especially loved about the
                                                    Russian History lectures,
                                                    was that everything we
                                                    learned was immediately
                                                    connected to geography. SDRS
                                                    is where I realized the
                                                    importance of the tie
                                                    between geography and
                                                    historical events. Now when
                                                    I read about current
                                                    political events, I always
                                                    keep the relationship
                                                    between different
                                                    geographical areas, in mind.
                                                    At SDRS I also thoroughly
                                                    enjoyed the Russian
                                                    Literature lectures and
                                                    discussions. There are many
                                                    pieces of literature that we
                                                    read, but the two that
                                                    resonate the most with me
                                                    are "Ася" by Тургенев and
                                                    "Евгений Онегин" by Пушкин.
                                                    I am not exaggerating when I
                                                    say that these two novels
                                                    impact my life to this day.
                                                    Besides all the Russian
                                                    related opportunities that
                                                    SDRS gave me, it was also
                                                    through SDRS that I got my
                                                    first internship. During the
                                                    summer before my sophomore
                                                    year in high school, I
                                                    interned at the UCSD San
                                                    Diego Supercomputer Center
                                                    (SDSC). My task was to
                                                    organize data from different
                                                    branches of environmental
                                                    science, this was then used
                                                    to create a database system
                                                    for researchers. Being a
                                                    small part of this project,
                                                    gave me my first chance to
                                                    be part of something that
                                                    could impact the world. This
                                                    was also my first experience
                                                    working with adults, an
                                                    experience that is important
                                                    'in the real world', and an
                                                    experience that colleges
                                                    look for when accepting
                                                    students. The most important
                                                    thing that SDSC gave me, was
                                                    the realization that I need
                                                    to reach out to directly
                                                    experience and independently
                                                    learn about things in order
                                                    to find my passion. I am now
                                                    majoring in linguistics with
                                                    a focus on neurology at
                                                    UCSD. If it was not for the
                                                    SDSC internship and SDRS, I
                                                    would not have even thought
                                                    of majoring in something not
                                                    directly related to science.
                                                    I am forever grateful to
                                                    SDRS for supporting me and
                                                    my Russian. The knowledge of
                                                    Russian was definitely
                                                    crucial to deciding my
                                                    major. Finally, I can not
                                                    wait to take advantage of
                                                    everything SDRS taught me,
                                                    and finally study abroad in
                                                    the country of my family."
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card>
                            </Col>
                        </Row>
                        <h2>Konstantin Dubovenko</h2>
                        <Row className="items-center mb-5">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={konstantin} />
                                    <Accordion defaultActiveKey="8">
                                        <Accordion.Item eventKey="8">
                                            <Accordion.Header>
                                                San Diego Russian School
                                                curriculum goes far beyond the
                                                basics and provides a fully
                                                immersive experience through
                                                lessons focused on history and
                                                literature…
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    "I graduated from SDSU in
                                                    2011 with a degree in
                                                    Electrical Engineering. At
                                                    this time, I am gainfully
                                                    employed as a hardware
                                                    design engineer at Qualcomm
                                                    and run a small start-up
                                                    with a few of my friends at
                                                    vervelab.co. Having been
                                                    fortunate enough to live a
                                                    relatively short, albeit
                                                    important part of my life in
                                                    Ukraine, I understand how
                                                    vital it is to retain not
                                                    only the Russian language
                                                    (widely spoken in Ukraine),
                                                    but also my Ukrainian /
                                                    Russian cultural heritage.
                                                    In addition to exposing me
                                                    to the Russian community
                                                    here in San Diego, SDRS has
                                                    certainly helped me retain,
                                                    practice and improve my
                                                    knowledge of the written and
                                                    spoken Russian language. It
                                                    is particularly important to
                                                    note that the SDRS
                                                    curriculum goes far beyond
                                                    the basics and provides a
                                                    fully immersive experience
                                                    through lessons focused on
                                                    history and literature. I
                                                    truly believe that fluency
                                                    in multiple languages gave
                                                    me an edge at the workplace,
                                                    allowed me to think outside
                                                    of the box and most
                                                    importantly, brought me
                                                    closer with my friends and
                                                    relatives. Школа SDRS даёт
                                                    уникальную возможность
                                                    поддерживать русскую
                                                    культуру русскоязычной
                                                    диаспоре San Diego."
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card>
                            </Col>
                        </Row>
                        <h2>Olga Bronshteyn</h2>
                        <Row className="items-center mb-5">
                            <Col className="p-2 flex items-center justify-center">
                                <Card>
                                    <Card.Img variant="top" src={olga} />
                                    <Accordion defaultActiveKey="9">
                                        <Accordion.Item eventKey="9">
                                            <Accordion.Header>
                                                My 7 years of education in
                                                Russian Scool gave me not only a
                                                chance to connect with my
                                                parents and grandparents, but
                                                also with the younger generation
                                                - other "generation Y" Russians,
                                                who, like me, were searching 
                                                for someone to explore their
                                                heritage with…
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    "I am a high school junior
                                                    who attended SDRS for seven
                                                    years. Born in Russia, I
                                                    moved to San Diego at the
                                                    age of 6 and never received
                                                    a Russian education- but
                                                    SDRS has proven to have been
                                                    the next best thing. Through
                                                    a variety of courses through
                                                    the years, I learned more
                                                    about the history,
                                                    literature, art, and culture
                                                    of my country than most
                                                    migrant kids could hope to.
                                                    My experience gave me not
                                                    only a chance to connect
                                                    with the "older generation"-
                                                    my parents and grandparents-
                                                    but also with the younger
                                                    generation- other
                                                    "generation Y" Russians,
                                                    who, like me, were
                                                    searching  for someone to
                                                    explore their heritage with.
                                                    I am as of yet undecided in
                                                    which direction to go with a
                                                    career, but regardless of
                                                    the impact Russian School
                                                    will have on my professional
                                                    future, it is indisputable
                                                    that it has had a great
                                                    impact on shaping me as a
                                                    person. There are few things
                                                    more satisfying than coming
                                                    to the Tretyakovskaya
                                                    Gallery and being able to
                                                    name half of the paintings,
                                                    or telling your American
                                                    friends that you read "Crime
                                                    and Punishment" in its
                                                    original language!"
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    )
}

export default Page
