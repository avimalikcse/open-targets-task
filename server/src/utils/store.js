/**
 * Main class function to handle all the data
 * this class is equivalent to database of the application
 * Use this class to implement the functionality related to importing, normalization,caching of data  
 */
class Store {
    constructor() {
        this.data = []
    }
    add(value) {
        this.data.push(value)
    }
    items() {
        return this.data
    }
}

export default new Store()