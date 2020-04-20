import React, {useState} from "react";
import "./style.scss"
import anime from 'animejs/lib/anime.es.js';

function Card(props) {
    const [playing, setPlaying] = useState(false)

    const handleClick = (event, p=playing) => {        
        if (p)
            return;

        setPlaying(true);
        anime({
            targets: ".card" + props.num,
            scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
            rotateY: { value: '+=180'},
            easing: 'easeInOutSine',
            duration: 400,
            complete: function (anim) {
                setPlaying(false);
            }
        });


    }


    return (
        <div className="card-container">
            <div onClick={handleClick} className={"card card" + props.num}>
                {props.children}
            </div>
        </div>
    )
};

export default Card;