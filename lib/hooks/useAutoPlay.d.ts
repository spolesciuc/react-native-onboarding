declare const useAutoPlay: (isPaused: boolean, defaultDuration?: number) => {
    progress: number;
    onStartTimer: () => void;
};
export default useAutoPlay;
