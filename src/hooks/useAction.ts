import { bindActionCreators } from "redux"
import { useDispatch } from 'react-redux'
import weatherActionCreators from "../store/reducers/weather/action-creators"
import optionsActionCreators from "../store/reducers/options/action-creators"

const useAction = () => {
    const dispatch = useDispatch()
    
    return bindActionCreators({
        ...weatherActionCreators,
        ...optionsActionCreators
    }, dispatch)
}

export default useAction