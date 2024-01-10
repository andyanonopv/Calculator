document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.item-down input');
    const items = document.querySelectorAll('.item a');
    const divide = document.getElementById('divide');
    const equal = document.getElementById('equal');

    
    items.forEach(item => {
        item.addEventListener('click', handleClick);
    });

    
    divide.addEventListener('click', handleDivideClick);

   
    equal.addEventListener('click', handleEqualClick);

    function handleClick(event) {
       
        event.preventDefault();

       
        const clickedValue = event.target.textContent;

        
        input.value += clickedValue;
    }

    function handleDivideClick(event) {
       
        event.preventDefault();

        
        input.value += '/';
    }

    function handleEqualClick(event) {
       
        event.preventDefault();

      
        const inputValue = input.value;
        if (inputValue !== '') {
            const result = eval(inputValue);
            
            input.value = result;
        }
    }
});
