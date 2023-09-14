const Menu = ({ items }) => {
  return (
    <main class="container">
      <div class="menu">
        <h2 class="menu-group-heading">Our Food</h2>
        <div class="menu-group">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <div class="menu-item">
          <img
            src={img}
            alt={title}
            class="menu-item-img"
          />
          <div class="menu-item-text">
            <h3 class="menu-item-heading">
              <span class="menu-item-name">{title}</span>
              <span class="menu-item-price">{price}</span>
            </h3>
            <p class="menu-item-desc">
              {desc}
            </p>
          </div>
        </div>
        );
      })}
    </div>
    </div>
    </main>
  );
};

export default Menu;