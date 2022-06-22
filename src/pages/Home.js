import './Home.css'
import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Home(){
    const fade =  useSpring({
        from: { opacity:0, marginTop:-200},
        opacity: 1,
        marginTop: 200,
        config:{ duration: 1500 }
    });
    return(
        <div className="home-page">
            <animated.div className="intro-box" style={fade}>
                <h1>Clayton Yarborough</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet aliquam odio. Phasellus nec nibh id ex tristique interdum luctus eget purus. Proin nisi magna, pharetra in dolor eget, consequat rutrum mauris. Cras nec erat quam. Aenean hendrerit varius nisi, quis convallis metus varius vulputate. Morbi pretium, orci et sodales efficitur, augue libero finibus nibh, vel auctor augue dui faucibus erat. Donec in ultrices nunc, non bibendum dolor. Aenean lobortis rutrum ornare.
                    Quisque non ex sollicitudin, tempor velit et, aliquam erat. Nulla non ullamcorper ligula. Donec vel egestas sapien. Proin vel mi pharetra, facilisis libero vel, lacinia urna. Maecenas ultrices pharetra dolor, at aliquam magna malesuada eu. Fusce quis eros neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam pretium nulla pretium faucibus venenatis. Vestibulum vel gravida erat, ac elementum nisi. Ut tempor ligula ut lacus lobortis ultrices. Nulla mi ex, maximus eget vehicula quis, dapibus quis lectus. Nulla sagittis rutrum lectus sed rhoncus. Fusce non sem suscipit, fermentum nulla in, volutpat augue. Nulla facilisi.</p>
            </animated.div>
        </div>
    );
}