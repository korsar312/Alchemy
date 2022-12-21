import React, { FC, memo } from "react";
import styles from "./WidgetCalendar.styles";
import Day from "../../../2.Molecules/Day/Day";
import WidgetWrappers from "../../../1.Atoms/WrappersWidget/WrappersWidget";
import { ComponentsInterface } from "../../../Components.interface";
import gameControllers from "../../../../Logic/GameData/GameController/GameController";

interface IWidgetCalendar {
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

const WidgetCalendar: FC<IWidgetCalendar> = (props) => {
	const { extStyle } = props;

	const week = gameControllers.getDays();

	return (
		<WidgetWrappers extStyle={extStyle}>
			<div css={styles.wrapper}>
				{Object.entries(week).map((day) => {
					const isCurrentDay = gameControllers.getCurrentDate().day === +day[0];

					return (
						<Day
							color={isCurrentDay ? { color: "BLUE", shard: "NORMAL" } : undefined}
							extStyle={styles.day}
							key={day[0]}
							date={{
								numberDay: day[0],
								weekDay: day[1],
							}}
						/>
					);
				})}
			</div>
		</WidgetWrappers>
	);
};

export default memo(WidgetCalendar);
