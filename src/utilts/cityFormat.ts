const cityFormat = (city: string) => {
    const match = city.split(',')
    
    if(match.length){
        return match[0]
    }

    return city
}

export default cityFormat