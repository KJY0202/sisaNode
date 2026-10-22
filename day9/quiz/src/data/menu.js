export const CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "coffee", label: "커피" },
  { id: "noncoffee", label: "논커피" },
  { id: "dessert", label: "디저트" },
];

export const MENU = [
  { id: 1, name: "단풍 라떼", category: "coffee", price: 6300, emoji: "🍁", color: "#f4c7a1", season: true, desc: "메이플 시럽과 시나몬을 얹은 가을 한정 라떼." },
  { id: 2, name: "군밤 크림 콜드브루", category: "coffee", price: 6500, emoji: "🌰", color: "#d9b99b", season: true, desc: "군밤 크림을 올린 콜드브루. 달고 고소해요." },
  { id: 3, name: "아메리카노", category: "coffee", price: 4000, emoji: "☕", color: "#e7d9cc", season: false, desc: "온도의 기본. 산미가 적은 블렌드." },
  { id: 4, name: "바닐라 플랫화이트", category: "coffee", price: 5500, emoji: "🥛", color: "#f3e9dc", season: false, desc: "에스프레소 두 샷에 바닐라 우유." },
  { id: 5, name: "홍시 에이드", category: "noncoffee", price: 5800, emoji: "🍊", color: "#fbd3a5", season: true, desc: "잘 익은 홍시와 탄산. 가을 한정." },
  { id: 6, name: "얼그레이 밀크티", category: "noncoffee", price: 5500, emoji: "🫖", color: "#e3d5f0", season: false, desc: "직접 우린 얼그레이로 만든 밀크티." },
  { id: 7, name: "고구마 바스크 치즈케이크", category: "dessert", price: 6800, emoji: "🍠", color: "#f0c9b5", season: true, desc: "군고구마를 갈아 넣은 바스크 치즈케이크." },
  { id: 8, name: "소금빵", category: "dessert", price: 3800, emoji: "🥐", color: "#f6e3c6", season: false, desc: "버터 향 가득, 겉은 바삭." },
];

const now = new Date();
export const PROMO_END = new Date(now.getFullYear(), now.getMonth() + 1, 1);
export const won = (n) => `${n.toLocaleString("ko-KR")}원`;
