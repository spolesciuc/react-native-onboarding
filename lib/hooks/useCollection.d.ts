declare const useCollection: () => {
    onPauseStart: () => void;
    onPauseEnd: () => void;
    onNext: () => void;
    onPrev: () => void;
    slideProgress: number;
};
export default useCollection;
