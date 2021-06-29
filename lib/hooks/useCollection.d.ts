declare const useCollection: () => {
    onPauseStart: () => void;
    onPauseEnd: () => void;
    onNext: () => void;
    onPrev: () => void;
    progress: number;
};
export default useCollection;
