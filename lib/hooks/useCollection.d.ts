declare const useCollection: () => {
    onNext: () => void;
    onPrev: () => void;
    slideIndex: number;
    duration: number;
};
export default useCollection;
