// This context provider must be implemented between <body></body> tags to be visible.

"use client";

import NotificationPopup, {
	NotificationPopupData,
} from "@/components/NotificationPopup";
import React, { createContext, useEffect, useRef, useState } from "react";
import { uuid } from "uuidv4";

interface NotificationsContextDataProps {
	showNotificationPopup: (data: NotificationPopupData) => void;
}

interface NotificationsContextProviderProps {
	children: React.ReactNode;
}

export const NotificationsContext = createContext(
	{} as NotificationsContextDataProps
);

export default function NotificationsContextProvider({
	children,
}: NotificationsContextProviderProps) {
	const [notifications, setNotifications] = useState<
		NotificationPopupData[]
	>([]);
	const timeoutRef = useRef<NodeJS.Timeout>();

	function showNotificationPopup(data: NotificationPopupData) {
		console.log("LENGTH: " + notifications.length);
		data.id = uuid();
		if (notifications.length >= 3) {
			notifications.splice(0, 1);
		}
		notifications.push(data);

		updateNotifications();
	}

	const updateNotifications = () => {
		setNotifications(notifications.map((it) => ({ ...it })));
	};

	function closeNotificationPopup(item: NotificationPopupData) {
		notifications.splice(notifications.indexOf(item), 1);
	}

	const data = {
		showNotificationPopup,
	} as NotificationsContextDataProps;

	useEffect(() => {
		clearTimeout(timeoutRef.current);

		timeoutRef.current = setTimeout(() => {
			setNotifications([]);
		}, 2250);
	}, [notifications]);

	return (
		<NotificationsContext.Provider value={data}>
			{children}
			<ul>
				{notifications?.map((it, index) => (
					<li key={it.id}>
						<NotificationPopup
							data={it}
							index={index}
							onProgressFinish={
								closeNotificationPopup
							}
						/>
					</li>
				))}
			</ul>
		</NotificationsContext.Provider>
	);
}
