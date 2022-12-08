import '../css/carrousel.css'
import { Link } from 'react-router-dom'
import React, {useState, useEffect, useRef} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import HeroSlider, {Slide, Overlay, Nav} from 'hero-slider'


const img1 = "https://picsum.photos/1080/1080";
const img2 = "https://picsum.photos/300";
const img3 = "https://picsum.photos/400";
const img4 = "https://picsum.photos/500";

export default function Carrousel() {
    return (
    <HeroSlider
      height="60vh"
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100
      }}
    >

      <Slide
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: img1
        }}
      />

      <Slide
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: img2
        }}
      />

      <Slide
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: img3
        }}
      />

      <Slide
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: img4
        }}
      />

      <Nav />
    </HeroSlider>
  );
}

