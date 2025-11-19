<template>
  <div
    class="
    hidden
    fixed
    top-[40px]
    left-[20px]
    right-[20px]
    md:top-[20px]
    md:left-[80px]
    md:right-[80px]
    flex
    justify-center
    align-center
    bg-[#000615]"
  >
    <span class="font-sans font-normal text-lg lg:text-xl text-white">Resume</span>
    <Navbar class="w-fit ml-auto p-1" />
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>
