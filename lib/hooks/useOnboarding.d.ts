declare const useOnboarding: () => {
    isVisible: boolean;
    onShow: (nextCollectionId: string) => void;
    onHide: () => void;
    onChangeCollectionId: (nextCollectionId: string) => void;
};
export default useOnboarding;
