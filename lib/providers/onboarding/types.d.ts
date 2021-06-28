export declare type OnboardingContextProps = {
    isVisible: boolean;
    collectionId: string | undefined;
    onShow: (nextCollectionId: string) => void;
    onHide: () => void;
    onChangeCollectionId: (nextCollectionId: string) => void;
};
