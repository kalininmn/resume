<template>
	<div class="photo">
		<div class="photo__wrapper">
			<img
				class="w-full h-full object-cover object-center rounded-3xl"
				src="/IMG_1760 (2).jpeg"
				alt=""
			/>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.photo {
	display: flex;
	justify-content: center;
	align-items: center;
	// width: calc(var(--size) + (var(--size)*.75) * 2);
	// height: calc(var(--size) + (var(--size)*.2) * 2);
	--size: calc(100vw - 40px);
	width: var(--size);
	height: var(--size);
	// height: var(--size);
	// --width: calc(var(--size) + ((var(--size) * .75) * 2));
	// --height: calc(var(--size) + ((var(--size) * .70) * 2));
	// width: calc(hypot(var(--width), var(--height)) / 2);
	// height: calc(hypot(var(--width), var(--height)) / 2);

	@media (min-width: 768px) {
		--size: 380px;
	}
}
.photo__wrapper {
	position: relative;
	width: 70%;
	height: 70%;
	// width: var(--size);
	// height: var(--size);
	z-index: 1; // Чтобы контент был сверху

	&::before,
	&::after {
		position: absolute;
		z-index: -1;
		content: '';
		width: 100%;
		height: 75%;
		// opacity: .6;
		filter: blur(50px); // Чрезмерный блюр (400px) может "съесть" градиент

		// Начальная форма (слегка неровный овал)
		border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

		background: linear-gradient(180deg, rgba(58, 123, 255, 0.6) 0%, rgba(151, 25, 251, 0.4) 100%);

		animation:
			morph 8s linear infinite alternate,
			spin 20s linear infinite;
	}

	&::before {
		bottom: -10%;
		left: -10%;
	}

	&::after {
		top: -10%;
		right: -10%;
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
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
