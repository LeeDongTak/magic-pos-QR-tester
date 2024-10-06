const icons = ['🐶', '🐻', '🐮', '🐻‍❄️', '🐵'];
const STORE_NAMES_1 = [
  '스타벅스',
  '역전할머니맥주',
  '이디야',
  '할리스',
  '커피빈',
  '메가커피',
  '컴포즈커피',
  '쥬시',
  '블루보틀',
];

const STORE_NAMES_2 = [
  '명륜진사갈비',
  '투썸플레이스',
  '버거킹',
  '맥도날드',
  '나이키',
  'Apple',
  'Microsoft',
  '김밥천국',
  '홍콩반점',
  '피자헛',
  '미스터피자',
  '피자스쿨',
];

const bgColors = ['#E1FFE2', '#FFEFEF', '#E6F6FF'];
const fontColors = ['#34C33A', '#FF5656', '#54A9E6'];

/**
 * 더미 데이터 생성하는 함수
 * @param num 생성 개수
 * @returns 더미 데이터
 */

const REVIEWS1 = [
  'Magic POS는 우리 비즈니스에 획기적인 혁신을 가져왔고 업무 효율성을 극대화하는 데에 기여합니다.',
  '사용이 간편하면서도 다양한 기능이 돋보여 사용자들에게 편리함을 제공합니다. 세련된 디자인은 눈에 확 띄어 특별한 경험을 선사합니다.',
  '편리한 사용자 경험과 빠른 응답 속도로 눈에 띄게 효과적인 웹 기반 키오스크! 간결하면서도 다양한 기능이 돋보여요!',
  '정말 편리하고 신선한 경험을 제공합니다. 주문과 결제가 간편하게 이뤄져 시간을 절약할 수 있어 좋아요.',
  '주문 과정이 간편하고 자유로워서 선택에 대한 압박을 느끼지 않아 좋아요. 신속한 결제로 편안하게 이용하고 있습니다.',
  '고객들이 쉽게 이용할 수 있는 직관적인 인터페이스와 다양한 기능은 많은 긍정적 피드백을 얻고 있습니다.',
  '이전에는 직원분에게 주문해야 해서 줄을 서서 기다리는 시간이 많이 걸렸는데, Magic POS를 사용하면 정말 시간을 절약할 수 있었습니다',
];

const REVIEWS2 = [
  '최근 매장에 Magic POS를 놨는데 정말 만족스러워요. 손님들이 직접 주문하고 결제할 수 있어서 줄을 서서 기다리는 시간이 줄었어요!',
  '직원분에게 주문할 필요 없이 직접 주문하고 결제할 수 있어서 시간을 절약할 수 있었어요. 메뉴도 선택하기 쉬워요!',
  '원하는 메뉴를 쉽게 찾을 수 있었고, 결제도 간편하게 할 수 있었습니다. 앱을 사용하면서 불편한 점은 전혀 없었어요.',
  '손님들에게 편리함을 제공하면서 매장 운영 효율성도 높일 수 있고 앞으로 더 많은 매장에서 Magic POS를 사용하면 좋겠습니다.',
  '직원 업무량 감소로 인건비를 절감할 수 있습니다. Magic POS는 매장의 수익성을 높여주는 훌륭한 도구입니다.',
  'Magic POS는 미래 지향적인 스마트 매장을 구축하는 데 필수적인 요소입니다. ',
];

export const createDummyData = (num: number, index: number) => {
  const data = [];
  const reviewData = index === 1 ? REVIEWS1 : REVIEWS2;
  const storeNameData = index === 1 ? STORE_NAMES_1 : STORE_NAMES_2;

  for (let i = 0; i < num; i++) {
    const n = Math.floor(Math.random() * 12) + 1;
    const icon = icons[Math.floor(Math.random() * icons.length)];
    const storeName = storeNameData[i % storeNameData.length];
    const randomIndex = Math.floor(Math.random() * bgColors.length);

    const item = {
      id: i + 1,
      icon,
      storeName,
      bgColor: bgColors[randomIndex],
      fontColor: fontColors[randomIndex],
      nWeeksLater: n,
      reviewContent: reviewData[i % reviewData.length],
    };

    data.push(item);
  }

  return data;
};
