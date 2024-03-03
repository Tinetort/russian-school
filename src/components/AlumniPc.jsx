import { Col, Container, Row, Card, Accordion } from 'react-bootstrap'
import languagePhoto from '../../utils/languagePhoto.json'
import ToggleAlumniButtun from './ToggleAlumniButtun'

const { nadya, michael, maxim, lev, alexandra, ivan, alice, olga, konstantin } =
    languagePhoto

const AlumniPc = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Nadya Gorelov</h2>
                    <Row className="items-center mb-5">
                        <Col className="p-2 flex items-center justify-center">
                            <Card>
                                <Card.Img variant="top" src={nadya} />
                                <Accordion>
                                    <Card.Header>
                                        ...тогда учитель истории Torrey Pines
                                        High School сказал всему классу: «I was
                                        proven wrong! As you can see, Russian
                                        people know the history of their country
                                        well, even better than me, a historian!
                                        Take an example from them!»
                                    </Card.Header>
                                    <div className="flex justify-center items-center p-1">
                                        <ToggleAlumniButtun eventKey="nadya"></ToggleAlumniButtun>
                                    </div>
                                    <Accordion.Collapse eventKey="nadya">
                                        <Card.Body>
                                            <p>
                                                Я родилась в Сан Диего и училась
                                                в Русской школе 10 лет. Сейчас я
                                                свободно говорю на русском
                                                языке, читаю и пишу. Студенткой
                                                SDSU подрабатывала переводами и
                                                редакцией переводов с русского
                                                на английский. Сейчас работаю в
                                                компании CBRE.
                                            </p>
                                            <p>
                                                Русский язык постоянно участвует
                                                в моей жизни: я разговариваю с
                                                родителями только на их родном
                                                языке, и это обогащает наше
                                                общение, мы пишем друг другу
                                                каждый день на русском свои
                                                новости в мессенджерах. Я могу
                                                говорить с моими многочисленными
                                                русскими родственниками,
                                                разбросанными по миру. Я слушаю
                                                русскую музыку. Моя лучшая
                                                подруга говорит на русском, и мы
                                                иногда «секретничаем» на
                                                вечеринках, пользуясь тем, что
                                                никто нас не понимает. Кроме
                                                этого, в моей американской жизни
                                                все время происходят
                                                удивительные истории, связанные
                                                с русским языком. Вот несколько
                                                из них.
                                            </p>
                                            <p>
                                                Однажды, благодаря русскому, я
                                                проникла внутрь больницы, куда
                                                на скорой помощи была привезена
                                                в критическом состоянии моя
                                                американская подруга. В ее
                                                палату никого не пускали - вход
                                                туда был разрешен только для
                                                близких родственников, а ее
                                                родители жили в другом штате. Ее
                                                родители были на постоянной
                                                связи со мной по телефону, но я
                                                не могла их успокоить, так как
                                                не была рядом с подругой. Тут
                                                оказалось, что медсестра моей
                                                подруги русская и, увидев мою
                                                фамилию Горелова, она вышла ко
                                                мне и строго спросила: «На
                                                русском говоришь?», «Да!»,
                                                «Тогда пойдем со мной!», и она
                                                провела меня в палату к больной
                                                как переводчика для нее.
                                                Родители были мне очень
                                                благодарны за помощь в такой
                                                критической ситуации.
                                            </p>
                                            <p>
                                                Когда я была студенткой SDSU,
                                                мне очень хотелось попасть на
                                                вечеринки клуба иностранных
                                                студентов из Европы - мне самой
                                                предстоял Study Abroad в Европе,
                                                и я хотела познакомиться с
                                                европейскими студентами. Но я
                                                было local, американкой, меня не
                                                пускали. Зато у меня хорошо
                                                получалось изображать русский
                                                акцент в английском (так говорят
                                                мои родители). И я смогла себя
                                                выдать за «иностранную студентку
                                                из России» и приходила на их
                                                вечеринки. Кстати, потом в мой
                                                полугодовой Study Abroad в
                                                Швейцарии я встретила очень
                                                много русскоговорящих людей.
                                            </p>
                                            <p>
                                                В моей работе в CBRE важны
                                                networking opportunities. На
                                                большой официальной рабочей
                                                встрече я познакомилась с очень
                                                интересным человеком, большим
                                                начальников в нашей компании. Он
                                                оказался американцем, влюбленным
                                                в русскую историю и культуру, и
                                                даже путешествовал по Сибири. Мы
                                                с ним подружились.
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h2>Michael Rabinovich</h2>
                    <Row className="items-center mb-5">
                        <Col className="p-2 flex items-center justify-center">
                            <Card>
                                <Card.Img variant="top" src={michael} />
                                <Accordion>
                                    <Card.Header>
                                        <p>
                                            I am grateful to the San Diego
                                            Russian School for instilling in me
                                            a pride in my family heritage,
                                            strengthening my attachment to my
                                            native culture and language, and
                                            providing me with the opportunity to
                                            gain a deeper understanding and
                                            appreciation of the values and
                                            traditions passed down to me by my
                                            ancestors.
                                        </p>
                                    </Card.Header>
                                    <div className="flex justify-center items-center p-1">
                                        <ToggleAlumniButtun eventKey="michael"></ToggleAlumniButtun>
                                    </div>
                                    <Accordion.Collapse eventKey="michael">
                                        <Card.Body>
                                            <p>
                                                "I am currently a senior at
                                                Stanford University studying
                                                Management Science & Engineering
                                                and will begin work next year at
                                                Credit Suisse in the Technology
                                                Investment Banking division in
                                                San Francisco. Knowledge of
                                                Russian has allowed me to
                                                communicate with my parents,
                                                grandparents and family friends
                                                in addition to giving me a
                                                global perspective on many
                                                political and economic issues
                                                facing the world today. I am
                                                grateful to the San Diego
                                                Russian School for instilling in
                                                me a pride in my family heritage
                                                and language that will persist
                                                with me for the rest of my
                                                life."
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2>Maxim Zaslavsky </h2>
                    <Row className="items-center mb-5">
                        <Col className="p-2 flex items-center justify-center">
                            <Card>
                                <Card.Img variant="top" src={maxim} />
                                <Accordion>
                                    <Card.Header>
                                        <p>
                                            The Russian history lectures were my
                                            favorite – because we talked about
                                            the logic of historical events…{' '}
                                        </p>
                                    </Card.Header>
                                    <div className="flex justify-center items-center p-1">
                                        <ToggleAlumniButtun eventKey="maxim"></ToggleAlumniButtun>
                                    </div>
                                    <Accordion.Collapse eventKey="maxim">
                                        <Card.Body>
                                            <p>
                                                Maxim is currently a sophomore
                                                at Princeton University studying
                                                computer science. He was listed
                                                among the 25 most impressive
                                                high school graduates in 2013 by
                                                Business Insider.
                                            </p>
                                            <p>
                                                "SDRS was more than just a fun
                                                way to spend the weekends. It
                                                was a way to make friends, to
                                                get to understand my parents and
                                                grandparents, and get connected
                                                with culture that seemed so
                                                remote and yet so close. The
                                                Russian history lectures were my
                                                favorite – because we talked
                                                about the logic of historical
                                                events and historical parallels
                                                between different countries –
                                                much more than just a collection
                                                of facts. I think this ability
                                                to find reason and meaning in a
                                                different culture gave me a
                                                worldly view that I have to
                                                thank for getting into the
                                                college of my dreams. And it has
                                                profoundly changed the way I
                                                interact with the world around
                                                me."
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h2>Lev Gorelov</h2>
                    <Row className="items-center mb-5">
                        <Col className="p-2 flex items-center justify-center">
                            <Card>
                                <Card.Img variant="top" src={lev} />
                                <Accordion>
                                    <Card.Header>
                                        <p>
                                            Russian School enriched my life in
                                            innumerable ways…
                                        </p>
                                    </Card.Header>
                                    <div className="flex justify-center items-center p-1">
                                        <ToggleAlumniButtun eventKey="lev"></ToggleAlumniButtun>
                                    </div>
                                    <Accordion.Collapse eventKey="lev">
                                        <Card.Body>
                                            <p>
                                                "I graduated out of UC Santa
                                                Cruz with a degree in psychology
                                                and cognitive sciences. My
                                                Russian education not only
                                                sustained my ability to talk to
                                                my parents but also gave me a
                                                basis of knowledge to understand
                                                contemporary international
                                                events. I'm very glad that I
                                                gained the historic backdrop
                                                about Russian history from
                                                Russian School because now
                                                political and economic news has
                                                an enriching shading to it. As a
                                                psychology major, I could not
                                                directly apply the knowledge
                                                form Russian school into my
                                                academic work but it enriched my
                                                life in innumerable ways and my
                                                bilingual abilities looks great
                                                on my Resumes."
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>
                        Alexandra
                        <br /> Mushigyan
                    </h2>
                    <Row className="items-center mb-5">
                        <Col className="p-2 flex items-center justify-center">
                            <Card>
                                <Card.Img variant="top" src={alexandra} />
                                <Accordion>
                                    <Card.Header>
                                        <p>
                                            I'm working on my PhD and professors
                                            in my department occasionally ask me
                                            to translate information for them
                                            from old, obscure scientific
                                            manuscripts published only in
                                            Russian…
                                        </p>
                                    </Card.Header>
                                    <div className="flex justify-center items-center p-1">
                                        <ToggleAlumniButtun eventKey="alexandra"></ToggleAlumniButtun>
                                    </div>
                                    <Accordion.Collapse eventKey="alexandra">
                                        <Card.Body>
                                            <p>
                                                "I studied biology at Harvard,
                                                where my knowledge of Russian
                                                exempted me from the language
                                                requirement (and earned me a bit
                                                of cash a few times, when I was
                                                a subject in studies by the
                                                linguistics department!) After
                                                graduation I moved to Sweden and
                                                then Switzerland for scientific
                                                research, and in both places,
                                                knowing another language and
                                                having previous experience with
                                                moving between cultures helped
                                                me adjust to the new languages
                                                and cultures. Now I'm working on
                                                my PhD and professors in my
                                                department occasionally ask me
                                                to translate information for
                                                them from old, obscure
                                                scientific manuscripts published
                                                only in Russian."
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h2>
                        Ivan
                        <br /> Yulaev
                    </h2>
                    <Row className="items-center mb-5">
                        <Col className="p-2 flex items-center justify-center">
                            <Card>
                                <Card.Img variant="top" src={ivan} />
                                <Accordion>
                                    <Card.Header>
                                        <p>
                                            In tech there are a frightening
                                            number of Russian folks. Being able
                                            to speak has greatly helped with
                                            meeting new people at work and
                                            networking in general…{' '}
                                        </p>
                                    </Card.Header>
                                    <div className="flex justify-center items-center p-1">
                                        <ToggleAlumniButtun eventKey="ivan"></ToggleAlumniButtun>
                                    </div>
                                    <Accordion.Collapse eventKey="ivan">
                                        <Card.Body>
                                            <p>
                                                "After I graduated from high
                                                school, I went to college at
                                                UCSD, where I studied Computer
                                                Science and Electrical
                                                Engineering. I also worked at a
                                                local tech company as a hardware
                                                engineer doing digital and VLSI
                                                design to support my studies. I
                                                now work as a software engineer
                                                at Google.In tech there are a
                                                frightening number of Russian
                                                folks. Being able to speak and
                                                understand Russian language &
                                                idioms has greatly helped with
                                                meeting new people at work and
                                                networking in general. Thanks
                                                San Diego Russian School for
                                                helping me keep up my Russian
                                                language & cultural skills even
                                                though I've lived in the US for
                                                so long!"
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>
                    {' '}
                    <h2>
                        Alice
                        <br /> Giliarini
                    </h2>
                    <Row className="items-center mb-5">
                        <Col className="p-2 flex items-center justify-center">
                            <Card>
                                <Card.Img variant="top" src={alice} />
                                <Accordion>
                                    <Card.Header>
                                        <p>
                                            … it was also through Russian School
                                            that I got my first internship…
                                        </p>
                                    </Card.Header>
                                    <div className="flex justify-center items-center p-1">
                                        <ToggleAlumniButtun eventKey="alice"></ToggleAlumniButtun>
                                    </div>
                                    <Accordion.Collapse eventKey="alice">
                                        <Card.Body>
                                            <p>
                                                "Attending SDRS, was like
                                                stepping into a small version of
                                                the country of my culture. I
                                                have never been to Russia, but
                                                SDRS made me feel Russian, and a
                                                part of the Russian Community.
                                                SDRS gave me what simply
                                                speaking Russian and reading
                                                Russian books at home, did not.
                                                It gave me the chance to learn
                                                in Russian and discuss topics in
                                                Russian. American schools tend
                                                to only briefly touch upon the
                                                history of Russia and the rest
                                                of the world. SDRS not only gave
                                                me the chance to learn Russian
                                                history in detail, but to see
                                                the rest of the world with a
                                                different perspective. What I
                                                especially loved about the
                                                Russian History lectures, was
                                                that everything we learned was
                                                immediately connected to
                                                geography. SDRS is where I
                                                realized the importance of the
                                                tie between geography and
                                                historical events. Now when I
                                                read about current political
                                                events, I always keep the
                                                relationship between different
                                                geographical areas, in mind. At
                                                SDRS I also thoroughly enjoyed
                                                the Russian Literature lectures
                                                and discussions. There are many
                                                pieces of literature that we
                                                read, but the two that resonate
                                                the most with me are "Ася" by
                                                Тургенев and "Евгений Онегин" by
                                                Пушкин. I am not exaggerating
                                                when I say that these two novels
                                                impact my life to this day.
                                                <br />
                                                Besides all the Russian related
                                                opportunities that SDRS gave me,
                                                it was also through SDRS that I
                                                got my first internship. During
                                                the summer before my sophomore
                                                year in high school, I interned
                                                at the UCSD San Diego
                                                Supercomputer Center (SDSC). My
                                                task was to organize data from
                                                different branches of
                                                environmental science, this was
                                                then used to create a database
                                                system for researchers. Being a
                                                small part of this project, gave
                                                me my first chance to be part of
                                                something that could impact the
                                                world. This was also my first
                                                experience working with adults,
                                                an experience that is important
                                                'in the real world', and an
                                                experience that colleges look
                                                for when accepting students. The
                                                most important thing that SDSC
                                                gave me, was the realization
                                                that I need to reach out to
                                                directly experience and
                                                independently learn about things
                                                in order to find my passion. I
                                                am now majoring in linguistics
                                                with a focus on neurology at
                                                UCSD. If it was not for the SDSC
                                                internship and SDRS, I would not
                                                have even thought of majoring in
                                                something not directly related
                                                to science. I am forever
                                                grateful to SDRS for supporting
                                                me and my Russian. The knowledge
                                                of Russian was definitely
                                                crucial to deciding my major.
                                                Finally, I can not wait to take
                                                advantage of everything SDRS
                                                taught me, and finally study
                                                abroad in the country of my
                                                family."
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h2>
                        Konstantin
                        <br /> Dubovenko
                    </h2>
                    <Row className="items-center mb-5">
                        <Col className="p-2 flex items-center justify-center">
                            <Card>
                                <Card.Img variant="top" src={konstantin} />
                                <Accordion>
                                    <Card.Header>
                                        <p>
                                            San Diego Russian School curriculum
                                            goes far beyond the basics and
                                            provides a fully immersive
                                            experience through lessons focused
                                            on history and literature…
                                        </p>
                                    </Card.Header>
                                    <div className="flex justify-center items-center p-1">
                                        <ToggleAlumniButtun eventKey="konstantin"></ToggleAlumniButtun>
                                    </div>
                                    <Accordion.Collapse eventKey="konstantin">
                                        <Card.Body>
                                            <p>
                                                "I graduated from SDSU in 2011
                                                with a degree in Electrical
                                                Engineering. At this time, I am
                                                gainfully employed as a hardware
                                                design engineer at Qualcomm and
                                                run a small start-up with a few
                                                of my friends at vervelab.co.
                                                Having been fortunate enough to
                                                live a relatively short, albeit
                                                important part of my life in
                                                Ukraine, I understand how vital
                                                it is to retain not only the
                                                Russian language (widely spoken
                                                in Ukraine), but also my
                                                Ukrainian / Russian cultural
                                                heritage. In addition to
                                                exposing me to the Russian
                                                community here in San Diego,
                                                SDRS has certainly helped me
                                                retain, practice and improve my
                                                knowledge of the written and
                                                spoken Russian language. It is
                                                particularly important to note
                                                that the SDRS curriculum goes
                                                far beyond the basics and
                                                provides a fully immersive
                                                experience through lessons
                                                focused on history and
                                                literature. I truly believe that
                                                fluency in multiple languages
                                                gave me an edge at the
                                                workplace, allowed me to think
                                                outside of the box and most
                                                importantly, brought me closer
                                                with my friends and relatives.
                                                Школа SDRS даёт уникальную
                                                возможность поддерживать русскую
                                                культуру русскоязычной диаспоре
                                                San Diego."
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <h2>Olga Bronshteyn</h2>
            <Row className="items-center mb-5">
                <Col className="p-2 flex items-center justify-center">
                    <Card>
                        <Card.Img variant="top" src={olga} />
                        <Accordion>
                            <Card.Header>
                                <p>
                                    My 7 years of education in Russian Scool
                                    gave me not only a chance to connect with my
                                    parents and grandparents, but also with the
                                    younger generation - other "generation Y"
                                    Russians, who, like me, were searching  for
                                    someone to explore their heritage with…
                                </p>
                            </Card.Header>
                            <div className="flex justify-center items-center p-1">
                                <ToggleAlumniButtun eventKey="olga"></ToggleAlumniButtun>
                            </div>
                            <Accordion.Collapse eventKey="olga">
                                <Card.Body>
                                    <p>
                                        "I am a high school junior who attended
                                        SDRS for seven years. Born in Russia, I
                                        moved to San Diego at the age of 6 and
                                        never received a Russian education- but
                                        SDRS has proven to have been the next
                                        best thing. Through a variety of courses
                                        through the years, I learned more about
                                        the history, literature, art, and
                                        culture of my country than most migrant
                                        kids could hope to. My experience gave
                                        me not only a chance to connect with the
                                        "older generation"- my parents and
                                        grandparents- but also with the younger
                                        generation- other "generation Y"
                                        Russians, who, like me, were searching 
                                        for someone to explore their heritage
                                        with. I am as of yet undecided in which
                                        direction to go with a career, but
                                        regardless of the impact Russian School
                                        will have on my professional future, it
                                        is indisputable that it has had a great
                                        impact on shaping me as a person. There
                                        are few things more satisfying than
                                        coming to the Tretyakovskaya Gallery and
                                        being able to name half of the
                                        paintings, or telling your American
                                        friends that you read "Crime and
                                        Punishment" in its original language!"
                                    </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Accordion>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AlumniPc
