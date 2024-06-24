function searchSneakers() {
    const keyword = document.getElementById('keyword').value;
    fetch(`/api/sneakers/${keyword}`)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('sneaker-list');
            list.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                const sneaker = data[i];
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <h2>${sneaker.shoeName}</h2>
                    <p>Brand: ${sneaker.brand}</p>
                    <p>Retail Price: $${sneaker.retailPrice}</p>
                    <img src="${sneaker.thumbnail}" alt="${sneaker.shoeName}">
                `;
                list.appendChild(listItem);
            }
        })
        .catch(error => console.error('Error:', error));
  }

  