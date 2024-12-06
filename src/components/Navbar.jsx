import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-success">
      <div className="container-fluid">
          {/* Logo Section */}
          <a className="navbar-brand" href="#">
          <img
            src="../public/house-cleaning-service-logo-design-template-cleaning-company-logo-sign-symbol_565585-470.jpg"
            alt="Logo"
            className="navbar-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ margin: "0px 750px", fontSize: "20px" }}
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
          </ul>

          {/* Login Button */}
          <button
            className="btn btn-outline-success ms-3"
            type="button"
            style={{
              color: "white",
              background: "#9294b4",
              margin: "0px 15px",
            }}
          >
            Log In
          </button>

          {/* Search Bar */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-success">
//       <div className="container-fluid">
//         {/* Logo Section */}
//         <a className="navbar-brand" href="#">
//           <img
//             src="/path-to-your-logo/logo.png"
//             alt="Logo"
//             className="navbar-logo"
//           />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Register
//               </a>
//             </li>
//           </ul>

//           {/* Login Button */}
//           <button
//             className="btn btn-outline-success ms-3"
//             type="button"
//             style={{
//               color: "white",
//               background: "#9294b4",
//               margin: "0px 15px",
//             }}
//           >
//             Log In
//           </button>

//           {/* Search Bar */}
//           <form className="d-flex">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

