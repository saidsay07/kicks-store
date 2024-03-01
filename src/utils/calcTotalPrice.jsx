export function calcTotalPrice(array) {
  return array.reduce((acc, item) => {
    acc += item.price * item.count;
  }, 0);
}

calcTotalPrice([{ price: 0, count: 0 }]);
