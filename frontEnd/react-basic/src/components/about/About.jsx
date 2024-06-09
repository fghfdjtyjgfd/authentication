import React from 'react';
import style from '../../style/About.module.css';
import { Link } from 'react-router-dom';


function About() {
    return (
        <>
            <div className={style.container}>
                <h1>About</h1>
                <div className={style.nestedRoutes}>
                        <Link to="/about/author" className={style.text}>Author</Link>
                        <Link to="/about/company" className={style.text}>Company</Link>
                </div>
                
                <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, 
                    quisquam sit non assumenda esse natus deserunt tenetur, adipisci 
                    rerum velit amet. Nostrum repellendus cupiditate, dolor sunt volup
                    tatem a sequi qui temporibus cumque, illum quo incidunt minima accus
                    amus voluptas aperiam iusto at beatae labore reiciendis molestiae 
                    porro. Tenetur nam nemo sapiente!
                </p>

            </div>
        </>
    )
}

export default About;