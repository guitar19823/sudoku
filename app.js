    document.addEventListener('DOMContentLoaded', function () {
    
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
            case 0: return true; break;
            case 4: return true; break;
            case 8: return true; break;
            case 20: return true; break;
            case 22: return true; break;
            case 24: return true; break;
            case 36: return true; break;
            case 38: return true; break;
            case 40: return true; break;
            case 42: return true; break;
            case 44: return true; break;
            case 56: return true; break;
            case 58: return true; break;
            case 60: return true; break;
            case 72: return true; break;
            case 76: return true; break;
            case 80: return true; break;
            default: return false;
        }
    }
    
    /**
    * mosaicColors
    * @n
    */
    function mosaicColors(n) {
        switch (n) {
            case 0: return true; break;
            case 13: return true; break;
            case 20: return true; break;
            case 31: return true; break;
            case 40: return true; break;
            case 49: return true; break;
            case 60: return true; break;
            case 67: return true; break;
            case 80: return true; break;
            default: return false;
        }
    }
    
    /**
    * asterixColors
    * @n
    */
    function asterixColors(n) {
        switch (n) {
            case 8: return true; break;
            case 13: return true; break;
            case 24: return true; break;
            case 31: return true; break;
            case 40: return true; break;
            case 49: return true; break;
            case 56: return true; break;
            case 67: return true; break;
            case 72: return true; break;
            default: return false;
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
    /* +++++++++++++++++++++++++++++++++++++++++++ Tests ++++++++++++++++++++++++++++++++++++++++++++ */
    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    
    const Yarikov_Sudoku = [
        3,0,6,0,0,7,5,0,0,
        0,8,0,0,0,1,0,0,2,
        0,0,0,0,0,0,0,0,6,
        0,0,0,0,0,0,0,9,0,
        0,4,0,0,0,3,0,0,0,
        0,0,0,0,9,4,1,0,0,
        0,0,2,0,0,4,8,0,0,
        0,0,0,0,0,9,0,0,7,
        7,4,0,0,0,0,0,0,3
    ];
    //setNumbers(Yarikov_Sudoku);
    
    const English = [
        7,0,8,0,0,0,5,0,0,
        0,0,0,2,0,1,0,0,0,
        3,0,0,0,0,0,0,0,0,
        0,4,0,3,0,0,0,0,0,
        0,0,0,0,8,0,1,0,0,
        0,2,6,0,0,0,0,9,0,
        0,9,0,0,0,0,0,0,0,
        6,0,0,0,7,0,0,0,0,
        0,0,4,5,0,0,0,0,0
    ];
    //setNumbers(English);
    
    const Arto_Inkala = [
        8,0,0,0,0,3,0,7,0,
        0,0,0,6,0,0,0,9,0,
        0,0,0,0,0,0,2,0,0,
        0,5,0,0,0,0,0,0,0,
        0,0,7,0,4,5,1,0,0,
        0,0,0,7,0,0,0,3,0,
        0,0,1,0,0,8,0,9,0,
        0,0,0,5,0,0,0,0,0,
        0,6,8,0,1,0,4,0,0
    ];
    //setNumbers(Arto_Inkala);
    
    const AI_Escargot = [
        0,0,5,8,0,0,0,7,0,
        3,0,0,0,0,0,0,1,0,
        0,0,0,0,2,0,5,0,0,
        4,0,0,0,1,0,0,0,3,
        0,0,5,0,7,0,2,0,0,
        3,0,0,0,0,6,0,8,0,
        0,6,0,0,0,4,0,0,0,
        5,0,0,0,0,0,0,0,9,
        0,0,9,0,3,0,7,0,0
    ];
    //setNumbers(AI_Escargot);
    
    const HardSudoku1 = [
        0,0,5,8,0,0,0,7,0,
        3,0,0,0,0,0,0,1,0,
        0,0,0,0,2,0,5,0,0,
        4,0,0,0,1,0,0,0,3,
        0,0,5,0,7,0,2,0,0,
        3,0,0,0,0,6,0,8,0,
        0,6,0,0,0,4,0,0,0,
        5,0,0,0,0,0,0,0,9,
        0,0,9,0,3,0,7,0,0
    ];
    //setNumbers(HardSudoku1);
    
    const HardSudoku2 = [
        0,0,9,0,3,7,1,0,0,
        0,3,0,0,1,0,7,0,0,
        1,0,8,0,0,0,0,0,4,
        0,0,0,7,0,3,5,9,0,
        0,0,3,0,5,0,0,0,0,
        5,0,7,6,0,0,4,0,0,
        0,0,0,0,0,5,4,2,0,
        5,4,0,3,0,0,0,0,0,
        0,9,0,0,4,2,0,5,0
    ];
    //setNumbers(HardSudoku2);
    
    const Sudoku_1 = [
        0,0,6,8,0,0,0,4,5,
        0,0,2,0,0,0,0,8,0,
        0,8,4,0,0,6,2,7,0,
        0,0,9,5,0,3,0,0,4,
        3,0,7,1,2,0,6,0,8,
        0,0,1,0,0,7,0,0,2,
        0,5,1,9,0,0,0,0,8,
        0,6,0,0,0,0,0,0,5,
        7,3,0,0,0,5,0,4,9
    ];
    //setNumbers(Sudoku_1);
    
    const Sudoku_2 = [
        0,1,0,7,0,0,0,0,5,
        0,7,0,8,1,0,6,0,0,
        0,0,0,3,6,5,7,0,4,
        0,5,0,4,0,3,0,8,0,
        7,0,0,1,2,0,9,0,0,
        0,4,0,5,8,0,0,3,0,
        0,0,7,1,0,0,0,3,0,
        3,0,0,5,4,0,0,6,0,
        4,0,6,2,9,3,0,0,0
    ];
    //setNumbers(Sudoku_2);
    
    const Sudoku_8X = [
        3,7,4,0,0,0,5,0,0,
        2,0,0,0,0,0,0,0,0,
        0,0,1,0,0,0,0,3,0,
        1,0,0,8,0,0,9,0,0,
        0,0,9,7,0,0,0,0,8,
        6,0,0,1,9,0,5,0,0,
        2,0,0,0,0,0,7,1,3,
        0,0,0,0,0,0,4,0,0,
        0,1,0,0,0,0,0,0,9
    ];
    //setNumbers(Sudoku_8X); checkXSudoku.checked = true; setColors(xColors, '#aaa');
    
    const Sudoku_9 = [
        6,0,7,2,0,0,0,8,4,
        0,0,9,5,0,1,0,0,2,
        0,0,1,8,7,0,0,0,0,
        0,7,2,8,4,0,0,3,6,
        0,8,0,7,2,3,0,1,0,
        0,4,0,0,0,6,0,8,0,
        0,6,5,7,0,0,4,0,9,
        0,0,7,1,0,4,0,0,8,
        0,0,0,9,6,0,0,0,2
    ];
    //setNumbers(Sudoku_9);
    
    const Sudoku_38_X = [
        0,7,6,0,0,0,0,0,0,
        0,5,0,4,0,0,0,0,0,
        0,1,4,0,0,0,8,7,0,
        0,2,3,0,0,0,0,4,7,
        7,0,0,0,0,0,9,0,0,
        0,0,0,7,0,0,0,0,0,
        0,0,0,0,0,0,0,8,9,
        0,0,0,8,0,0,0,2,0,
        1,9,0,0,0,0,0,4,6
    ];
    //setNumbers(Sudoku_38_X); checkXSudoku.checked = true; setColors(xColors, '#aaa');
    
    const Sudoku_44_Asterix = [
        6,0,0,0,0,9,0,0,0,
        0,0,0,0,0,0,5,4,0,
        9,5,0,0,0,1,0,8,0,
        0,8,0,0,0,6,0,9,0,
        0,0,7,0,0,4,0,0,1,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,7,0,0,
        2,6,0,0,0,0,0,0,0,
        0,7,0,0,0,6,5,2,0
    ];
    //setNumbers(Sudoku_44_Asterix); checkAsterixSudoku.checked = true; setColors(asterixColors, '#aaa');
    
    const Sudoku_67_X = [
        0,7,2,0,0,0,8,0,0,
        0,1,0,9,0,7,0,3,6,
        0,0,6,0,1,0,0,0,0,
        0,0,0,7,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,8,0,0,0,0,
        2,0,0,0,0,0,0,9,4,
        0,7,4,3,0,2,0,6,0,
        0,0,0,0,6,0,0,0,7
    ];
    //setNumbers(Sudoku_67_X); checkXSudoku.checked = true; setColors(xColors, '#aaa');
    
    const Sudoku_73 = [
        8,0,0,0,0,0,4,7,0,
        2,0,0,0,0,1,0,0,0,
        0,1,0,3,0,0,0,0,0,
        0,0,0,9,0,0,0,0,0,
        3,0,0,0,0,0,4,0,0,
        0,0,0,0,7,6,0,0,0,
        3,9,0,0,0,0,5,0,0,
        0,0,0,0,0,4,8,0,0,
        0,0,0,7,0,0,0,4,0
    ];
    //setNumbers(Sudoku_73); // even odd
    
    const sudoku_74 = [
        9,1,0,6,4,0,0,0,0,
        0,0,4,9,0,0,0,6,0,
        0,6,0,8,0,0,0,0,9,
        0,7,0,2,5,9,0,6,0,
        4,0,0,7,0,6,8,0,0,
        0,9,0,0,0,0,0,2,0,
        0,0,0,7,3,0,5,9,0,
        0,4,0,6,0,0,0,0,1,
        0,0,2,5,0,0,0,7,0
    ];
    //setNumbers(sudoku_74);
    
    const Sudoku_82_Mosaic = [
        0,0,0,0,9,0,5,0,7,
        4,9,0,0,3,5,1,0,0,
        0,0,2,0,1,0,0,0,3,
        3,0,1,4,0,0,7,0,9,
        0,0,0,0,8,0,0,0,0,
        0,0,0,0,7,0,0,0,0,
        2,0,5,0,1,0,0,0,0,
        8,0,0,0,4,9,3,2,0,
        0,0,9,0,2,0,0,0,6
    ];
    //setNumbers(Sudoku_82_Mosaic); checkMosaicSudoku.checked = true; setColors(mosaicColors, '#aaa');
    
    const Sudoku_84 = [
        3,0,6,0,0,7,5,0,0,
        0,8,0,0,0,1,0,0,2,
        0,0,0,0,0,0,0,0,6,
        0,0,0,0,0,0,0,9,0,
        0,4,0,0,0,3,0,0,0,
        0,0,0,0,9,4,1,0,0,
        0,0,2,0,0,4,8,0,0,
        0,0,0,0,0,9,0,0,7,
        7,4,0,0,0,0,0,0,3
    ];
    //setNumbers(Sudoku_84);
    
    const Sudoku_86 = [
        2,5,7,6,0,0,0,0,0,
        0,1,0,0,0,0,7,0,0,
        0,0,4,0,0,0,3,8,0,
        3,0,0,0,0,2,5,0,0,
        0,6,0,0,0,9,0,8,0,
        0,9,1,6,0,3,0,4,2,
        0,0,0,8,0,0,7,2,6,
        8,0,0,0,0,0,0,5,0,
        5,2,0,0,0,0,0,0,8
    ];
    //setNumbers(Sudoku_86);
    
    const Sudoku_89 = [
        1,4,0,0,0,0,0,0,9,
        0,8,0,0,9,1,2,0,0,
        0,0,0,0,8,2,3,0,0,
        5,0,0,0,0,8,3,0,0,
        0,0,0,0,0,6,0,0,0,
        0,1,0,5,0,0,0,2,0,
        0,0,7,0,0,0,4,9,0,
        3,0,0,0,1,8,0,2,0,
        2,0,0,0,4,5,0,0,0
    ];
    //setNumbers(Sudoku_89);
    
    const Sudoku_90 = [
        0,6,3,8,0,0,0,0,0,
        0,0,4,0,0,3,0,0,0,
        0,0,0,0,0,6,7,0,0,
        3,0,0,0,8,4,9,0,0,
        4,0,7,0,0,0,3,0,2,
        8,5,0,0,9,0,6,4,0,
        0,0,0,2,0,0,0,3,1,
        0,0,0,0,0,1,0,0,8,
        9,0,0,0,0,4,0,0,0
    ];
    //setNumbers(Sudoku_90);
    
    const Sudoku_91 = [
        0,0,0,0,6,0,0,0,0,
        0,2,9,0,7,0,4,0,0,
        4,0,6,0,0,0,2,0,0,
        0,0,7,0,0,0,0,0,5,
        0,0,4,7,3,0,0,0,1,
        0,2,0,0,4,5,0,6,0,
        0,0,0,0,1,0,0,0,0,
        8,0,0,0,4,0,0,6,7,
        9,0,0,0,0,0,3,0,2
    ];
    //setNumbers(Sudoku_91);
    
    function alternation() {
        let arr = [0, 1, 2, 3, 4].filter(x => x !== 1 && x !== 3 && x !== 4);
        
        console.log(arr);
    }
    //alternation();
    
    
    
    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* ++++++++++++++++++++++++++++++++++++++ Source Calculate ++++++++++++++++++++++++++++++++++++++ */
    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    
    /**
    * calculate
    * @inArray
    * @xSudoku
    * @mosaicSudoku
    * @asterixSudoku
    */
    function calculate(inArray, xSudoku, mosaicSudoku, asterixSudoku) {
        let array = [[], [], [], [], [], [], [], [], []],
            tmpArr = [],
            prevArr = [],
            lastArr = [],
            subArr = [],
            message;

        if (checkForEmptyData(inArray).bool) {
            //console.log(checkForEmptyData(inArray).count); //  TEST MODE

            message = ['Недостаточно данных.', 'sorry', true];

            return [inArray, message];
        }

        console.log('<--- START --->'); //  TEST MODE

        fillArray(array[0]);
        fillArray(lastArr);
        startArray(inArray);

        startScanning();

        console.log('<--- END --->'); //  TEST MODE

        return [getReturnArray(array[0]), message];


        /* **************************************************************************************** */
        /* ************************************* CONTROLLERS ************************************** */
        /* **************************************************************************************** */

        /**
        * startScanning
        */
        function startScanning() {
            scanner(inArray);

            //globalCheckTwo();
            globalCheckAll();

            message = array[0][81] ? ['Задача решена', 'ok', true] : ['Задача не имеет решения!', 'error', true];

            array[0][81] && arrayDeepComparison(array[0], lastArr) && (
                getReturnArray(array[0]).filter(x => x === 0).length === 0 || (
                    console.log('!!! Stage in the development process !!!'), //  TEST MODE

                    message = ['Программа не может решить эту задачу.', 'sorry', true]
                )
            )

            !arrayDeepComparison(array[0], lastArr) && getReturnArray(array[0]).filter(x => x === 0).length !== 0 && (
                lastArr = arrayCloning(array[0]),
                startScanning()
            );
        }

        /**
        * scanner
        * @inArray
        */
        function scanner(inArray) {
            controller(inArray, array[0]);

            !arrayComparison(inArray, getReturnArray(array[0])) &&
                array[0][81] &&
                getReturnArray(array[0]).filter(x => x === 0).length !== 0 &&
                scanner(getReturnArray(array[0]));
        }

        /**
        * controller
        * @inArray
        * @arr
        * @isOfAll bool
        */
        function controller(inArray, arr, isOfAll = false) {
            arr[81] && runFilter(arr);

            arr[81] && arrayComparison(inArray, getReturnArray(arr)) && numberOfDigitsSquared(arr);
            arr[81] && arrayComparison(inArray, getReturnArray(arr)) && numberOfDigitsPerLine(arr);
            arr[81] && arrayComparison(inArray, getReturnArray(arr)) && numberOfDigitsInAColumn(arr);

            xSudoku && arr[81] && arrayComparison(inArray, getReturnArray(arr)) && numberOfDigitsInDeacons(arr);
            mosaicSudoku && arr[81] && arrayComparison(inArray, getReturnArray(arr)) && numberOfDigitsInMosaic(arr);
            asterixSudoku && arr[81] && arrayComparison(inArray, getReturnArray(arr)) && numberOfDigitsInAsterix(arr);

            arr[81] && arrayComparison(inArray, getReturnArray(arr)) && optionOfTwo(arr);
            isOfAll || arr[81] && arrayComparison(inArray, getReturnArray(arr)) && optionOfAll();
        }


        /* **************************************************************************************** */
        /* **************************************** FILTER **************************************** */
        /* **************************************************************************************** */

        /**
        * runFilter
        * @arr
        */
        function runFilter(arr) {
            //console.log('Filtration Stage'); //  TEST MODE STAGE

            for (let i = 0; i < 81; i++) runRouter(i, arr);
        }

        /**
        * runRouter
        * @index
        * @arr
        */
        function runRouter(index, arr) {
            router(filter, index, arr);
        }

        /**
        * router
        * @foo
        * @index
        * @arr
        */
        function router(foo, index, arr) {
            [
                [
                    0,9, //  no errors
                    0,0,21,0,-3,3,24,-3,3,6,27,3, //  no errors
                    0,0,61,0,1,1,62,1,2,2,63,2 //  no errors
                ],
                [
                    9,18, //  no errors
                    0,0,21,0,-3,3,24,-3,3,6,27,3, //  no errors
                    9,9,70,9,10,10,71,10,11,11,72,11 //  no errors
                ],
                [
                    18,27, //  no errors
                    0,0,21,0,-3,3,24,-3,3,6,27,3, //  no errors
                    18,18,79,18,19,19,80,19,20,20,81,20 //  no errors
                ],
                [
                    27,36, //  no errors
                    0,27,48,0,-3,30,51,-3,3,33,54,3, //  no errors
                    0,0,61,0,1,1,62,1,2,2,63,2 //  no errors
                ],
                [
                    36,45, //  no errors
                    0,27,48,0,-3,30,51,-3,3,33,54,3, //  no errors
                    9,9,70,9,10,10,71,10,11,11,72,11 //  no errors
                ],
                [
                    45,54, //  no errors
                    0,27,48,0,-3,30,51,-3,3,33,54,3, //  no errors
                    18,18,79,18,19,19,80,19,20,20,81,20 //  no errors
                ],
                [
                    54,63, //  no errors
                    0,54,75,0,-3,57,78,-3,3,60,81,3, //  no errors
                    0,0,61,0,1,1,62,1,2,2,63,2 //  no errors
                ],
                [
                    63,72, //  no errors
                    0,54,75,0,-3,57,78,-3,3,60,81,3, //  no errors
                    9,9,70,9,10,10,71,10,11,11,72,11 //  no errors
                ],
                [
                    72,81, //  no errors
                    0,54,75,0,-3,57,78,-3,3,60,81,3, //  no errors
                    18,18,79,18,19,19,80,19,20,20,81,20 //  no errors
                ]
            ].map(elem => {
                if (range(index, elem[0], elem[1]) && typeof arr[index] === 'number') {

                    // Square filter
                    foo(elem[0], elem[1], all, true, arr, index);

                    // Row filters
                    row(index, elem[2]) && foo(elem[3], elem[4], row, elem[5], arr, index);
                    row(index, elem[6]) && foo(elem[7], elem[8], row, elem[9], arr, index);
                    row(index, elem[10]) && foo(elem[11], elem[12], row, elem[13], arr, index);

                    // Col filters
                    col(index, elem[14]) && foo(elem[15], elem[16], col, elem[17], arr, index);
                    col(index, elem[18]) && foo(elem[19], elem[20], col, elem[21], arr, index);
                    col(index, elem[22]) && foo(elem[23], elem[24], col, elem[25], arr, index);

                    // Cross
                    xSudoku && (
                        diagonal1(index, 0) && foo(0, 81, diagonal1, 0, arr, index),
                        range(index, 20, 61) && diagonal2(index, 0) && foo(20, 61, diagonal2, 0, arr, index)
                    );

                    // Mosaic
                    mosaicSudoku && mosaic(index, 0) && foo(0, 81, mosaic, 0, arr, index);

                    // Asterix
                    asterixSudoku && asterix(index, 0) && foo(8, 73, asterix, 0, arr, index);
                }
            });
        }

        /**
        * filter
        * @start
        * @end
        * @pass
        * @delta
        * @arr
        * @index
        */
        function filter(start, end, pass, delta, arr, index) {
            if (repetitionOfNumbers(start, end, pass, delta, arr, index)) {
                for (let i = start; i < end; i++) {
                    pass(i, delta) && Array.isArray(arr[i]) && (
                        arr[i] = arr[i].filter(x => x !== arr[index]),
                        arr[i].length === 1 && (
                            arr[i] = arr[i][0],
                            runRouter(i, arr)
                        )
                    )
                }
            } else {
                arr[81] = false;
            }
        }

        /**
        * repetitionOfNumbers
        * @start
        * @end
        * @pass
        * @delta
        * @arr
        * @index
        */
        function repetitionOfNumbers(start, end, pass, delta, arr, index) {
            let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];

            for (let i = start; i < end; i++) {
                if (pass(i, delta)) {
                    for (let n = 0; n < 9; n++) {
                        typeof arr[i] === 'number' && arr[i] === (n + 1) && counts[n]++;
                    }
                }
            }

            return counts.filter(x => x > 1).length < 1;
        }


        /* **************************************************************************************** */
        /* ******************************** SEARCH FOR APPLICANTS ********************************* */
        /* **************************************************************************************** */

        /**
        * numberOfDigitsSquared
        * @arr
        */
        function numberOfDigitsSquared(arr) {
            //console.log('Check Square'); //  TEST MODE STAGE

            for (let i = 0; i < 81; i += 9) {
                numberOfDigits(i, (i + 9), all, true, arr);
            }
        }

        /**
        * numberOfDigitsPerLine
        * @arr
        */
        function numberOfDigitsPerLine(arr) {
            //console.log('Line Check'); //  TEST MODE STAGE

            for (let i = 0; i < 61; i++) {
                let n;

                if (col(i + 20, 20)) {
                    switch (i % 9) {
                        case 0: n = 0; break
                        case 3: n = -3; break
                        case 6: n = 3; break
                    }

                    numberOfDigits(i, (i + 21), row, n, arr);
                }
            }
        }

        /**
        * numberOfDigitsInAColumn
        * @arr
        */
        function numberOfDigitsInAColumn(arr) {
            //console.log('Column Check'); //  TEST MODE STAGE

            for (let i = 0; i < 21; i++)
                row(i, 0) && numberOfDigits(i, (i + 61), col, i, arr);
        }

        /**
        * numberOfDigitsInDeacons
        * @arr
        */
        function numberOfDigitsInDeacons(arr) {
            //console.log('Diagonal Check'); //  TEST MODE STAGE

            numberOfDigits(0, 81, diagonal1, 0, arr);
            numberOfDigits(20, 61, diagonal2, 0, arr);
        }

        /**
        * numberOfDigitsInMosaic
        * @arr
        */
        function numberOfDigitsInMosaic(arr) {
            //console.log('Mosaic Check'); //  TEST MODE STAGE

            numberOfDigits(0, 81, mosaic, 0, arr);
        }

        /**
        * numberOfDigitsInAsterix
        * @arr
        */
        function numberOfDigitsInAsterix(arr) {
            //console.log('Asterix Check'); //  TEST MODE STAGE

            numberOfDigits(8, 73, asterix, 0, arr);
        }

        /**
        * numberOfDigits
        * @start
        * @end
        * @pass
        * @delta
        * @arr
        */
        function numberOfDigits(start, end, pass, delta, arr) {
            let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];

            for (let i = start; i < end; i++) {
                if (pass(i, delta)) {
                    for (let n = 0; n < 9; n++) {
                        Array.isArray(arr[i]) && (
                            counts[n] += arr[i].filter(x => x === n + 1).length
                        );
                    }
                }
            }

            for (let n = 0; n < 9; n++) {
                counts[n] === 1 && numeralCalculator(start, end, pass, delta, n, arr);
            }
        }

        /**
        * numeralCalculator
        * @start
        * @end
        * @pass
        * @delta
        * @number
        * @arr
        */
        function numeralCalculator(start, end, pass, delta, number, arr) {
            for (let i = start; i < end; i++) {
                if (pass(i, delta)) {
                    if (Array.isArray(arr[i])) {
                        let desiredNumber = arr[i].filter(x => x === (number + 1))[0];

                        desiredNumber === (number + 1) && (
                            arr[i] = desiredNumber,
                            runRouter(i, arr)
                        );
                    }
                }
            }
        }


        /* **************************************************************************************** */
        /* ******************************* FINDING THE RIGHT OPTION ******************************* */
        /* **************************************************************************************** */

        /**
        * optionOfTwo
        * @arr
        */
        function optionOfTwo(arr) {
            //console.log('Option Of Two Stage'); //  TEST MODE STAGE

            nextArr = array[array.indexOf(arr) + 1];
            nextArr = arrayCloning(arr);
            nextArr[81] = true;

            for (let i = 0; i < 81; i++) {
                //console.log(i + ' is array: ' + (Array.isArray(arr[i])) + ', length = 2: ' + (arr[i].length == 2)); //  TEST MODE

                if (Array.isArray(arr[i]) && arr[i].length == 2) {
                    checkOption(i, 0, arr, nextArr, false);

                    if (nextArr[81]) {
                        checkOption(i, 1, arr, nextArr, true);

                        if (nextArr[81] && nextArr.filter(x => Array.isArray(x)).length > 0) {
                            nextArr = arrayCloning(arr);
                            continue;

                        } else {
                            addTheCorrectVariant(i, 0, arr, nextArr);
                            break;
                        }

                    } else {
                        addTheCorrectVariant(i, 1, arr, nextArr);
                        break;
                    }
                }
            }
        }

        /**
        * checkOption
        * @index
        * @option
        * @arr
        * @nextArr
        * @bool
        */
        function checkOption(index, option, arr, nextArr, bool) {
            bool && (nextArr = arrayCloning(arr));

            //bool || console.log(`depth ${array.indexOf(nextArr)}: ${index} element is array, contains items: ${nextArr[index]}`); //  TEST MODE

            nextArr[index] = nextArr[index][option];
            runRouter(index, nextArr);
            //console.log(`${arr[index][option]} ${nextArr[81] ? ' correct option' : ' wrong option'}`); //  TEST MODE
            //console.log(`Option ${arr[index][option]} is filled with cells ${nextArr.filter(x => typeof x === 'number').length}`); //  TEST MODE
        }

        /**
        * addTheCorrectVariant
        * @index
        * @option
        * @nextArr
        * @arr
        */
        function addTheCorrectVariant(index, option, arr, nextArr) {
            //console.log(`${arr[index][option]} correct option`); //  TEST MODE

            arr[index] = arr[index][option];
            runRouter(index, arr);
        }

        /**
        * optionOfAll
        */
        function optionOfAll() {
            //console.log('Option Of All Stage'); //  TEST MODE STAGE

            prevArr = arrayCloning(array[0]);
            subArr = arrayCloning(array[0]);
            subArr[81] = true;

            to: for (let i = 0; i < 81; i++) {
                if(!(typeof subArr[i] === 'number')) {
                    for (let n = 0, l = subArr[i].length; n < l; n++) {
                        //console.log(`${i} element is array, contains items: ${subArr[i]}`); //  TEST MODE

                        subArr[i] = subArr[i][n];
                        findingTheRightOption(getReturnArray(subArr));

                        //console.log(`${array[0][i][n]} ${subArr[81] ? ' correct option' : ' wrong option'}`); //  TEST MODE
                        //console.log(`Option ${array[0][i][n]} is filled with cells ${subArr.filter(x => typeof x === 'number').length}`); //  TEST MODE

                        if (subArr[81]) {

                            if (subArr.filter(x => typeof x === 'number').length === 81) {
                                //console.log(`${array[0][i][n]} correct option`); //  TEST MODE

                                array[0] = arrayCloning(subArr);
                                break to;
                            } else {
                                subArr = arrayCloning(array[0]);
                            }

                        } else {
                            //console.log(`${i} element: ${array[0][i][n]} wrong option`); //  TEST MODE
                            //console.log(`${i} element: ${array[0][i][n]} wrong option`); //  TEST MODE

                            array[0][i] = array[0][i].filter(x => x !== array[0][i][n]);

                            //console.log(`${i} element: remained ${array[0][i]}`); //  TEST MODE

                            arrayDeepComparison(prevArr, array[0]) || scanner(getReturnArray(array[0]));
                            break to;
                        }
                    }
                }
            }
        }

        /**
        * findingTheRightOption
        * @inArray
        */
        function findingTheRightOption(inArray) {
            controller(inArray, subArr, true);

            arrayComparison(inArray, getReturnArray(subArr)) ||
                subArr[81] &&
                getReturnArray(subArr).filter(x => x === 0).length !== 0 &&
                findingTheRightOption(getReturnArray(subArr));
        }


        /* **************************************************************************************** */
        /* ************************************* GLOBAL SCAN ************************************** */
        /* **************************************************************************************** */

        /**
        * globalCheckAll
        */
        function globalCheckAll() {
            tmpArr = arrayCloning(array[0]);

            to: for (let i = 0; i < 81; i++) {
                if (Array.isArray(tmpArr[i])) {
                    for (let n = 0, l = tmpArr[i].length; n < l; n++) {

                        array[0][i] = array[0][i][n];
                        scanner(getReturnArray(array[0]));

                        if (array[0][81]) {

                            if (array[0].filter(x => typeof x === 'number').length === 81) {
                                break to;
                            } else {
                                array[0] = arrayCloning(tmpArr);
                            }

                        } else {
                            array[0] = arrayCloning(tmpArr);
                            array[0][i] = array[0][i].filter(x => x !== array[0][i][n]);
                            inArray = getReturnArray(array[0]);
                            break to;
                        }
                    }
                }
            }
        }

        /**
        * globalCheckTwo
        */
        function globalCheckTwo() {
            tmpArr = arrayCloning(array[0]);

            for (let i = 0; i < 81; i++) {
                if (typeof tmpArr[i] !== 'number' && tmpArr[i].length === 2) {
                    checkOptionGlobal(i, 0, false);

                    if (array[0][81]) {
                        checkOptionGlobal(i, 1);

                        if (array[0][81] && array[0].filter(x => Array.isArray(x)).length > 0) {
                            array[0] = arrayCloning(tmpArr);
                            inArray = getReturnArray(array[0]);
                        } else {
                            addTheCorrectVariantGlobal(i, 0)
                            break;
                        }

                    } else {
                        addTheCorrectVariantGlobal(i, 1)
                        break;
                    }
                }
            }
        }

        /**
        * checkOptionGlobal
        * @index
        * @option
        * @bool
        */
        function checkOptionGlobal(index, option, bool = true) {
            //bool || console.log(`${index}: ${array[0][index]}`); //  TEST MODE

            bool && (array[0] = arrayCloning(tmpArr));
            array[0][index] = array[0][index][option];
            scanner(getReturnArray(array[0]));
        }

        /**
        * addTheCorrectVariantGlobal
        * @index
        * @option
        */
        function addTheCorrectVariantGlobal(index, option) {
            //console.log(`${index}: ${array[0][index]} - false`); //  TEST MODE

            array[0] = arrayCloning(tmpArr);
            array[0][index] = array[0][index][option];
            scanner(getReturnArray(array[0]));
            inArray = getReturnArray(array[0]);
        }


        /* **************************************************************************************** */
        /* ********************************** ADDITIONAL METHODS ********************************** */
        /* **************************************************************************************** */

        /**
        * checkForEmptyData
        * @arr
        */
        function checkForEmptyData(arr) {
            let count = 0;

            for (let i = 0; i < 81; i++)
                arr[i] === 0 || count++;

            return {bool: count < 18, count: count};
        }

        /**
        * fillArray
        * @arr
        */
        function fillArray(arr) {
            for (let i = 0; i < 82; i++)
                i < 81 ? arr.push([1, 2, 3, 4, 5, 6, 7, 8, 9]) : arr.push(true);
        }

        /**
        * startArray
        * @inArray
        */
        function startArray(inArray) {
            for (let i = 0; i < 81; i++)
                inArray[i] === 0 || (array[0][i] = inArray[i]);
        }

        /**
        * arrayComparison
        * @array1
        * @array2
        */
        function arrayComparison(array1, array2) {
            for (let i = 0; i < 81; i++)
                if (array1[i] !== array2[i]) return false;

            return true;
        }

        /**
        * arrayDeepComparison
        * @array1
        * @array2
        */
        function arrayDeepComparison(array1, array2) {
            for (let i = 0; i < 81; i++) {
                if (Array.isArray(array1[i])) {
                    let l = array1[i].length;

                    if (!Array.isArray(array2[i])) return false;

                    if (l === array2[i].length) {
                        for (let j = 0; j < l; j++)
                            if (array1[i][j] !== array2[i][j]) return false;
                    } else return false;
                } else {
                    if (array1[i] !== array2[i]) return false;
                }
            }

            return true;
        }

        /**
        * arrayCloning
        * @fromArray
        */
        function arrayCloning(fromArray) {
            let clone = [];

            for (let i = 0; i < 82; i++) clone[i] = fromArray[i];

            return clone;
        }

        /**
        * getReturnArray
        * @arr
        */
        function getReturnArray(arr) {
            let returnArray = [];

            for (let i = 0; i < 81; i++)
                Array.isArray(arr[i]) ? returnArray.push(0) : returnArray.push(arr[i]);

            return returnArray;
        }

        /**
        * range
        * @n
        * @from
        * @to
        */
        function range(n, from, to) {
            return n >= from && n < to && true;
        }

        /**
        * all
        * @n
        * @bool
        */
        function all(n, bool) {
            return bool;
        }

        /**
        * row
        * @n
        * @delta
        */
        function row(n, delta) {
            return (n + delta) % 9 === n % 3 && true;
        }

        /**
        * col
        * @n
        * @delta
        */
        function col(n, delta) {
            let m = 0,
                k = (n - delta) % 27;

            switch (k) {
                case 0: m += k; break;
                case 3: m += k; break;
                case 6: m += k; break;
            }

            return k === m && true;
        }

        /**
        * diagonal1
        * @n
        * @delta
        */
        function diagonal1(n, delta) {
            let m = 0,
                k = n % 36;

            switch (k) {
                case 0: m += k; break;
                case 4: m += k; break;
                case 8: m += k; break;
            }

            return k === m && true;
        }

        /**
        * diagonal2
        * @n
        * @delta
        */
        function diagonal2(n, delta) {
            let m = 0,
                k = (n - 2) % 18;

            switch (k) {
                case 0: m += k; break;
                case 2: m += k; break;
                case 4: m += k; break;
            }

            return k === m && n;
        }

        /**
        * mosaic
        * @n
        * @delta
        */
        function mosaic(n, delta) {
            switch (n) {
                case 0: return true; break;
                case 13: return true; break;
                case 20: return true; break;
                case 31: return true; break;
                case 40: return true; break;
                case 49: return true; break;
                case 60: return true; break;
                case 67: return true; break;
                case 80: return true; break;
                default: return false;
            }
        }

        /**
        * asterix
        * @n
        * @delta
        */
        function asterix(n, delta) {
            switch (n) {
                case 8: return true; break;
                case 13: return true; break;
                case 24: return true; break;
                case 31: return true; break;
                case 40: return true; break;
                case 49: return true; break;
                case 56: return true; break;
                case 67: return true; break;
                case 72: return true; break;
                default: return false;
            }
        }
    }
});