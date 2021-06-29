export type OnboardingContextProps = {
  isVisible: boolean;
  onShow: (nextCollectionId: string) => void;
  onHide: () => void;
  onChangeCollectionId: (nextCollectionId: string) => void;
};
