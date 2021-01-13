/* import React from "react";
import FullPage from "./components/FullPage";
// /* import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";
// import About from "./components/About"; */
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import React, { Component } from "react";
//  import Pdf from "./components/resume/resume";
// import "./App.css";
//  import nyc from "public/assets/nyc.jpg"

// function App() {
//   return (
//     <React.Fragment>
//       <Router>
//         <div>
//           <Switch>
//             <Route exact path="/" component={FullPage} />
//           </Switch>
//         </div>
//       </Router>
//     </React.Fragment>
//   );
// }

// export default App;
//   */ */
import React, { Component } from "react";
import Header from "./components/Header";
import FullPage from "./components/FullPage";
import Footer from "./components/Footer";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Header />
        <FullPage />
        <Footer />
      </div>
    );
  }
}

export default App;
