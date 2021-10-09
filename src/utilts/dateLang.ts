import { LangType } from "../store/reducers/options/types"

const dayTranslate = {
    'sat': { ua: 'СБ', he: 'יום שבת' },
    'sun': { ua: 'ВС', he: 'יוֹם רִאשׁוֹן' },
    'mon': { ua: 'ПН', he: 'יוֹם שֵׁנִי' },
    'tue': { ua: 'ВТ', he: 'יוֹם שְׁלִישִׁי' },
    'wed': { ua: 'СР', he: 'יום רביעי' },
    'thu': { ua: 'ЧТ', he: 'יוֹם חֲמִישִׁי' },
    'fri': { ua: 'ПТ', he: 'יוֹם שִׁישִׁי' }
}

const dateLang = (dateStr: string, lang: LangType) => {

    if(lang === 'en'){
        return dateStr
    }

    const dateArr = dateStr.split(',')
    const dafaultDay = dateArr[0].toLowerCase()

    //@ts-ignore
    const day = dayTranslate[dafaultDay][lang]

    dateArr[0] = day

    return lang === 'he' 
        ? dateArr.reverse().join(',') 
        : dateArr.join(',')
}

export default dateLang