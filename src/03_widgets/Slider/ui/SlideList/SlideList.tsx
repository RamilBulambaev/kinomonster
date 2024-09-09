// import { BannerMovies } from "@/03_widgets/movies";
// import { useContext } from "react";
// import { SliderContext } from "../Slider";

// export default function SlidesList() {
//   const { slideNumber, items } = useContext(SliderContext);

//   return (
//     <div
//       className="slide-list"
//       style={{ transform: `translateX(-${slideNumber * 100}%)` }}
//     >
//       {items.map((slide, index) => (
//         <BannerMovies
//           key={index}
//           nameRu={slide.nameRu}
//           year={slide.year}
//           url={slide.posterUrl}
//         />
//       ))}
//     </div>
//   );
// }
