export default class TimeBasedCache {
    constructor(timeout) {
        this.timeout = timeout;
        this.cache = {};
    }

    setData(key, value) {
        this.cache[key] = {
            ...value,
            _time_: Date.now()
        };
    }

    getData(key) {
        const value = this.cache[key];
        if (!value) {
            return null;
        }

        if (Date.now() - value._time_ > this.timeout) {
            delete this.cache[key];
            return null;
        }

        /* eslint-disable-next-line no-unused-vars */
        const { _time_, ...rest } = value;
        return rest;
    }


}