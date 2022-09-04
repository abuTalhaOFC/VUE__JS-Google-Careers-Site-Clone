<template>
  <div class="card">
    <div class="header">
      <div class="img"></div>
      <div class="details">
        <span class="name"></span>
        <span class="about"></span>
      </div>
    </div>
    <div class="content">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line line-3"></div>
    </div>
    <div class="btns">
      <div class="btn btn-1"></div>
      <div class="btn btn-2"></div>
    </div>
  </div>
  <!-- 2222222222222222 -->
  <div class="card">
    <div class="header">
      <div class="img"></div>
      <div class="details">
        <span class="name"></span>
        <span class="about"></span>
      </div>
    </div>
    <div class="content">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line line-3"></div>
    </div>
    <div class="btns">
      <div class="btn btn-1"></div>
      <div class="btn btn-2"></div>
    </div>
  </div>
  <!-- 2222222222222222 -->

  <!-- 3333333333333333 -->
  <div class="card">
    <div class="header">
      <div class="img"></div>
      <div class="details">
        <span class="name"></span>
        <span class="about"></span>
      </div>
    </div>
    <div class="content">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line line-3"></div>
    </div>
    <div class="btns">
      <div class="btn btn-1"></div>
      <div class="btn btn-2"></div>
    </div>
  </div>
  <!-- 3333333333333333 -->
  <!-- 4444444444444444 -->
  <div class="card">
    <div class="header">
      <div class="img"></div>
      <div class="details">
        <span class="name"></span>
        <span class="about"></span>
      </div>
    </div>
    <div class="content">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line line-3"></div>
    </div>
    <div class="btns">
      <div class="btn btn-1"></div>
      <div class="btn btn-2"></div>
    </div>
  </div>
  <!-- 4444444444444444 -->
</template>

<script>
export default {
  name: "JobListhigSkeleton",
};
</script>

<style scoped>
*::before,
*::after,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #ffff;
}

.card {
  /* max-width: 350px; */
  width: 100%;
  padding: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-bottom: 20px;
}

.card .header {
  display: flex;
  align-items: center;
}

.card .header .img {
  position: relative;
  width: 70px;
  height: 70px;
  background: #d9d9d9;
  border-radius: 50%;
  overflow: hidden;
}

.header .details {
  margin-left: 20px;
}

.details span {
  position: relative;
  display: block;
  background: #d9d9d9;
  border-radius: 10px;
  overflow: hidden;
}

.details .name {
  width: 100px;
  height: 15px;
}

.details .about {
  width: 150px;
  height: 15px;
  margin-top: 10px;
}

.card .content {
  margin: 25px 0;
}

.content .line {
  position: relative;
  height: 13px;
  margin: 10px 0;
  border-radius: 10px;
  background: #d9d9d9;
  overflow: hidden;
}

.content .line-3 {
  width: calc(100% - 40%);
}

.card .btns {
  display: flex;
}

.card .btns .btn {
  position: relative;
  width: 100%;
  height: 40px;
  background: #d9d9d9;
  border-radius: 25px;
  overflow: hidden;
}

.btns .btn-1 {
  margin-right: 8px;
}

.btns .btn-2 {
  margin-left: 8px;
}

.card .header .img::before,
.details span::before,
.content .line::before,
.btns .btn::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    #d9d9d9 0%,
    #888b94 20%,
    #d9d9d9 40%,
    #d9d9d9 100%
  );
  background-size: 450px 400px;
  background-repeat: no-repeat;
  animation: shimmer 1.4s linear infinite;
}

.details span::before,
.btns .btn-2::before {
  animation-delay: 0.29s;
}

@keyframes shimmer {
  0% {
    background-position: -450px 0px;
  }
  100% {
    background-position: 450px 0px;
  }
}
</style>
