import React, { FC, ReactElement, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { rootElement } from "../../../index";

interface IDragMouse {
	children: ReactElement;
}

const DragMouse: FC<IDragMouse> = (props) => {
	const { children } = props;

	const dragObj = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const handleMouseMove = useCallback((event: MouseEvent) => {
		if (dragObj.current) {
			dragObj.current.style.top = `${event.y}px`;
			dragObj.current.style.left = `${event.x}px`;
		}
	}, []);

	return createPortal(
		<div
			css={{
				overflow: "hidden",
				height: "100%",
				width: "100%",
				position: "fixed",
				top: 0,
				left: 0,
			}}
		>
			<div
				ref={dragObj}
				css={{
					position: "absolute",
					zIndex: 10,
					pointerEvents: "none",
					transform: "translate(-50%, -50%)",
					opacity: 0.8,
				}}
			>
				{children}
			</div>
		</div>,
		rootElement,
	);
};

export default DragMouse;
