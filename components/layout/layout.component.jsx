import Header from "../header/header.component";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout;