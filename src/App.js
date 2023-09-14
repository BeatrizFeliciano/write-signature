import './App.css';
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i, duration: 1},
        opacity: { delay: i, duration: 0.6 }
      }
    };
  }
};


function App() {
  return (
    <motion.div className="App">
      <motion.header className="App-header">
        <motion.svg 
          width="320" 
          height="200" 
          viewBox="0 0 80 50" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
        >
          <motion.path 
            d="M17.2784 3.21967C17.7353 7.94164 17.7044 12.7096 18.4842 17.3879" 
            stroke="white" 
            stroke-linecap="round"
            variants={draw}
            custom={1}
          />
          <motion.path 
            d="M9.44063 6.83708C12.3558 4.52692 15.9409 3.31026 19.4555 2.18133C19.5717 2.14401 27.5103 -0.319879 26.1544 1.98037C24.1465 5.38672 19.4844 7.45875 16.4745 9.88508C16.2091 10.099 15.2737 10.7611 16.2735 10.6387C18.9114 10.3157 21.5254 9.37719 24.0945 8.72952C25.1525 8.46281 28.3073 7.16676 28.9345 8.91374C29.375 10.1411 28.4656 11.5639 27.8626 12.5311C26.0986 15.3607 23.9125 17.9684 21.8001 20.5363C15.9973 27.5908 10.1668 34.5639 4.90211 42.0398C3.31536 44.293 1.93882 46.4585 1 49.0402" 
            stroke="white" 
            stroke-linecap="round"
            variants={draw}
            custom={1.5}
          />
          <motion.path 
            d="M8.23483 28.843C12.5208 28.843 16.6125 28.7616 20.7953 27.7042C23.0313 27.1389 26.6817 26.2828 28.2813 24.405C28.8668 23.7176 29.8851 21.8089 29.1689 20.888C28.6135 20.1739 26.7294 22.1239 26.3219 22.4455C22.4491 25.503 26.4058 28.735 30.1905 28.0726C34.6909 27.2851 36.7531 20.134 37.4756 16.4835C37.5282 16.2176 37.9447 11.9513 37.1071 12.5312C35.7622 13.4623 35.4183 17.0283 35.2314 18.4429C34.9047 20.9166 35.6977 27.8935 39.5187 27.8047C41.3643 27.7618 42.2988 21.1689 42.2988 23.0149C42.2988 23.68 41.9476 25.5274 42.4998 25.9792C43.7987 27.042 45.2123 25.7061 46.2177 24.9241" 
            stroke="white" 
            stroke-linecap="round"
            variants={draw}
            custom={2.3}
          />
          <motion.path 
            d="M44.4089 19.1966C44.0306 19.1966 43.6221 19.1378 44.1075 18.8951" 
            stroke="white" 
            stroke-linecap="round"
            variants={draw}
            custom={3.3}
          />
          <motion.path 
            d="M50.3423 22.2111C49.5991 21.0219 49.2706 20.3824 48.2322 21.6751C47.5499 22.5245 47.0204 23.7553 47.6962 24.7566C49.31 27.1473 52.6676 27.5094 54.0602 24.7566C54.7808 23.3322 53.9221 20.3947 54.3282 23.1154C54.6421 25.2189 56.6642 25.8313 58.4815 25.2256" 
            stroke="white" 
            stroke-linecap="round"
            variants={draw}
            custom={3.6}
          />
          <motion.path 
            d="M53.8201 19.1029C53.6923 19.1934 53.6689 19.3455 53.8646 19.2599C53.9348 19.2292 54.0118 19.0036 53.9143 19.15" 
            stroke="white" 
            stroke-linecap="round"
            variants={draw}
            custom={4.5}
          />
          <motion.path 
            d="M64.0948 20.5216C62.3303 20.5476 58.6828 21.6389 59.6313 24.1925C60.5604 26.6939 63.5688 24.7321 64.2616 23.2226C64.6045 22.4757 65.0202 21.4834 64.7414 20.6468C64.4987 19.9187 64.2302 21.1526 64.2095 21.335C64.0102 23.0887 65.0093 25.9221 67.0982 25.0268" 
            stroke="white" 
            stroke-linecap="round"
            variants={draw}
            custom={4.8}
          />
          <motion.path 
            d="M67.2859 21.0848C67.2859 22.4576 67.3077 23.8112 67.5154 25.1728C67.628 25.911 67.6532 25.1452 67.6822 24.8912C67.7901 23.9473 68.1007 22.8865 68.7042 22.1381C69.7515 20.8395 71.0194 21.1523 71.0194 22.8994C71.0194 23.6441 70.6866 24.5969 70.936 25.3188C71.2402 26.1995 72.3728 25.4749 72.7714 25.1311C73.4464 24.5489 74.0705 23.8395 74.5652 23.0975C74.5958 23.0515 74.9393 22.3821 74.5652 22.6699C73.4829 23.5024 73.8147 25.1645 75.1909 25.371C76.9505 25.6349 78.4034 24.4595 78.6011 22.6804C78.6944 21.8402 78.2771 21.1304 77.5269 20.7511C76.1716 20.0656 75.5715 20.8119 74.6069 21.6479" 
            stroke="white" 
            stroke-linecap="round"
            variants={draw}
            custom={5.6}
          />
        </motion.svg>
      </motion.header>
    </motion.div>
  );
}

export default App;
