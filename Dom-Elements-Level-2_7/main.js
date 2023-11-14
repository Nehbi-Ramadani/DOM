
    document.addEventListener('DOMContentLoaded', function () {
        let counter = 0; 
        const button = document.getElementById('clickButton');
        const container = document.getElementById('container');

        button.addEventListener('click', function () {
            const element = document.createElement('div');

            
            if (counter % 10 === 0) {
                element.classList.add('rechteck');
            } else {
                element.classList.add('weiss');
            }

            element.textContent = counter;
            container.appendChild(element);

            
            ++counter;
        });
    })