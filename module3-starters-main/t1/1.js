const targetelement = document.querySelector(`#target`);

targetelement.classList.toggle('my-list');
targetelement.innerHTML = `
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        `;
