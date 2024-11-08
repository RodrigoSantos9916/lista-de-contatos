document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const category = document.getElementById('category').value;

    const contactList = document.getElementById('contact-list');
    const contactItem = document.createElement('li');

    contactItem.innerHTML = `
        <div class="contact-details">
            <p>Nome: ${name}</p>
            <p>Número: ${phone}</p>
            <p>E-mail: ${email}</p>
            <p>Endereço: ${address}</p>
            <p>Categoria: ${category}</p>
        </div>
        <div class="button-container">
            <button onclick="editContact(this)">Editar</button>
            <button onclick="deleteContact(this)">Excluir</button>
        </div>
        <hr>
    `;

    contactList.appendChild(contactItem);
    document.getElementById('contact-form').reset();
});

document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const contacts = document.querySelectorAll('#contact-list li');

    contacts.forEach(contact => {
        const contactText = contact.querySelector('.contact-details').textContent.toLowerCase();
        if (contactText.includes(searchValue)) {
            contact.style.display = '';
        } else {
            contact.style.display = 'none';
        }
    });
});

function editContact(button) {
    const contactItem = button.parentElement.parentElement;
    const contactDetails = Array.from(contactItem.querySelectorAll('p')).map(p => p.textContent.split(': ')[1]);

    document.getElementById('name').value = contactDetails[0];
    document.getElementById('phone').value = contactDetails[1];
    document.getElementById('email').value = contactDetails[2];
    document.getElementById('address').value = contactDetails[3];
    document.getElementById('category').value = contactDetails[4];

    contactItem.remove(); // Remove o item da lista após editar
}

function deleteContact(button) {
    button.parentElement.parentElement.remove(); // Remove o item da lista
}
