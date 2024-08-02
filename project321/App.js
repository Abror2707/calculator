document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';document.addEventListener('DOMContentLoaded', () => {
                    const display = document.getElementById('display');
                    const buttons = Array.from(document.querySelectorAll('.btn'));
                
                    let currentInput = '';
                    let operator = '';
                    let previousInput = '';
                
                    buttons.forEach(button => {
                        button.addEventListener('click', () => {
                            const value = button.getAttribute('data-value');
                
                            if (value === 'C') {
                                currentInput = '';
                                operator = '';
                                previousInput = '';
                                display.textContent = '0';
                            } else if (value === '=') {
                                try {
                                    currentInput = eval(previousInput + operator + currentInput).toString();
                                } catch {
                                    currentInput = 'Error';
                                }
                                display.textContent = currentInput;
                                operator = '';
                                previousInput = '';
                            } else if (['+', '-', '*', '/'].includes(value)) {
                                if (previousInput && operator && currentInput) {
                                    previousInput = eval(previousInput + operator + currentInput).toString();
                                } else {
                                    previousInput = currentInput;
                                }
                                operator = value;
                                currentInput = '';
                            } else {
                                currentInput += value;
                                display.textContent = currentInput;
                            }
                        });
                    });
                });
                
                operator = '';
                previousInput = '';
                display.textContent = '0';
            } else if (value === '=') {
                try {
                    currentInput = eval(previousInput + operator + currentInput).toString();
                } catch {
                    currentInput = 'Error';
                }
                display.textContent = currentInput;
                operator = '';
                previousInput = '';
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (previousInput && operator && currentInput) {
                    previousInput = eval(previousInput + operator + currentInput).toString();
                } else {
                    previousInput = currentInput;
                }
                operator = value;
                currentInput = '';
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});

