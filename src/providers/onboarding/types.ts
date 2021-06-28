export type OnboardingContextProps = {
  isVisible: boolean;
  collectionId: string | undefined;
  onShow: () => void;
  onHide: () => void;
  onChangeCollectionId: (nextCollectionId: string) => void;
};
