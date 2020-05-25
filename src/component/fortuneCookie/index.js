import React, { useRef, useState, useEffect } from 'react';
import API from "../../utilities/API";
import axios from "axios"
import gsap from "gsap";
import "./style.scss";

export default function FortuneCookie() {
    //is the fortune cookie open
    const [close, setClose] = useState(true)
    const [fortune, setFortune] = useState(null);
    const [lesson, setLesson] = useState(null);
    const [lotto, setLotto] = useState([]);

    //ref for animation purposes using GSAP
    let fElement = useRef(null);
    let left = useRef(null);
    let right = useRef(null);
    let message = useRef(null);
    let messageSpan = useRef(null)
    let lottoSpan = useRef(null);


    useEffect(() => {
        let cancel
        API.fortuneCookie()
            .then(response => {
                console.log(response.data[0]);
                const cookie = response.data[0];
                setFortune(cookie.fortune.message);
                setLesson(cookie.lesson);
                setLotto(cookie.lotto.numbers);
                new axios.CancelToken(c => cancel = c)
                return () => cancel()
            })


    }, []);

    const handleClick = () => {
        if (close) {
            setClose(false)
            let tl = gsap.timeline({ yoyo: false, repeat: 0 });
            // tl.set(message,{opacity:0});
            tl.to(fElement, 0.1, { rotation: -5, delay: 2 });
            tl.to(fElement, 0.1, { rotation: 5 });
            tl.to(fElement, 0.1, { rotation: -5 });
            tl.to(fElement, 0.1, { rotation: 5 });
            tl.to(fElement, 0.1, { rotation: -5 });
            tl.to(fElement, 0.1, { rotation: 0 });
            tl.addLabel("break", "+=0.3");
            tl.to(left, 0.5, { rotation: -45, x: -70, y: 70 }, "break");
            tl.to(right, 0.5, { rotation: 45, x: 70, y: 70 }, "break");

            tl.set(message, { opacity: 1 });
            tl.from(lottoSpan, 1, { x: '110%' }, "break");
            tl.from(messageSpan, 1, { x: '110%' }, "break");

        }

    };


    return (
        <div>
            <p>Click to open</p>
            <img data-uk-toggle="target: #fortune-modal" src="https://media0.giphy.com/media/MVCBKCmj6gWcWzeKWh/source.gif" onClick={handleClick}></img>
            <div id="fortune-modal" data-uk-modal>
                <div className="fortune-modal uk-modal-dialog uk-modal-body">

                    {/* <div className="fortune-wrapper"> */}
                    <div className="fortune" ref={e => { fElement = e }}>
                        <div className="fortune-left" ref={e => { left = e }}></div>
                        <div className="fortune-right" ref={e => { right = e }}></div>
                        <div className="fortune-message" ref={e => { message = e }}>

                            <p className="messageSpan" ref={e => { messageSpan = e }}>{fortune}</p>
                            <p className="lottoSpan" ref={e => { lottoSpan = e }}>
                                {lotto.map((l, i) => {
                                    if (i === 0) {
                                        return (
                                            <span>
                                                {l}
                                            </span>
                                        )
                                    }
                                    else {
                                        return (
                                            <span>
                                                ,{l}
                                            </span>
                                        )
                                    }

                                })}
                            </p>

                            {/* </div> */}
                        </div>

                    </div>

                </div>
            </div>
        </div>




    )
}