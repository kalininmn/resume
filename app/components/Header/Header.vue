<template>
  <div
    class="
    box-border
    rounded-b-[8px]
    bg-neutral-950/95
    backdrop-blur-sm
    shadow-[0_4px_24px_rgba(0,0,0,0.4)]
    z-50
    fixed
    top-0
		left-0
		right-0
		sm:rounded-[8px]
    sm:top-[20px]
    sm:left-auto
    sm:right-[20px]
		md:right-[40px]
		xl:right-[80px]
    flex
    justify-center
    align-center
		"
  >
    <Navbar class="w-fit mx-auto sm:ml-auto sm:mr-0 p-1" />
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>
