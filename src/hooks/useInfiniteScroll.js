import { useEffect } from "react";

function useInfiniteScroll(cb) {
	useEffect(() => {
		//this will be triggered once the user scroll to bottom
		function handleScroll() {
			const scrollHeight = document.documentElement.scrollHeight;
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;
			const clientHeight = document.documentElement.clientHeight;

			if (scrollHeight - scrollTop - clientHeight < 50) {
				cb();
			}
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [cb]);
}

export default useInfiniteScroll;
