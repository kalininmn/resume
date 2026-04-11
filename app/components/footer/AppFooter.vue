<script setup lang="ts">
import gsap from 'gsap';
import ExternalLink from '~/components/common/ExternalLink.vue';
import MailIcon from '@/assets/icons/mail.svg';
import GithubIcon from '@/assets/icons/github.svg';
import TelegramIcon from '@/assets/icons/telegram.svg';

const { setElement } = useRefs();
const { staggerFadeInUp } = useAnimation();
const contactItemRefs = ref([]);
const copyItemRefs = ref([]);

onMounted(() => {
	staggerFadeInUp(contactItemRefs.value, {
		start: 'top 85%',
		yDistance: 30,
		duration: 0.5,
		scroll: true,
		onComplete() {
			gsap.set(contactItemRefs.value, { clearProps: 'transform' });
		},
	});

	staggerFadeInUp(copyItemRefs.value, {
		start: 'top 95%',
		yDistance: 30,
		duration: 0.5,
		scroll: true,
	});
});
</script>

<template>
	<div class="flex justify-center flex-wrap gap-5 mb-25 text-center">
		<external-link
			:ref="(el) => setElement(el, 0, contactItemRefs)"
			:icon="MailIcon"
			text="Email"
			class="link"
		/>
		<external-link
			:ref="(el) => setElement(el, 1, contactItemRefs)"
			:icon="GithubIcon"
			text="GitHub"
			class="link"
		/>
		<external-link
			:ref="(el) => setElement(el, 2, contactItemRefs)"
			:icon="TelegramIcon"
			text="Telegram"
			class="link"
		/>
	</div>
	<p :ref="(el) => (copyItemRefs[0] = el)" class="block text-center text-xs text-[#A3A3A3]">
		© 2025 Kalinin MN. Все права защищены.
	</p>
	<p :ref="(el) => (copyItemRefs[1] = el)" class="block text-center text-xs text-[#A3A3A3]">
		Design by <a class="underline" href="#">Lazsido</a>
	</p>
</template>
