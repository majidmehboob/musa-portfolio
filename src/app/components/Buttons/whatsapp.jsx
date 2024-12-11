// "use client";
// import { stagger, useAnimate } from "framer-motion";

// // Generate a random number within a range
// const randomNumberBetween = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// // Define SVG shapes
// const Polygon = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 100 100"
//     width="10"
//     height="10"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <polygon points="50,5 90,40 75,95 25,95 10,40" fill="blue" />
//   </svg>
// );

// const SixStar = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 100 100"
//     width="10"
//     height="10"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M50 5 L61 35 H95 L68 55 L80 85 L50 65 L20 85 L32 55 L5 35 H39 Z"
//       fill="gold"
//     />
//   </svg>
// );

// const Circle = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 100 100"
//     width="10"
//     height="10"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <circle cx="50" cy="50" r="40" fill="red" />
//   </svg>
// );

// // Array of shapes for random selection
// const shapes = [Polygon, SixStar, Circle];

// // Generate random shapes
// const generateRandomShapes = (count) => {
//   return Array.from({ length: count }).map((_, index) => {
//     const Shape = shapes[Math.floor(Math.random() * shapes.length)];
//     return <Shape key={index} className={`absolute sparkle-${index}`} />;
//   });
// };

// function ButtonClient({ name }) {
//   const [scope, animate] = useAnimate();
//   const txtarray = name.split(/(\s)/);

//   const onButtonClick = () => {
//     const sparkles = Array.from({ length: 20 });
//     const sparklesAnimation = sparkles.map((_, index) => [
//       `.sparkle-${index}`,
//       {
//         x: randomNumberBetween(-100, 100),
//         y: randomNumberBetween(-100, 100),
//         scale: randomNumberBetween(1.5, 2.5),
//         opacity: 1,
//       },
//       { duration: 0.4, at: "<" },
//     ]);

//     const sparklesFadeOut = sparkles.map((_, index) => [
//       `.sparkle-${index}`,
//       { opacity: 0, scale: 0 },
//       { duration: 0.3, at: "<" },
//     ]);

//     const sparklesReset = sparkles.map((_, index) => [
//       `.sparkle-${index}`,
//       { x: 0, y: 0 },
//       { duration: 0.000001 },
//     ]);

//     animate([
//       ...sparklesReset,
//       [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
//       ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
//       ["button", { scale: 1 }, { duration: 0.1 }],
//       ...sparklesAnimation,
//       [".letter", { y: 0 }, { duration: 0.000001 }],
//       ...sparklesFadeOut,
//     ]);
//   };

//   return (
//     <div ref={scope}>
//       <button
//         onClick={onButtonClick}
//         className="relative group flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-800 md:px-6 px-3 md:py-2 py-1 md:text-2xl text-white transition-colors"
//       >
//         <span className="sr-only">{name}</span>
//         <span className="block h-8 overflow-hidden" aria-hidden>
//           {txtarray.map((letter, index) => (
//             <span
//               data-letter={letter === " " ? "\u00A0" : letter} // Non-breaking space
//               className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
//               key={`${letter}-${index}`}
//             >
//               {letter === " " ? "\u00A0" : letter}
//             </span>
//           ))}
//         </span>
//         <span
//           aria-hidden
//           className="pointer-events-none absolute inset-0 -z-10 block"
//         >
//           {generateRandomShapes(20)}
//         </span>
//       </button>
//     </div>
//   );
// }

// export default ButtonClient;

"use client";
import { stagger, useAnimate } from "framer-motion";

// Generate a random number within a range
const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function ButtonClient({ name, item }) {
  const [scope, animate] = useAnimate();
  const txtarray = name.split(/(\s)/);
  const onButtonClick = () => {
    const sparkles = Array.from({ length: 20 });
    const sparklesAnimation = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      { duration: 0.4, at: "<" },
    ]);

    const sparklesFadeOut = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      { opacity: 0, scale: 0 },
      { duration: 0.3, at: "<" },
    ]);

    const sparklesReset = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      { x: 0, y: 0 },
      { duration: 0.000001 },
    ]);

    animate([
      ...sparklesReset,
      [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      ["sprinkle", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ["sprinkle", { scale: 1 }],
      ...sparklesFadeOut,
    ]);

    setTimeout(()=>{
      window.open(item,"_blank")
    },1000)
  };

  return (
    <div ref={scope}>
      <button
        onClick={onButtonClick}
        className="relative group flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-800 md:px-6 px-3 md:py-2 py-1 md:text-2xl text-white transition-colors"
      >
       
          <span className="sr-only">{name}</span>
          <span className="block h-8 overflow-hidden" aria-hidden>
            {txtarray.map((letter, index) => (
              <span
                data-letter={letter === " " ? "\u00A0" : letter} // Non-breaking space
                className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
                key={`${letter}-${index}`}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 block"
          >
            {Array.from({ length: 20 }).map((_, index) => (
              <svg
                className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
                key={index}
                viewBox="0 0 122 117"
                width="10"
                height="10"
              >
                <path
                  className="fill-blue-600"
                  d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                />
              </svg>
            ))}
          </span>
          <svg
            className="sprinkle absolute overflow-hidden  left-30 top-0 w-full h-16 fill-sky-300 z-10 opacity-0 group-hover:opacity-100 group-hover:duration-300 group-hover:transition-all group-active:fill-sky-950"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 204.000000 113.000000"
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
          >
            <g
              stroke="none"
              transform="translate(0.000000,113.000000) scale(0.100000,-0.100000)"
            >
              <path
                d="M850 1069 c-23 -48 -27 -66 -19 -85 5 -14 9 -40 9 -57 0 -18 4 -38 9
            -46 9 -14 19 36 19 99 1 44 7 71 17 78 9 6 35 56 35 67 0 3 -9 5 -20 5 -15 0 -28 -16 -50 -61z"
              ></path>
              <path d="M1662 1099 c-24 -17 -40 -34 -38 -37 3 -3 14 2 24 11 10 10 22 17 25 17 4 0 16 9 27 20 30 30 9 24 -38 -11z"></path>
              <path d="M101 1104 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"></path>
              <path d="M1090 1070 c0 -6 7 -10 15 -10 8 0 15 2 15 4 0 2 -7 6 -15 10 -8 3 -15 1 -15 -4z"></path>
              <path d="M1 1023 c1 -53 6 -49 11 10 2 20 0 37 -4 37 -4 0 -8 -21 -7 -47z"></path>
              <path d="M1121 1024 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"></path>
              <path d="M101 984 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"></path>
              <path d="M1140 958 c0 -9 5 -20 10 -23 13 -8 13 5 0 25 -8 13 -10 13 -10 -2z"></path>
              <path d="M1286 955 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0 -7 -7 -4 -15z"></path>
              <path d="M1647 930 c-13 -15 -14 -20 -3 -20 7 0 16 9 19 20 3 11 4 20 3 20 -1 0 -9 -9 -19 -20z"></path>
              <path d="M1171 925 c1 -19 18 -51 18 -35 0 8 -4 22 -9 30 -5 8 -9 11 -9 5z"></path>
              <path
                d="M8 875 c6 -11 22 -33 36 -49 27 -30 33 -60 16 -71 -6 -4 -19 -24 -30 -45 l-20 -39 43 -32 c23 -18 43 -34 45 -34 1 -1 4 -60 7 -131 4 -121 6 -130 30 -153 19 -20 25 -22 25 -9 0 8 -7 21 -15 28 -14 12 -15 23 -14 177 1 8 -13
              116 -66 129 -29 7 -35 44 -10 64 8 7 15 19 15 27 0 7 6 16 14 19 27 10 -11 78 -68 124 -18 14 -18 14 -8 -5z"
              ></path>
              <path d="M862 830 c-12 -27 -26 -52 -31 -54 -5 -3 -2 -26 7 -51 14 -44 14 -46 -13 -85 -22 -32 -27 -47 -22 -77 11 -63 29 -65 21 -2 -6 52 -5 58 21 82 26 24 27 27 17 69 -9 34 -8 47 3 65 16 25 36 103 26 103 -3 0 -16 -22 -29 -50z"></path>
              <path d="M1200 872 c0 -16 67 -89 74 -81 3 3 -12 25 -34 49 -22 24 -40 38 -40 32z"></path>
              <path d="M1567 826 c-4 -10 -1 -13 8 -9 8 3 12 9 9 14 -7 12 -11 11 -17 -5z"></path>
              <path d="M1536 773 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"></path>
              <path d="M1270 770 c0 -5 7 -10 15 -10 8 0 15 -7 15 -15 0 -8 4 -15 9 -15 5 0 11 -10 14 -22 4 -12 9 -19 12 -16 14 13 -9 60 -36 74 -17 8 -29 10 -29 4z"></path>
              <path d="M1344 672 c-19 -12 -29 -109 -24 -236 5 -142 18 -135 17 9 -2 156 2 188 26 216 17 19 4 27 -19 11z"></path>
              <path d="M1398 673 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"></path>
              <path d="M1463 673 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"></path>
              <path d="M848 433 c2 -36 5 -63 7 -61 1 2 6 28 9 59 5 42 4 58 -6 61 -10 4 -12 -9 -10 -59z"></path>
              <path d="M1698 403 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"></path>
              <path d="M872 345 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"></path>
              <path d="M1810 345 c0 -10 40 -45 53 -45 6 0 8 1 6 3 -2 1 -16 13 -31 26 -16 14 -28 21 -28 16z"></path>
            </g>
          </svg>
      </button>
    </div>
  );
}

export default ButtonClient;
