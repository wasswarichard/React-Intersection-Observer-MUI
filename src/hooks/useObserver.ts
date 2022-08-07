import { useEffect, useState, MutableRefObject } from 'react';

const useObserver = (targetRef: MutableRefObject<any>, options: { rootMargin?: string }) => {
   const { rootMargin } = options;
   const [observerEntry, setObserverEntry] = useState<IntersectionObserverEntry>();

   useEffect(() => {
      if (!targetRef?.current) return;
      const observer = new IntersectionObserver(
         ([entry]) => {
            setObserverEntry(entry);
            if (entry.isIntersecting) {
               observer.unobserve(entry.target);
            }
         },
         { rootMargin }
      );
      observer.observe(targetRef.current);
   }, [targetRef, rootMargin]);

   return observerEntry;
};

export default useObserver;
