import { OptionsActionCreatorsType, OptionsActionsTypes, OptionsStateType } from "./types"

const initialState: OptionsStateType = {
    lang: 'en'
}

const optionsReducer = (state = initialState, action: OptionsActionCreatorsType ) => {
    switch(action.type){
        case OptionsActionsTypes.CHANGE_LANG: 
            return { ...state, lang: action.payload }

        default:    
            return state
    }
}

export default optionsReducer