<template>
    <div class="leftContainer">
        <div id="cityNameBox">
            <div class="cityName">
                <p>San Fransisco</p>
                <p>Jan 28, 2023</p>
            </div>
        </div>
        <div id="contentsBox">
            <div class="button"></div>
            <div class="buttonBackground">
                <button class="forecast">Forecast</button>
                <button class="airquality">Air Quality</button>
            </div>
            <div class="weatherBox">
                <div class="weatherDegree">
                    <p>10&deg;</p>
                </div>
                <div class="weatherIcon">
                    <img src="~assets/MainLogo.jpg" alt="MainLogo" />
                </div>
                <div class="weatherData">
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
        <div class="todayWeather">
            <div class="textBox">
                <p>시간대별 날씨 정보</p>
                <p>이번 주 날씨보기</p>
            </div>
            <div class="timelyWeatherBox">
                <div class="timelyWeather">
                    <div class="icon">
                        <img src="~assets/MainLogo.jpg" alt="MainLogo" />
                    </div>
                    <div class="data">
                        <p class="time">2pm</p>
                        <p class="currentDegree">32&deg;</p>
                        <img src="~assets/MainLogo.jpg" alt="MainLogo" />
                        <p class="fall">15%</p>
                    </div>
                </div>
            </div>
        </div>
        <nav>
            <i class="fas fa-home"></i>
            <i class="fas fa-search-location"></i>
            <i class="fas fa-chart-line"></i>
            <i class="fas fa-cog"></i>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.leftContainer{
    width: 324px;
    height: 700px;
    border-radius: 50px;
    background: linear-gradient(#16455f, 0e1239);
    box-shadow: 5px 5px 10px gray;
}
</style>