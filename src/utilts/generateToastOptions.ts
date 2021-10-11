const generateToastOptions = (rtlStatus: boolean, rtlClass: string) => {
    return {
        hideProgressBar: true,
        autoClose: 2000,
        position: 'bottom-center',
        closeButton: false,
        className: rtlStatus ? rtlClass : ''
    } as {}
}

export default generateToastOptions