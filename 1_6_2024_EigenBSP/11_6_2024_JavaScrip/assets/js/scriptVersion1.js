const items = [
    {
      href: "https://amzn.to/32MmHgL",
      imgSrc: "./assets/img/background/1.png",
      altText: "Kanken Art Laptop 15\" Special Edition Backpack",
      title: "Kanken Art Laptop 15\" Special Edition Backpack",
      brand: "Fjallraven",
      price: "$119.00",
      large: true
    },
    {
      href: "https://amzn.to/2WX7vtD",
      imgSrc: "./assets/img/bild/1seite/1.png",
      altText: "Swing Arm Wood Desk Lamp",
      title: "Swing Arm Wood Desk Lamp",
      brand: "Tomons",
      price: "$36.00",
      large: false
    },
    {
        href: "https://amzn.to/2WX7vtD",
        imgSrc: "./assets/img/bild/1seite/2.png",
        altText: "Swing Arm Wood Desk Lamp",
        title: "Swing Arm Wood Desk Lamp",
        brand: "Tomons",
        price: "$36.00",
        large: false
      },
      {
        href: "https://amzn.to/2WX7vtD",
        imgSrc: "./assets/img/bild/1seite/3.png",
        altText: "Swing Arm Wood Desk Lamp",
        title: "Swing Arm Wood Desk Lamp",
        brand: "Tomons",
        price: "$36.00",
        large: false
      },
];

// 创建商品项的函数
function createItem(item) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('itemContainer');
    if (item.large) {
      itemContainer.classList.add('largerItemContainer');
    }
  
    itemContainer.innerHTML = `
      <a href="${item.href}">
        <img src="${item.imgSrc}" alt="${item.altText}">
      </a>
      <div class="textBox">
        <div>
          <p>${item.title}
            <span>${item.brand}</span>
          </p>
        </div>
        <p>${item.price}</p>
      </div>
    `;
  
    return itemContainer;
  }

  // 填充商品项的函数
function populateItems(items) {
    const mainContainer = document.getElementById('mainContainer');
    const container = document.createElement('div');
    container.classList.add('bildAndPContainer1');
  
    items.forEach(item => {
      container.appendChild(createItem(item));
    });
  
    mainContainer.appendChild(container);
  }
  
  // 当DOM内容加载完成后运行
  document.addEventListener('DOMContentLoaded', () => {
    populateItems(items);
  });