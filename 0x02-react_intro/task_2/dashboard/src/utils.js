function getFullYear() {
    const today = new Date()
    return today.getFullYear()
}

function getFooterCopy(isIndex){
    if (typeof isIndex === Boolean && isIndex === true){
        return 'Holberton School'
    }
    return 'Holberton School main dashboard'
}

export {getFooterCopy, getFullYear}