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

const mounthTranslate = {
    "January": { ua: 'Січня', he: 'יָנוּאָר'},
    "February": { ua: 'Лютого', he: 'פברואר'},
    "March": { ua: 'Березня', he: 'מרץ'},
    "April": { ua: 'Квітня', he: 'אַפּרִיל'},
    "May": { ua: 'Травня', he: 'מאי'},
    "June": { ua: 'Червня', he: 'יוני'},
    "July": { ua: 'Липня', he: 'יולי'},
    "August": { ua: 'Серпня', he: 'אוגוסט'},
    "September": { ua: 'Вересня', he: 'סֶפּטֶמבֶּר'},
    "October": { ua: 'Жовтня', he: 'אוֹקְטוֹבֶּר'},
    "November": { ua: 'Грудня', he: 'נוֹבֶמבֶּר'},
    "December": { ua: 'Листопада', he: 'דֵצֶמבֶּר'}
}

const dateLang = (dateStr: string, lang: LangType) => {

    if(lang === 'en'){
        return dateStr
    }

    // --- replace day with day in the selected language

    const dateArr = dateStr.split(',')
    const dafaultDayName = dateArr[0].toLowerCase()

    //@ts-ignore
    const day = dayTranslate[dafaultDayName][lang]

    dateArr[0] = day

    // --- replace mounth with mounth in the selected language

    const dayAndMou = dateArr[1].split(' ')
    const defaultMounth = dayAndMou[2]

    //@ts-ignore
    const mounth = mounthTranslate[defaultMounth][lang]

    dayAndMou[2] = mounth

    dateArr[1] = dayAndMou.join(' ')


    return lang === 'he' 
        ? dateArr.reverse().join(', ') 
        : dateArr.join(',')
}

export default dateLang