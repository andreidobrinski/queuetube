export function viewTransition(action: () => void) {
	if (!document.startViewTransition) {
		action();
		return;
	}
	document.startViewTransition(action);
}
