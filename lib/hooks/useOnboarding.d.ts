declare const useOnboarding: () => {
    isVisible: boolean;
    onShow: (nextCollectionId: string) => void;
    onHide: () => void;
    collectionId: string | undefined;
    onChangeCollectionId: (nextCollectionId: string) => void;
};
export default useOnboarding;
