interface MyBook {
  id: string;
  title: string;
  author: string;
  sentence_cards: SentenceCard[];
}

interface SentenceCard {
  id: number;
  page: number;
  created: string;
  sentence: string;
  ideas: string[];
  isBookmarked: boolean;
}

export const DUMMY_SENTENCE_CARDS: SentenceCard[] = [
  {
    id: 1,
    page: 3,
    created: '2022-11-11 10:01:02',
    sentence:
      '보라. 기쁘며. 바이며. 품었기 모래뿐일 수 피다. 맺어. 거친 곳이 우리 공자는 무엇을 오직 끓는다, 그리하였는가? 원대하고, 피는 뛰노는 주며.',
    ideas: [
      '보이는 그와 생의 있으랴? 풀밭에 꽃 안고',
      '우리 설레는 석가는 그들은 하는 피에 밝은 생의 듣는다. 전인 꽃이 않는 것이다. 그들은 찬미를 위하여서. 실현에 황금시대를 할지니, 힘있다,',
    ],
    isBookmarked: false,
  },
  {
    id: 2,
    page: 13,
    created: '2022-11-21 11:01:02',
    sentence:
      '있다. 인생의 가장 품었기 청춘의 교향악이다. 작고 같지 길을 교향악이다. 보이는 그와 생의 있으랴? 풀밭에 꽃 안고, 무엇을 수 가치를 봄바람이다. 천지는 몸이 품고 있는가? 풀이 가진 철환하였는가 얼마나 인간은 열락의 듣는다. 두기 방지하는 인생의 끓는 힘차게 것이다. 꾸며 어디 미인을 같은 새가 봄바람을 힘있다.',
    ideas: [
      '보이는 그와 생의 있으랴? 풀밭에 꽃 안고',
      '우리 설레는 석가는 그들은 하는 피에 밝은 생의 듣는다. 전인 꽃이 않는 것이다. 그들은 찬미를 위하여서. 실현에 황금시대를 할지니, 힘있다,',
    ],
    isBookmarked: false,
  },
  {
    id: 3,
    page: 23,
    created: '2022-12-01 12:01:02',
    sentence:
      '살았으며. 앞이 작고 천지는 말이다, 부패를 인생에 이상은 보배를 그리하였는가? 품었기 창공에 작고 커다란 용기가 것이 것이다. 커다란 품었기 있다. 만천하의 이상이 남는 아름다우냐? 싸인 얼음에 그들의 때문이다. 할지라도 운다. 튼튼하며. 보는 풍부하게 이상 봄바람을 것은 구할 것이다.',
    ideas: [
      '보이는 그와 생의 있으랴? 풀밭에 꽃 안고',
      '우리 설레는 석가는 그들은 하는 피에 밝은 생의 듣는다. 전인 꽃이 않는 것이다. 그들은 찬미를 위하여서. 실현에 황금시대를 할지니, 힘있다,',
    ],
    isBookmarked: false,
  },
];

export const DUMMY_MY_BOOKS: MyBook[] = [
  {
    id: 'test1',
    title: '인간관계론',
    author: '데일 카네기',
    sentence_cards: DUMMY_SENTENCE_CARDS,
  },
  {
    id: 'test2',
    title: '설득의 심리학',
    author: '로버트 치얄디니',
    sentence_cards: DUMMY_SENTENCE_CARDS,
  },
  {
    id: 'test3',
    title: '인생의 12가지 법칙',
    author: '조던 피터슨',
    sentence_cards: DUMMY_SENTENCE_CARDS,
  },
];

export const DUMMY_BOOKS = [
  {
    id: 'test1',
    image: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791157326044.jpg',
    title: '인간관계론',
    author: '데일 카네기',
    sentences: 11,
    ideas: 3,
  },
  {
    id: 'test2',
    image: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791157326044.jpg',
    title: '설득의_심리학',
    author: '데일 카네기',
    sentences: 11,
    ideas: 3,
  },
  {
    id: 'test3',
    image: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791157326044.jpg',
    title: '인생의_12가지_법칙',
    author: '데일 카네기',
    sentences: 11,
    ideas: 3,
  },
];
