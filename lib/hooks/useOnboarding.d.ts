declare const useOnboarding: () => {
    isVisible: boolean;
    onShow: (nextCollectionId: string) => void;
    onHide: () => void;
    onCollectionEnd: () => void;
};
export default useOnboarding;
