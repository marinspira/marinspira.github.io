import React from 'react';
import * as C from './styles'

function About() {
    return (
        <C.Section id='about'>
        <div className='container'>
            <C.Container>
                <div>
                    <img src='https://d34ad2g4hirisc.cloudfront.net/user_photos/images/001/203/595/medium/e72d91593d93ef0370ddf60c40b37eef.jpeg' alt='img' />
                </div>
                <div>
                    <h2>About me</h2>
                    <span>
                        My name is Maria Eduarda. I'm from Rio de Janeiro, Brazil, but I love traveling.
                        <br />
                        <br />
                        I've been passionate about programming since I was 12, when I decided to create a blog about books and movies. Since then, I've never stopped developing websites and systems.
                        <br />
                        <br />
                        I am currently studying Software Engineering, have a degree in Digital Marketing, and I love acquiring new knowledge, exploring new places, and creating things that bring memorable experiences to people.
                    </span>
                </div>
            </C.Container >
        </div>
        </C.Section >
    );
}

export default About;