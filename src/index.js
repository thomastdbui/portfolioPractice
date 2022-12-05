import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Layout from "./pages/Layout";
// import Home from "./Home.js";
// import About from "./About.js"
// import Work from "./Work.js"
// // import Blogs from "./pages/Blogs";
// // import Contact from "./pages/Contact";
// // import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<Layout />}> */}
//           <Route index element={<Home />} />
//           <Route path="about" element = {<About />} />
//           <Route path="work" element = {<Work />} />

//           {/* <Route path="blogs" element={<Blogs />} /> */}
//           {/* <Route path="contact" element={<Contact />} /> */}
//           {/* <Route path="*" element={<NoPage />} /> */}
//         {/* </Route> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
