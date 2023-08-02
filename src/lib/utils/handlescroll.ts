function handleScroll(navbar: HTMLElement, fab?: HTMLElement) {
	let lastScrollTop = 0;
	addEventListener('scroll', () => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const isScrollingDown = scrollTop > lastScrollTop;

		navbar.style.animationTimingFunction = 'cubic-bezier(0.291, 0.281, 0, 1.2)';
		navbar.style.bottom = isScrollingDown ? '-80px' : '0';
		if (fab) {
			fab.style.animationTimingFunction = 'cubic-bezier(0.291, 0.281, 0, 1.2)';
			fab.style.bottom = isScrollingDown ? '1rem' : '6rem';
		}

		lastScrollTop = scrollTop;
	});
}

export default handleScroll;
