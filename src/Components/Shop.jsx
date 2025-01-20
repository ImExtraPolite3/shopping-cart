function Shop({ allItems, showProduct }) {
  return (
    <div className="shop">
      {allItems.map((item, index) => {
        return (
          <div key={index} onClick={() => showProduct(item)}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
