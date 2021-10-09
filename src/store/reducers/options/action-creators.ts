import { LangType, OptionsActionsTypes } from "./types"

const optionsActionCreators = {
    changeLang: (lang: LangType) => ({ type: OptionsActionsTypes.CHANGE_LANG, payload: lang })
}

export default optionsActionCreators