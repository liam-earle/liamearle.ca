import { useMousePosition } from "../hooks/useMousePosition";

const FlashLight = () => {
	const mousePosition = useMousePosition();

	return (
		<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10" style={{ left: mousePosition.x, top: mousePosition.y }}>
			<div className="w-[35rem] h-[35rem] bg-cyan-900/35 rounded-full blur-[128px]" />
		</div>
	);
}

export default FlashLight;