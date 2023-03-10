import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
// import Header from "../../components/common/Header/Header";

const Layout = ({ children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);

  return (
    <main className="page" >
      
      {/* <Header /> */}
      
   
      {children}

      <footer>
        © {new Date().getFullYear()},
      </footer>
    </main>
  );
}

export default Layout;
