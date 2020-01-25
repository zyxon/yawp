export default class GetWeatherService {

    async getWeather(cityName) {
        return new Promise(resolve => {
            setTimeout(() => {
                const weatherData = this.generateWeather();
                
                resolve({
                    ...weatherData,
                    cityName
                });
            }, 1000);
        })
    }

    generateWeather() {
        const baseTemp = this.random(42);
        const negative = this.randomBool();

        const temp = baseTemp * (negative ? -1 : 1);
        const isRainy = this.randomBool();
        const isRainBig = isRainy ? this.randomBool() : false;
        const isCloudy = isRainy ? true : this.randomBool();

        const now = new Date();
        const currentHrs = now.getHours();

        const isDark = !(currentHrs < 17 && currentHrs > 7);
        const isSunny = !isDark && this.randomBool();

        return {
            temp,
            isCloudy,
            isRainy,
            isRainBig,
            isDark,
            isSunny
        }
    }

    random(max) {
        return Math.random() * max;
    }

    randomBool() {
        return Math.round(Math.random()) === 0;
    }
}