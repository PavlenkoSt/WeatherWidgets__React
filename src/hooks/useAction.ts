import { bindActionCreators } from "redux"
import { useDispatch } from 'react-redux'
import weatherActionCreators from "../store/reducers/weather/action-creators"

const useAction = () => {
    const dispatch = useDispatch()
    
    return bindActionCreators({
        ...weatherActionCreators
    }, dispatch)
}

export default useAction