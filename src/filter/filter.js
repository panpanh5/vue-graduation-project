

class format {
    formatDate(date) {
        let target = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`
        return target;
    }
}
module.exports = format