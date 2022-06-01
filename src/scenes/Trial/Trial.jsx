import { useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef } from "react";
import { gsap } from "gsap";
import "./Trial.css"

function Box({ children,addAnimation,index }) {
	const el = useRef();
	useEffect(() => {   
		console.log("Box effect");
		const animation = gsap.to(el.current, { x: -100 });
		addAnimation(animation, index);
		return () => animation.progress(0).kill();
  	}, [addAnimation, index]);

	return <div className="box" ref={el}>{children}</div>;
}
const Circle = forwardRef(({ size, delay }, ref) => {
	const el = useRef();
	  
	useImperativeHandle(ref, () => {           
	  
	  // return our API
	  return {
		moveTo(x, y) {
		  gsap.to(el.current, { x, y, delay });
		}
	  };
	}, [delay]);
	
	return <div className={`circle ${size}`} ref={el}></div>;
  });

function Trial() {    
	const circleRefs = useRef([]);
  
  // reset on re-renders
  circleRefs.current = [];
  useEffect(() => {
    
    circleRefs.current.forEach(ref => ref.moveTo(100 / 2, 100 / 2));
    
    const onMove = ({ clientX, clientY }) => {      
      circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };
	window.addEventListener("pointermove", onMove);
    
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  const addCircleRef = ref => {
    if (ref) {
      circleRefs.current.push(ref);
    }    
  };

	   
	return (
		<div className="trial">   
		<p>Move your mouse around</p>
		<Circle size="sm" ref={addCircleRef} delay={0} />
		<Circle size="md" ref={addCircleRef} delay={0.1} />
		<Circle size="lg" ref={addCircleRef} delay={0.2} />
	  </div>
	);
}




// function Box({ children, addAnimation, index }) {
//   const el = useRef();
  
//   useEffect(() => {   
//     console.log("Box effect");
//     const animation = gsap.to(el.current, { x: -100 });
//     addAnimation(animation, index);
    
//     return () => animation.progress(0).kill();
//   }, [addAnimation, index]);
  
//   return <div className="box" ref={el}>{children}</div>;
// }

// function Circle({ children, addAnimation, index, rotation }) {
//   const el = useRef();
  
//   useEffect(() => {  
//     console.log("Circle effect");
//     const animation = gsap.to(el.current, { rotate: rotation, x: 100 });
//     addAnimation(animation, index);
    
//     return () => animation.progress(0).kill();
//   }, [addAnimation, index, rotation]);
  
//   return <div className="circle" ref={el}>{children}</div>;
// }


// function Trial() {    
//   const [reversed, setReversed] = useState(false);  
//   const [tl, setTl] = useState(() => gsap.timeline());
  
//   useEffect(() => {
//     console.log("App effect");
//   }, [])
  
//   const addAnimation = useCallback((animation, index) => {    
//     tl.add(animation, index * 0.1);
//   }, [tl]);
  
//   useEffect(() => {    
//     console.log("Reverse effect")
//     tl.reversed(reversed);
//   }, [reversed, tl]);
     
//   return (
//     <div className="app">   
//       <button onClick={() => setReversed(!reversed)}>Toggle</button>
//       <Box addAnimation={addAnimation} index={0}>Box</Box>
//       <Circle addAnimation={addAnimation} index={1} rotation="360">Circle</Circle>
//     </div>
//   );
// }

export default Trial;