import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Bppe from "../images/bureau_logo-af515773813f672efa79c044f76119ba.png";
import Who from "../images/reader-7061e74965a01450a6ecc4f085e008af.png";
import Guy from "../images/smiling_guy-bc861dcf98f91a14d2484b7ccdd5dfc3.png";
import Hire from "../images/preparebg-8d87f66a66922c77e694bc6774bf9c31.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const tl1Ref = useRef();
  const webRef = useRef();

  useEffect(() => {
    window.addEventListener("load", function () {
      setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
      }, 5000);
    });
    // window.data = window.data;
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".header_button", {
        scrollTrigger: {
          trigger: ".hero_learn",
          invalidateOnRefresh: false,
          onEnter: () =>
            gsap.to(".header_button", {
              backgroundColor: "rgb(106, 111, 245)",
              duration: 1,
              minWidth: "12.5rem",
            }),
          onLeaveBack: () =>
            gsap.to(".header_button", {
              backgroundColor: "#000",
              duration: 1,
              minWidth: "9.5rem",
            }),
          once: false,
          // markers: true,
          start: "top center",
        },
      });

      gsap.to(".features_img img", {
        scrollTrigger: {
          trigger: ".hire_image-inner",
          start: "bottom center",
          // markers: true,
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
      });

      gsap.to(".footer_inner > div", {
        scrollTrigger: {
          trigger: ".collab_button",
          start: "bottom center",
          // markers: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
      });
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".features",
          start: "bottom center",
          // markers: true,
          invalidateOnRefresh: true,
        },
      });

      tl1.to(".collab_flex", {
        opacity: 1,
        duration: 0.1,
      });

      tl1.to(".collab_img", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.1,
      });
      tl1.to(
        ".collab_img",
        {
          x: 0,
          duration: 0.1,
        },
        "+=0.1"
      );
      tl1.to(".collab_item", {
        opacity: 1,
        duration: 0.1,
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".school_box1",
          // markers: true,
          start: "top center",
          invalidateOnRefresh: true,
        },
        defaults: {
          // ease: "elastic",
          duration: 0.5,
        },
      });

      tl2.to(".box1_first", {
        // marginLeft: 0,
        x: 0,
      });
      tl2.to(
        ".box1_second",
        {
          // marginRight: 0,
          x: 0,
        },
        ""
      );
      tl2.to(".box1_first", {
        "--beforeOpacity": 1,
      });
      tl2.to(
        ".box1_second",
        {
          "--beforeOpacity": 1,
        },
        "-=0.5"
      );

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".school_box1",
          // markers: true,
          start: "bottom center",
          invalidateOnRefresh: true,
        },
        defaults: {
          duration: 0.5,
        },
      });

      tl3.to(".box1_center", {
        marginTop: "60px",
        y: 0,
      });
      tl3.to(".box1_center", {
        "--beforeOpacity": 1,
      });

      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".hire",
          invalidateOnRefresh: true,
          // markers: true,
          start: "top center",
        },
      });

      tl4.to(".hire_box", {
        left: "52%",
        duration: 0.1,
        opacity: 1,
        ease: "none",
      });

      tl4.to(
        ".hire_image-inner",
        {
          marginLeft: 0,
          duration: 0.1,
          opacity: 1,
          ease: "none",
        },
        "-=0.1"
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // cursor.style.left = `${posX}px`
      // cursor.style.top = `${posY}px`

      cursor.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 250, fill: "forwards" }
      );
    });
  }, []);

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [schoolsActive, setSchoolsActive] = useState(false);
  const { hash } = useLocation();
  const navigate = useNavigate();
  const wordArray = [
    "Product Marketing",
    "Product Management",
    "Software Engineering",
    "Data Analysis",
    "Data Science",
  ]; // Array of words to cycle through

  const [displayWord, setDisplayWord] = useState("");
  const [active, setActive] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [redSkittle, setRedSkittle] = useState("skittles1_red");
  const [purpSkittle, setPurpSkittle] = useState("skittles1_purp");

  useEffect(() => {
    setTimeout(() => {
      if (redSkittle === "skittles1_red") {
        setRedSkittle("skittles1_purp");
      }
      if (redSkittle === "skittles1_purp") {
        setRedSkittle("skittles1_red");
      }

      if (purpSkittle === "skittles1_purp") {
        setPurpSkittle("skittles1_red");
      }
      if (purpSkittle === "skittles1_red") {
        setPurpSkittle("skittles1_purp");
      }
    }, 1000);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayWord === wordArray[wordIndex]) {
        clearTimeout(timer); // Clear the current timer

        setTimeout(() => {
          setDisplayWord("");

          if (wordIndex + 1 >= wordArray?.length) {
            setWordIndex(0);
          } else {
            setWordIndex(wordIndex + 1);
          }

          setLetterIndex(0);
        }, 3000); // Wait for 5000 milliseconds (5 seconds) before moving to the next word
      } else {
        let wordToBeUsed = wordArray[wordIndex];
        const currentLetter = wordToBeUsed[letterIndex];
        setDisplayWord(displayWord + currentLetter);

        setLetterIndex(letterIndex + 1);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [wordIndex, letterIndex, wordArray, displayWord]);

  useEffect(() => {
    const cardId = hash.substring(1); // Remove the "#" symbol from the hash
    const cardElement = document.getElementById(cardId);
    if (cardElement) {
      console.log("cardElement", cardElement);
      cardElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className="App">
      <div className="loader">
        <svg
          className="hero_grad1"
          fill="none"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 30.504 30.504"
          xmlSpace="preserve"
          stroke="rgb(106, 111, 245)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                <path d="M18.502,22.654c-0.814-0.546-7.785-5.294-9.664-8.617l-0.103-0.183l-0.212-0.008c-1.618-0.066-2.876,0.87-3.415,1.354 c-0.22-0.223-0.444-0.452-0.673-0.688l-0.273-0.28l-0.271,0.282c-1.061,1.101-1.53,2.125-1.396,3.048 c0.109,0.749,0.621,1.401,1.481,1.888c0.155,0.088,1.95,1.309,3.901,2.867c-0.337,0.344-1.562,1.137-2.006,1.453 c-0.499,0.354-2.578,2.241-2.578,2.241l1.343,0.317l0.465,0.908c0,0,0.638-1.562,1.338-2.333s1.923-1.387,1.923-1.387 s-0.661,0.944-1.135,1.86c-0.473,0.916-0.594,2.504-0.594,2.504l0.821-0.26l0.566,1.234c0,0,0.151-1.744,0.499-2.88 c0.281-0.919,0.97-1.79,1.226-2.095c2.474,2.178,5.059,4.808,5.576,5.339c0.312,0.358,0.716,0.622,1.242,0.739 c0.188,0.041,0.379,0.061,0.565,0.061c1.07,0,2.086-0.667,2.74-1.835c0.764-1.359,0.979-3.449-0.347-4.822 C19.158,22.982,18.814,22.767,18.502,22.654z M8.012,21.457c-1.79-1.408-3.423-2.529-3.661-2.664 c-0.659-0.373-1.031-0.824-1.106-1.34c-0.088-0.606,0.224-1.32,0.928-2.126c1.751,1.792,3.248,3.214,4.519,4.345 C8.117,20.605,8.016,21.106,8.012,21.457z M9.124,19.041c-1.009-0.897-2.164-1.984-3.48-3.302c0.447-0.391,1.43-1.11,2.647-1.139 c0.636,1.043,1.69,2.188,2.878,3.296C10.551,17.959,9.779,18.229,9.124,19.041z M9.893,23.004 c0.064-0.484,0.214-1.151,0.552-1.838c2.226,1.813,3.49,2.476,4.043,2.709c-0.086,0.638-0.231,2.108,0.021,3.452 C13.314,26.145,11.557,24.447,9.893,23.004z M19.212,27.816c-0.471,0.839-1.37,1.65-2.483,1.404 c-1.911-0.422-1.692-4.135-1.446-5.53l0.062-0.353l-0.351-0.082c-0.015-0.004-1.204-0.338-4.142-2.737 c0.552-0.642,1.436-0.929,2.108-1.056c1.659,1.377,3.311,2.567,4.298,3.256c-0.03,0.015-0.058,0.029-0.083,0.045 c-1.138,0.646-1.613,2.515-1.366,3.41c0.29,1.053,0.993,1.729,1.733,1.715c0.316-0.012,1.086-0.19,1.367-1.596l0.044-0.219 l-0.169-0.143c-1.068-0.909-1.646-1.446-1.922-1.715c0.176-0.342,0.408-0.639,0.687-0.797c0.423-0.238,0.904-0.082,1.433,0.467 C20.037,24.983,19.841,26.693,19.212,27.816z M18.116,26.358c-0.132,0.479-0.353,0.767-0.604,0.774c-0.003,0-0.007,0-0.012,0 c-0.314,0-0.755-0.401-0.964-1.159c-0.067-0.242-0.048-0.603,0.042-0.979C16.891,25.287,17.38,25.729,18.116,26.358z"></path>{" "}
                <path d="M5.959,8.611l-1.196,3.831c0,0,4.888,0.475,8.958,1.744c4.072,1.272,8.361,3.663,8.361,3.663l1.216-3.899 c0,0-3.653-3.682-8.004-5.04C10.945,7.553,5.959,8.611,5.959,8.611z"></path>{" "}
                <path d="M30.504,14.008l-1.423-1.493l0.14-0.453c0,0,1.254-2.306-1.904-1.88c-0.164,0.032-0.262,0.085-0.317,0.151l-9.397-9.851 L0,4.367l4.841,4.324l0.26-0.833c0,0,5.561-1.179,10.41,0.334c4.85,1.515,8.924,5.62,8.924,5.62l-0.453,1.453l3.636-0.702 c-0.606,1.938-1.302,4.171-1.519,4.862l-1.035-0.324l-0.752,2.406l1.676-0.522l1.232,1.431l0.75-2.406l-1.119-0.351l1.644-5.266 L30.504,14.008z M28.42,13.469c-0.125,0.402-0.553,0.626-0.955,0.501c-0.402-0.126-0.627-0.553-0.502-0.955 c0.127-0.402,0.555-0.626,0.956-0.501S28.545,13.068,28.42,13.469z M27.71,11.077c0.397-0.118,1.071-0.24,0.892,0.334 c-0.018,0.056-0.067,0.218-0.143,0.453L27.71,11.077z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        {/* <svg className="hero_grad2" fill="none" viewBox="-5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">

<path class="twining" d="M21.080 12.84l-8.92-3.24c-0.4-0.16-0.88-0.2-1.16-0.2-0.32 0-0.76 0.040-1.16 0.2l-8.92 3.24c-0.84 0.32-0.92 0.88-0.92 1.12s0.080 0.8 0.92 1.12l0.4 0.12v3.32c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-2.72l1.56 0.56v3.76c0 1.64 3.84 2.44 6.44 2.44s6.44-0.76 6.44-2.44v-3.72l3.64-1.32c0.84-0.28 0.92-0.88 0.92-1.12s-0.080-0.8-0.92-1.12zM15.8 19.92c-0.48 0.32-2.28 0.96-4.76 0.96s-4.32-0.64-4.76-0.96v-2.92l3.6 1.32c0.4 0.16 0.88 0.2 1.16 0.2s0.76-0.040 1.16-0.2l3.6-1.32v2.92zM11.6 16.72c-0.28 0.12-0.88 0.12-1.16 0l-7.64-2.76 7.6-2.76c0.28-0.12 0.88-0.12 1.16 0l7.64 2.76-7.6 2.76z" stroke-width="0.5" stroke="rgb(106, 111, 245)"></path>

</svg>
<svg className="hero_grad3" fill="none" viewBox="-5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">

<path class="twining" d="M21.080 12.84l-8.92-3.24c-0.4-0.16-0.88-0.2-1.16-0.2-0.32 0-0.76 0.040-1.16 0.2l-8.92 3.24c-0.84 0.32-0.92 0.88-0.92 1.12s0.080 0.8 0.92 1.12l0.4 0.12v3.32c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-2.72l1.56 0.56v3.76c0 1.64 3.84 2.44 6.44 2.44s6.44-0.76 6.44-2.44v-3.72l3.64-1.32c0.84-0.28 0.92-0.88 0.92-1.12s-0.080-0.8-0.92-1.12zM15.8 19.92c-0.48 0.32-2.28 0.96-4.76 0.96s-4.32-0.64-4.76-0.96v-2.92l3.6 1.32c0.4 0.16 0.88 0.2 1.16 0.2s0.76-0.040 1.16-0.2l3.6-1.32v2.92zM11.6 16.72c-0.28 0.12-0.88 0.12-1.16 0l-7.64-2.76 7.6-2.76c0.28-0.12 0.88-0.12 1.16 0l7.64 2.76-7.6 2.76z" stroke-width="0.5" stroke="rgb(106, 111, 245)"></path>

</svg>
<svg className="hero_grad4" fill="none" viewBox="-5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">

<path class="twining" d="M21.080 12.84l-8.92-3.24c-0.4-0.16-0.88-0.2-1.16-0.2-0.32 0-0.76 0.040-1.16 0.2l-8.92 3.24c-0.84 0.32-0.92 0.88-0.92 1.12s0.080 0.8 0.92 1.12l0.4 0.12v3.32c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-2.72l1.56 0.56v3.76c0 1.64 3.84 2.44 6.44 2.44s6.44-0.76 6.44-2.44v-3.72l3.64-1.32c0.84-0.28 0.92-0.88 0.92-1.12s-0.080-0.8-0.92-1.12zM15.8 19.92c-0.48 0.32-2.28 0.96-4.76 0.96s-4.32-0.64-4.76-0.96v-2.92l3.6 1.32c0.4 0.16 0.88 0.2 1.16 0.2s0.76-0.040 1.16-0.2l3.6-1.32v2.92zM11.6 16.72c-0.28 0.12-0.88 0.12-1.16 0l-7.64-2.76 7.6-2.76c0.28-0.12 0.88-0.12 1.16 0l7.64 2.76-7.6 2.76z" stroke-width="0.5" stroke="rgb(106, 111, 245)"></path>

</svg> */}
        <div className="loader_title">
          Alt__
          <br />
          School
        </div>
        {/* <div className="loader_line"></div> */}
        <div className="loader_count">100%__</div>
      </div>
      <div className="web" ref={webRef}>
        <header>
          <div className="header_container">
            <div>
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8355 21.2065H12.4222L7.61035 36.2221H10.5104L11.8422 32.0976H18.5015L19.8978 36.2221H22.7978L17.8355 21.2065ZM12.6155 29.7132L15.1289 21.9584L17.7066 29.7132H12.6155ZM26.7665 36.2436V21.2065H24.1028V36.2436H26.7665ZM32.6384 25.1591V21.2065H29.9747V25.1591H28.3636V27.2428H28.6214C28.6214 27.2428 29.9747 27.2428 29.9747 28.7251C29.9747 29.3695 29.9747 33.5154 29.9747 33.5154C29.9747 35.0406 31.1992 36.2436 32.7029 36.2436H34.5288V33.8806C34.5288 33.8806 33.9058 33.8806 33.4762 33.8806C33.0251 33.8806 32.6384 33.4939 32.6384 33.0428V28.9184C32.6384 27.3288 29.2658 27.2428 28.7073 27.2428H34.5288V25.1591H32.6384ZM16.0741 47.945C16.0741 47.945 13.1955 47.2791 13.1096 47.2576C12.1429 46.9999 11.3266 46.5273 11.3266 45.5391C11.3266 44.465 12.637 43.5843 14.2911 43.5843C16.3103 43.5843 17.4489 44.8302 17.4489 46.0547H20.2629C20.2629 43.4339 18.2222 41.2213 14.2911 41.2213C10.9615 41.2213 8.51257 43.0043 8.51257 45.5606C8.51257 48.2028 10.1881 49.4702 12.637 50.0287C12.637 50.0287 15.537 50.6947 15.6015 50.7162C16.7185 50.9954 17.6422 51.5539 17.6422 52.6495C17.6422 54.0028 15.9666 54.8621 14.2052 54.7117C11.8207 54.5184 10.94 52.9502 10.94 51.8332H8.14739C8.14739 54.2821 10.1881 56.9887 14.2481 57.0961C17.2985 57.1606 20.4563 55.485 20.4563 52.6495C20.4563 50.0287 18.6518 48.568 16.0741 47.945ZM27.3013 54.5828C25.6043 54.5828 24.7021 52.9717 24.7021 51.1243C24.7021 49.2554 25.8191 47.6658 27.2798 47.6658C28.4398 47.6658 29.3635 48.525 29.6858 49.7065H32.5643C32.0917 46.9354 29.8791 45.3028 27.2583 45.3028C24.3154 45.3028 21.7591 47.8806 21.9095 51.468C22.0384 54.8191 24.4443 56.9243 27.3228 56.9243C30.008 56.9243 32.0058 55.1413 32.5213 52.7139H29.5569C29.3206 53.6806 28.4613 54.5828 27.3013 54.5828ZM37.0457 50.1576C37.0457 50.1791 37.0457 50.2006 37.0457 50.2221C37.0457 50.2006 37.0457 50.1791 37.0457 50.1576ZM40.0961 45.3458C38.4635 45.4747 37.0672 47.1717 37.0457 50.1576C37.0672 48.6754 37.7331 47.6013 39.2583 47.6013C40.9338 47.6013 41.4709 48.8473 41.4709 50.2221V56.688H44.156V49.3199C44.156 46.7421 42.0294 45.1954 40.0961 45.3458ZM34.382 41.651V56.688H37.0457V41.651H34.382ZM51.386 45.3028C48.529 45.3028 45.9083 47.4295 45.9083 51.1243C45.9083 54.8191 48.486 56.9028 51.386 56.9243C54.3075 56.9028 56.8853 54.7976 56.8853 51.1243C56.8853 47.4295 54.2431 45.3028 51.386 45.3028ZM51.386 54.5613C49.9683 54.5613 48.5935 53.4443 48.5935 51.1243C48.5935 48.9332 49.9468 47.6873 51.386 47.6658C52.8468 47.6873 54.2001 48.9547 54.2001 51.1243C54.2001 53.4443 52.8253 54.5613 51.386 54.5613ZM63.7631 45.3028C60.906 45.3028 58.2853 47.4295 58.2853 51.1243C58.2853 54.8191 60.8631 56.9028 63.7631 56.9243C66.6846 56.9028 69.2623 54.7976 69.2623 51.1243C69.2623 47.4295 66.6201 45.3028 63.7631 45.3028ZM63.7631 54.5613C62.3453 54.5613 60.9705 53.4443 60.9705 51.1243C60.9705 48.9332 62.3238 47.6873 63.7631 47.6658C65.2238 47.6873 66.5772 48.9547 66.5772 51.1243C66.5772 53.4443 65.2023 54.5613 63.7631 54.5613ZM73.8201 56.688V41.651H71.1564V56.688H73.8201Z"
                  fill="black"
                />
                <path
                  d="M73.8517 32.9629H37.4072V36.2221H73.8517V32.9629Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="header_inner desktop">
              <div className="header_inner-title">Home</div>
              <div
                className="header_inner-group"
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => {
                  setVisible(false);
                }}
              >
                <div>Schools</div>
                {/* <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01LjAwMDA4IDYuMDAwMDJMMC43NTcwOCAxLjc1NzAyTDIuMTcyMDggMC4zNDMwMThMNS4wMDAwOCAzLjE3MjAyTDcuODI4MDggMC4zNDMwMThMOS4yNDMwOCAxLjc1NzAyTDUuMDAwMDggNi4wMDAwMloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="
                alt="angle-down"
                className="style__AngleDownImg-sc-1f2yapa-14 ldDnUz"
              /> */}
              </div>
              <div className="header_inner-title">Tuition</div>
              <div className="header_inner-title">FAQS</div>
              <div className="header_inner-title">Our Story</div>
              <div className="header_inner-title">Collborate with us</div>
              <div className="header_inner-title">Careers</div>
            </div>
            <div className="desktop">
              <button className="header_button">Apply Now</button>
              <button className="button_left header_button">Login</button>
              <div className="cursor"></div>
            </div>
            <div
              className={
                visible
                  ? "header_options-container"
                  : "header_options-container none"
              }
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => {
                setVisible(false);
              }}
            >
              <div className={visible ? "header_options" : "header_options"}>
                <div>School of Engineering</div>
                <div>School of Engineering</div>
                <div>School of Engineering</div>
              </div>
            </div>
            <div
              className="header_hamburger mobile"
              onClick={() => (active ? setActive(false) : setActive(true))}
            >
              <div
                className={
                  active ? "hamburger_line_one-active" : "hamburger_line_one"
                }
              ></div>
              <div
                className={
                  active ? "hamburger_line_two-active" : "hamburger_line_two"
                }
              ></div>
              <div
                className={
                  active
                    ? "hamburger_line_three-active"
                    : "hamburger_line_three"
                }
              ></div>
            </div>
          </div>
          <div className="banner">
            Applications to all our schools are now open, apply today.
          </div>
          <div
            className={
              active
                ? "header_mobile mobile header_mobile-active"
                : "header_mobile mobile"
            }
          >
            <div className="header_mobile-title-container">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8355 21.2065H12.4222L7.61035 36.2221H10.5104L11.8422 32.0976H18.5015L19.8978 36.2221H22.7978L17.8355 21.2065ZM12.6155 29.7132L15.1289 21.9584L17.7066 29.7132H12.6155ZM26.7665 36.2436V21.2065H24.1028V36.2436H26.7665ZM32.6384 25.1591V21.2065H29.9747V25.1591H28.3636V27.2428H28.6214C28.6214 27.2428 29.9747 27.2428 29.9747 28.7251C29.9747 29.3695 29.9747 33.5154 29.9747 33.5154C29.9747 35.0406 31.1992 36.2436 32.7029 36.2436H34.5288V33.8806C34.5288 33.8806 33.9058 33.8806 33.4762 33.8806C33.0251 33.8806 32.6384 33.4939 32.6384 33.0428V28.9184C32.6384 27.3288 29.2658 27.2428 28.7073 27.2428H34.5288V25.1591H32.6384ZM16.0741 47.945C16.0741 47.945 13.1955 47.2791 13.1096 47.2576C12.1429 46.9999 11.3266 46.5273 11.3266 45.5391C11.3266 44.465 12.637 43.5843 14.2911 43.5843C16.3103 43.5843 17.4489 44.8302 17.4489 46.0547H20.2629C20.2629 43.4339 18.2222 41.2213 14.2911 41.2213C10.9615 41.2213 8.51257 43.0043 8.51257 45.5606C8.51257 48.2028 10.1881 49.4702 12.637 50.0287C12.637 50.0287 15.537 50.6947 15.6015 50.7162C16.7185 50.9954 17.6422 51.5539 17.6422 52.6495C17.6422 54.0028 15.9666 54.8621 14.2052 54.7117C11.8207 54.5184 10.94 52.9502 10.94 51.8332H8.14739C8.14739 54.2821 10.1881 56.9887 14.2481 57.0961C17.2985 57.1606 20.4563 55.485 20.4563 52.6495C20.4563 50.0287 18.6518 48.568 16.0741 47.945ZM27.3013 54.5828C25.6043 54.5828 24.7021 52.9717 24.7021 51.1243C24.7021 49.2554 25.8191 47.6658 27.2798 47.6658C28.4398 47.6658 29.3635 48.525 29.6858 49.7065H32.5643C32.0917 46.9354 29.8791 45.3028 27.2583 45.3028C24.3154 45.3028 21.7591 47.8806 21.9095 51.468C22.0384 54.8191 24.4443 56.9243 27.3228 56.9243C30.008 56.9243 32.0058 55.1413 32.5213 52.7139H29.5569C29.3206 53.6806 28.4613 54.5828 27.3013 54.5828ZM37.0457 50.1576C37.0457 50.1791 37.0457 50.2006 37.0457 50.2221C37.0457 50.2006 37.0457 50.1791 37.0457 50.1576ZM40.0961 45.3458C38.4635 45.4747 37.0672 47.1717 37.0457 50.1576C37.0672 48.6754 37.7331 47.6013 39.2583 47.6013C40.9338 47.6013 41.4709 48.8473 41.4709 50.2221V56.688H44.156V49.3199C44.156 46.7421 42.0294 45.1954 40.0961 45.3458ZM34.382 41.651V56.688H37.0457V41.651H34.382ZM51.386 45.3028C48.529 45.3028 45.9083 47.4295 45.9083 51.1243C45.9083 54.8191 48.486 56.9028 51.386 56.9243C54.3075 56.9028 56.8853 54.7976 56.8853 51.1243C56.8853 47.4295 54.2431 45.3028 51.386 45.3028ZM51.386 54.5613C49.9683 54.5613 48.5935 53.4443 48.5935 51.1243C48.5935 48.9332 49.9468 47.6873 51.386 47.6658C52.8468 47.6873 54.2001 48.9547 54.2001 51.1243C54.2001 53.4443 52.8253 54.5613 51.386 54.5613ZM63.7631 45.3028C60.906 45.3028 58.2853 47.4295 58.2853 51.1243C58.2853 54.8191 60.8631 56.9028 63.7631 56.9243C66.6846 56.9028 69.2623 54.7976 69.2623 51.1243C69.2623 47.4295 66.6201 45.3028 63.7631 45.3028ZM63.7631 54.5613C62.3453 54.5613 60.9705 53.4443 60.9705 51.1243C60.9705 48.9332 62.3238 47.6873 63.7631 47.6658C65.2238 47.6873 66.5772 48.9547 66.5772 51.1243C66.5772 53.4443 65.2023 54.5613 63.7631 54.5613ZM73.8201 56.688V41.651H71.1564V56.688H73.8201Z"
                  fill="#ffffff"
                />
                <path
                  d="M73.8517 32.9629H37.4072V36.2221H73.8517V32.9629Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div className="header_mobile-menu">
              <div>Home</div>
              <div className="this_nigga">
                <div
                  onClick={() =>
                    schoolsActive
                      ? setSchoolsActive(false)
                      : setSchoolsActive(true)
                  }
                >
                  Schools
                  {/* <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00Ljk5OTg0IDYuMDAwMDJMMC43NTY4MzYgMS43NTcwMkwyLjE3MTg0IDAuMzQzMDE4TDQuOTk5ODQgMy4xNzIwMkw3LjgyNzg0IDAuMzQzMDE4TDkuMjQyODQgMS43NTcwMkw0Ljk5OTg0IDYuMDAwMDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="angle-down" class="style__AngleDownImg-sc-1f2yapa-14 ldDnUz" /> */}
                </div>
                {/* <div className={schoolsActive ? "header_mobile-schools header_mobile-schools-active" : "header_mobile-schools"}>
                <div>School of Engineering</div>
                <div>School of Product</div>
                <div>School of Data</div>
              </div> */}
              </div>
              <div>Tuition</div>
              <div>FAQS</div>
              <div>Our Story</div>
              <div>Collaborate with us</div>
              <div>Careers</div>
              <button className="header_mobile-button">Apply Now</button>
              <button className="header_mobile-button">Login</button>
            </div>
          </div>
        </header>
        <main>
          <div id="hero" className="hero">
            <div className="hero_title-container">
              <div className="hero_title">
                Kickstart your tech career in <span>{displayWord}</span>{" "}
                <span className="blinking">|</span>
              </div>
            </div>
            <div className="hero_subtitle desktop-mini">
              Learn the in-demand skills required to take you from beginner
              <br />
              to industry ready in 12 months. No degree
              <br />
              or prior tech experience required.
            </div>
            <div className="hero_subtitle mobile-mini">
              Learn the in-demand skills required to take you from beginner to
              industry ready in 12 months. No degree or prior tech experience
              required.
            </div>
            <button className="apply_button">View Schools</button>
            <div className="hero_learn">
              Learn in-demand tech skills for just $1 a day
            </div>
          </div>
          <div className="partnership">
            <div>In Partnership with</div>
            <svg
              width="110"
              height="44"
              viewBox="0 0 110 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="110" height="44" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1785_9086"
                    transform="translate(0 -0.0125) scale(0.001 0.0025)"
                  />
                </pattern>
                <image
                  id="image0_1785_9086"
                  width="1000"
                  height="410"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAGaCAYAAACc1mkHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGQTdGMTE3NDA3MjA2ODExQjM0QkRCMTI3QTg3OTlBMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQjg3OEJGRTM4M0YxMUUzQTZEMUI0MDIyQjJEMDFGNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQjg3OEJGRDM4M0YxMUUzQTZEMUI0MDIyQjJEMDFGNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDY1NjNCMTEzNDIwNjgxMTgwODNGMTQ4QTZCNTMyNkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkE3RjExNzQwNzIwNjgxMUIzNEJEQjEyN0E4Nzk5QTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4OgPucAAAu90lEQVR42uzdCZgdVZk38IohgUCAlqZlh7DvO8qmgiCgILK4MKIo4oLjOA6ozKjo5+7ngqLgjDrgKCiyysinA4gMBMK+yg6yhR3sdGjCkkAI+d7jLZyekKW7c2931anf73nepxoe6K56z7l17//WNmbu3LkFAAAAMLrGCOgAAAAgoAMAAAACOgAAAAjoAAAAgIAOAAAAAjoAAAAgoAMAAICADgAAAAjoAAAAIKADAAAAAjoAAAAI6AAAAICADgAAAAI6AAAAIKADAACAgA4AAAAI6AAAACCgAwAAAAI6AAAACOgAAACAgA4AAAACOgAAACCgAwAAgIAOAAAACOgAAAAgoAMAAAACOgAAAAjoAAAAgIAOAAAAAjoAAAAgoAMAAICADgAAAAjoAAAAIKADAAAAAjoAAAAI6AAAAICADgAAAAI6AAAAIKADAACAgA4AAAAI6AAAACCgAwAAAAI6AAAACOgAAACAgA4AAAACOgAAACCgAwAAgIAOAAAACOgAAAAgoAMAAAACOgAAAAjoAAAAgIAOAAAAAjoAAAAgoAMAAICADgAAAAjoAAAAIKADAAAAAjoAAAAI6AAAAICADgAAAAI6AAAAIKADAACAgK4LAAAAIKADAAAAAjoAAAAI6AAAAICADgAAAAI6AAAAIKADAACAgA4AAAAI6AAAACCgAwAAAAI6AAAACOgAAACAgA4AAAACOgAAACCgAwAAgIAOAAAACOgAAAAgoAMAAAACOgAAAAjoAAAAgIAOAAAAAjoAAAAgoA+3IWPGaMJi6OnqHheLlaNWL2vV9K+juqNWGFBLRS0TtVzUklFLL+JXz456bsA/PxM1q1w+Xf78bPnzjKjpUX1R08qfX/7nh3v7+2YaKXJg/w0AIKAL6KQgvlYstojaIGr9staLWiO1seKr3x/1WNRDA5b3Rt1XLh+NEO+FgYAOAICALqBXLoyvHYsdo7aP2rKsrow3eVYZ1O+Iui3qlnJ5TwT3F80IBHQAAAR0AX2kAvlGsdgr6vVRO0etYmb8LbjfFHV91NXl8o4I7S9pDQI6AAACuoDejkA+MRZvKUN5qjXMhEF7MuqyqEujLom6IQL7HG1BQAcAQEAX0AcbypePxd5R7yyXSxn9tkg3o/tj1PlR50ZY/4uWIKADACCgC+jzhvJXxWKPqMOi9o8ab8Q7Kp36fkXUmVG/ibD+iJYgoAMAIKA3OKBHME+nrH8k6tDC6eujlqWiLoz6ZQrsEdZnaQkCOgAAAnpDAnoE8+1icWTUQVFjjW5lpNPgfx51XAT1B7UDKrG/fHMs9otatgar2xt1Wuw/rjdyfx27SUXrC+hJNVjd54vW/UpOd78SMnwtjovFe6N2KupxlubDUSfHa/HPRm90yaMCevYBPXaQ6YZvn43axYhWWvpwdkrU1+LN4R7tgFHbZ349FkfXbLXTJTSHxb7jpIaPXQoCf4iaWLNV/33Ufp4CQmbhPN1/Z7earXo6o/Ht8Vr8o1EU0AV0Ab0TO8ddU9grWo9Ho15B/fioL8UbxAztgBHdb24Si9tquvrPRK0S+41nGjx+N8di85qu/sExdqd6FZLJa/HwWPykpqt/f9S68XoUigT0SniVFmSxU9w26oL48WLhvJbS5QdHRN0a47iOdsCIqvM+Mx013rLB733L1jicJ2/w8iMjb6zxuq8dtaohRECnHR9OVohK31ZeW7Tuzk69pRv4HacNMKKWrvn6j2vw2I0196AylrEvhfZYQgtqGczTFysfjfpm1Kt1JCuvz2ieplOHt4laP2qDonXzrXTEb8mop4vW6bkPRd0VdXvU1b39fTNNAQAABHTqEnpS2El3AN9ZN7L0QI3nZvr2Od2g8O+ido9aaYi/4vn4HVfF8pyoUyOsP246AAAgoFPF8JPuXvfxqO8UTovL2ZQazs0VY/HpqA9HrbgYvyodWd+lrO/G7z0vlt+IoH6VaQEAQBO4Br0eAWiVWKTHP/xIOM/eZTWalxOj0hdGU4vWY/1WbOOvT9eWvi3qyvgbk6O2MjUAABDQGe0QlO6KeWPROmWY/F1ak3l5YCzuiDqq6PyNYdIR9evib/4wahlTBAAAAZ2RDkBjoj4VP15UDP1aXurp/t7+vkcrPi+XKp8c8Juo1UfwT6cj6p+Muib+/qamCgAAAjojFYLSaeynRX2vqP9jZBi8KRWflz2xuDzq8FFcjU3KkH6A6QIAgIBOp0NQOlp+cdS7dUNAr9C8XCcWVxatx6aNtvQF1lmxTh82ZQAAENDpVAhaLxZXRL1ONxrpsorOy9WK1pdG61Zs33VCrNuhpg0AAAI67Q5Bmxet04fX0Y1G6u3t77uzgvNy+VicH7VmRft2YqzjPqYPAAACOu0KQdsXrSOUr9GNxppSwXk5Jha/iNqswn1L92j4dazruqYQAAACOosbgraLxQVR3bohoFdMumv6/jXo3XJRZ8RraZxpBACAgM5ww3k6rf28MmDQbJdVbG5OisX/rVH/0s3rjjKNAAAQ0BlOAFo7Fn+IWlE3Gu/ZqBsrtk7HRU2oWR+/EK+rtUwnAAAEdIYSzlcsw/kqukG4vLe/b06F5ucbY7FvDfuYvlD4iukEAICAzmDDz/hY/DZqfd2gVLXrzz9f416+rzw9HwAABHQW6cSonbWBASpz/XmE2y1isVeNe5nu6n6kKQUAgIDOosLPEbE4RCcYYHbUNRVan/dn0NOD3dEdAAABnYWF83Rd73d1gnlc39vf91xF5mjaH7w3g56mezzsZWoBACCgM7/gkwLDqVFL6AbzuLRC65IeVbZyJn3d29QCAEBAZ95wPiYWJ0etqhvMR5VuELdrRn3dzdQCAEBAZ15/H/VWbWA+5kZdUaH1yenmhRv2dHWvYIoBAFAnTrnuoAgIG8biGJ1gAW7r7e+bXqH12Tiz/m5SVOgO+QP2C+l+FOkU/DpcTvBS1KNR58ZcvcJLFgBAQK9rOE9nJ/wsaoJusABTKjRf075g3cz6u0HVAnr0edtYXFzU7+ylz8W6bxUh/RYvWwCAznGKe+d8vPC8cxauSjeI6y7y+8JulQqu04413e++yv4MAEBAr6Weru50Q7hv6gSLUKWjuxMz7G8Vt6nOX4Is5SULACCg19H3o5bVBhZiam9/38MVWp8c56vLSwAAENCbrKere9dYHKQTLMKUiq3PrAx7/KJpBgCAgN7ccJ76eaxOMAhVu7v4Mxn2+BnTDAAAAb25Do3aShsYhEsrtj59Gfa41zQDAEBAb6Ceru7xsfiyTjAI06LuqlSS7e+bGYtHMuvzvaYaAAB14jno7XNY1Bra0BHpWuJny59nD/h5XhPLOZ1ueFblL58ui0A8t4Lr9eeo1TKaN3d56QAAIKA3THn0/PM6MWQvRN1dBsOpUQ9FpTubTy8rnXY9PcLsM8Mcl65YLBO1/IBaMWrlcrl61JpRa5XBdOwIbfeUio7HdVFvymRuTSvnFAAACOgN89HC0fNFmV0GwMujboi6MYXzCN9zOvUH43f3xyLVIk/djjC/RBnSU1hfN2qLqM2jNotaqSEB/aKoozKZb5dU9CwFAAAQ0Dslgt2SsThaJ+brzqjzos5Nwby8zrmSYt3SafQPlHXpPGPcE4sto3aI2jlqx6J1NH440un5N1a0DenO8umshvEZzL0LvfwAABDQm+fgonXKNC33R50SdXqE3ltz2KDYjt4y8F1YBvZ0ffvGUbtF7Vkulx7kr7u1/DKgitv5TGzbOfHju2o+ZKm/Z3kpAgAgoDfPEVpQpFOJfxv1kxRiI+i9lPPGltt3W1nHl/cgeH3UvlEHFK3T5BfkPyq+eb/MIKCfG2M0zcsSAAABvUEimKUbam3R4BakI5UnR30nAlFj75gd255OC7+orCNjXmwdy/3LsL75gP/0h1EnVHxz0iUJ6fFk69Z4SH5k7wQAgIDePE0+en521GcjnN5tGrwisKdrzFN9KcL62rHcNOquOvQqnX4f6/zdonU2RB1dHdvwR7MQAAABvUEixKQjjPs2cNPTkfKPRQiabBYMKvCma/Lvr9lq/zzqn6PWqWHLv2zWAQBQV6/SgmE7PGpMg7Y3XXf9jagthfO8lafs/2MNV/3sWPfzjSAAAAJ6g/R0dY+NxSEN2uT0HPE3Rfj5QtTzZkAjQnp6NN4ZNVrl9Lx7N2wEAEBAb6A9iuY8Wi09E3yrCGyXGvbG+VjU1Jqs60dijj5kyAAAENCb59CGbGd6JNgeHlnVTDHuT8bioKiZFV/VY2NdPfccAAABvWl6urq7itYjtHL37Qg9HyqvR6a5If2aWLy7aN2DoIpSMD/KSAEAIKA3UzqiuGTm2/jVCGafNdSUIf33sXh/BUN6uk7+vbF+c4wSAAACejO9K/PtS6cLf8kwM09IPyUW+xXVOd395Kj9neEBAICA3lA9Xd0rxGKXjDfx11GfNtIsIKSnI+lviLpvFFcjHS3/XNShsT6zjQoAAAJ6c+0TtUSm23ZV1Acj9Mw1zCwkpF8fi22iThuFPz81atdYh2+Zp6NiOS0AABDQq+SATLfriah3Ol2YQYb0p6LeEz++JereEfiTaV5+M2qT+LuXGQHvFwAAPnA1XE9X94QykOQmHYl8TwSfR4wyQwzqf0ihOeqwDgX1WVHHRa0ff+voqJm6DgCAgE6yV9SEDLfruAg+FxtehhnSX4j6efy4YdRbo04tg/XiuDbqk1FrxO/+p6gHdRoAgCZYQgsGLcej53dFeZwa7Qjq6eZt56fq6epeKpY7Ru0etWXUxlGTosbO53/ti7oj6vaoKVEXxu96XEcBABDQWZjdM9ymwyMMzTK0tDmspzl1cVl/E8G9KxbLlkH96VTuewAAAAL6kESwWDMW62W2WadHOLrE6DKCwb0/Fv06AQAA8+ca9MHZLbPteS7qM4YVAABAQK+bN2e2Pcf39vc9bFgBAAAE9LrJ6Qj6s1HHGFIAAAABvVZ6urrT46NWyWiTftTb3zfNyAIAAAjodbN9RtuS7ph9rCEFAACoHndxb1ZAP623v+8JQwoAAKOrp6t7xbSISsuVorqjJhStg6jLDfhP50Y9Vf6cLldNn+d7o/qi/lI+KQcBvTFel9G2/NBwAgDAiIXwJWOxSdQWZa0btU7U2lET2/Q3nonFfVH3Rt0cdWvU9RHc7zcCAnqOL6gtM9mca+NFeoNRBQCAjuWHSbHYKer1UTtGbR41tsN/duKALwAOGLAu6Sj75VH/nSqywB1GSECvu62jxmWyLScZTgAAaGsgXzoWe0btUS7Xq9LqRe1fVlrXe2JxTtTpEdavNXoCeh29NpPtmB11muFkGG86yxad/9Z3cb0QbzLPGa2OWyrmQ9co/e0XY4yfMQQAVOTz0fJl6D2wDOVL1WTV05cHn04V23BnLH8RdWK8x/YZVQG9LrbNZDvO9cJjiG886U3nB1Fr1WR9b4rFP8Q8v9zodcy/lDVaY3xVLD4WY3yToYAFvk7GxOLQMjgsX4NVnhU1OeqH8dqeWcN+bxWLTxata4nHVHx1003Ezoz6dfR6rlfLsMY7HbDYO+r9UW+rUShfkI2ivhX15di2U9LPMTfuMdICetVtkcl2/KehZAhvQPvUcM6ke0VcEOu+ZdXeXGKd0nVhry/rQDNs2HaI+mP0c2NfOMIC/Tjq8Jqt815R+8Zre9d4bc+u0XvlbrE4v6jXpZD7RW1TtI6gMvixXq18XX04apUMNzF90fChqMNiW8+I5RfjtXi3kR89noO+4Bdj6s1GGWzKS1G/N6IMwXdrut7pGrCPVmDfsULUflHHRKXru9JRi/Oijo7a2PRavPZGvUcbYL77ns1rGM5ftlMNX9vHFPW8T9GnYq6s7xUzqNfU1lG/jh+nptCaaTgfKJ0FclDUbbHd3x/Fy9oazxH0BZtUtJ5DWHeXOdrEEN6MJtY8RK4zCj1bORZvLGuXqE2L6p/qWPd9M/BKW2ew/ifr94hIl3A6Qrrg9/XtY/G5onXGQROlL56OjDo4evGJyBFnmRUCelVslsl2/M5Q0qB9QsfXv3x8yhvKMJ6WG5g25ihUQN3PivTF5shZSgvm+/6ezpxNZxG+TTf+aqWoM6MvZ8fyIxHUp2uJDzqjbZNMtmOyoYTFfsMeGMjX1BUAyEq6Wdo7i+o/uWY0pPvnvDY+Dx0UIf1K7RDQBfTF82TUDYYShhTIVy7fpF8O5CvpCgBk7SAtWKg1oqaUp7z/RDsEdAF9+C6NF9FLhhIGHc7Ts0x/EzVRNwAA/iadXfDj+Ky0YSw/ExljjpZ0hru4L9ikHAK6YYRBh/N0Td6vhHMAgAU6Iurk8rnwCOgj9kE9fUDvzmBTrjaaMGjp2bA92gAAsFAHR50dmWm8VgjoI2VSBtuQTm3/k6GEQfMmAwAwOG+P+pUj6QK6gD54t/X29z1rKAEAgA54V9QPtKG93CQu34B+vWEEyN6JPV3dzzR02x21ARh9n4j3oQd6+/uO0QoBXUBfuFsMI0D21tUCAEbZtyOk3xgh/b+1YvE5xT3fgH6nYQQAAEYgU54RIX1NrRDQO2WNDLbhdsMIAACMgBWK1uPX5EsBvSNWqvn6z4x6wDACAAAjZJeoT2mDgN4Jr6n5+t/d29831zACAAAj6Bs9Xd0baYOA3jYxoZaJxYSab4aj5wAAwEgbH/Vv2iCgt9PKGWzDg4YRAAAYBW/q6er+O20Q0NulJ4NtcAQdAAAYLd+LkD5BG4bOc9AF9NFrdOtF+4moXaOWMfUW6vmom6OO7e3ve1Q7AACosFWj/iHqGK0Q0BdXDqe4P1KDcJ6uT7koagdTbtD2jDokeve6COkuYwAAoMo+G59bT4jPrU9pxeA5xf2VujPYhmk1WMdDhfNhSY8A/KI2AABQg1z1SW0Q0BfXxAy2obcG67idqTZs22oBAAA18I+uRRfQmx7QX+zt75teg/Ucb6p53QIAkLV0f69DtMEH/cXRVfP1n2YIAQCAivhUT1f3GG0Q0Ier7kfQ+wwhAABQERsWrac2IaA3MqA/awgBAIAKOUwLBHQBHQAAYPS9o6eru0sbBPQmBvQZhhAAAKiQdCf3g7RBQB+Oun+z87QhBAAAKuYALRDQm8gp7gAAQNXs3tPVvYI2COhDtXzN13+WIQQAACpmiaj9tGHRTeJ/84w+AABgsJ6Muj3qnqiHoh6N6i9rZvnfpAOj3WWtGrV51GZR6zWsV2+P+rkpI6ADAAAsrrlRt0RdHnVZ1JW9/X33D/eX9XR1rxGLvaP2j9qryP9g4W6xzUtEz140lQT0pnCTOBie57WgFvq0AIBR+Izw31HnRP0uwuVj7frF8bvSEfefporgum4s/znqQ1FjM+3lclHbF60vOJgP16C/Ut2vQZ9jCGFYboh6Qhsq7zwtAGCEXBn1kajXRJDeJ+rf2xnO5xPW7406PH7cMurqjPv6ZlNLQAdY1Jti+nb8fYWzUKoqnVJ4dIzTdVoBQAelJyL9W9TG8Z6zU9SJUTNG+DPJbbHYOerbAnrzOMUd4H/eEC/s6epeP358W9RqRfu/xNyhaF1fVkeXRE0epb+dbrJzYYzPrWYpAB2SLqH6XtRP4v3myQp8JklnxX42PpekG8/9tMjrwOq2rkMX0I0pMNg3xHSa+8868bvjzeiIGgf0ydGbL5shAGQmHTFPR6qPjfe5Zyr4ueTE+PyQbhz37xn1fELUVlHOipsPp7jnZ6IWAADAoLwjQvDXqhjOB4T0E2Lxrcz6vr2pJ6ADAAAMVJenuHwhakpGfd/R1BPQAQAAaqe8Jv3QqFmZbNKWRlVAH6znar7+EwwhAABkF9Lvi8U3M9mcjXq6uscZVQF9MGbXfP2XNoQAAJClY6Mez2A70o2tNzScAnoTLKsFAACQn/Jmdt/PZHM2M6IC+mDU/Xl87uIOAAD5Snd1fyaD7djEUArog1H3ye4UdwAAyFRvf19/LE7PYFPWM5oCehM4xR0AAPJ2UgbbMMkwCuiD8WzN17/bEAIAQNYuj3qs5tuwjmEU0AdjhoAOAABUVW9/30uxOKfmm7FST1e3R0QL6Iv0VM3Xf3xMdDeKAwCAvF2QwTZMMowCeu4BPVnJMAIAQNYujppb821Y2TAK6IsyI4NtcJo7AABkrLyb++013wwHFuexhBa8Qg5H0FczjACN8O2oOxu67emxov9qCgANd1XUpjVe/9cYQgF9UXI4gr66YQRohPN7+/smN3HDe7q6uwR0gOJPNV9/p7jPwynur5TDEfQ1DSMAAGTvlpqvf48hFNAXZXoG27CGYQQAgOzV/Rp0984S0BfpLwI6AABQdb39fb2xeLrGm+Dx0AL6Ij2SwTZsWIN1nGaqAQDAYru/xuu+rOET0Bfl8Qy2obunq3uFiq/jGaYaAAA0Or84gi6gL1xvf186svtCBpuyUcX7fE0s/j5qllkHAADD/2hd43V3BH0eHrM2f+lbqLrfCX2DqCsqHtJ/0tPVfWb8uH3U+BH+8/9euGskAAD191iN173L8Anog53kdQ/om9ZhJSOk98Xi3JH+uz1d3T8wzQEAyIB7O2XEKe7z92gG27CNYQQAgOw9UeN1H2f4BPTByOFO7lsbRgAAyF5/jdd9acMnoA/GPRlsw6t7urrXNpQAAAACuoA++rYzlAAAkLV+LRDQc/fnTLZjZ0MJQKaW1wIABPRmmBo1J4PteKOhBCBTY7QA4K+e0wIBPWu9/X2zY/FABpuyZU9XtyMMAACQrxe0QEBvgrszGd/XG0oAAAABvc5yuQ79rYYSAABAQK+z2zPZjr0NJQAAgIBeZzdksh1r93R1b2w4AQBApquY2YZPQB+sW4o87uSe7Gc4AQAgS8vVeN3dgV5AH5ze/r6Zsbgzk805yIgCAAAVM0sLBPShyOU09616uro3MpwAAICALqDX1Z8y2pb3GE4AAMjOMjVe95mGT0Afiusz2pbDerq6xxpSAADIypI1XvfnDZ+APhTpFPeXMtmW1QuPXAMAgNzU+SZxzxo+AX3Qevv7no7FjRlt0uFGFQAAsjKhxus+w/AJ6EM1OaNt2dsz0QEAICt1PsVdQBfQGx3Qx0T9iyEFAIBsdNV43Z8yfAL6UF0RNTej7Tm4p6t7TcMKAABZ6K7xujuCLqAPTW9/3/RY3JzRJo2L+pKRBQAAAX2UOYIuoA/L5My259Ceru5NDSsAAAjoo2ia4RPQh+PCDMf9O4YVAAAEdAFdQK+bi6Kez2yb0h3dDzS0AABQayvVeN2fMHwC+pD19vc9F4uLM9y04yKkL2eEAQCgfuKz/BKxWKXGm+AIuoA+bL/PcJtWizrG0AIAQC2tHjVWQBfQm+g/M92ujzjVHQAAamlSjdd9dlSvIRTQh6W3v+/RWFyd6eadGCF9klEGAAABfYQ8EhlrriEU0BfHmZlu16ujzomQPtEQAwCjYJwWwLCsX+N1f9jwCeiL6/SoXL/l2SLqlxHSxxpmAGCELaMFMCxbCegCemP19velSTQl403cP+qnEdLHGG0AAKi8rWu87g8aPgG9HX6V+fZ9KOoHQjoAMIKW1gIYmvi8np5/XudHrN1vFAX0dkinuT+X+TZ+smjdOM7p7gDASOjSAhiy19Z8/e82hAL6Yuvt75sRi7MasKmHRf3GjeMAgBHwai2AIduz5ut/jyEU0NvlhIZs535RV0VIX9eQQ+O5gRPQSWtoATQqoL8Q9ZAhFNDbore/77JY3NyQzd006sYI6e838tBoK2kB0Ml9THzWWEobYHDi9bJmLDas8SbcHZnqJSMpoLfTvzZoW5eNOil2BOmU99UMPTTS2loAdNimWgCD9o6ar//thlBAb7d0N/e+hm3zgVF3REj/TNQEUwAaZRs3jgQ6bCstgEGr+9mttxhCAb2tevv70p3cf9zATU9H078bdVd8WP9o1JJmAzRCegTSjtoAlTUzg23Y1TDCosXn752K+n+hJaAL6B1xfNSshm57upnLT6Omxk7iC1GrmA6wSE/VfP3fZQihsp7PYBv2jM8TPpvCov1zBttwk2EU0Nuut7/vL2VIbbKVo74W9VC8qf4+6pCo5c0OmK+5NV//Q+P1vZxhhEqakcE2vKao/2OjoKPifTidzbZfzTcjHbCYajTnbwktWGzfjvp41LiG9yFdm7pPWbNj53F5LP8YNTnqht7+vlE70yDWJY3NBlGbR21XtE6hW9PUZRRMr/n6p3D++ajPGkoQ0DskfaY6v+IBaWnTjVGaeym7/SiDTbk6ssFcIyqgd0RMrsfixZKOon9CN/5mXBmCdy3/OQX2O2OZ6o5yeV9qX9QT0cNnh7mTSmFhmTI0rFi0HgPVU7S+gV+rDOHpztOTzHUE9LY5Ml57Z8Xr9jrDCQJ6B+ybjhDGPubKigakPQpnT+Zm7xjXK2LOvVCDdf1y1DYZ9Pwa005A77RvRH2wDIvMP7BvXtb83uzS0fVpUXOK1jX98x5t7xrw81JlnydqKzX0ZAbbMD7qrHjdvj4+zDxsSKEycnqyzAmxj9luNM++m89nlY2L1lmT+5pq2Tkqav8Y4/8TyzOq+mzuWL90H5ijM+n5VabdgrkGvQ3ihfx4LI7ViWFLoXv1onXUe8OoLeeptQbUSsI5NTY9k+1Ir8XJ8WFhHUMKlfkskgL6C5lszqZlSB9TgVC0WdQvi9Ydp4XzfK0fdWrUrTHeH6jaU4pifdKjjk/JpNfp1ParTTkBfSR8J+oJbQAWIn2ZNzuTbVk36rr40HCAYYVK7WNy8b6oE2MfM34UwtCrot6Sbn5bBvO0LmNNr0ZIZ0r8IurBGP+vRK07ysF8bNQX48ezinzud3Vzb3/fNFNNQO+4mGhPF62bJwEsaD+RvjV+MKNNenXU2fHh4XdRWxthGHWPZrY9h0VdGvuXzUcoDK0f9c1yP31e0brxLc2U7meUTnm/J+bElVGfGOlHCpfPOk/3Yvhq1JiMejvZ9Fo416C31y+iDo96nVYAC/BA0Tr6nJO3pYoPExfHMp0Kek5vf990Qw0j7p6oHTLbpu2jboz9y8mxPD72LTe2MQAtVfYr3fgtPbZqU1OI+dihrONjzqQzKi6MuiBqynBvdLyQOZku49w76qNRu2fazwtNKQF9xKSbSsQL62Px47WFU6GA+UtPMNgt0217U1lpX5g+RF9RtE4PTU9ueCzq0dhPPreADyXpaHx6CkN3uUxHKlYu/zk9qeGRqJ/F/3+fKQQLDeg5Sp+p0s14P1g+FSYd3U6Pc70p7VMHc1Ov+P9WKFqPXE33utmqaB1MSWf+TDBtGIKXb3p8ZPlel55OlJ5q8vJTiqaW73W9g5iTae6tX9Zm5WeD9IzznB/d/GLUpaaRgD7SIT19y3t8/HiEbgDzcWsDtjFdPrVtWfN+IEmLpwb8qxS+B3vq3j/F/79X7GcvN41gvu5twDZuVNaR5T/Pif3CX2KZqn+e/zY9BWb5ovWF35KmBx14r9u0mM+ZFzEn55TvdU+X/yot07+bUM7JrobOycnxHj7D1BHQR0N6BEI65XM9rQDmcbMW/PXDyXCkRyym5w9vpoVg/1IaWwbwVQw/FZuXK5TF//i9Fiyam8R1QHkKZ7qxyVzdAOZxqxYslk17urp7tAHmK51m+4I2ABV1jhYI6KMZ0qfE4hidAObZN6Tr0qbqxGJZRgtgvvuX9BjH23QCqKAbYh/l84+APuq+EHWjNgDzmKIFQIdcpQVABf1aCwT0Udfb35dOMzuo+J8bRAAkl2kBLDZPS5k/d0gGqiZd9nuqNgjoVQnpdxet69EBXnaRFsBiW1YLBHSgHp97IhM9qg0CepVC+lmx+I5OAOU+IT2r+C6dADqwf0kfgm/XCaBCfqoFAnoVfT7qXG0ASr/TAsD+Bcjc41G/1QYBvXJ6+/vmxOLgwjOQgRZvVoCADuTuhPIJEwjolQzpT8Vin6hHdAMa74qoe7QB6IArox7UBmCUzYr6sTYI6FUP6Q/H4i1R03QDGr0vSHc0PUkngA7sX16KxSk6AYyyX8T+6DFtENDr8MZ5a9E6kj5DN6DRUkCfow1AB5ysBcAoSp9vvq0NAnqdQvo1sdhTSIdG7wceisUZOgF0YP9yZyz+qBPAKElHz6dqg4BetzfPq4V0aLzva8GQvaQFMCjHawEwCp6L+qI2COh1Dum7FK5Jh6buA64rPIJxqHypCYPzX1F/0gZghH3PtecCet0/oKc3z52i7tMNaKTPRc3VBqDNny/S2SZf0QlgBD1QuPZcQM/kTfTuWOwQdbVuQONe/zfH4pc6AXTAOVHXaAMwQv4+Ptc8qw0Cei4f0ntjsWvh0SjQRJ+Jmq4NQJs/W6Szcz5ZOEsH6LzTYp9znjYI6Lm9kc6Kel/8+OmoF3UEGvPaT1/QHaUTQAf2L+nsvBN1Auig9GSaj2uDgJ7zm2m6s/Oboh7RDebhKGu+fl60TkcFaLd0ls6D2gB0QLrfxXsjvzypFQJ67iH9slhsGfVb3WCAn2lBtq/5dArqYVEP6wbQ5v1LevrBBwqPKQTa7/Oxj5miDQJ6U95Q+6IOKD+0P6UjjfZE1LtjPrhHQd6v+XSGxIFRM3UDaPP+ZXIsjtYJoI1OiX2Lu7YL6I18U02nvm4UdbZuNE66F8EPojaMeXCmdjTi9X5tLN6vE0AHpA/S3kvI3b1RP9aGjrsy6sPaIKA3+UP741HviB9TPaYjjXBB1BYx7kdGOYOiWa/3swo3WwHav29Jl9IcEnWJboyom8tiZNwdcz29hx4a9Zx2dMT1UW9NN7jWCgHdm2t/XzqKvkHU16O8KPKUnlm7e4z1XlF3aEdjX+vp2/9/0gmgzfuW52OxX+H56CMhXft/RNS2UZO1Y8TcW871k2KxQ9RtWtJWt5bh3MEjAZ0Bb67PRH0xfly/8Nz0nKRH4bw9vZnE+F6kHcQ8OC4WH4qaoxtAG/ct6YP1noUj6Z2S9tnppq4bRK9/GJUuV7tHW0bMfQPm+i2x2C7qGO+lbXF51BvKx8MioDOfN9iHy+emb1N4PFOdXVy0volMwfx35SmI8PLr/D9isW/hRpFA+0P6W6PO0I22Smc6bh79/XDUEwP+/d1aM2LunWeuz4o6Kn7cPuoG7Rm29GSpPaOX/VohoLPoN9kbo/aPH7eKOj1KwKu+2VG/ito6xm63qPO1hIW8xs8rWkcAbtENoI37lvTEiL+L+nLhEWyL68Ko16b7BS3g8rQ/a9GIuX0B8z1dN/26qI+lf9SmQUu54ktRB0YPXdMvoDPEN9qbotIb7SZF6+6Vz+pK5TwYlS5PWDPG6pCoP1Vo3ep+6tezmb++0+mR6dv/Hxa+hAPat2+ZG/WV+PHNhZvQDse5UTtHD/eIum4h/93Uwg3LRkK6P9N9C5nvc6J+WrQuE/2Wz8qLlM4CSWd5ftUZngI6i/dme2d598pVi9bNSVz3NLpeKFqnBe0TtXaMzdfTXfkrOG+eLur9/O0ZDXhtz4xKr+ndotxAEGjn/iVdbrVp1M91Y5HSWXAnR20Vfdsn6opB9DedoXC71nXc7SmED2I8nor6XPy4btH64tuNl18pXf6yafTpD1ohoNO+N9sZ6eYkReuu77tG/UcTQkyFpDfs9EXJKjEOB0SdW75BV9nkGvf75ga9ttM4bRn1maJ516a38zVU96NZsxu8f637h+lKHrWLfcuTUYcVrS8B/1Qwr3Q08WtF6yy4D6QzF4f4/1ehp89nPp+vHeKcf6L84nvNqK9G9Znmf71fQvri6aAo/RDQ6dAbbjp97ZKodDfolYvW9Wa/K3xb2G5zy1CebkSybvQ7nfL246jpNdqGrxf1vA4xHfn/bcNe17Ojvhc/Tio/MDbhy7dp6YvHNv6+KUV9LxdIZ7zcVDRX+gBZ59OxL634/iUdTU+PBvtAMc8Ntxr63p7uA/KOqDWiN/9nMc6Cu6QC23J1B37v5AqN138Nc873RqXrrNcoWteoN/Fmcn3lZ9jN0kElH+tHx5i5c11K8L8aMmZMo7a3p6t7mVjsVbSeh5ruEv1qs2BYwTC9Mf2/FBCreOr6MOZF+hCS7mHQU5NVTt/cfzB6f2aTJ2KM23Kx+HDUJ6LWznQzj45x/mab+5aOmHyxZn1IX6IdVj7jt8lzPr1v/SZqXM1WPT115cAanFH1cp+XiMU7oz4V9doGTbF0VtavU8VYPdSmXi4Vi8uK1pcfo+GrZQht9xwZV36Jsfsoj9lJsX2HtnG70jilg1sHRy2f8VxPX3amx7r+KD3KeaT/uDwqoAvoC94JjS1ad4neo9zB7hi1pFnxyv1I0TpF7YKyLo+d2fMZzocJResZuenNabmKrmbqe7or7jkxBtNMzb+NXTo7arfyQ0UKMMtk8JpLpyz+IuonnbhJTfQs3RwrfVG5bA36ke48fFp5N2Lzvat741gcUrTuuVJ1aZ81OeqMwVwjW9F+pztgpy8C351pYEmh/JxyjG7tUA8nll92vHme99cUjF4cxq9MX1Iv6nKXJ6POim36rw7OjfRFTnr0705R40d43NLlShdF/aZD7xFLlp+J0rx/e4U/Fw1VOpPn36LOTmfljdqbvDwqoAvog94ZLR2LHcpKO9t09+gVG9iKdIQ83ZX1yhTG0zKdBmWGUJPXcfqiZe8yqL8laqWarPoDRetU0PTYovN8AQOV27ekwJJufJoe8fq2or5n4KX3+HREOx39TWfB3W90GcTcf2PROgM1hfbNa7YJ6UuoU4vWF71Tq7BC8qiALqAv3k5pvaL1rPV0c6otyuVaGW1i+vY6fWN+S7kDuybqhtiBvWj0yeD1m3Zw6Q7NO5WVzpLZoCKvu3RWytXla+7Kdp1OCozIviWdgZdOfU9HhHcpWl/sT6zo6qYjrensk3Tk8MJyf/O8UWQx5v8qReustfSe+rryc3KVLrtJNzZMX0Kdnyrm+8NV66E8KqAL6O3fMaVTQtcra4OyJkWtXtb4iq1yCtvpw//UovWczPRt+W1F62ZLUz3jkYa9fleIxWbl63bjAa/hVTvwATvdLPHustKjH28u6z6vO8hqv5Ius9mkaF0itUW5j0mPskpf6C8xgquS9jm3l5XOhEtfAt5W18sLqM38T0fYty5rw7I2Kud/J4PG3PLzbfpMe0v5ufaqmO/3Vb1n8qiALqCP/I5qpTKovyaqu2jdRX7F8ufl5qkU9scOWA4mIKRHTKVvv2eWP6fTz/sG1F/K5aNlKH/YEXEY1Gt36TKop9dwT/l6XLZcvnxde3rdvvxEkHTDq3SH9ReK1jWR6bWXvrlPN595ND1zVleh0fuU9L6+WtH6En+d8ud0avwK89TL7/1pPzNuwM+zy/3Ly9dqzygrvb8/Xu5rUqW7zt/u8VBUbP4vVc79lcrPwi9Xen9duqzx5XLcgDn/8iPsnivnfnqCx/Ty8+4T5dxPB5vSQaYX6tgbeVRABwAAAAEdAAAAENABAABAQAcAAAAEdAAAABDQAQAAAAEdAAAABHQAAABAQAcAAAABHQAAABDQAQAAQEAHAAAABHQAAAAQ0AEAAAABHQAAAAR0AAAAQEAHAAAAAR0AAAAQ0AEAAEBABwAAAAR0AAAAENABAAAAAR0AAAAEdAAAAEBABwAAAAEdAAAAENABAABAQAcAAAAEdAAAABDQAQAAAAEdAAAABHQAAABAQAcAAAABHQAAABDQAQAAQEAHAAAABHQAAAAQ0AEAAAABHQAAAAR0AAAAQEAHAAAAAR0AAAAQ0AEAAEBABwAAAAR0AAAAENABAAAAAR0AAAAEdAAAAEBABwAAAAEdAAAAENABAABAQAcAAAAEdAAAABDQAQAAAAEdAAAABHQAAABAQAcAAAABXUAHAAAAAR0AAAAQ0AEAAEBABwAAAAR0AAAAENABAAAAAR0AAAAEdAAAAEBABwAAAAEdAAAAENABAABAQAcAAAAEdAAAABDQAQAAAAEdAAAABHQAAABAQAcAAAABHQAAABDQAQAAQEAHAAAABHQAAAAQ0AEAAAABHQAAAAR0AAAAQEAHAAAAAR0AAAAQ0AEAAEBABwAAAAR0AAAAENABAAAAAR0AAAAEdAAAAEBABwAAAAEdAAAAENABAAAgD/9fgAEAKcxisFjVfn0AAAAASUVORK5CYII="
                />
              </defs>
            </svg>

            <div>
              Verification of Exemption from BPPE in line with the State of
              California
            </div>
            <img className="bppe" src={Bppe} />
          </div>
          <div className="who">
            <div>WHAT IS ALTSCHOOL AFRICA ?</div>
            <div className="who_img-container">
              <img src={Who} />
            </div>
          </div>
          <div className="shaping">
            <div className="shaping_title">
              <div className="shaping_title-flex">
                <div>Shaping the</div>
                <div className="shaping_title-dash"></div>
              </div>
              <div>Future of Work</div>
            </div>
            <div className="shaping_box">
              <div>
                As the name suggests, AltSchool Africa is different from the
                traditional institutions. We are a school for individuals
                looking to gain technical skills and kickstart a career in Tech.
                AltSchool Africa takes a non-traditional approach to learning by
                teaching courses directly connected with the selected track.
              </div>
              <br />
              {/* <br /> */}
              <div>
                Our robust curriculum which combines theoretical knowledge with
                practical real world applications is guaranteed to transform
                anyone into a top Software Engineer within one year.
              </div>
              <button className="shaping_button">
                <div>Find out more</div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE3MiA3LjAwMDE3TDYuODA4IDEuNjM2MTdMOC4yMjIgMC4yMjIxNjhMMTYgOC4wMDAxN0w4LjIyMiAxNS43NzgyTDYuODA4IDE0LjM2NDJMMTIuMTcyIDkuMDAwMTdIMFY3LjAwMDE3SDEyLjE3MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                  alt="arrow right icon"
                ></img>
              </button>
            </div>
          </div>
          <div className="skittles">
            <div className="skittles1">
              <div className="skittles1_flex">
                <div className={redSkittle}></div>
                <div className="skittles1_trans"></div>
              </div>
              <div className="skittles1_flex">
                <div className="skittles1_trans"></div>
                <div className={purpSkittle}></div>
              </div>
            </div>
            <div className="skittles1">
              <div className="skittles1_flex">
                <div className="skittles1_trans"></div>
                <div className={redSkittle}></div>
              </div>
              <div className="skittles1_flex">
                <div className={purpSkittle}></div>
                <div className="skittles1_trans"></div>
              </div>
            </div>
          </div>
          <div className="career">
            <div className="career_inner">
              <div className="career_box1-title">
                WHO IS ALTSCHOOL AFRICA FOR?
              </div>
              <div className="career_box-flex">
                <div className="career_box1">
                  <div className="box1_img-container">
                    <img className="career_box1-img" src={Guy} />
                  </div>
                </div>

                <div className="career_box2">
                  <div className="career_box2-inner">
                    <div className="career_box2-title">
                      Need a new career? We’ve got you
                    </div>
                    <div className="career_box2-subtitle">
                      You don't need prior knowledge or technical skills to
                      participate in any of our programs. Our curriculum is
                      designed to give you the perfect leg up when transitioning
                      to a career in tech.
                    </div>
                    <button className="career_button">
                      <div>View all schools</div>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE3MiA3LjAwMDE3TDYuODA4IDEuNjM2MTdMOC4yMjIgMC4yMjIxNjhMMTYgOC4wMDAxN0w4LjIyMiAxNS43NzgyTDYuODA4IDE0LjM2NDJMMTIuMTcyIDkuMDAwMTdIMFY3LjAwMDE3SDEyLjE3MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                        alt="arrow right icon"
                      ></img>
                    </button>
                  </div>
                  <div className="career_box2-inner">
                    <div className="career_box2-title">
                      Want better work opportunities? We’re your best bet
                    </div>
                    <div className="career_box2-subtitle">
                      Our curriculum is carefully designed to teach you current
                      and future skills based on industry and employer demand to
                      give you an edge in the talent market.
                    </div>
                    <button className="career_button">
                      <div>View all schools</div>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE3MiA3LjAwMDE3TDYuODA4IDEuNjM2MTdMOC4yMjIgMC4yMjIxNjhMMTYgOC4wMDAxN0w4LjIyMiAxNS43NzgyTDYuODA4IDE0LjM2NDJMMTIuMTcyIDkuMDAwMTdIMFY3LjAwMDE3SDEyLjE3MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                        alt="arrow right icon"
                      ></img>
                    </button>
                  </div>
                  <div className="career_box2-inner">
                    <div className="career_box2-title">
                      Too busy? No problem
                    </div>
                    <div className="career_box2-subtitle">
                      We understand that you might have a lot of commitments and
                      as such we've designed our courses and curriculum to work
                      around you and your commitments
                    </div>
                    <button className="career_button">
                      <div>View all schools</div>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE3MiA3LjAwMDE3TDYuODA4IDEuNjM2MTdMOC4yMjIgMC4yMjIxNjhMMTYgOC4wMDAxN0w4LjIyMiAxNS43NzgyTDYuODA4IDE0LjM2NDJMMTIuMTcyIDkuMDAwMTdIMFY3LjAwMDE3SDEyLjE3MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                        alt="arrow right icon"
                      ></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="school">
            <div className="school_title">FIND THE RIGHT SCHOOL FOR YOU</div>
            <div className="school_subtitle">Schools for you</div>
            <div className="school_flex">
              <div className="school_box1 box1_first">
                <div className="school_box1-icon">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M58.2121 17.2817H47.9798C46.8164 17.2817 45.7009 17.7442 44.8785 18.5665C44.0561 19.3889 43.5942 20.5044 43.5942 21.6673V33.3619C43.5942 34.5248 44.0561 35.6403 44.8785 36.4627C45.7009 37.2851 46.8164 37.747 47.9798 37.747H58.2121C59.375 37.747 60.4905 37.2851 61.3129 36.4627C62.1353 35.6404 62.5977 34.5248 62.5977 33.3619V21.6673C62.5977 20.5044 62.1353 19.3889 61.3129 18.5665C60.4905 17.7442 59.375 17.2817 58.2121 17.2817ZM56.7504 31.8996H49.4415V23.129H56.7504V31.8996Z"
                      fill="#E56059"
                    />
                    <path
                      d="M27.5144 37.747C30.2282 37.747 32.8309 36.6693 34.75 34.7502C36.6691 32.8312 37.7468 30.2285 37.7468 27.5146C37.7468 24.8008 36.669 22.1982 34.75 20.2791C32.831 18.3599 30.2282 17.2817 27.5144 17.2817C24.8006 17.2817 22.1979 18.36 20.2788 20.2791C18.3597 22.1981 17.2815 24.8008 17.2815 27.5146C17.2815 30.2285 18.3598 32.8311 20.2788 34.7502C22.1978 36.6694 24.8006 37.747 27.5144 37.747ZM27.5144 23.1292C28.6773 23.1292 29.7928 23.5911 30.6152 24.4139C31.4376 25.2363 31.8995 26.3518 31.8995 27.5148C31.8995 28.6777 31.4376 29.7932 30.6152 30.6156C29.7929 31.4379 28.6773 31.8998 27.5144 31.8998C26.3515 31.8998 25.236 31.4379 24.4136 30.6156C23.5907 29.7932 23.1288 28.6777 23.1288 27.5148C23.1288 26.3518 23.5907 25.2363 24.4136 24.4139C25.2359 23.5911 26.3515 23.1292 27.5144 23.1292Z"
                      fill="#E56059"
                    />
                    <path
                      d="M58.2119 42.1323H23.129C21.966 42.1323 20.8505 42.5942 20.0282 43.4166C19.2058 44.2389 18.7439 45.3545 18.7439 46.5174V58.212C18.7439 59.3749 19.2058 60.4904 20.0282 61.3128C20.8505 62.1352 21.9661 62.5976 23.129 62.5976H58.2119C59.3748 62.5976 60.4903 62.1352 61.3127 61.3128C62.1351 60.4904 62.5975 59.3749 62.5975 58.212V46.5174C62.5975 45.3545 62.1351 44.239 61.3127 43.4166C60.4904 42.5942 59.3748 42.1323 58.2119 42.1323ZM56.7503 56.7502H24.5909V47.9796H56.7503V56.7502Z"
                      fill="#E56059"
                    />
                  </svg>
                </div>
                <div className="school_box1-inner">
                  <div className="school_box1-inner-title">
                    School of Software Engineering
                  </div>
                  <div>
                    The School of Engineering offers a range of extensive
                    technical courses specifically designed to equip students
                    with the knowledge and skills required to kickstart their
                    careers and compete favourably with their peers worldwide.
                    <br />
                    <br />
                    To ensure students are duly carried along, we have
                    incorporated active learning to allow for the application of
                    theory to practice. We also embark on applied research where
                    the focus is on utilizing technology to solve actual
                    problems.
                    <br />
                    <br />
                    Ready to begin your journey as a Software Engineer?
                    <br />
                    <button>
                      <div>View specializations </div>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE3MiA3LjAwMDE3TDYuODA4IDEuNjM2MTdMOC4yMjIgMC4yMjIxNjhMMTYgOC4wMDAxN0w4LjIyMiAxNS43NzgyTDYuODA4IDE0LjM2NDJMMTIuMTcyIDkuMDAwMTdIMFY3LjAwMDE3SDEyLjE3MloiIGZpbGw9IiM2QTZGRjUiLz4KPC9zdmc+Cg=="
                        alt="arrow"
                      ></img>
                    </button>
                  </div>
                </div>
              </div>
              <div className="school_box1 box1_second">
                <div className="school_box2-icon">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M62.1247 30.8802H44.6332L36.3921 16.5843C35.5513 15.1827 34.0934 14.2856 32.4678 14.2856C30.8422 14.2856 29.3284 15.1264 28.5435 16.5843L14.0234 41.7563C13.1826 43.1578 13.1826 44.8957 14.0234 46.2972C14.8642 47.6988 16.3221 48.5959 17.9477 48.5959H31.739V61.322C31.739 63.8447 33.7572 65.863 36.2799 65.863H62.1247C64.6474 65.863 66.6656 63.8447 66.6656 61.322V35.4212C66.6656 32.8985 64.6474 30.8803 62.1247 30.8803V30.8802ZM32.4677 19.8359L46.1469 43.5503H18.7885L32.4677 19.8359ZM61.6201 60.7614H36.7845V48.5398H46.9878C48.6135 48.5398 50.1272 47.699 50.9121 46.2412C51.7529 44.8396 51.7529 43.1018 50.9121 41.7002L47.5482 35.8699H61.6198L61.6201 60.7614Z"
                      fill="#6A6FF5"
                    />
                  </svg>
                </div>
                <div className="school_box1-inner">
                  <div className="school_box1-inner-title">
                    School of Product
                  </div>
                  <div>
                    The School of Product offers multidisciplinary training
                    programmes with a unique combination of art, design, design
                    thinking & business. Courses cover major aspects of the
                    entire product lifecycle; ideating, building, managing,
                    marketing & shipping.
                    <br />
                    <br />
                    This school is perfect for those looking to launch and build
                    profitable careers in tech without having to write codes or
                    undergo core technical training processes. Product Design,
                    Product Management and Product Marketing are the programs
                    currently available to students.
                    <br />
                    <br />
                    Ready for a career in Product?
                    <br />
                    <button>
                      <div>View specializations </div>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE3MiA3LjAwMDE3TDYuODA4IDEuNjM2MTdMOC4yMjIgMC4yMjIxNjhMMTYgOC4wMDAxN0w4LjIyMiAxNS43NzgyTDYuODA4IDE0LjM2NDJMMTIuMTcyIDkuMDAwMTdIMFY3LjAwMDE3SDEyLjE3MloiIGZpbGw9IiM2QTZGRjUiLz4KPC9zdmc+Cg=="
                        alt="arrow"
                      ></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="school_box1 box1_center">
              <div className="school_box2-icon">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62.1247 30.8802H44.6332L36.3921 16.5843C35.5513 15.1827 34.0934 14.2856 32.4678 14.2856C30.8422 14.2856 29.3284 15.1264 28.5435 16.5843L14.0234 41.7563C13.1826 43.1578 13.1826 44.8957 14.0234 46.2972C14.8642 47.6988 16.3221 48.5959 17.9477 48.5959H31.739V61.322C31.739 63.8447 33.7572 65.863 36.2799 65.863H62.1247C64.6474 65.863 66.6656 63.8447 66.6656 61.322V35.4212C66.6656 32.8985 64.6474 30.8803 62.1247 30.8803V30.8802ZM32.4677 19.8359L46.1469 43.5503H18.7885L32.4677 19.8359ZM61.6201 60.7614H36.7845V48.5398H46.9878C48.6135 48.5398 50.1272 47.699 50.9121 46.2412C51.7529 44.8396 51.7529 43.1018 50.9121 41.7002L47.5482 35.8699H61.6198L61.6201 60.7614Z"
                    fill="#6A6FF5"
                  />
                </svg>
              </div>
              <div className="school_box1-inner">
                <div className="school_box1-inner-title">School of Data</div>
                <div>
                  The School of Data offers students a thorough learning
                  experience through its well-structured programs. Just like
                  other schools, the triad: Data Science, Data Analysis and Data
                  Engineering boasts of properly designed curriculums, seasoned
                  instructors, a seamless lecture management system and a
                  handful of projects that prepare students for work in the real
                  world.
                  <br />
                  <br />
                  At the end of the program, students will have gained in-depth
                  knowledge and understanding of data analysis tools and
                  processes; data science skills, techniques and tools, as well
                  as the workings of the Data Engineering ecosystem and
                  lifecycle.
                  <br />
                  <br />
                  Ready for a career in Data?
                  <br />
                  <button>
                    <div>View specializations </div>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE3MiA3LjAwMDE3TDYuODA4IDEuNjM2MTdMOC4yMjIgMC4yMjIxNjhMMTYgOC4wMDAxN0w4LjIyMiAxNS43NzgyTDYuODA4IDE0LjM2NDJMMTIuMTcyIDkuMDAwMTdIMFY3LjAwMDE3SDEyLjE3MloiIGZpbGw9IiM2QTZGRjUiLz4KPC9zdmc+Cg=="
                      alt="arrow"
                    ></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hire">
            <div className="hire_inner">
              <div className="hire_image-inner">
                <img src={Hire} />
              </div>
              <div className="hire_box">
                <div className="hire_box-title">
                  Prepare your company for the future
                </div>
                <div>
                  Our extensive Diploma program is set to produce top tech
                  talents who are able to compete globally. Hiring our graduates
                  guarantee that you have access to highly skilled, passionate
                  and professional tech talent to ensure continuous business
                  success.
                </div>
                <button className="hire_button">
                  <div>Hire our grads</div>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE3MiA3LjAwMDE3TDYuODA4IDEuNjM2MTdMOC4yMjIgMC4yMjIxNjhMMTYgOC4wMDAxN0w4LjIyMiAxNS43NzgyTDYuODA4IDE0LjM2NDJMMTIuMTcyIDkuMDAwMTdIMFY3LjAwMDE3SDEyLjE3MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                    alt="arrow right icon"
                  ></img>
                </button>
              </div>
            </div>
          </div>
          <div className="features">
            <div className="features_title">Features on</div>
            <div className="features_img">
              <img src="https://www.altschoolafrica.com/_next/static/images/techpoint-0d523169652e000fb3e12c30df3946b1.png" />

              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyMCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOiMwNDA0MDQ7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGQ9Ik0xNi44OCwyNy4xOGMtMS43OC0wLjAxLTMuNTctMC4wMS01LjM1LTAuMDJjLTAuMjQsMC0wLjI5LDAuMTEtMC4yOSwwLjMyYzAuMDEsMC41LDAsMC45OSwwLDEuNDljMCwzLTAuMDEsNiwwLjAxLDkKCQljMCwwLjM3LTAuMSwwLjQ3LTAuNDcsMC40NmMtMS41Ny0wLjAyLTMuMTQtMC4wMi00LjcxLDBjLTAuMzcsMC4wMS0wLjQ0LTAuMTItMC40NC0wLjQ1YzAuMDEtMy40NCwwLTYuODgsMC4wMi0xMC4zMwoJCWMwLTAuMzgtMC4wOS0wLjUtMC40OC0wLjVjLTEuNiwwLjAyLTMuMTksMC00Ljc5LDAuMDJDMC4xLDI3LjE3LDAsMjcuMTEsMCwyNi43OWMwLjAyLTEuNjIsMC4wMS0zLjI0LDAtNC44NgoJCWMwLTAuMjgsMC4wNy0wLjM2LDAuMzYtMC4zNmM1LjM5LDAuMDEsMTAuNzgsMC4wMSwxNi4xNywwYzAuMiwwLDAuMzYtMC4wMiwwLjM2LDAuMjhjLTAuMDIsMS43OC0wLjAxLDMuNTYtMC4wMiw1LjM0TDE2Ljg4LDI3LjE4egoJCSIvPgoJPHBhdGggZD0iTTE2Ljg3LDI3LjE5YzEuNzMsMCwzLjQ2LDAuMDIsNS4xOSwwLjAxYzAuMzYsMCwwLjQ4LDAuMDgsMC40OCwwLjQ2Yy0wLjAyLDEuNTcsMCwzLjEzLTAuMDIsNC43CgkJYy0wLjAxLDAuNCwwLjEyLDAuNDksMC41LDAuNDljMy40NS0wLjAxLDYuODksMCwxMC4zNC0wLjAyYzAuMzUsMCwwLjQ2LDAuMDgsMC40NSwwLjQ0Yy0wLjAyLDEuNTctMC4wMiwzLjEzLDAsNC43CgkJYzAuMDEsMC4zOC0wLjEyLDAuNDYtMC40OCwwLjQ2Yy01LjMyLTAuMDEtMTAuNjUtMC4wMS0xNS45NywwYy0wLjM2LDAtMC40NC0wLjEtMC40NC0wLjQ1YzAuMDEtMy40MywwLjAxLTYuODYsMC4wMS0xMC4yOQoJCWMwLTAuMTcsMC4wNC0wLjM1LTAuMDQtMC41MUMxNi44OCwyNy4xOCwxNi44NywyNy4xOSwxNi44NywyNy4xOXoiLz4KCTxwYXRoIGQ9Ik0yOC4xOCwyNy4xNmMtMS43MywwLTMuNDYtMC4wMS01LjE5LDAuMDFjLTAuMzEsMC0wLjQyLTAuMDgtMC40Mi0wLjRjMC4wMS0xLjU5LDAuMDEtMy4xOSwwLTQuNzgKCQljMC0wLjMsMC4wNy0wLjQyLDAuNC0wLjQyYzMuNDksMC4wMSw2Ljk3LDAuMDEsMTAuNDYsMGMwLjI3LDAsMC4zNywwLjA3LDAuMzcsMC4zNmMtMC4wMSwxLjYyLTAuMDEsMy4yNCwwLDQuODYKCQljMCwwLjMxLTAuMSwwLjM4LTAuMzksMC4zOEMzMS42NywyNy4xNiwyOS45MywyNy4xNiwyOC4xOCwyNy4xNnoiLz4KCTxwYXRoIGQ9Ik03MS43NywzMC43N2MwLTEuMDMsMC4xNS0xLjk1LDAuNTgtMi44MWMwLjY4LTEuMzQsMS43OC0yLjExLDMuMjgtMi4zYzAuNTMtMC4wNywxLjA3LTAuMDUsMS42MSwwLjAyCgkJYzEuNiwwLjIsMi41MSwxLjIsMy4wNCwyLjY0YzAuMDcsMC4xOS0wLjAxLDAuMjQtMC4xNSwwLjI5Yy0wLjY3LDAuMjYtMS4zNSwwLjUyLTIuMDIsMC43OWMtMC4yMSwwLjA5LTAuMjgsMC4wMS0wLjM2LTAuMTcKCQljLTAuMDktMC4yMi0wLjItMC40NC0wLjMzLTAuNjRjLTAuNTYtMC44MS0xLjcyLTAuODEtMi4yOCwwYy0wLjI3LDAuMzktMC4zOSwwLjg1LTAuNDUsMS4zMmMtMC4xLDAuODItMC4wOCwxLjYzLDAuMjIsMi40MgoJCWMwLjIxLDAuNTQsMC41NSwwLjk2LDEuMTYsMS4wNGMwLjY0LDAuMDksMS4xNS0wLjEzLDEuNTQtMC42NmMwLjE3LTAuMjIsMC4yNC0wLjYyLDAuNDktMC42NGMwLjI1LTAuMDIsMC41MywwLjIzLDAuNzksMC4zNgoJCWMwLjM5LDAuMiwwLjc3LDAuNDMsMS4xOCwwLjYxYzAuMjksMC4xMywwLjI4LDAuMjcsMC4xMywwLjUyYy0xLjAxLDEuNzQtMi43NSwyLjUxLTQuODksMi4xM2MtMS44LTAuMzItMy4wOS0xLjcxLTMuNDMtMy42OQoJCUM3MS44LDMxLjU3LDcxLjc2LDMxLjEzLDcxLjc3LDMwLjc3eiIvPgoJPHBhdGggZD0iTTExNS43NCwyOC43MWMwLjc3LTAuNTMsMS41NC0wLjczLDIuMzktMC41OGMwLjgyLDAuMTUsMS4zNSwwLjYyLDEuNjMsMS4zOGMwLjE3LDAuNDcsMC4yNCwwLjk2LDAuMjQsMS40NgoJCWMwLDEuNDMtMC4wMSwyLjg3LDAuMDEsNC4zYzAsMC4yNy0wLjA1LDAuMzgtMC4zNSwwLjM3Yy0wLjYyLTAuMDItMS4yMy0wLjAzLTEuODUsMGMtMC4zMiwwLjAxLTAuMzctMC4xMS0wLjM3LTAuMzkKCQljMC4wMS0xLjE5LDAuMDEtMi4zOCwwLTMuNThjMC0wLjIzLDAtMC40Ni0wLjAzLTAuNjhjLTAuMDctMC41MS0wLjMyLTAuNzQtMC43Ny0wLjc1Yy0wLjUxLTAuMDEtMC43NSwwLjE5LTAuODUsMC43MQoJCWMtMC4wOSwwLjQ4LTAuMDQsMC45Ni0wLjA0LDEuNDRjLTAuMDEsMC45OC0wLjAxLDEuOTUsMCwyLjkzYzAsMC4yNS0wLjA3LDAuMzItMC4zMiwwLjMyYy0wLjYzLTAuMDItMS4yNi0wLjAyLTEuODksMAoJCWMtMC4yNiwwLjAxLTAuMzUtMC4wNi0wLjM1LTAuMzNjMC4wMS0yLjg4LDAuMDEtNS43NiwwLTguNjRjMC0wLjIzLDAuMDktMC4zMywwLjI5LTAuNDFjMC42NC0wLjI0LDEuMjgtMC40OSwxLjktMC43NgoJCWMwLjM0LTAuMTUsMC4zNy0wLjAzLDAuMzcsMC4yN0MxMTUuNzMsMjYuNzIsMTE1Ljc0LDI3LjY3LDExNS43NCwyOC43MXoiLz4KCTxwYXRoIGQ9Ik02NS45LDI1LjQxYzAsMS4wMywwLjAxLDEuOTksMCwyLjk1YzAsMC4zMywwLjA2LDAuMzcsMC4zNCwwLjE5YzAuNjctMC40NCwxLjQyLTAuNTQsMi4yLTAuMzcKCQljMC43NCwwLjE2LDEuMjIsMC42MywxLjQ4LDEuMzNjMC4xNiwwLjQ0LDAuMjMsMC45MSwwLjI0LDEuMzhjMC4wMSwxLjQ2LDAsMi45MiwwLjAxLDQuMzhjMCwwLjI1LTAuMDYsMC4zNi0wLjMzLDAuMzUKCQljLTAuNi0wLjAyLTEuMjEtMC4wMi0xLjgxLDBjLTAuMjksMC4wMS0wLjM2LTAuMS0wLjM2LTAuMzdjMC4wMS0xLjE1LDAuMDEtMi4zLDAtMy40NWMwLTAuMjctMC4wMS0wLjU0LTAuMDQtMC44CgkJYy0wLjA2LTAuNTEtMC4zMS0wLjc1LTAuNzUtMC43OGMtMC41My0wLjAzLTAuNzksMC4xNy0wLjkxLDAuNjljLTAuMDQsMC4xOC0wLjA1LDAuMzctMC4wNSwwLjU2YzAsMS4yNi0wLjAxLDIuNTIsMCwzLjc4CgkJYzAsMC4zLTAuMDksMC4zOS0wLjM4LDAuMzhjLTAuNi0wLjAyLTEuMjEtMC4wMi0xLjgxLDBjLTAuMjMsMC4wMS0wLjMtMC4wOC0wLjMtMC4zYzAuMDEtMi44OSwwLTUuNzgsMC04LjY4CgkJYzAtMC4xNCwwLjAxLTAuMjUsMC4xNy0wLjMyQzY0LjM0LDI2LjAzLDY1LjA4LDI1LjczLDY1LjksMjUuNDF6Ii8+Cgk8cGF0aCBkPSJNOTIuNjMsMzUuMThjLTAuNDksMC4zMi0wLjk2LDAuNTQtMS40OSwwLjU5Yy0xLjUyLDAuMTYtMi41NC0wLjY4LTIuNjktMi4yNWMtMC4xMy0xLjM1LTAuMDQtMi43LTAuMDUtNC4wNgoJCWMwLTAuNC0wLjE3LTAuOTEsMC4wOC0xLjE2YzAuMjMtMC4yMywwLjc0LTAuMDUsMS4xMy0wLjA3YzAuMzMtMC4wMSwwLjY3LDAuMDEsMS4wMS0wLjAxYzAuMjYtMC4wMSwwLjM1LDAuMDcsMC4zNCwwLjM0CgkJYy0wLjAxLDEuMjItMC4wMSwyLjQ0LDAsMy42NmMwLDAuMjUsMC4wMiwwLjUxLDAuMDYsMC43NmMwLjA4LDAuNDUsMC4zMywwLjY1LDAuNzgsMC42NWMwLjQ1LDAsMC43MS0wLjE5LDAuOC0wLjYzCgkJYzAuMDQtMC4yMiwwLjA1LTAuNDUsMC4wNS0wLjY4YzAtMS4yMiwwLjAyLTIuNDQtMC4wMS0zLjY2Yy0wLjAxLTAuMzcsMC4xMS0wLjQ1LDAuNDUtMC40NGMwLjU5LDAuMDMsMS4xOCwwLjAyLDEuNzcsMAoJCWMwLjI0LTAuMDEsMC4zNSwwLjA0LDAuMzUsMC4zMmMtMC4wMSwyLjI1LTAuMDEsNC41LDAsNi43NWMwLDAuMjctMC4wOSwwLjM0LTAuMzQsMC4zM2MtMC41OC0wLjAyLTEuMTUtMC4wMS0xLjczLDAKCQlDOTIuODUsMzUuNjQsOTIuNTYsMzUuNjcsOTIuNjMsMzUuMTh6Ii8+Cgk8cGF0aCBkPSJNOTkuNTUsMjguNzNjMC41MS0wLjM1LDAuOTctMC41NSwxLjQ4LTAuNjJjMS40MS0wLjIsMi40MywwLjUxLDIuNjksMS45YzAuMDYsMC4zMSwwLjEsMC42NCwwLjEsMC45NgoJCWMwLjAxLDEuNDMsMCwyLjg3LDAuMDEsNC4zYzAsMC4zMS0wLjA5LDAuMzktMC4zOCwwLjM3Yy0wLjYyLTAuMDItMS4yMy0wLjAyLTEuODUsMGMtMC4yOCwwLjAxLTAuMzQtMC4xLTAuMzQtMC4zNQoJCWMwLjAxLTEuMjUsMC4wMS0yLjQ5LDAtMy43NGMwLTAuMjEsMC0wLjQzLTAuMDQtMC42NGMtMC4wOC0wLjQ3LTAuMzQtMC42OC0wLjgtMC42OGMtMC40NywwLTAuNzEsMC4yLTAuOCwwLjY3CgkJYy0wLjA0LDAuMjEtMC4wNSwwLjQzLTAuMDYsMC42NGMwLDEuMjUtMC4wMSwyLjQ5LDAsMy43NGMwLDAuMjgtMC4wOCwwLjM3LTAuMzYsMC4zNmMtMC42Mi0wLjAyLTEuMjMtMC4wMS0xLjg1LDAKCQljLTAuMjMsMC0wLjMzLTAuMDQtMC4zMy0wLjNjMC4wMS0yLjI2LDAuMDEtNC41MywwLTYuNzljMC0wLjI2LDAuMDktMC4zMiwwLjMzLTAuMzFjMC42LDAuMDEsMS4yMSwwLjAyLDEuODEsMAoJCUM5OS40OCwyOC4yMSw5OS42NCwyOC4yOSw5OS41NSwyOC43M3oiLz4KCTxwYXRoIGQ9Ik00My43OCwyNS44YzEuMjEsMCwyLjQxLDAuMDEsMy42Mi0wLjAxYzAuMzgtMC4wMSwwLjQ4LDAuMTIsMC40NiwwLjQ4Yy0wLjAzLDAuNTEtMC4wMiwxLjAyLDAsMS41MwoJCWMwLjAxLDAuMjctMC4wOSwwLjM0LTAuMzUsMC4zNGMtMC42NC0wLjAyLTEuMjksMC4wMi0xLjkzLTAuMDFjLTAuNC0wLjAyLTAuNTMsMC4wOS0wLjUyLDAuNTFjMC4wMiwyLjE3LDAsNC4zNCwwLjAyLDYuNQoJCWMwLDAuMzktMC4xLDAuNTEtMC40OSwwLjQ4Yy0wLjU5LTAuMDMtMS4xOC0wLjAzLTEuNzcsMGMtMC4zMywwLjAxLTAuNDMtMC4wOS0wLjQzLTAuNDJjMC4wMS0yLjE1LDAuMDEtNC4zMSwwLjAxLTYuNDYKCQljMC0wLjcxLDAuMDEtMC41OS0wLjYxLTAuNmMtMC42Mi0wLjAxLTEuMjMtMC4wMS0xLjg1LDBjLTAuMjQsMC4wMS0wLjMzLTAuMDYtMC4zMi0wLjMxYzAuMDItMC41NSwwLjAyLTEuMSwwLTEuNjUKCQljLTAuMDItMC4zMiwwLjExLTAuMzgsMC4zOS0wLjM4QzQxLjI2LDI1LjgxLDQyLjUyLDI1LjgsNDMuNzgsMjUuOHoiLz4KCTxwYXRoIGQ9Ik01Mi4wNCwzMi42M2MtMC42MiwwLTEuMjMsMC4wMS0xLjg1LDBjLTAuMjUsMC0wLjM0LDAuMDYtMC4yNiwwLjMzYzAuMTYsMC41MywwLjU0LDAuODYsMS4xLDAuOQoJCWMwLjYsMC4wNCwxLjE3LTAuMDksMS43MS0wLjM2YzAuMjQtMC4xMiwwLjM4LTAuMTEsMC41MSwwLjE0YzAuMTksMC4zNywwLjQyLDAuNzIsMC42NCwxLjA3YzAuMSwwLjE2LDAuMDksMC4yNS0wLjA4LDAuMzQKCQljLTEuMTYsMC42LTIuMzgsMC45LTMuNjksMC42MWMtMS4xOS0wLjI3LTEuOTUtMS4wNC0yLjMtMi4xOWMtMC4zMi0xLjA0LTAuMzEtMi4wOSwwLjAxLTMuMTNjMC40NC0xLjQ1LDEuNy0yLjMsMy4yNS0yLjI0CgkJYzEuNTYsMC4wNiwyLjYsMC45MiwyLjk4LDIuNDRjMC4xNCwwLjU5LDAuMTgsMS4xOSwwLjE4LDEuNzljMCwwLjIzLTAuMDgsMC4zLTAuMywwLjNDNTMuMywzMi42Myw1Mi42NywzMi42Myw1Mi4wNCwzMi42M3oKCQkgTTUwLjk0LDMxLjEyYzAuMjcsMCwwLjU0LTAuMDEsMC44LDBjMC4yNCwwLjAxLDAuMy0wLjA4LDAuMjUtMC4zMWMtMC4xMi0wLjU1LTAuNDktMC44Ni0xLjA0LTAuODhjLTAuNTEtMC4wMS0wLjg0LDAuMjYtMS4wMSwwLjgKCQljLTAuMDgsMC4yNy0wLjA1LDAuNDEsMC4yNywwLjM5QzUwLjQ2LDMxLjEsNTAuNywzMS4xMiw1MC45NCwzMS4xMnoiLz4KCTxwYXRoIGQ9Ik0xMDcuODMsMzEuOTNjLTAuMDEsMC4zOCwwLjAyLDAuNzUsMC4xNSwxLjExYzAuMjcsMC43MywwLjk4LDAuOTIsMS41OCwwLjQyYzAuMDYtMC4wNSwwLjEyLTAuMTEsMC4xNy0wLjE3CgkJYzAuNDYtMC40OCwwLjQ2LTAuNDgsMS4wMS0wLjA2YzAuMjYsMC4yMSwwLjUyLDAuNDIsMC43OSwwLjYxYzAuMTYsMC4xMSwwLjIsMC4yLDAuMDgsMC4zOWMtMC44MywxLjI3LTIuMTEsMS43OC0zLjcxLDEuNDcKCQljLTEuMzQtMC4yNi0yLjI1LTEuMjMtMi41LTIuN2MtMC4xNS0wLjg4LTAuMTUtMS43NiwwLjExLTIuNjJjMC40Mi0xLjM0LDEuMzQtMi4wOCwyLjczLTIuMjZjMS4zNy0wLjE4LDIuNDgsMC4yMywzLjI4LDEuNAoJCWMwLjE0LDAuMjEsMC4xMSwwLjMxLTAuMDgsMC40NWMtMC40MywwLjMtMC44NCwwLjYyLTEuMjUsMC45NWMtMC4yLDAuMTYtMC4zMSwwLjE1LTAuNDItMC4wOGMtMC4wOS0wLjE5LTAuMjMtMC4zNi0wLjQtMC41CgkJYy0wLjQ0LTAuMzUtMS4wNC0wLjIzLTEuMywwLjI3QzEwNy44NiwzMS4wMiwxMDcuODMsMzEuNDcsMTA3LjgzLDMxLjkzeiIvPgoJPHBhdGggZD0iTTU3Ljk5LDMxLjkzYzAsMC4zOCwwLjAyLDAuNzUsMC4xNSwxLjExYzAuMjgsMC43NCwxLDAuOTQsMS42MiwwLjQ0YzAuMDYtMC4wNSwwLjEyLTAuMTEsMC4xOC0wLjE2CgkJYzAuNDYtMC40OCwwLjQ2LTAuNDgsMC45OC0wLjA4YzAuMjYsMC4yMSwwLjUyLDAuNDIsMC43OSwwLjYyYzAuMTcsMC4xMiwwLjE3LDAuMjIsMC4wNiwwLjM5Yy0wLjgzLDEuMjQtMi4xNSwxLjc1LTMuNjksMS40MgoJCWMtMS4zNS0wLjI5LTIuMjMtMS4yNy0yLjQ3LTIuNzNjLTAuMTQtMC45MS0wLjEzLTEuODEsMC4xNy0yLjY5YzAuNTUtMS42MiwxLjk1LTIuMjIsMy41Mi0yLjEzYzEuMDIsMC4wNiwxLjc5LDAuNTYsMi4zNywxLjM5CgkJYzAuMTQsMC4yLDAuMTMsMC4zMS0wLjA3LDAuNDVjLTAuNDMsMC4zLTAuODQsMC42Mi0xLjI1LDAuOTVjLTAuMTcsMC4xNC0wLjI2LDAuMTItMC4zNi0wLjA3Yy0wLjA4LTAuMTUtMC4xOS0wLjMtMC4zMS0wLjQyCgkJYy0wLjQ3LTAuNDgtMS4xNy0wLjM3LTEuNDcsMC4yM0M1OC4wMiwzMS4wNSw1Ny45OSwzMS40OSw1Ny45OSwzMS45M3oiLz4KCTxwYXRoIGQ9Ik04NC40MywyOC43MmMwLjQtMC4yOCwwLjc1LTAuNTQsMS4xOS0wLjZjMC4xOS0wLjAyLDAuMzctMC4wNSwwLjU2LTAuMDRjMC45NiwwLjA1LDEuMDcsMC4yLDAuODUsMS4xMgoJCWMtMC4xMywwLjU3LTAuMjcsMS4xNS0wLjQsMS43MmMwLDAuMDEtMC4wMiwwLjAxLTAuMDQsMC4wMmMtMC4xNC0wLjAyLTAuMi0wLjE1LTAuMzEtMC4yM2MtMC40Mi0wLjMtMC44OC0wLjQyLTEuMzYtMC4yCgkJYy0wLjQ1LDAuMjEtMC40OCwwLjY1LTAuNDgsMS4wN2MtMC4wMSwxLjE4LDAsMi4zNi0wLjAxLDMuNTNjMCwwLjA5LTAuMDEsMC4xOSwwLDAuMjhjMC4wMSwwLjE4LTAuMDcsMC4yMy0wLjI0LDAuMjMKCQljLTAuNjgtMC4wMS0xLjM3LTAuMDEtMi4wNSwwYy0wLjMyLDAuMDEtMC4yNS0wLjIxLTAuMjUtMC4zOGMwLTIuMSwwLTQuMiwwLTYuM2MwLTAuMTMsMC4wMS0wLjI3LDAtMC40CgkJYy0wLjAyLTAuMjQsMC4wNy0wLjMzLDAuMzItMC4zMmMwLjU4LDAuMDIsMS4xNSwwLjAyLDEuNzMsMEM4NC4yNiwyOC4yMSw4NC41MSwyOC4yMyw4NC40MywyOC43MnoiLz4KPC9nPgo8L3N2Zz4K" />
              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyMCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOiMwNDA0MDQ7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGQ9Ik0yNi4wMiwxNy4wNGgtMjZjMCw4LjE1LDAuMDIsMTYuMjktMC4wMiwyNC40NGMwLDEuMDIsMC4xOSwxLjM2LDEuMywxLjM0YzQuMDktMC4wOCw4LjE4LTAuMDIsMTIuMjctMC4wMwoJCWMyLjI4LTAuMDEsNC44MSwwLjU3LDYuNzYtMC4yNGMxLjk1LTAuODEsMy4zLTMuMDIsNC45NS00LjU4YzAuNTctMC41MywwLjc2LTEuMDksMC43NS0xLjg1QzI2LjAxLDI5Ljc1LDI2LjAyLDIzLjM5LDI2LjAyLDE3LjA0egoJCSBNMTIuMjEsMjcuNjhINy4yM3Y1LjgzaDEuNDN2LTQuMmgzLjU1djcuNjFoLTUuNGwtMy4yLTMuMnYtOS44MWgzLjU0djEuNTdoNS4wNlYyNy42OHogTTIxLjc5LDI4Ljk2aC0zLjUydi0xLjk3aC0xLjZ2Ny4wOWgxLjU1CgkJdi0zLjY2aDMuNTd2My42NmwtMi45NCwyLjk0aC01LjdWMjYuODJsMy0zbDUuNjQsMC4wOVYyOC45NnoiLz4KCTxwYXRoIGQ9Ik0xMjAsMzYuNTVjLTMuMzEsMC4xNC0zLjMxLDAuMTQtMy4zMS0zLjA3YzAtMi44NiwwLjA1LTUuNzItMC4wMi04LjU3Yy0wLjAzLTEuMDYsMC4yOS0xLjQ0LDEuMzYtMS4zMgoJCWMwLjY1LDAuMDcsMS4zMi0wLjAyLDEuOTgtMC4wNUMxMjAsMjcuODgsMTIwLDMyLjIyLDEyMCwzNi41NXoiLz4KCTxwYXRoIGQ9Ik0xMDQsMzAuOWMtMC4xMy0xLjUyLTAuNTgtMi45MS0yLjA3LTMuNjJjLTEuNDItMC42OC0yLjY2LTAuMTQtMy43OCwwLjkzYzAtMC45NSwwLjAxLTEuNywwLTIuNDUKCQljLTAuMDUtMi41MSwwLjQxLTIuMDctMi4xNy0yLjE5Yy0xLjAxLTAuMDUtMS4xNSwwLjM2LTEuMTQsMS4yMmMwLjA0LDMuNDQsMCw2Ljg3LDAuMDMsMTAuMzFjMC4wMSwwLjQ5LTAuMzgsMS4zMiwwLjM1LDEuNDQKCQljMC43NywwLjEyLDEuNzksMC40OSwyLjM5LTAuMzFjMC40Ni0wLjYzLDAuNjUtMC4zMywxLjA3LTAuMDRjMS43NiwxLjE5LDMuODMsMC42Miw0Ljc4LTEuMjhDMTA0LjEsMzMuNjIsMTA0LjEyLDMyLjI3LDEwNCwzMC45egoJCSBNMTAwLjYyLDMyLjg0Yy0wLjEsMC43MS0wLjM5LDEuMzEtMS4yMSwxLjI4Yy0wLjc5LTAuMDMtMS4xNC0wLjU3LTEuMTYtMS4zMmMtMC4wMi0wLjYxLTAuMDctMS4yMS0wLjA0LTEuODIKCQljMC4wNS0wLjc3LDAuMzktMS40MiwxLjI1LTEuNDJjMC43OSwwLDEuMDksMC42MSwxLjE3LDEuMzNjMC4wMywwLjMyLDAuMDgsMC42NSwwLjEzLDAuOTlDMTAwLjcxLDMyLjIsMTAwLjY2LDMyLjUyLDEwMC42MiwzMi44NHoKCQkiLz4KCTxwYXRoIGQ9Ik02Ni40NCwyOC4zMmMxLjM4LTEuNDgsMi45LTEuNjQsNC40NC0wLjk0YzEuNTEsMC42OSwxLjcyLDIuMTIsMS43LDMuNmMtMC4wMiwxLjUxLTAuMDUsMy4wMSwwLjAxLDQuNTIKCQljMC4wMywwLjgyLTAuMTQsMS4xNC0xLjA3LDEuMTRjLTIuMy0wLjAyLTIuMjksMC4wMy0yLjMtMi4yYzAtMS4xMy0wLjAxLTIuMjYtMC4wNC0zLjM5Yy0wLjAyLTAuNy0wLjItMS40LTEuMDItMS40NwoJCWMtMC44My0wLjA3LTEuMjgsMC41MS0xLjQ1LDEuMjhjLTAuMzIsMS40OS0wLjE3LDMtMC4xNCw0LjVjMC4wMiwwLjk2LTAuMiwxLjQxLTEuMjQsMS4yNmMtMC40Mi0wLjA2LTAuODYtMC4wMy0xLjI4LTAuMDEKCQljLTAuNTgsMC4wNC0wLjg2LTAuMTQtMC44Ni0wLjc5YzAuMDItMy44MSwwLjAyLTcuNjIsMC0xMS40NGMwLTAuNjMsMC4yNi0wLjc3LDAuODUtMC44MWMyLjUzLTAuMTgsMi41NC0wLjIsMi40OSwyLjI2CgkJQzY2LjU0LDI2LjU4LDY2LjQ5LDI3LjMzLDY2LjQ0LDI4LjMyeiIvPgoJPHBhdGggZD0iTTExNC40MiwzNS4wOGMwLjA3LTAuNywwLjAyLTEuNDEsMC4wMi0yLjEyYzAtMC43NiwwLjAxLTEuNTEsMC0yLjI2Yy0wLjAzLTIuNDEtMS4yMi0zLjYzLTMuNjctMy43MQoJCWMtMS4xNS0wLjA0LTIuMjcsMC4xMi0zLjM3LDAuNDdjLTAuNDcsMC4xNS0xLjE3LDAuMjQtMC43MiwwLjk5YzAuMzQsMC41NywwLjE5LDEuNzksMS41MSwxLjI0YzAuNy0wLjI5LDEuNDQtMC40OSwyLjIyLTAuMwoJCWMwLjQ4LDAuMTEsMC43NiwwLjQ1LDAuNjksMC45MmMtMC4wNiwwLjQ5LTAuNTIsMC4yOC0wLjgxLDAuMjhjLTEsMC0xLjk5LDAuMTEtMi45NCwwLjQ2Yy0xLjUxLDAuNTctMi4xNiwxLjc3LTEuODcsMy4zOAoJCWMwLjI3LDEuNDksMS4zMywyLjM0LDIuOTIsMi4zNWMwLjk4LDAsMS44OC0wLjI2LDIuNjItMC45M2MwLjMxLTAuMjgsMC41Ni0wLjUyLDAuOCwwLjA4YzAuNDUsMS4xMiwxLjQ4LDAuNzEsMi4yMiwwLjYKCQlDMTE0Ljc5LDM2LjQyLDExNC4zOCwzNS41OSwxMTQuNDIsMzUuMDh6IE0xMTEuMTksMzIuOTRjLTAuMDEsMC45Ni0wLjUyLDEuNDQtMS4zOCwxLjUzYy0wLjUsMC4wNS0wLjk2LTAuMTctMC45Ny0wLjc4CgkJYy0wLjAzLTEuMTYsMC44OS0xLjEzLDEuNjctMS4yOUMxMTEuMDEsMzIuMywxMTEuMjQsMzIuNDgsMTExLjE5LDMyLjk0eiIvPgoJPHBhdGggZD0iTTkyLjYyLDM1Ljg5Yy0wLjAyLTIuMDIsMC4wMy00LjA1LTAuMDgtNi4wNmMtMC4wNy0xLjM1LTAuOTItMi4yMy0yLjIzLTIuNjJjLTEuNTYtMC40Ni0zLjExLTAuMjQtNC42MiwwLjIzCgkJYy0wLjQsMC4xMi0xLjQxLTAuMDItMC44OCwwLjkzYzAuMzMsMC41OSwwLjE0LDEuOTIsMS41NywxLjMxYzAuNjktMC4yOSwxLjQzLTAuNSwyLjIxLTAuMjljMC40MywwLjEyLDAuNjQsMC40MiwwLjYzLDAuODMKCQljLTAuMDEsMC41Mi0wLjQ1LDAuMzktMC43NSwwLjM4Yy0wLjkxLTAuMDMtMS44LDAuMS0yLjY3LDAuMzRjLTEuNzIsMC40Ny0yLjQ1LDEuNzQtMi4xMiwzLjU4YzAuMjcsMS41NCwxLjUzLDIuNDEsMy4yNSwyLjI1CgkJYzEuMDMtMC4xLDEuOTItMC40OSwyLjctMS4zOGMwLjIzLDAuMzksMC4zMywwLjY2LDAuNTEsMC44NmMwLjU3LDAuNjUsMS4zMywwLjI1LDIsMC4zMkM5Mi42NiwzNi42Myw5Mi42MiwzNi4yMiw5Mi42MiwzNS44OXoKCQkgTTg5LjQsMzIuOTZjLTAuMDYsMC45My0wLjU5LDEuNDctMS41MSwxLjUzYy0wLjUyLDAuMDMtMC45NC0wLjMtMC45Mi0wLjg1YzAuMDQtMS4wOSwwLjk0LTEuMTEsMS44Ni0xLjI3CgkJQzg5LjE4LDMyLjI5LDg5LjQzLDMyLjQ2LDg5LjQsMzIuOTZ6Ii8+Cgk8cGF0aCBkPSJNNDkuNDIsMjcuMjVjLTIuNjQtMC44My01LjIsMC4wOC02LjA3LDIuMjRjLTAuNzYsMS44OS0wLjgxLDMuODEsMC40NCw1LjUyYzEuMzEsMS43OSwzLjI5LDEuOTMsNS4yOCwxLjcyCgkJYzIuNDctMC4yNiwyLjQ5LTAuMzMsMi4yNy0yLjg4Yy0wLjM4LDAuMTItMC42NSwwLjIxLTAuOTIsMC4yOWMtMS4xNiwwLjMtMi4zMiwwLjU5LTMuNDctMC4wM2MtMC4zOS0wLjIxLTAuNzItMC41NS0wLjYzLTEuMDEKCQljMC4xLTAuNTQsMC42MS0wLjMyLDAuOTUtMC4zM2MxLjI4LTAuMDIsMi41NywwLDMuODYtMC4wMmMwLjQxLDAsMC44MiwwLjEsMC45NC0wLjU1QzUyLjQ5LDMwLjA3LDUxLjMzLDI3Ljg2LDQ5LjQyLDI3LjI1egoJCSBNNDcuNjcsMzAuODFjLTAuNDUsMC4wMS0xLjIzLDAuMDQtMS4yNi0wLjZjLTAuMDMtMC42NSwwLjY1LTEsMS4zNC0wLjk5YzAuNzEsMC4wMSwxLjI4LDAuNDcsMS4yNSwxLjA5CgkJQzQ4Ljk2LDMwLjgsNDguMjUsMzAuODIsNDcuNjcsMzAuODF6Ii8+Cgk8cGF0aCBkPSJNMzkuMDYsMzYuNzljLTIuMTUtMC4wMS0zLjA2LTAuOC0zLjI0LTIuODNjLTAuMDktMC45OC0wLjAxLTEuOTctMC4wNS0yLjk2Yy0wLjAyLTAuNTksMC4yMy0xLjE5LTAuNzktMS40OAoJCWMtMC43Mi0wLjIxLTAuNTEtMS4xLDAuMTQtMS41M2MwLjY1LTAuNDMsMS4yNi0wLjksMS40LTEuNjhjMC4yNi0xLjM5LDEuMy0xLjA3LDIuMi0xLjA0YzAuNiwwLjAyLDAuNDQsMC41NSwwLjQsMC44NgoJCWMtMC4xMiwwLjkzLDAuMzIsMS4xNywxLjE1LDEuMDVjMC44OC0wLjEzLDEuMjQsMC4xNCwxLjIyLDEuMTFjLTAuMDIsMC45Ny0wLjE1LDEuNTYtMS4zLDEuMzVjLTAuOTMtMC4xNy0xLjE1LDAuMy0xLjA3LDEuMTEKCQljMC4wNSwwLjUxLDAuMDQsMS4wNCwwLDEuNTVjLTAuMTEsMS4zNSwwLjExLDIuMzEsMS44NCwxLjcyYzAuMzgtMC4xMywwLjcxLDAuMDMsMC42NCwwLjQ3Yy0wLjExLDAuNjcsMC40NywxLjU3LTAuNTYsMS45NgoJCUM0MC4zOSwzNi43MiwzOS42OSwzNi44NiwzOS4wNiwzNi43OXoiLz4KCTxwYXRoIGQ9Ik04Mi4yNCwzMy41MWMtMC4wNywxLjI5LDAuNSwyLjY0LTEuNDIsMy4wOGMtMi41MiwwLjU3LTQuOTItMC4xNi01Ljg3LTJjLTAuOTgtMS44OS0wLjYzLTQuODMsMC43My02LjI0CgkJYzEuMzEtMS4zNSw0LjItMS43Myw2LjE2LTAuOTRjMC43OSwwLjMyLDAuNjIsMC43OCwwLjMzLDEuMThjLTAuMzUsMC40OCwwLjA0LDEuNjctMS4zNCwxLjI2Yy0yLjE5LTAuNjUtMy4xNywwLjExLTMuMSwyLjE4CgkJYzAuMDUsMS42NywwLjc5LDIuMzEsMi40NiwyLjA1QzgwLjg0LDMzLjk5LDgxLjQ2LDMzLjczLDgyLjI0LDMzLjUxeiIvPgoJPHBhdGggZD0iTTYxLjQzLDMzLjQyYy0wLjIsMS4yOCwwLjU0LDIuNTktMS4yMiwzLjA5Yy0yLjI2LDAuNjQtNC43NCwwLjEtNS44My0xLjQ1Yy0xLjI1LTEuNzgtMS4xLTUuMDMsMC4zMi02LjYKCQljMS4zMy0xLjQ3LDQuNDMtMS45Miw2LjM2LTEuMDJjMC45MiwwLjQzLDAuMzIsMC45NCwwLjE0LDEuMzZjLTAuMjMsMC41NC0wLjEsMS40My0xLjMyLDEuMDNjLTIuMTYtMC43LTMuMjcsMC4zMi0zLjAxLDIuNTQKCQljMC4xNiwxLjM3LDAuNzksMS44NSwyLjIxLDEuNzVDNTkuODYsMzQuMDgsNjAuNTUsMzMuNzUsNjEuNDMsMzMuNDJ6Ii8+CjwvZz4KPC9zdmc+Cg==" />
              <img src="https://www.altschoolafrica.com/_next/static/images/disrupt_africa-ae03c84dabe8cc2d1d4f166319e0be03.svg" />
            </div>
          </div>
          <div className="collab" ref={tl1Ref}>
            <div className="collab_flex">
              <div className="collab_item">
                <div className="collab_title">Collaborate with us</div>
                <div>
                  Interested in inspiring the next generation of top tech
                  talent? Collaborate with us. We are committed to helping as
                  many young Africans kickstart a career in technology by
                  providing them with access to quality technical education by
                  real world experts.
                </div>
                <button className="collab_button">
                  <div>Learn more</div>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE3MiA3LjAwMDE3TDYuODA4IDEuNjM2MTdMOC4yMjIgMC4yMjIxNjhMMTYgOC4wMDAxN0w4LjIyMiAxNS43NzgyTDYuODA4IDE0LjM2NDJMMTIuMTcyIDkuMDAwMTdIMFY3LjAwMDE3SDEyLjE3MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                    alt="arrow right icon"
                  />
                </button>
              </div>
              <img
                className="collab_img"
                src="https://www.altschoolafrica.com/_next/static/images/collab-f2eb368cd3bfe1f1437509e2d75bafaa.png"
              />
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="footer_inner">
            <div>
              <div className="footer_flex">
                <div className="footer_group footer_first">
                  <div>Powered by</div>
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.8355 21.2065H12.4222L7.61035 36.2221H10.5104L11.8422 32.0976H18.5015L19.8978 36.2221H22.7978L17.8355 21.2065ZM12.6155 29.7132L15.1289 21.9584L17.7066 29.7132H12.6155ZM26.7665 36.2436V21.2065H24.1028V36.2436H26.7665ZM32.6384 25.1591V21.2065H29.9747V25.1591H28.3636V27.2428H28.6214C28.6214 27.2428 29.9747 27.2428 29.9747 28.7251C29.9747 29.3695 29.9747 33.5154 29.9747 33.5154C29.9747 35.0406 31.1992 36.2436 32.7029 36.2436H34.5288V33.8806C34.5288 33.8806 33.9058 33.8806 33.4762 33.8806C33.0251 33.8806 32.6384 33.4939 32.6384 33.0428V28.9184C32.6384 27.3288 29.2658 27.2428 28.7073 27.2428H34.5288V25.1591H32.6384ZM16.0741 47.945C16.0741 47.945 13.1955 47.2791 13.1096 47.2576C12.1429 46.9999 11.3266 46.5273 11.3266 45.5391C11.3266 44.465 12.637 43.5843 14.2911 43.5843C16.3103 43.5843 17.4489 44.8302 17.4489 46.0547H20.2629C20.2629 43.4339 18.2222 41.2213 14.2911 41.2213C10.9615 41.2213 8.51257 43.0043 8.51257 45.5606C8.51257 48.2028 10.1881 49.4702 12.637 50.0287C12.637 50.0287 15.537 50.6947 15.6015 50.7162C16.7185 50.9954 17.6422 51.5539 17.6422 52.6495C17.6422 54.0028 15.9666 54.8621 14.2052 54.7117C11.8207 54.5184 10.94 52.9502 10.94 51.8332H8.14739C8.14739 54.2821 10.1881 56.9887 14.2481 57.0961C17.2985 57.1606 20.4563 55.485 20.4563 52.6495C20.4563 50.0287 18.6518 48.568 16.0741 47.945ZM27.3013 54.5828C25.6043 54.5828 24.7021 52.9717 24.7021 51.1243C24.7021 49.2554 25.8191 47.6658 27.2798 47.6658C28.4398 47.6658 29.3635 48.525 29.6858 49.7065H32.5643C32.0917 46.9354 29.8791 45.3028 27.2583 45.3028C24.3154 45.3028 21.7591 47.8806 21.9095 51.468C22.0384 54.8191 24.4443 56.9243 27.3228 56.9243C30.008 56.9243 32.0058 55.1413 32.5213 52.7139H29.5569C29.3206 53.6806 28.4613 54.5828 27.3013 54.5828ZM37.0457 50.1576C37.0457 50.1791 37.0457 50.2006 37.0457 50.2221C37.0457 50.2006 37.0457 50.1791 37.0457 50.1576ZM40.0961 45.3458C38.4635 45.4747 37.0672 47.1717 37.0457 50.1576C37.0672 48.6754 37.7331 47.6013 39.2583 47.6013C40.9338 47.6013 41.4709 48.8473 41.4709 50.2221V56.688H44.156V49.3199C44.156 46.7421 42.0294 45.1954 40.0961 45.3458ZM34.382 41.651V56.688H37.0457V41.651H34.382ZM51.386 45.3028C48.529 45.3028 45.9083 47.4295 45.9083 51.1243C45.9083 54.8191 48.486 56.9028 51.386 56.9243C54.3075 56.9028 56.8853 54.7976 56.8853 51.1243C56.8853 47.4295 54.2431 45.3028 51.386 45.3028ZM51.386 54.5613C49.9683 54.5613 48.5935 53.4443 48.5935 51.1243C48.5935 48.9332 49.9468 47.6873 51.386 47.6658C52.8468 47.6873 54.2001 48.9547 54.2001 51.1243C54.2001 53.4443 52.8253 54.5613 51.386 54.5613ZM63.7631 45.3028C60.906 45.3028 58.2853 47.4295 58.2853 51.1243C58.2853 54.8191 60.8631 56.9028 63.7631 56.9243C66.6846 56.9028 69.2623 54.7976 69.2623 51.1243C69.2623 47.4295 66.6201 45.3028 63.7631 45.3028ZM63.7631 54.5613C62.3453 54.5613 60.9705 53.4443 60.9705 51.1243C60.9705 48.9332 62.3238 47.6873 63.7631 47.6658C65.2238 47.6873 66.5772 48.9547 66.5772 51.1243C66.5772 53.4443 65.2023 54.5613 63.7631 54.5613ZM73.8201 56.688V41.651H71.1564V56.688H73.8201Z"
                      fill="white"
                    />
                    <path
                      d="M73.8518 32.9629H37.4073V36.2221H73.8518V32.9629Z"
                      fill="white"
                    />
                  </svg>
                  <div className="footer_svg-group">
                    <a target="_blank">
                      <svg
                        width="19"
                        height="16"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.92 2.1688C20.15 2.53061 19.32 2.76837 18.46 2.88209C19.34 2.3342 20.02 1.46586 20.34 0.421778C19.51 0.93865 18.59 1.30046 17.62 1.50721C16.83 0.61819 15.72 0.101318 14.46 0.101318C12.11 0.101318 10.19 2.0861 10.19 4.53607C10.19 4.88755 10.23 5.22868 10.3 5.54914C6.74 5.36307 3.57 3.59537 1.46 0.917975C1.09 1.56923 0.88 2.3342 0.88 3.14052C0.88 4.6808 1.63 6.04534 2.79 6.82064C2.08 6.82064 1.42 6.61389 0.84 6.30377C0.84 6.30377 0.84 6.30377 0.84 6.33478C0.84 8.48497 2.32 10.2837 4.28 10.6868C3.92 10.7902 3.54 10.8419 3.15 10.8419C2.88 10.8419 2.61 10.8109 2.35 10.7592C2.89 12.5062 4.46 13.8087 6.35 13.8398C4.89 15.0389 3.04 15.7418 1.02 15.7418C0.68 15.7418 0.34 15.7212 0 15.6798C1.9 16.941 4.16 17.6749 6.58 17.6749C14.46 17.6749 18.79 10.9143 18.79 5.05294C18.79 4.85653 18.79 4.67046 18.78 4.47405C19.62 3.8538 20.34 3.06816 20.92 2.1688Z"
                          fill="white"
                        />
                      </svg>
                    </a>

                    <a target="_blank">
                      <svg
                        className="footer_svg"
                        width="19"
                        height="18"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.8 0H14.2C17.4 0 20 2.68773 20 5.99571V14.6791C20 16.2693 19.3889 17.7943 18.3012 18.9187C17.2135 20.0432 15.7383 20.6748 14.2 20.6748H5.8C2.6 20.6748 0 17.9871 0 14.6791V5.99571C0 4.40555 0.61107 2.88051 1.69878 1.7561C2.78649 0.631689 4.26174 0 5.8 0ZM5.6 2.06748C4.64522 2.06748 3.72955 2.45957 3.05442 3.15748C2.37928 3.85539 2 4.80196 2 5.78896V14.8859C2 16.943 3.61 18.6074 5.6 18.6074H14.4C15.3548 18.6074 16.2705 18.2153 16.9456 17.5174C17.6207 16.8195 18 15.8729 18 14.8859V5.78896C18 3.73181 16.39 2.06748 14.4 2.06748H5.6ZM15.25 3.6181C15.5815 3.6181 15.8995 3.75424 16.1339 3.99657C16.3683 4.2389 16.5 4.56757 16.5 4.91028C16.5 5.25298 16.3683 5.58165 16.1339 5.82398C15.8995 6.06631 15.5815 6.20245 15.25 6.20245C14.9185 6.20245 14.6005 6.06631 14.3661 5.82398C14.1317 5.58165 14 5.25298 14 4.91028C14 4.56757 14.1317 4.2389 14.3661 3.99657C14.6005 3.75424 14.9185 3.6181 15.25 3.6181ZM10 5.16871C11.3261 5.16871 12.5979 5.71327 13.5355 6.68259C14.4732 7.65191 15 8.9666 15 10.3374C15 11.7083 14.4732 13.0229 13.5355 13.9923C12.5979 14.9616 11.3261 15.5061 10 15.5061C8.67392 15.5061 7.40215 14.9616 6.46447 13.9923C5.52678 13.0229 5 11.7083 5 10.3374C5 8.9666 5.52678 7.65191 6.46447 6.68259C7.40215 5.71327 8.67392 5.16871 10 5.16871ZM10 7.2362C9.20435 7.2362 8.44129 7.56293 7.87868 8.14452C7.31607 8.72612 7 9.51493 7 10.3374C7 11.1599 7.31607 11.9487 7.87868 12.5303C8.44129 13.1119 9.20435 13.4387 10 13.4387C10.7956 13.4387 11.5587 13.1119 12.1213 12.5303C12.6839 11.9487 13 11.1599 13 10.3374C13 9.51493 12.6839 8.72612 12.1213 8.14452C11.5587 7.56293 10.7956 7.2362 10 7.2362Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a target="_blank">
                      <svg
                        className="footer_svg"
                        width="19"
                        height="18"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0C4.5 0 0 4.6415 0 10.3581C0 15.5268 3.66 19.8168 8.44 20.5921V13.356H5.9V10.3581H8.44V8.07353C8.44 5.47883 9.93 4.05227 12.22 4.05227C13.31 4.05227 14.45 4.24868 14.45 4.24868V6.80202H13.19C11.95 6.80202 11.56 7.59801 11.56 8.41466V10.3581H14.34L13.89 13.356H11.56V20.5921C13.9164 20.2074 16.0622 18.9645 17.6099 17.0878C19.1576 15.2111 20.0054 12.8242 20 10.3581C20 4.6415 15.5 0 10 0Z"
                          fill="white"
                        />
                      </svg>
                    </a>

                    <a target="_blank">
                      <svg
                        width="19"
                        height="16"
                        viewBox="0 0 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#ffffff"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <defs> </defs>{" "}
                          <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            {" "}
                            <g
                              id="Dribbble-Light-Preview"
                              transform="translate(-180.000000, -7479.000000)"
                              fill="#ffffff"
                            >
                              {" "}
                              <g
                                id="icons"
                                transform="translate(56.000000, 160.000000)"
                              >
                                {" "}
                                <path
                                  d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                                  id="linkedin-[#161]"
                                >
                                  {" "}
                                </path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </a>
                    <a target="_blank">
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 -3 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <title>youtube [#168]</title>{" "}
                          <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                          <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            {" "}
                            <g
                              id="Dribbble-Light-Preview"
                              transform="translate(-300.000000, -7442.000000)"
                              fill="#ffffff"
                            >
                              {" "}
                              <g
                                id="icons"
                                transform="translate(56.000000, 160.000000)"
                              >
                                {" "}
                                <path
                                  d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                                  id="youtube-[#168]"
                                >
                                  {" "}
                                </path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div>Tel: +23470049214896</div>
                  <div>+Tel: 012701842</div>
                </div>
                <div className="footer_group">
                  <div className="footer_title">Schools</div>
                  <div>School of Engineering</div>
                  <div>School of Product</div>
                  <div>School of Data</div>
                </div>
              </div>
              <div className="desktop-mini">
                ©2023 Altschool Africa. All rights reserved.
              </div>
            </div>
            <div className="footer_group">
              <div className="footer_title">Specializations</div>
              <div>Frontend Engineering</div>
              <div>Backend Engineering</div>
              <div>Cloud Engineering</div>
              <div>Product Design</div>
              <div>Product Marketing</div>
              <div>Product Management</div>
              <div>Data Engineering</div>
              <div>Data Analysis</div>
              <div>Data Science</div>
            </div>
            <div className="footer_group">
              <div className="footer_title">Companies</div>
              <div>Hire our Grads</div>
              <div>Collaborate with us</div>
            </div>
            <div className="footer_group">
              <div className="footer_title">About Us</div>
              <div>Our Story</div>
              <div>Blog</div>
            </div>
            <div className="footer_group">
              <div className="footer_title">Resources</div>
              <div>Privacy and Policy</div>
              <div>FAQs</div>
            </div>
            <div className="mobile-mini footer_copy">
              ©2023 Altschool Africa. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
      {/* <div className="scroll_top" onClick={() => navigate("/#hero")}>
        <svg
          stroke="currentColor"
          fill="#ffffff"
          stroke-width="0"
          viewBox="0 0 448 512"
          class="scrollToTop__AngleUp-sc-81p8j0-5 bxdbwY"
          height="14"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
        </svg>
      </div> */}
    </div>
  );
};

export default Home;
