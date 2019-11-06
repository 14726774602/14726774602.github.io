<template>
  <div class="app">
    <audio class="music" :src="musicOne">您的浏览器太老，不支持H5音频播放，请更新浏览器！</audio>
    <div class="app-banner"></div>
    <div class="com-nav">
      <div class="music">
        <p class="prev-music" @click="playPrev()">
          <img src="static/img/prev.png" alt />
        </p>
        <p class="play-music" @click="playMusic('.music')">
          <img v-if="music.musicShow" src="static/img/play.png" alt />
          <img v-if="!music.musicShow" src="static/img/pause.png" alt />
        </p>
        <p class="next-music" @click="playNext()">
          <img src="static/img/next.png" alt />
        </p>
      </div>
      <div class="cursor" @click="cursorShow">
        <div class="nav-button rotate-button">
          <span class="nav-bar"></span>
          <span class="nav-bar" v-if="showPrise"></span>
          <span class="nav-bar"></span>
        </div>
      </div>
      <div class="nav-title">
        <p @click="bgShow(0)">
          <router-link to="/">首页</router-link>
        </p>
        <p @click="bgShow(1)">
          <router-link to="/page1">page1</router-link>
        </p>
        <p @click="bgShow(2)">
          <router-link to="/page2">page2</router-link>
        </p>
        <p @click="bgShow(3)">
          <router-link to="/page3">page3</router-link>
        </p>
        <p @click="bgShow(4)">
          <router-link to="/page4">page4</router-link>
        </p>
      </div>
    </div>
    <div class="com-title">
      <img src="/static/img/title.png" alt />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "zhuxuan",
  data() {
    return {
      showPrise: true,
      bgArr: [
        "/static/img/bg1.jpg",
        "/static/img/bg2.png",
        "/static/img/bg3.jpg",
        "/static/img/bg4.jpg",
        "/static/img/bg5.jpg"
      ],
      music: {
        musicShow: false,
        songs: 0,
        content: [
          "static/music/1.mp3",
          "static/music/2.ogg",
          "static/music/3.ogg",
          "static/music/1.mp3"
        ]
      },
      musicOne: "static/music/1.mp3"
    };
  },
  methods: {
    //定义方法的地方
    //监听方法click事件等，执行drawFeatures方法
    cursorShow() {
      if (this.showPrise) {
        this.showPrise = false;
        $(".nav-button")
          .children(":first")
          .addClass("left-rotate");
        $(".nav-button")
          .children(":last")
          .addClass("right-rotate");
        $(".nav-title").css("right", "0");
        $(".nav-title").css("transform", "scale(1)");
      } else {
        this.showPrise = true;
        $(".nav-button")
          .children(":first")
          .removeClass("left-rotate");
        $(".nav-button")
          .children(":last")
          .removeClass("right-rotate");
        $(".nav-title").css("right", "-100px");
        $(".nav-title").css("transform", "scale(0)");
      }
    },
    bgShow(n) {
      $(".app-banner").css(
        "background",
        "url('" + this.bgArr[n] + "')no-repeat center top"
      );
      $(".app-banner").css("background-size", "100% auto");
    },
    //音乐播放和暂停
    playMusic(el) {
      var audio = document.querySelector(el);
      if (this.music.musicShow) {
        audio.pause();
        this.music.musicShow = false;
      } else {
        audio.play();
        this.music.musicShow = true;
      }
    },
    //上一曲-下一曲
    playPrev() {
      if (this.music.songs > 0) {
        this.music.songs -= 1;
      } else {
        this.music.songs = this.music.content.length - 1;
      }
      this.musicOne = this.music.content[this.music.songs];
      this.music.musicShow = true;
      setTimeout(function() {
        document.querySelector(".music").play();
      }, 100);
    },
    playNext() {
      if (this.music.songs < this.music.content.length - 1) {
        this.music.songs += 1;
      } else {
        this.music.songs = 0;
      }
      this.musicOne = this.music.content[this.music.songs];
      this.music.musicShow = true;
      setTimeout(function() {
        document.querySelector(".music").play();
      }, 100);
    },
    // 判断当前音乐是否暂停
    audioJudge(){
      let audio=document.querySelector(".music");
      setInterval(() => {
        if(audio.pause()){
          console.log('暂停中')
        }else{
          console.log('播放中')
        }
      }, 1000);
    }
  },

  created() {
    //初始化数据
  },
  mounted() {
    //页面初始化方法
    // this.audioJudge();
  }
};
</script>

<style scoped>
.music {
  width: 200px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: url("/static/img/play_bg.png") no-repeat center;
  background-size: 100% auto;
}
.music p {
  width: 30px;
  margin: 0 20px;
}
.app-banner {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: url("/static/img/bg1.jpg") no-repeat left top;
  background-size: 100% auto;
  transition: background 0.8s linear 0s;
}
.com-nav {
  position: fixed;
  top: 5%;
  right: 3%;
  z-index: 1000;
}
.cursor {
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #ade5fc;
  background: #c5fefc;
  transition: all 0.5s ease 0s;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.5;
}
.cursor:hover {
  background: #27fffe;
  transition: all 0.5s ease 0s;
}
.nav-button {
  width: 16px;
  margin-top: -1px;
}
.nav-bar {
  background-color: #2b2b2b;
  border-radius: 1px;
  display: block;
  width: 100%;
  height: 2px;
  margin-bottom: 2px;
}
.left-rotate {
  transform: rotate(45deg);
  margin: 0;
  position: relative;
  top: 1px;
}
.right-rotate {
  transform: rotate(-45deg);
  position: relative;
  margin: 0;
  top: -1px;
}
.nav-title {
  width: 320px;
  height: 320px;
  position: relative;
  border: 1px solid #ade5fc;
  border-radius: 50%;
  top: 0;
  right: -100px;
  transform: scale(0);
  transition: all 0.8s ease 0s;
}
.nav-title p {
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #ade5fc;
  position: absolute;
  top: 120px;
  left: 120px;
  cursor: pointer;
  transition: all 0.5s ease 0s;
}
.nav-title p a {
  color: #9d65cb;
  display: block;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 80px;
  border-radius: 50%;
}
.router-link-exact-active {
  background: #ade5fc;
}

.nav-title p:nth-child(2) {
  animation: action1 8s linear infinite;
}
.nav-title p:nth-child(3) {
  animation: action2 8s linear infinite;
}
.nav-title p:nth-child(4) {
  animation: action3 8s linear infinite;
}
.nav-title p:nth-child(5) {
  animation: action4 8s linear infinite;
}
.nav-title:hover p {
  animation-play-state: paused;
}
.nav-title p:hover {
  background: #ade5fc;
  transition: all 0.5s ease 0s;
}
@keyframes action {
  from {
    transform: rotate(0deg) translate(85px, 85px) rotate(0deg);
  }
  to {
    transform: rotate(0deg) translate(85px, 85px) rotate(0deg);
  }
}
@keyframes action1 {
  from {
    transform: rotate(-180deg) translate(85px, 85px) rotate(180deg);
  }
  to {
    transform: rotate(180deg) translate(85px, 85px) rotate(-180deg);
  }
}
@keyframes action2 {
  from {
    transform: rotate(-90deg) translate(85px, 85px) rotate(90deg);
  }
  to {
    transform: rotate(270deg) translate(85px, 85px) rotate(-270deg);
  }
}
@keyframes action3 {
  from {
    transform: rotate(0deg) translate(85px, 85px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate(85px, 85px) rotate(-360deg);
  }
}
@keyframes action4 {
  from {
    transform: rotate(90deg) translate(85px, 85px) rotate(-90deg);
  }
  to {
    transform: rotate(450deg) translate(85px, 85px) rotate(-450deg);
  }
}
.com-title {
  width: 100%;
  margin: 0 auto;
}
.com-title img {
  display: block;
  width: 200px;
  margin: 10px auto;
}
</style>
