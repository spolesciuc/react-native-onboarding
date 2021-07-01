export declare type OnboardingContextProps = {
    duration: number;
    isVisible: boolean;
    onShow: (nextCollectionId: string) => void;
    onHide: () => void;
    slideIndex: number;
    onNext: () => void;
    onPrev: () => void;
    onCollectionEnd: () => void;
};
