import React, { useState } from 'react';
import './App.css';

function App() {
	const [allowedPlayers, setAllowedPlayers] = React.useState({
		player1: 'X',
		player2: 'O',
		selectedPlayer: 'X',
		winnerExists: '',
	});

	const [ticktack, setTickTack] = useState({
		1: {
			value: '',
		},
		2: {
			value: '',
		},
		3: {
			value: '',
		},
		4: {
			value: '',
		},
		5: {
			value: '',
		},
		6: {
			value: '',
		},
		7: {
			value: '',
		},
		8: {
			value: '',
		},
		9: {
			value: '',
		},
	});

	const winCases = [
		[1, 5, 6],
		[1, 2, 3],
		[3, 6, 9],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[1, 5, 9],
		[3, 5, 7],
	];

	function checkifUserCheckerTheWinCase(userSelectedBoxArr, winCaseArr) {
		// there are two array ar1 and ar2
		// arr2 value matches with arr1 then return true else false
		const winCaseLength = winCaseArr.length || [];
		const result = winCaseArr.filter((item) =>
			userSelectedBoxArr.includes(item)
		);
		if (result.length === winCaseLength) {
			return true;
		} else {
			return false;
		}
	}

	function toCheckIfAnyoneWin() {
		//   check for player 1

		const player1SelectedBoxes = [];
		const is1Winner = doBasicStuff(
			player1SelectedBoxes,
			allowedPlayers.player1
		);
		const player2SelectedBoxes = [];
		const is2Winner = doBasicStuff(
			player2SelectedBoxes,
			allowedPlayers.player2
		);

		console.log(is1Winner, is2Winner);
		if (is1Winner) {
			setAllowedPlayers((prev) => ({
				...prev,
				winnerExists: allowedPlayers.player1,
			}));
		}
		if (is2Winner) {
			setAllowedPlayers((prev) => ({
				...prev,
				winnerExists: allowedPlayers.player2,
			}));
		}
	}

	function doBasicStuff(playerSelectBox, playerName) {
		Object.keys(ticktack).map((key) => {
			// console.log();
			if (ticktack[key]['value'] === playerName) {
				playerSelectBox.push(parseInt(key));
			}
			return null;
		});

		let playerWin = false;
		for (let i = 0; i < winCases.length; i++) {
			playerWin = checkifUserCheckerTheWinCase(playerSelectBox, winCases[i]);
			if (playerWin) {
				break;
			}
		}

		if (playerWin) {
			return {
				winner: playerName,
			};
		}
	}

	function chooseBox(selectedPlayer, index) {
		console.log('reached here');
		setTickTack((prev) => {
			console.log('reached here 2');
			return { ...prev, [index]: { value: selectedPlayer } };
		});
	}

	React.useEffect(() => {
		toCheckIfAnyoneWin();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ticktack]);

	return (
		<div className="app">
			<div className="room1">
				<div
					className="box"
					onClick={() => {
						chooseBox(allowedPlayers.selectedPlayer, 1);
					}}
				>
					{ticktack[1].value}
				</div>
				<div
					onClick={() => {
						chooseBox(allowedPlayers.selectedPlayer, 2);
					}}
					className="box"
				>
					{ticktack[2].value}
				</div>
				<div
					className="box"
					onClick={() => {
						chooseBox(allowedPlayers.selectedPlayer, 3);
					}}
				>
					{ticktack[3].value}
				</div>
			</div>
			<div className="room1">
				<div
					className="box"
					onClick={() => {
						chooseBox(allowedPlayers.selectedPlayer, 4);
					}}
				>
					{ticktack[4].value}
				</div>
				<div
					className="box"
					onClick={() => {
						chooseBox(allowedPlayers.selectedPlayer, 5);
					}}
				>
					{ticktack[5].value}
				</div>
				<div
					className="box"
					onClick={() => {
						chooseBox(allowedPlayers.selectedPlayer, 6);
					}}
				>
					{ticktack[6].value}
				</div>
			</div>
			<div className="room1">
				<div
					className="box"
					onClick={() => {
						chooseBox(allowedPlayers.selectedPlayer, 7);
					}}
				>
					{ticktack[7].value}
				</div>
				<div
					className="box"
					onClick={() => {
						chooseBox(allowedPlayers.selectedPlayer, 8);
					}}
				>
					{ticktack[8].value}
				</div>
				<div
					onClick={() => {
						chooseBox(allowedPlayers.selectedPlayer, 9);
					}}
					className="box"
				>
					{ticktack[9].value}
				</div>
			</div>
		</div>
	);
}

export default App;
