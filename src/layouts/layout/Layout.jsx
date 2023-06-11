import PropTypes from 'prop-types'
import './index.css'

const Layout = ({children}) => {

    Layout.propTypes = {
        children: PropTypes.node.isRequired,
      }
  return (
    <div className='layout' >
      {children}
    </div>
  )
}

export default Layout