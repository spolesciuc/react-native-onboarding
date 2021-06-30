import React from 'react';

const useAutoPlay = (isPaused: boolean, defaultDuration: number = 15000) => {
  const [progress, setProgress] = React.useState(0);
  const [isRun, setIsRun] = React.useState(false);

  const onStart = React.useCallback(() => {
    setProgress(0);
    setIsRun(true);
  }, []);

  const onFinish = React.useCallback(() => {
    setIsRun(false);
  }, []);

  React.useEffect(() => {
    let i;

    let tick = 0;
    i = setInterval(() => {
      if (isPaused) {
        return;
      }
      const nextTick = tick + 1000;
      console.log({ nextTick, defaultDuration });
      const value = +(nextTick / defaultDuration).toFixed(2);
      if (nextTick >= defaultDuration) {
        clearInterval(i);
        setProgress(1);
      } else {
        tick = nextTick;
        setProgress(value);
      }
    }, 1000);
    return () => {
      onFinish();
      clearInterval(i);
    };
  }, [defaultDuration, isPaused, isRun, onFinish]);

  return { progress, onStart };
};

export default useAutoPlay;
