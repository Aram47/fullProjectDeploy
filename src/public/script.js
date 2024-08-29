const first         = document.getElementById('first');
const second        = document.getElementById('second');
const firstButton   = document.getElementsByClassName('first-button')[0];
const secondButton  = document.getElementsByClassName('second-button')[0];
const elementsArray = [
    {
        "name"  : document.getElementsByClassName('cat-name')[0],
        "price" : document.getElementsByClassName('cat-price')[0],
    },
    {
        "name"  : document.getElementsByClassName('cola-name')[0],
        "price" : document.getElementsByClassName('cola-price')[0],
    },
    {
        "name"  : document.getElementsByClassName('burger-name')[0],
        "price" : document.getElementsByClassName('burger-price')[0],
    },
    {
        "name"  : document.getElementsByClassName('sushi-name')[0],
        "price" : document.getElementsByClassName('sushi-price')[0],
    }
];

firstButton.addEventListener('click', async () => {
    try {
        const response = await fetch("http://135.181.37.152:3003/products");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        first.style.display = "none";
        second.style.display = "block";

        const result = await response.json();
        
        for (let i = 0; i < elementsArray.length; ++i) {
            elementsArray[i].name.textContent  = result[i].name;
            elementsArray[i].price.textContent = result[i].price;
        }

      } catch (error) {
        console.error(error.message);
      }
});

secondButton.addEventListener('click', () => {
    second.style.display = "none";
    first.style.display  = "block";
});
