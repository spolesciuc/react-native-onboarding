export type CollectionContextProps = {
  isPaused: boolean;
  progress: number;
  slideIndex: number;
  onPauseStart: () => void;
  onPauseEnd: () => void;
  onNext: () => void;
  onPrev: () => void;
  onCollectionEnd: () => void;
};
