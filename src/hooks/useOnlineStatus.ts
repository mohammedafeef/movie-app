import { errorToast, successToast } from 'libs/toast';
import { useState, useEffect } from 'react';
export function useOnlineStatus() {
	const [isOnline, setIsOnline] = useState(navigator.onLine);
	const updateOnlineStatus = () => {
		if (navigator.onLine) {
			successToast("You're back online");
		} else {
			errorToast("You're offline");
		}
		setIsOnline(navigator.onLine);
	};
	useEffect(() => {
		window.addEventListener('online', updateOnlineStatus);
		window.addEventListener('offline', updateOnlineStatus);
		return () => {
			window.removeEventListener('online', updateOnlineStatus);
			window.removeEventListener('offline', updateOnlineStatus);
		};
	}, []);
	return isOnline;
}
