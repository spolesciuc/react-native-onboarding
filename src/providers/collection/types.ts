export type CollectionContextProps = {
  duration: number;
  slideIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onCollectionEnd: () => void;
};
