export type LangType = 'en' | 'ua' | 'he'

export type OptionsStateType = {
    lang: LangType
}

export enum OptionsActionsTypes {
    CHANGE_LANG = 'CHANGE_LANG'
}

type ChangeLangType = {
    type: OptionsActionsTypes.CHANGE_LANG
    payload: LangType
}

export type OptionsActionCreatorsType = 
    ChangeLangType