// import { getPremieres } from "@/06_shared/api/apiMovies";
// import { getDate } from "@/06_shared/getDate/getDate";
// import { useEffect, useState } from "react";
// import { createContext } from "react";
// import styles from "./Slider.module.css";
// import Arrows from "./Arrows/Arrows";
// import SlidesList from "./SlideList/SlideList";
// import Dots from "./Dots/Dots";

// export const SliderContext = createContext(null);

// function Slider({
//   width = "100%",
//   height = "100%",
//   autoPlay = false,
//   autoPlayTime = 5000,
// }) {
//   const [items, setItems] = useState([]);
//   const [slide, setSlide] = useState(0);
//   const [touchPosition, setTouchPosition] = useState(null);

//   useEffect(() => {
//     const fetchPremeres = async () => {
//       const response = await getPremieres();
//       if (response.items.length > 10) {
//         setItems(
//           response.items
//             .filter((item) => item.year === getDate().year)
//             .slice(0, 10)
//         );
//       } else {
//         setItems(response.items);
//       }
//     };
//     fetchPremeres();
//   }, []);

//   const changeSlide = (direction = 1) => {
//     let slideNumber = 0;

//     if (slide + direction < 0) {
//       slideNumber = items.length - 1;
//     } else {
//       slideNumber = (slide + direction) % items.length;
//     }

//     setSlide(slideNumber);
//   };

//   const goToSlide = (number) => {
//     setSlide(number % items.length);
//   };

//   const handleTouchStart = (e) => {
//     const touchDown = e.touches[0].clientX;

//     setTouchPosition(touchDown);
//   };

//   const handleTouchMove = (e) => {
//     if (touchPosition === null) {
//       return;
//     }

//     const currentPosition = e.touches[0].clientX;
//     const direction = touchPosition - currentPosition;

//     if (direction > 10) {
//       changeSlide(1);
//     }

//     if (direction < -10) {
//       changeSlide(-1);
//     }

//     setTouchPosition(null);
//   };

//   useEffect(() => {
//     if (!autoPlay) return;

//     const interval = setInterval(() => {
//       changeSlide(1);
//     }, autoPlayTime);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [slide, items]);

//   return (
//     <div
//       style={{ width, height }}
//       className={styles.slider}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//     >
//       <SliderContext.Provider
//         value={{
//           goToSlide,
//           changeSlide,
//           slidesCount: items.length,
//           slideNumber: slide,
//           items,
//         }}
//       >
//         <Arrows />
//         <SlidesList />
//         <Dots />
//       </SliderContext.Provider>
//     </div>
//   );
// }

// export default Slider;
