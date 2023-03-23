import { IProduct } from '../../app/types/interfaces';

const productList: IProduct[] = [
  {
    id: 1,
    title: 'iPhone 13 Pro',
    date: '2023-03-24',
    discount: false,
    brand: 'Apple',
    category: 'Smartphones',
    thumbnail:
      'https://raw.githubusercontent.com/mshns/online-store/develop/src/assets/data/1/thumbnail.jpg',
  },
  {
    id: 2,
    title: 'Xiaomi 12 Pro',
    date: '2022-05-04',
    discount: true,
    brand: 'Xiaomi',
    category: 'Smartphones',
    thumbnail:
      'https://raw.githubusercontent.com/mshns/online-store/develop/src/assets/data/2/thumbnail.jpg',
  },
  {
    id: 3,
    title: 'Realme 10 4G',
    date: '2020-05-22',
    discount: false,
    brand: 'Realme',
    category: 'Smartphones',
    thumbnail:
      'https://raw.githubusercontent.com/mshns/online-store/develop/src/assets/data/3/thumbnail.jpg',
  },
  {
    id: 4,
    title: 'Samsung Galaxy A23',
    date: '2019-02-28',
    discount: true,
    brand: 'Samsung',
    category: 'Smartphones',
    thumbnail:
      'https://raw.githubusercontent.com/mshns/online-store/develop/src/assets/data/4/thumbnail.jpg',
  },
  {
    id: 5,
    title: 'Huawei nova 9 SE',
    date: '2023-02-12',
    discount: true,
    brand: 'Huawei',
    category: 'Smartphones',
    thumbnail:
      'https://raw.githubusercontent.com/mshns/online-store/develop/src/assets/data/5/thumbnail.jpg',
  },
  {
    id: 6,
    title: 'MacBook Pro 14',
    date: '2021-01-24',
    discount: false,
    brand: 'Apple',
    category: 'Laptops',
    thumbnail:
      'https://raw.githubusercontent.com/mshns/online-store/develop/src/assets/data/6/thumbnail.jpg',
  },
];

export default productList;
