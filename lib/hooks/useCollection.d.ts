declare const useCollection: () => {
    onPauseStart: () => void;
    onPauseEnd: () => void;
    onNext: () => void;
    onPrev: () => void;
    progress: import("react-native").Animated.Value;
    slideIndex: number;
};
export default useCollection;
