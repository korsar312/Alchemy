import React from "react";
import styles from "./GamePage.styles";
import { observer } from "mobx-react";

/**
 * Страница игры
 */
const GamePage = () => {
	return <div css={styles.wrapper}></div>;
};

export default observer(GamePage);
