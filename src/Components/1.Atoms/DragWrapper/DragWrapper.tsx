import React, { FC, Key, ReactElement, useCallback, useEffect, useState } from "react";
import DragMouse from "../../0.Cores/DragMouse/DragMouse";
import styles from "./DragWrapper.styles";

interface IDragWrapper {
	children: ReactElement[];
	changePosition: (old: any) => any;
}

type TDragElement = {
	child: ReactElement;
	position: number;
};

const DragWrapper: FC<IDragWrapper> = (props) => {
	const { children, changePosition } = props;

	const [dragElement, setDragElement] = useState<TDragElement | null>(null);

	useEffect(() => {
		return () => {
			droppingElem();
		};
	}, []);

	function renderElement() {
		const newChild: ReactElement[] = [];
		newChild.push(spacesElement("first", 0));

		React.Children.forEach(children, (child, index) => {
			if (child === dragElement?.child) return;
			newChild.push(wrapElement(child));
			newChild.push(spacesElement(child.key, index + 1));
		});

		return newChild;
	}

	function spacesElement(key: Key | null, position: number) {
		return <div key={key + "spaces"} onMouseUp={(event) => drop(position, event)} css={styles.wrapper(!!dragElement)} />;
	}

	function wrapElement(el: ReactElement) {
		return (
			<div key={el.key} draggable={"true"} onDragStart={() => drag(el)}>
				{el}
			</div>
		);
	}

	function droppingElem() {
		setDragElement(null);
		document.removeEventListener("mouseup", dropElementEmpty);
	}

	const dropElementEmpty = useCallback(() => {
		droppingElem();
	}, [children]);

	function drag(reactElement: ReactElement) {
		if (dragElement) return;

		document.addEventListener("mouseup", dropElementEmpty);
		const indexStartElement = children.findIndex((el) => el.key === reactElement.key);

		if (indexStartElement !== -1) {
			setDragElement({ child: reactElement, position: indexStartElement });
		}
	}

	function drop(lastPosition: number, event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		if (!dragElement) return;

		event.stopPropagation();

		changePosition((old: any[]) =>
			old.reduce((sum: typeof old, cur, i) => {
				i === lastPosition && sum.push(old[dragElement!.position]);

				i !== dragElement!.position && sum.push(cur);
				if (old.length - 1 === i && i + 1 === lastPosition) sum.push(old[dragElement!.position]);
				return sum;
			}, []),
		);

		droppingElem();
	}

	return (
		<>
			{renderElement().map((el) => el)}
			{dragElement && <DragMouse>{dragElement?.child}</DragMouse>}
		</>
	);
};

export default DragWrapper;
