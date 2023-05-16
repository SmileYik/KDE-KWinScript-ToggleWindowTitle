/*
	SPDX-FileCopyrightText: 2023 Smile Yik <miskyle@outlook.com>
	SPDX-License-Identifier: MIT
*/

function toggleWindowTitle() {
	const clients = workspace.clientList();
	for (let idx in clients) {
		const client = clients[idx];
		if (client.active) {
			client.noBorder = !client.noBorder;
			return;
		}
	}
}

registerShortcut("ToggleWindowTitle", "Toggle Window Title", "Meta+F1", toggleWindowTitle);
