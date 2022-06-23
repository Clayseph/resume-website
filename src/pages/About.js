import './About.css';
import { useSpring, useTransition, animated, useTrail } from 'react-spring';
import { experienceList } from '../resources/experience';
export default function About(){

    const move =  useSpring({
        from: { marginTop: -200},
        marginTop: 100,
        config:{ duration: 1000 }
    });

    let trail = useTrail(experienceList.length, {
        from: { opacity:0},
        // delay: 1000,
        opacity: 1,
        config:{ duration: 1000}
    });

    return(
        <div  className="about-page">

                {/* <animated.div style={move} > */}
                    <div>
                        <h1>Professional Experience</h1>
                    </div>
                {/* </animated.div> */}
                <div className="card-holder">
                { trail.map(({...rest}, index)=>(
                    <animated.div className="card" style={{ ...rest }}>
                        <div className="details">
                            <i className="title">{experienceList[index].title}</i>
                            <i className="title">{experienceList[index].dates}</i>
                        </div>
                        <h2 className="company">{experienceList[index].company}</h2> 
                        <div className="experience-text">{experienceList[index].experience}</div>
                    </animated.div>
                ))}
               </div>
        </div>
    );
}