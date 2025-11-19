import { ref, onMounted, onUnmounted, watchEffect, type ShallowRef } from "vue";

export enum Sections {
  "Experience" = "experience",
  "Skills" = "skills",
  "Projects" = "projects",
  "Contacts" = "contacts",
}

const activeSection = ref("experience");

let observer: IntersectionObserver | null = null;

export function useSectionObserver(
  sectionRefs: any = []
) {
  // const sectionsList = ["experience", "skills", "projects", "contacts"];

  onMounted(() => {
    const sectionWeakMap = new WeakMap();

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -40% 0px",
      threshold: 0.1,
    };

    const handleObserver: IntersectionObserverCallback = (entries) => {
      // Находим последнюю секцию, которая в данный момент "пересекает" зону наблюдения
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Берем ID последнего видимого элемента
        const lastEntry = visibleEntries.at(-1);
        activeSection.value = sectionWeakMap.get(lastEntry?.target);
      }
    };

    observer = new IntersectionObserver(handleObserver, options);

    function observe() {
      sectionRefs.forEach((ref) => {
        if (ref.value.$el) {
          sectionWeakMap.set(ref.value.$el, ref.value.refName)
          observer!.observe(ref.value.$el);
        }
      });
    }

    watchEffect(() => {
      observe();
    });
  });

  onUnmounted(() => {
    // Обязательно отключаем наблюдатель при размонтировании компонента
    if (observer) {
      observer.disconnect();
    }
  });

  return { activeSection };
}
