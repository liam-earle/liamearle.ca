import { useEffect, useState } from 'react';

export const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updatePosition = event => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		}

		window.addEventListener('mousemove', updatePosition);

		return () => {
			window.removeEventListener('mousemove', updatePosition);
		}
	}, []);
  return mousePosition;
}