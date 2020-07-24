import { useRef, RefObject } from 'react';

export const useScrollToElement = ({ offset = 0 } = {}): [RefObject<any>, () => void] => {
  const elementRef: RefObject<any> = useRef(null);

  const scrollToElement = (): void => {
    window.scrollTo({ top: elementRef.current.offsetTop + offset, behavior: 'smooth' });
  };

  return [elementRef, scrollToElement] as [RefObject<any>, () => void];
};
