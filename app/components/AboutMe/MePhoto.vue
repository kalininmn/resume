<template>
  <div class="photo">
    <div class="photo__wrapper w-[140px] h-[140px] lg:w-[200px] lg:h-[200px]">
      <img
        class="w-full h-full object-cover object-center rounded-3xl"
        src="/photo.jpeg"
        alt=""
      >
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.photo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(var(--size) + (var(--size)*.5) * 2);
  height: calc(var(--size) + (var(--size)*.2) * 2);
  --size: 140px;
  @media (min-width: 1024px) {
    --size: 200px;
  }
}
// .photo__wrapper {
//   position: relative;
//   &::before,
//   &::after {
//     position: absolute;
//     z-index: -1;
//     content: "";
//     // width: 325px;
//     // height: 275px;
//     width: 100%;
//     height: 75%;
//     opacity: 0.5;
//     border-radius: 50%;
//     backdrop-filter: blur(400px);
//   }
//   &::before {
//     top: 30%;
//     right: 50%;
//     transform: rotate(-17.46deg);

//     background: linear-gradient(
//       180deg,
//       rgba(58, 123, 255, 0.5) 0%,
//       rgba(151, 25, 251, 0.25) 100%
//     );
//   }
//   &::after {
//     bottom: 30%;
//     left: 50%;
//     background: linear-gradient(
//       180deg,
//       rgba(58, 123, 255, 0.5) 0%,
//       rgba(151, 25, 251, 0.25) 100%
//     );
//   }
// }
.photo__wrapper {
  position: relative;
  z-index: 1; // Чтобы контент был сверху

  &::before,
  &::after {
    position: absolute;
    z-index: -1;
    content: "";
    width: 100%;
    height: 75%;
    opacity: 0.6;
    filter: blur(100px); // Чрезмерный блюр (400px) может "съесть" градиент

    // Начальная форма (слегка неровный овал)
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

    background: linear-gradient(
      180deg,
      rgba(58, 123, 255, 0.6) 0%,
      rgba(151, 25, 251, 0.4) 100%
    );

    animation: morph 8s linear infinite alternate, spin 20s linear infinite;
  }

  &::before {
    top: 30%;
    right: 50%;
  }

  &::after {
    bottom: 30%;
    left: 50%;
    animation-duration: 10s, 25s; // Разная скорость для эффекта хаоса
    animation-direction: alternate-reverse, reverse;
  }
}

@keyframes morph {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
  }
  50% {
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
  }
  75% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
  }
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
