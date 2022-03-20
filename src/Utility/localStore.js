const getDataLocal = (record, objKeys) => {
    let newRecord = JSON.parse(localStorage.getItem(record))
    if (objKeys) {
        let innerObj = newRecord[objKeys]
        return innerObj
    } else {
        return newRecord
    }
}
const setDataLocal = (record, name, value) => {
    if (name) {
        let exist = getDataLocal(record)
        let newRecord = {}
        if (exist) {
            newRecord[name] = value
            return localStorage.setItem(record, JSON.stringify(newRecord))
        } else {
            return localStorage.setItem(record, JSON.stringify(value))
        }
    } else {
        return localStorage.setItem(record, JSON.stringify(value))
    }
}
const deleteDataLocal = (record, name) => {
    let exist = getDataLocal(record)
    if (exist) {
        if (exist[name]) {
            delete exist[name]
            localStorage.setItem(record, JSON.stringify(exist))
        }
    } else {
    }
}
const clearDataLocal = (record) => {
    localStorage.removeItem(record);
}
export { getDataLocal, setDataLocal, deleteDataLocal, clearDataLocal }