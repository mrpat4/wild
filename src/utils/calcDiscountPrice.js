export default function calcDiscountPrice(firstPrice, secondPrice) {
  return ((firstPrice - secondPrice) / firstPrice) * 100;
}
