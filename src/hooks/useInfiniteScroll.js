import { useEffect } from "react";

function useInfiniteScroll(cb) {
	useEffect(() => {
		//this will be triggered once the user scroll to bottom
		function handleScroll() {
			if (
				Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
				Math.floor(document.documentElement.offsetHeight)
			) {
				cb();
			}
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [cb]);
}

export default useInfiniteScroll;
