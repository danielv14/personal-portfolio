import { useRef, RefObject } from 'react';

export const useScrollToElement = (): [RefObject<any>, () => void] => {
  const elementRef: RefObject<any> = useRef(null);

  const scrollToElement = (): void => {
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: 'smooth' });
  };

  return [elementRef, scrollToElement] as [RefObject<any>, () => void];
};
