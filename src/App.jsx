import React, { useEffect } from 'react';
// import Splide from 'splide';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import 'splide/dist/css/splide.min.css';
import './App.css';

function App() {
    // useEffect(() => {
    //     const splide = new Splide('.splide');
    //     const bar = splide.root.querySelector('.my-slider-progress-bar');

    //     // Updates the bar width whenever the carousel moves:
    //     splide.on('mounted move', () => {
    //         const end = splide.Components.Controller.getEnd() + 1;
    //         const rate = Math.min((splide.index + 1) / end, 1);
    //         bar.style.width = `${100 * rate}%`;
    //     });

    //     splide.mount();

    //     return () => {
    //         splide.destroy();
    //     };
    // }, []);

    return (
      <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <img src="image1.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image2.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image2.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image2.jpg" alt="Image 2"/>
      </SplideSlide>
    </Splide>
    );
}

export default App;