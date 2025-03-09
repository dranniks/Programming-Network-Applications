window.onload = function() { 
    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    let outputElement = document.getElementById("result")
    let digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    let bgColors = ['#ffffff', '#ffe4e1', '#f0fff0', '#f0f8ff']
    let currentBgColorIndex = 0
    let outputColors = ['#ffffff', '#fff0f5', '#e6e6fa', '#f5f5dc']
    let currentOutputColorIndex = 0
    let maxDigits = 10;

    function onDigitButtonClicked(digit) {
        const current = selectedOperation ? b : a;
        
        if (current.length >= maxDigits) return;
        
        // Обработка 000
        if (digit === '000') {
            if (current.indexOf('.') !== -1) return;
            if (current === '') digit = '0';
        }
    
        if (digit === '.' && current.includes('.')) return;
    
        if (selectedOperation) {
            b += digit;
            outputElement.innerHTML = b;
        } else {
            a += digit;
            outputElement.innerHTML = a;
        }
    }

    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    })

    // Операции
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
    }

    // Очистка
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = null
        outputElement.innerHTML = 0
    }

    // Равно
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation) return
            
        switch(selectedOperation) { 
            case 'x': expressionResult = (+a) * (+b); break
            case '+': expressionResult = (+a) + (+b); break
            case '-': expressionResult = (+a) - (+b); break
            case '/': expressionResult = (+a) / (+b); break
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
        outputElement.innerHTML = a
    }

    // Смена знака
    document.getElementById("btn_op_sign").onclick = function() {
        if (selectedOperation && b !== '') {
            b = (-parseFloat(b)).toString()
            outputElement.innerHTML = b
        } else if (a !== '') {
            a = (-parseFloat(a)).toString()
            outputElement.innerHTML = a
        }
    }

    // Процент
    document.getElementById("btn_op_percent").onclick = function() {
        if (selectedOperation && b !== '') {
            b = (parseFloat(b) / 100).toString()
            outputElement.innerHTML = b
        } else if (a !== '') {
            a = (parseFloat(a) / 100).toString()
            outputElement.innerHTML = a
        }
    }

    // Backspace
    document.getElementById("btn_op_backspace").onclick = function() {
        if (selectedOperation) {
            b = b.slice(0, -1)
            outputElement.innerHTML = b || '0'
        } else {
            a = a.slice(0, -1)
            outputElement.innerHTML = a || '0'
        }
    }

    // Смена цвета фона
    document.getElementById("btn_change_bg").onclick = function() {
        currentBgColorIndex = (currentBgColorIndex + 1) % bgColors.length
        document.body.style.backgroundColor = bgColors[currentBgColorIndex]
    }

    // Квадратный корень
    document.getElementById("btn_op_sqrt").onclick = function() {
        const num = selectedOperation ? parseFloat(b) : parseFloat(a)
        if (num < 0) {
            outputElement.innerHTML = 'Error'
            a = b = ''
            selectedOperation = null
            return
        }
        const result = Math.sqrt(num).toString()
        if (selectedOperation) b = result
        else a = result
        outputElement.innerHTML = result
    }

    // Квадрат
    document.getElementById("btn_op_square").onclick = function() {
        const num = selectedOperation ? parseFloat(b) : parseFloat(a)
        const result = (num ** 2).toString()
        if (selectedOperation) b = result
        else a = result
        outputElement.innerHTML = result
    }

    // Факториал
    function factorial(n) {
        if (n === 0 || n === 1) return 1
        return n * factorial(n - 1)
    }
    document.getElementById("btn_op_factorial").onclick = function() {
        const num = selectedOperation ? parseFloat(b) : parseFloat(a)
        if (!Number.isInteger(num) || num < 0) {
            outputElement.innerHTML = 'Error'
            a = b = ''
            selectedOperation = null
            return
        }
        const result = factorial(num).toString()
        if (selectedOperation) b = result
        else a = result
        outputElement.innerHTML = result
    }

    // Смена цвета вывода
    document.getElementById("btn_change_output").onclick = function() {
        currentOutputColorIndex = (currentOutputColorIndex + 1) % outputColors.length
        outputElement.style.backgroundColor = outputColors[currentOutputColorIndex]
    }

    // Индивидуальная операция (x³)
    document.getElementById("btn_op_cube").onclick = function() {
        const num = selectedOperation ? parseFloat(b) : parseFloat(a)
        const result = (num ** 3).toString()
        if (selectedOperation) b = result
        else a = result
        outputElement.innerHTML = result
    }

    document.querySelector('.dropdown-menu').onchange = function() {
        const isEngineeringMode = this.value === "Инженерный";

        maxDigits = isEngineeringMode ? 15 : 10;
        
        // Переключаем видимость инженерных кнопок
        document.querySelectorAll('.engineering-hidden').forEach(btn => {
            btn.style.display = isEngineeringMode ? 'inline-block' : 'none';
        });
    
        // Меняем размер калькулятора
        const calculator = document.querySelector(".calculator-container");
        const resultDisplay = document.querySelector(".result");
        calculator.style.width = isEngineeringMode ? "452px" : "252px";
        resultDisplay.style.width = isEngineeringMode ? "412px" : "242px";
    
        // Сбрасываем состояние калькулятора
        a = b = '';
        selectedOperation = null;
        outputElement.innerHTML = '0';
    };
}