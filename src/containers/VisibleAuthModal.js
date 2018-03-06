import { connect } from 'react-redux'
import { closeAuthModal, triggerLogin, triggerRegister } from '../actions/index'
import Auth from '../components/auth/Auth'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeAuthModal: () => {
      dispatch(closeAuthModal())
    },
    triggerLogin: (values) => {
      dispatch(triggerLogin(values))
    },
    triggerRegister: (values) => {
      dispatch(triggerRegister(values))
    }
  }
}

const VisibleAuth = connect(mapStateToProps, mapDispatchToProps)(Auth)

export default VisibleAuth