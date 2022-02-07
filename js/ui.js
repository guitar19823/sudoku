window.onload = () => {
	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	/* +++++++++++++++++++++++++++++++++++++++ User Interface +++++++++++++++++++++++++++++++++++++++ */
	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

	let main = document.getElementsByTagName('main')[0],
		sudoku = document.createElement('div'),
		button = document.createElement('input'),
		checks = document.createElement('div'),
		labelX = document.createElement('label'),
		labelMosaic = document.createElement('label'),
		labelAsterix = document.createElement('label'),
		message = document.createElement('div'),
		checkXSudoku = document.createElement('input'),
		checkMosaicSudoku = document.createElement('input'),
		checkAsterixSudoku = document.createElement('input');

	for (let i = 0; i < 9; i++) {
		let col = document.createElement('div');

		cell(col);

		col.className = 'col';
		sudoku.appendChild(col);
	}

	/**
	* cell
	* @col
	*/
	function cell(col) {
		for (let i = 0; i < 9; i++) {
			let cell = document.createElement('p');

			cell.className = 'cell';
			col.appendChild(cell);

			cell.addEventListener('click', function (e) {
				let tableNums = document.createElement('div'),
					element = document.getElementById('tableNums');

				element && element.remove();

				nums(this, tableNums, element);

				tableNums.style.left = e.clientX + 'px';
				tableNums.style.top = e.clientY + 'px';

				tableNums.id = 'tableNums';
				main.appendChild(tableNums);
			});
		}
	}

	/**
	* nums
	* @that
	* @tableNums
	*/
	function nums(that, tableNums) {
		let close = document.createElement('div'),
			del = document.createElement('p');

		for (let i = 1; i <= 9; i++) {
			let nums = document.createElement('p');

			nums.appendChild(document.createTextNode(i));
			nums.className = 'nums';
			tableNums.appendChild(nums);

			nums.addEventListener('click', function () {
				that.innerHTML = this.textContent;
				tableNums.remove();
			});

			del.addEventListener('click', function () {
				that.innerHTML = '';
				tableNums.remove();
			});
		}

		close.id = 'closeTableNums';
		close.title = 'close';
		tableNums.appendChild(close);

		del.id = 'delete';
		del.appendChild(document.createTextNode('удалить'));
		tableNums.appendChild(del);

		close.addEventListener('click', function () {
			tableNums.remove();
		});
	}

	/**
	* createLoader
	*/
	function createLoader() {
		const loader = document.createElement('div');
		const loaderCss = document.createElement('div');
		const one = document.createElement('div');
		const two = document.createElement('div');
		const three = document.createElement('div');

		loaderCss.className = 'cssload-loader';
		one.className = 'cssload-inner cssload-one';
		two.className = 'cssload-inner cssload-two';
		three.className = 'cssload-inner cssload-three';

		loaderCss.appendChild(one);
		loaderCss.appendChild(two);
		loaderCss.appendChild(three);

		loader.appendChild(loaderCss);

		loader.id = 'loader';
		main.appendChild(loader);
	}

	/**
	* removeLoader
	*/
	function removeLoader() {
		loader.remove();
	}

	main.id = 'main';
	sudoku.id = 'sudoku';

	button.id = 'button';
	button.type = 'button';
	button.value = 'Решить';

	checkXSudoku.id = 'checkXSudoku';
	checkXSudoku.type = 'checkbox';

	labelX.appendChild(checkXSudoku);
	labelX.appendChild(document.createTextNode('икс судоку'));

	checkMosaicSudoku.id = 'checkMosaicSudoku';
	checkMosaicSudoku.type = 'checkbox';

	labelMosaic.appendChild(checkMosaicSudoku);
	labelMosaic.appendChild(document.createTextNode('мозайка'));

	checkAsterixSudoku.id = 'checkAsterixSudoku';
	checkAsterixSudoku.type = 'checkbox';

	labelAsterix.appendChild(checkAsterixSudoku);
	labelAsterix.appendChild(document.createTextNode('астерикс'));

	checks.id = 'checks';

	checks.appendChild(labelX);
	checks.appendChild(labelMosaic);
	checks.appendChild(labelAsterix);

	message.id = 'message';

	main.appendChild(sudoku);
	main.appendChild(button);
	main.appendChild(checks);
	main.appendChild(message);

	/**
	* getNumbers
	*/
	function getNumbers() {
		let numbers = [],
			cell = document.getElementsByClassName('cell');

		for (let i = 0, l = cell.length; i < l; i++) {
			numbers.push(+cell[i].textContent);
		}

		return numbers;
	}

	/**
	* setNumbers
	* @dataReturn
	*/
	function setNumbers(dataReturn) {
		let cell = document.getElementsByClassName('cell');

		for (let i = 0, l = cell.length; i < l; i++) {
			cell[i].innerHTML = dataReturn[i] !== 0 ? dataReturn[i] : '';
		}
	}

	/**
	* setColors;
	* @foo
	*/
	function setColors(foo, color) {
		let cell = document.getElementsByClassName('cell');

		for (let i = 0; i < 81; i++) {
			foo(i) && (cell[i].style.background = color);
		}
	}

	/**
	* xColors
	* @n
	*/
	function xColors(n) {
		switch (n) {
			case 0: return true; case 4: return true; case 8: return true; case 20: return true; case 22: return true; case 24: return true; case 36: return true; case 38: return true; case 40: return true; case 42: return true; case 44: return true; case 56: return true; case 58: return true; case 60: return true; case 72: return true; case 76: return true; case 80: return true; default: return false;
		}
	}

	/**
	* mosaicColors
	* @n
	*/
	function mosaicColors(n) {
		switch (n) {
			case 0: return true; case 13: return true; case 20: return true; case 31: return true; case 40: return true; case 49: return true; case 60: return true; case 67: return true; case 80: return true; default: return false;
		}
	}

	/**
	* asterixColors
	* @n
	*/
	function asterixColors(n) {
		switch (n) {
			case 8: return true; case 13: return true; case 24: return true; case 31: return true; case 40: return true; case 49: return true; case 56: return true; case 67: return true; case 72: return true; default: return false;
		}
	}

	/**
	* setMessage
	* @text
	*/
	function setMessage(text) {
		message.innerHTML = `<p class="${text[1]}">${text[0]}</p>`;
	}

	checkXSudoku.addEventListener('click', function (e) {
		//e.preventDefault();
		this.checked ? (
			setColors(mosaicColors, null), checkMosaicSudoku.checked = false,
			setColors(asterixColors, null), checkAsterixSudoku.checked = false,
			setColors(xColors, '#aaa')
		) : setColors(xColors, null);
	});

	checkMosaicSudoku.addEventListener('click', function (e) {
		//e.preventDefault();
		this.checked ? (
			setColors(xColors, null), checkXSudoku.checked = false,
			setColors(asterixColors, null), checkAsterixSudoku.checked = false,
			setColors(mosaicColors, '#aaa')
		) : setColors(mosaicColors, null);
	});

	checkAsterixSudoku.addEventListener('click', function (e) {
		//e.preventDefault();
		this.checked ? (
			setColors(xColors, null), checkXSudoku.checked = false,
			setColors(mosaicColors, null), checkMosaicSudoku.checked = false,
			setColors(asterixColors, '#aaa')
		) : setColors(asterixColors, null);
	});

	button.addEventListener('click', function () {
		setTimeout(function () {
			let dataReturn = calculate(getNumbers(), checkXSudoku.checked, checkMosaicSudoku.checked, checkAsterixSudoku.checked);

			setNumbers(dataReturn[0]);
			setMessage(dataReturn[1]);
			dataReturn[1][2] && removeLoader();
		}, 0);

		createLoader();
	});

	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	/* ++++++++++++++++++++++++++++++++++++++++ SUDOKU LIST +++++++++++++++++++++++++++++++++++++++++ */
	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

	const Yarikov_Sudoku = [
		3, 0, 6, 0, 0, 7, 5, 0, 0,
		0, 8, 0, 0, 0, 1, 0, 0, 2,
		0, 0, 0, 0, 0, 0, 0, 0, 6,
		0, 0, 0, 0, 0, 0, 0, 9, 0,
		0, 4, 0, 0, 0, 3, 0, 0, 0,
		0, 0, 0, 0, 9, 4, 1, 0, 0,
		0, 0, 2, 0, 0, 4, 8, 0, 0,
		0, 0, 0, 0, 0, 9, 0, 0, 7,
		7, 4, 0, 0, 0, 0, 0, 0, 3
	];
	// setNumbers(Yarikov_Sudoku);

	const English = [
		7, 0, 8, 0, 0, 0, 5, 0, 0,
		0, 0, 0, 2, 0, 1, 0, 0, 0,
		3, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 4, 0, 3, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 8, 0, 1, 0, 0,
		0, 2, 6, 0, 0, 0, 0, 9, 0,
		0, 9, 0, 0, 0, 0, 0, 0, 0,
		6, 0, 0, 0, 7, 0, 0, 0, 0,
		0, 0, 4, 5, 0, 0, 0, 0, 0
	];
	//setNumbers(English);

	const Arto_Inkala = [
		8, 0, 0, 0, 0, 3, 0, 7, 0,
		0, 0, 0, 6, 0, 0, 0, 9, 0,
		0, 0, 0, 0, 0, 0, 2, 0, 0,
		0, 5, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 7, 0, 4, 5, 1, 0, 0,
		0, 0, 0, 7, 0, 0, 0, 3, 0,
		0, 0, 1, 0, 0, 8, 0, 9, 0,
		0, 0, 0, 5, 0, 0, 0, 0, 0,
		0, 6, 8, 0, 1, 0, 4, 0, 0
	];
	//setNumbers(Arto_Inkala);

	const AI_Escargot = [
		0, 0, 5, 8, 0, 0, 0, 7, 0,
		3, 0, 0, 0, 0, 0, 0, 1, 0,
		0, 0, 0, 0, 2, 0, 5, 0, 0,
		4, 0, 0, 0, 1, 0, 0, 0, 3,
		0, 0, 5, 0, 7, 0, 2, 0, 0,
		3, 0, 0, 0, 0, 6, 0, 8, 0,
		0, 6, 0, 0, 0, 4, 0, 0, 0,
		5, 0, 0, 0, 0, 0, 0, 0, 9,
		0, 0, 9, 0, 3, 0, 7, 0, 0
	];
	setNumbers(AI_Escargot);

	const HardSudoku1 = [
		0, 0, 5, 8, 0, 0, 0, 7, 0,
		3, 0, 0, 0, 0, 0, 0, 1, 0,
		0, 0, 0, 0, 2, 0, 5, 0, 0,
		4, 0, 0, 0, 1, 0, 0, 0, 3,
		0, 0, 5, 0, 7, 0, 2, 0, 0,
		3, 0, 0, 0, 0, 6, 0, 8, 0,
		0, 6, 0, 0, 0, 4, 0, 0, 0,
		5, 0, 0, 0, 0, 0, 0, 0, 9,
		0, 0, 9, 0, 3, 0, 7, 0, 0
	];
	//setNumbers(HardSudoku1);

	const HardSudoku2 = [
		0, 0, 9, 0, 3, 7, 1, 0, 0,
		0, 3, 0, 0, 1, 0, 7, 0, 0,
		1, 0, 8, 0, 0, 0, 0, 0, 4,
		0, 0, 0, 7, 0, 3, 5, 9, 0,
		0, 0, 3, 0, 5, 0, 0, 0, 0,
		5, 0, 7, 6, 0, 0, 4, 0, 0,
		0, 0, 0, 0, 0, 5, 4, 2, 0,
		5, 4, 0, 3, 0, 0, 0, 0, 0,
		0, 9, 0, 0, 4, 2, 0, 5, 0
	];
	//setNumbers(HardSudoku2);

	const Sudoku_1 = [
		0, 0, 6, 8, 0, 0, 0, 4, 5,
		0, 0, 2, 0, 0, 0, 0, 8, 0,
		0, 8, 4, 0, 0, 6, 2, 7, 0,
		0, 0, 9, 5, 0, 3, 0, 0, 4,
		3, 0, 7, 1, 2, 0, 6, 0, 8,
		0, 0, 1, 0, 0, 7, 0, 0, 2,
		0, 5, 1, 9, 0, 0, 0, 0, 8,
		0, 6, 0, 0, 0, 0, 0, 0, 5,
		7, 3, 0, 0, 0, 5, 0, 4, 9
	];
	//setNumbers(Sudoku_1);

	const Sudoku_2 = [
		0, 1, 0, 7, 0, 0, 0, 0, 5,
		0, 7, 0, 8, 1, 0, 6, 0, 0,
		0, 0, 0, 3, 6, 5, 7, 0, 4,
		0, 5, 0, 4, 0, 3, 0, 8, 0,
		7, 0, 0, 1, 2, 0, 9, 0, 0,
		0, 4, 0, 5, 8, 0, 0, 3, 0,
		0, 0, 7, 1, 0, 0, 0, 3, 0,
		3, 0, 0, 5, 4, 0, 0, 6, 0,
		4, 0, 6, 2, 9, 3, 0, 0, 0
	];
	//setNumbers(Sudoku_2);

	const Sudoku_8X = [
		3, 7, 4, 0, 0, 0, 5, 0, 0,
		2, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 1, 0, 0, 0, 0, 3, 0,
		1, 0, 0, 8, 0, 0, 9, 0, 0,
		0, 0, 9, 7, 0, 0, 0, 0, 8,
		6, 0, 0, 1, 9, 0, 5, 0, 0,
		2, 0, 0, 0, 0, 0, 7, 1, 3,
		0, 0, 0, 0, 0, 0, 4, 0, 0,
		0, 1, 0, 0, 0, 0, 0, 0, 9
	];
	//setNumbers(Sudoku_8X); checkXSudoku.checked = true; setColors(xColors, '#aaa');

	const Sudoku_9 = [
		6, 0, 7, 2, 0, 0, 0, 8, 4,
		0, 0, 9, 5, 0, 1, 0, 0, 2,
		0, 0, 1, 8, 7, 0, 0, 0, 0,
		0, 7, 2, 8, 4, 0, 0, 3, 6,
		0, 8, 0, 7, 2, 3, 0, 1, 0,
		0, 4, 0, 0, 0, 6, 0, 8, 0,
		0, 6, 5, 7, 0, 0, 4, 0, 9,
		0, 0, 7, 1, 0, 4, 0, 0, 8,
		0, 0, 0, 9, 6, 0, 0, 0, 2
	];
	//setNumbers(Sudoku_9);

	const Sudoku_38_X = [
		0, 7, 6, 0, 0, 0, 0, 0, 0,
		0, 5, 0, 4, 0, 0, 0, 0, 0,
		0, 1, 4, 0, 0, 0, 8, 7, 0,
		0, 2, 3, 0, 0, 0, 0, 4, 7,
		7, 0, 0, 0, 0, 0, 9, 0, 0,
		0, 0, 0, 7, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 8, 9,
		0, 0, 0, 8, 0, 0, 0, 2, 0,
		1, 9, 0, 0, 0, 0, 0, 4, 6
	];
	//setNumbers(Sudoku_38_X); checkXSudoku.checked = true; setColors(xColors, '#aaa');

	const Sudoku_44_Asterix = [
		6, 0, 0, 0, 0, 9, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 5, 4, 0,
		9, 5, 0, 0, 0, 1, 0, 8, 0,
		0, 8, 0, 0, 0, 6, 0, 9, 0,
		0, 0, 7, 0, 0, 4, 0, 0, 1,
		0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 1, 7, 0, 0,
		2, 6, 0, 0, 0, 0, 0, 0, 0,
		0, 7, 0, 0, 0, 6, 5, 2, 0
	];
	//setNumbers(Sudoku_44_Asterix); checkAsterixSudoku.checked = true; setColors(asterixColors, '#aaa');

	const Sudoku_67_X = [
		0, 7, 2, 0, 0, 0, 8, 0, 0,
		0, 1, 0, 9, 0, 7, 0, 3, 6,
		0, 0, 6, 0, 1, 0, 0, 0, 0,
		0, 0, 0, 7, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 8, 0, 0, 0, 0,
		2, 0, 0, 0, 0, 0, 0, 9, 4,
		0, 7, 4, 3, 0, 2, 0, 6, 0,
		0, 0, 0, 0, 6, 0, 0, 0, 7
	];
	//setNumbers(Sudoku_67_X); checkXSudoku.checked = true; setColors(xColors, '#aaa');

	const Sudoku_73 = [
		8, 0, 0, 0, 0, 0, 4, 7, 0,
		2, 0, 0, 0, 0, 1, 0, 0, 0,
		0, 1, 0, 3, 0, 0, 0, 0, 0,
		0, 0, 0, 9, 0, 0, 0, 0, 0,
		3, 0, 0, 0, 0, 0, 4, 0, 0,
		0, 0, 0, 0, 7, 6, 0, 0, 0,
		3, 9, 0, 0, 0, 0, 5, 0, 0,
		0, 0, 0, 0, 0, 4, 8, 0, 0,
		0, 0, 0, 7, 0, 0, 0, 4, 0
	];
	//setNumbers(Sudoku_73); // even odd

	const sudoku_74 = [
		9, 1, 0, 6, 4, 0, 0, 0, 0,
		0, 0, 4, 9, 0, 0, 0, 6, 0,
		0, 6, 0, 8, 0, 0, 0, 0, 9,
		0, 7, 0, 2, 5, 9, 0, 6, 0,
		4, 0, 0, 7, 0, 6, 8, 0, 0,
		0, 9, 0, 0, 0, 0, 0, 2, 0,
		0, 0, 0, 7, 3, 0, 5, 9, 0,
		0, 4, 0, 6, 0, 0, 0, 0, 1,
		0, 0, 2, 5, 0, 0, 0, 7, 0
	];
	//setNumbers(sudoku_74);

	const Sudoku_82_Mosaic = [
		0, 0, 0, 0, 9, 0, 5, 0, 7,
		4, 9, 0, 0, 3, 5, 1, 0, 0,
		0, 0, 2, 0, 1, 0, 0, 0, 3,
		3, 0, 1, 4, 0, 0, 7, 0, 9,
		0, 0, 0, 0, 8, 0, 0, 0, 0,
		0, 0, 0, 0, 7, 0, 0, 0, 0,
		2, 0, 5, 0, 1, 0, 0, 0, 0,
		8, 0, 0, 0, 4, 9, 3, 2, 0,
		0, 0, 9, 0, 2, 0, 0, 0, 6
	];
	//setNumbers(Sudoku_82_Mosaic); checkMosaicSudoku.checked = true; setColors(mosaicColors, '#aaa');

	const Sudoku_84 = [
		3, 0, 6, 0, 0, 7, 5, 0, 0,
		0, 8, 0, 0, 0, 1, 0, 0, 2,
		0, 0, 0, 0, 0, 0, 0, 0, 6,
		0, 0, 0, 0, 0, 0, 0, 9, 0,
		0, 4, 0, 0, 0, 3, 0, 0, 0,
		0, 0, 0, 0, 9, 4, 1, 0, 0,
		0, 0, 2, 0, 0, 4, 8, 0, 0,
		0, 0, 0, 0, 0, 9, 0, 0, 7,
		7, 4, 0, 0, 0, 0, 0, 0, 3
	];
	//setNumbers(Sudoku_84);

	const Sudoku_86 = [
		2, 5, 7, 6, 0, 0, 0, 0, 0,
		0, 1, 0, 0, 0, 0, 7, 0, 0,
		0, 0, 4, 0, 0, 0, 3, 8, 0,
		3, 0, 0, 0, 0, 2, 5, 0, 0,
		0, 6, 0, 0, 0, 9, 0, 8, 0,
		0, 9, 1, 6, 0, 3, 0, 4, 2,
		0, 0, 0, 8, 0, 0, 7, 2, 6,
		8, 0, 0, 0, 0, 0, 0, 5, 0,
		5, 2, 0, 0, 0, 0, 0, 0, 8
	];
	//setNumbers(Sudoku_86);

	const Sudoku_89 = [
		1, 4, 0, 0, 0, 0, 0, 0, 9,
		0, 8, 0, 0, 9, 1, 2, 0, 0,
		0, 0, 0, 0, 8, 2, 3, 0, 0,
		5, 0, 0, 0, 0, 8, 3, 0, 0,
		0, 0, 0, 0, 0, 6, 0, 0, 0,
		0, 1, 0, 5, 0, 0, 0, 2, 0,
		0, 0, 7, 0, 0, 0, 4, 9, 0,
		3, 0, 0, 0, 1, 8, 0, 2, 0,
		2, 0, 0, 0, 4, 5, 0, 0, 0
	];
	//setNumbers(Sudoku_89);

	const Sudoku_90 = [
		0, 6, 3, 8, 0, 0, 0, 0, 0,
		0, 0, 4, 0, 0, 3, 0, 0, 0,
		0, 0, 0, 0, 0, 6, 7, 0, 0,
		3, 0, 0, 0, 8, 4, 9, 0, 0,
		4, 0, 7, 0, 0, 0, 3, 0, 2,
		8, 5, 0, 0, 9, 0, 6, 4, 0,
		0, 0, 0, 2, 0, 0, 0, 3, 1,
		0, 0, 0, 0, 0, 1, 0, 0, 8,
		9, 0, 0, 0, 0, 4, 0, 0, 0
	];
	//setNumbers(Sudoku_90);

	const Sudoku_91 = [
		0, 0, 0, 0, 6, 0, 0, 0, 0,
		0, 2, 9, 0, 7, 0, 4, 0, 0,
		4, 0, 6, 0, 0, 0, 2, 0, 0,
		0, 0, 7, 0, 0, 0, 0, 0, 5,
		0, 0, 4, 7, 3, 0, 0, 0, 1,
		0, 2, 0, 0, 4, 5, 0, 6, 0,
		0, 0, 0, 0, 1, 0, 0, 0, 0,
		8, 0, 0, 0, 4, 0, 0, 6, 7,
		9, 0, 0, 0, 0, 0, 3, 0, 2
	];
	//setNumbers(Sudoku_91);
}