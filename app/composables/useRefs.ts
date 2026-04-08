export function useRefs() {
	function setInstOfElement(
		el: ComponentPublicInstance | null,
		index: number,
		arr: Array<Element | ComponentPublicInstance | null>,
	) {
		if (el) arr[index] = el;
	}

	function setElement(
		el: ComponentPublicInstance | null,
		index: number,
		arr: Array<Element | ComponentPublicInstance | null>,
	) {
		if (el) arr[index] = el.$el;
	}

	return { setInstOfElement, setElement };
}
