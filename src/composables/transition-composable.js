import { reactive } from 'vue';
// 用途不明

const transitionState = reactive({
  transitionComplete: null,
});

export const useTransitionComposable = () => {
  const toggleTransitionComplete = (value) => {
    transitionState.transitionComplete = value;
  };

  return {
    transitionState,
    toggleTransitionComplete,
  };
};
