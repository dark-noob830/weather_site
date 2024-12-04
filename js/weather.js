class Weather {
  constructor(state, city) {
    this.apikey = "74f02c1413e304599159d5c2e377f684";
    this.state = state;
    this.city = city;
  }

  async getWeather() {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apikey}`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw Error(response.status);
    }
  }

  changeLocation(state, city) {
    this.state = state;
    this.city = city;
  }
  get location() {
    return this.state + " , " + this.city;
  }
}
