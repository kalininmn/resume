<template>
  <div class="photo w-[360px] h-[320px] rounded-3xl">
    <div class="photo__wrapper w-full h-full rounded-3xl overflow-hidden">
      <img
        class="w-full h-full object-cover object-center"
        src="/photo.jpeg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.photo {
  position: relative;
  &::before,
  &::after {
    position: absolute;
    z-index: -1;
    content: "";
    width: 325px;
    height: 275px;
    opacity: 0.5;
    border-radius: 50%;
    backdrop-filter: blur(400px);
  }
  &::before {
    top: 30%;
    right: 50%;
    transform: rotate(-17.46deg);

    background: linear-gradient(
      180deg,
      rgba(58, 123, 255, 0.5) 0%,
      rgba(151, 25, 251, 0.25) 100%
    );
  }
  &::after {
    bottom: 30%;
    left: 50%;
    background: linear-gradient(
      180deg,
      rgba(58, 123, 255, 0.5) 0%,
      rgba(151, 25, 251, 0.25) 100%
    );
  }
}
</style>
