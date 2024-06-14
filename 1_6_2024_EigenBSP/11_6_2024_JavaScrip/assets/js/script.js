// 创建商品项的函数
function createItem(item) {
  // 创建一个新的<div>元素作为商品的容器
  const itemContainer = document.createElement('div');
  // 为这个<div>元素添加类名'itemContainer'
  itemContainer.classList.add('itemContainer');
  // 如果商品是大型的，添加类名'largerItemContainer'
  if (item.large) {
    itemContainer.classList.add('largerItemContainer');
  }

  // 使用模板字符串设置商品的HTML结构，包括链接、图片和文字
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

  // 返回完整的商品容器元素
  return itemContainer;
}

// 填充商品项的函数
function populateItems(items) {
  // 获取主容器元素，用于放置商品项
  const mainContainer = document.getElementById('mainContainer');
  // 创建一个新的<div>元素作为商品列表的容器
  const container = document.createElement('div');
  // 为这个<div>元素添加类名'bildAndPContainer1'
  container.classList.add('bildAndPContainer1');

  // 遍历每个商品项并添加到容器中
  items.forEach(item => {
    container.appendChild(createItem(item));
  });

  // 将商品列表容器添加到主容器中
  mainContainer.appendChild(container);
}

// 当DOM内容加载完成后运行
document.addEventListener('DOMContentLoaded', () => {
  // 从json/items.json文件中获取数据
  fetch('json/items.json')
    .then(response => response.json())
    // 解析JSON数据并调用populateItems函数填充商品
    .then(data => {
      populateItems(data);
    })
    // 捕获并显示加载JSON文件时的错误
    .catch(error => console.error('Error loading JSON:', error));
});