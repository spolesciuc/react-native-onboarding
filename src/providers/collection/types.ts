export type CollectionContextProps = {
  isPaused: boolean;
  progress: number;
  onPauseStart: () => void;
  onPauseEnd: () => void;
  onNext: () => void;
  onPrev: () => void;
  onCollectionEnd: () => void;
};
