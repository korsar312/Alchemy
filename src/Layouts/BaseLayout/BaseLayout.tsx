import React, { Fragment, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import styles from "./BaseLayout.styles";
import { routes } from "../../Logic/SystemData/Routes/Routes/routes.config";

const BaseLayout = () => {
	const Pages = useRoutes(routes);

	return (
		<Fragment>
			<Suspense fallback={<>Круть-круть ;3</>}>
				<div css={styles.wrapper}>{Pages}</div>
			</Suspense>
		</Fragment>
	);
};

export default BaseLayout;
