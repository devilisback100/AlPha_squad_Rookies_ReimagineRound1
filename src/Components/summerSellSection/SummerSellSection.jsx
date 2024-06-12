import React, { useState, useEffect } from 'react'
import './SummerSellSection.css'
import { TbBeach } from "react-icons/tb";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function SummerSellSection() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
})
    useEffect(() => {
        
        var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

        var x = setInterval(function () {

            var now = new Date().getTime();

            var distance = countDownDate - now;

            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("demo").innerHTML = "Ending in " + hours + " Hours : "
                + minutes + " Mins  : " + seconds + " Sec";


            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
        return () => clearInterval(x); // Clear interval on component unmount
    }, []);



    useGSAP(() => {
        var path = `M 10 100 Q 100 100 ${windowWidth * 0.8} 100`;
        var final_path = `M 10 100 Q 100 100 ${windowWidth * 0.8} 100`;
        var string = document.querySelector(".Svg_animation")
        string.addEventListener("mousemove", function (e) {
            path = `M 10 100 Q ${e.x} ${e.y} ${windowWidth * 0.8} 100`;
   

            gsap.to(".Svg_line path", {
                duration: 1,
                attr: { d: path },
                ease: "power3.out"
            }
            )
        })
        string.addEventListener("mouseleave", function (e) {

            gsap.to(".Svg_line path", {
                attr: { d: final_path },
                duration: 1.5,
                ease: "elastic.out(1,0.2)"
            }
            )
        })
    })
    return (
        <>
            <div className='MainSummerSection' >
                <div className='Title_Text' style={{ top: "-15px", left: "10px" }}>Summer Sale</div>
                <div className='SummerSellSection_main'>
                    <div className="SummerSellSection_part_1">
                        <span>Summer</span>
                        <span>Full of savings</span>
                    </div>
                    <div className="SummerSellSection_part_2">
                        <p id="demo"></p>
                    </div>
                    <div className="SummerSellSection_part_3">
                        <TbBeach />
                    </div>
                </div>

                <div className='Svg_animation'>
                    <svg className="Svg_line" height="150px" width={windowWidth * 0.85} xmlns="http://www.w3.org/2000/svg">
                        <path d={`M 10 100 Q 100 100 ${windowWidth * 0.8} 100`} stroke='var(--color-3)' fill="transparent" />
                    </svg>

                </div>
            </div>
        </>
    );
}


export default SummerSellSection
