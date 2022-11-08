import { useLayoutEffect,useEffect } from "react";

const useIsomorphicEffects = ()=>{
const canUseDOM: boolean = !!(
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
    );
    
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

return useIsomorphicLayoutEffect
}


export default useIsomorphicEffects;