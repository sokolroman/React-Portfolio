import React from 'react';
import './about.css';

const About = () => {
return (
<div className="about">
<div className="about-avatar">
<img src="https://user-images.githubusercontent.com/72160963/207974447-8ca564fc-1c94-4b43-a875-e0932c3832c7.gif" alt="" />
</div>
<div className="about-bio">
<ul className="QGV">
<li className="quickGlance">Pronouns: he/him 🧍🏻‍♂️</li>
        <li className="quickGlance">Country: United States 🇺🇸</li>
        <li className="quickGlance">Coding since 2020 🧑🏻‍💻</li>
        <li className="quickGlance">Open to work: Yes</li>
</ul>


<h2>About Me</h2>

<p>
I am a beginner full stack web developer from the United States, currently working freelance. I am an intuitive and hardworking individual with a lot of attention to detail. I am always eager to learn and improve my skills.
</p>
<p>
In my free time, I enjoy playing with film cameras, going out hiking, and practicing jiu-jitsu. I am also excited about the potential of Web 3.0 and AI to revolutionize the way we interact with the internet.
</p>
<h2>Fun Fact</h2>
<p>
I can speak three different languages, English, Russian, and Ukrainian. Приятно познакомиться! I am also learning Finnish as a fourth language because I'd like to live in Finland some day.
</p>
</div>
</div>
);
};

export default About;