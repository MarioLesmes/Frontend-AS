import Header                       from 'components/header.jsx';
import Footer                       from 'components/footer.jsx';
import React                        from 'react';

const Layout = ({children}) => {
  return (
    <div className='mainContainer'>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}
export default Layout