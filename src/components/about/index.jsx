import React from 'react';
import * as C from './styles'

function About() {
    return (
        <C.Container id='about'>
            <div>
                <img src='https://d34ad2g4hirisc.cloudfront.net/user_photos/images/001/203/595/medium/e72d91593d93ef0370ddf60c40b37eef.jpeg' alt='img' />
            </div>
            <div>
                <h2>About me</h2>
                <span>
                    Hello! I'm Maria, 20 years old, and I entered the programming world at the age of 13 when I created a blog on Blogger to share my passion for books.
                    <br /><br />
                    Currently, I hold a degree in Marketing, I'm pursuing Software Engineering, and I work as a front-end developer with a strong focus on React.js. I love acquiring new knowledge, exploring new places, and creating things that bring memorable experiences to people.
                </span>
            </div>
        </C.Container >
    );
}

export default About;