export type CollectionContextProps = {
  isPaused: boolean;
  slideProgress: number;
  onPauseStart: () => void;
  onPauseEnd: () => void;
  onNext: () => void;
  onPrev: () => void;
  onCollectionEnd: () => void;
};
