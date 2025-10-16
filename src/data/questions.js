// Edit these questions and answers to make them fun/meme-style!
// Available traits: suv, wagon, exotic, speed, luxury, cheap
// You can add an image field with either a URL or local path (e.g., "/images/question1.jpg")
export const questions = [
  {
    id: 1,
    text: "Чи плануєте ви відвідати Топорівці на вашому майбутньому авто?",
    image: "https://gtwfilesie-thumb.grandtheftwiki.com/EastLosSantos-GTASA-northeastwards.jpg/1200px-EastLosSantos-GTASA-northeastwards.jpg",
    answers: [
      {
        text: "Гай добре",
        traits: { luxury: 2, exotic: 1 }
      },
      {
        text: "Тіко пʼяний",
        traits: { luxury: 3, exotic: 2, speed: 2 }
      },
      {
        text: "Можливо",
        traits: { suv: 1 }
      },
    ]
  },
  {
    id: 2,
    text: "1.5 у Део Ланосі - це:",
    image: "",
    answers: [
      {
        text: "Розгін до сотні",
        traits: { speed: 3, cheap: 4 }
      },
      {
        text: "Торпеда львівського",
        traits: { speed: 1, cheap: 2 }
      },
      {
        text: "Обʼєм мотору",
        traits: { luxury: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "Ваше ставлення до газу:",
    image: "https://101.net.ua/image/cache/catalog/new2019/125057_821-250x250w_0.webp",
    answers: [
      {
        text: "Якщо в живчику - то норм",
        traits: { cheap: 1 }
      },
      {
        text: "Натискаю до підлоги",
        traits: { speed: 3 }
      },
      {
        text: "Обов'язково",
        traits: { cheap: 3 }
      },
      {
        text: "Не переносю",
        traits: { luxury: 1, suv: 4, wagon: 3 }
      }
    ]
  },
  {
    id: 4,
    text: "Спати накраще:",
    image: "https://media.prostor.ua/catalog/product/z/u/zubnaya-pasta-lakalut-aktiv75ml7704-31194399643442.png?store=ua&image-type=image",
    answers: [
      {
        text: "З Бевциком",
        traits: { cheap: 1 }
      },
      {
        text: "В багажнику",
        traits: { suv: 3, wagon: 4 }
      }
    ]
  },
  {
    id: 5,
    text: "Що робити якщо чути свист при перемиканні передачі:",
    image: "https://novaposhta.ua/pakuivirno/assets/ogimage.jpg",
    answers: [
      {
        text: "Продати бібіку",
        traits: { cheap: 2 }
      },
      {
        text: "Замінити коробку",
        traits: { luxury: 3, exotic: 2 }
      },
      {
        text: "Перестати свистіти",
        traits: { luxury: 1, exotic: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "Купе це:",
    image: "https://kor.ill.in.ua/m/1260x900/2829637.jpg",
    answers: [
      {
        text: "Норм",
        traits: { exotic: 3, luxury: 1, speed: 1 }
      },
      {
        text: "Не норм",
        traits: { cheap: 1 }
      },
    ]
  },
  {
    id: 7,
    text: "Машини обираю:",
    image: "https://cdn2.riastatic.com/photosnew/auto/photo/skoda_fabia__398832827f.jpg",
    answers: [
      {
        text: "На авторіа",
        traits: { cheap: 1 }
      },
      {
        text: "На Bossauto",
        traits: { exotic: 1, speed: 1, luxury: 2 }
      },
      {
        text: "На слух, від батяні",
        traits: { cheap: 3 }
      }
    ]
  },
  {
    id: 8,
    text: "Обмеження швидкості 50, ти будеш їхати:",
    image: "https://ccnwordpress.blob.core.windows.net/journal/2019/09/fast-furious-drag-race.jpg",
    answers: [
      {
        text: "Буду їхати",
        traits: { wagon: 1 }
      },
      {
        text: "50",
        traits: { cheap: 1 }
      },
      {
        text: "69",
        traits: { speed: 2 }
      },
      {
        text: "На зелений",
        traits: { speed: 3 }
      } 
    ]
  },
  {
    id: 9,
    text: "Катаюсь на футбол:",
    image: "",
    answers: [
      {
        text: "Щочетверга",
        traits: { luxury: 1 }
      },
      {
        text: "На самокатови",
        traits: { cheap: 1 }
      },
      {
        text: "З радістю",
        traits: { suv: 1 }
      },
      
    ]
  },
  {
    id: 10,
    text: "Мій улюблений корчваген",
    image: "https://images.squarespace-cdn.com/content/v1/607c649fe2414956a0f8d51b/1686086371190-ZUFPL3FWYKOMQ27MBPU2/vw+hippie+bus+for+sale+%284%29.jpeg?format=1500w",
    answers: [
      {
        text: "Синій гольф універсал((",
        traits: { wagon: 4, cheap: 1 }
      },
      {
        text: "Пососат",
        traits: { luxury: 1 }
      },
      {
        text: "Туарег",
        traits: { luxury: 1, suv: 3 }
      },
    ]
  },
    {
    id: 11,
    text: "Це авто:",
    image: "https://gtwfilesie.grandtheftwiki.com/Admiral-GTAVC-front.jpg",
    answers: [
      {
        text: "Корч",
        traits: { luxury: 3 }
      },
      {
        text: "Зелене",
        traits: { luxury: 1 }
      },
      {
        text: "Капітан",
        traits: { exotic: 3 }
      },
    ]
  },
  {
    id: 12,
    text: "Заходячи в автобус я:",
    image: "https://www.staleviykomfort.com.ua/wp-content/uploads/2025/03/znak-70.png",
    answers: [
      {
        text: "Закидую шнюс",
        traits: { luxury: 3 }
      },
      {
        text: "Викикую шнюс",
        traits: { cheap: 1 }
      },
      {
        text: "Просю дядю дати боком",
        traits: { exotic: 2, speed: 3 }
      },
    ]
  },
    {
    id: 13,
    text: "На фото:",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Fiorino_d%27oro.jpg/330px-Fiorino_d%27oro.jpg",
    answers: [
      {
        text: "Гроші",
        traits: { cheap: 1, speed: 1 }
      },
      {
        text: "Динарій",
        traits: { exotic: 2, luxury:2 }
      },
      {
        text: "Флорин",
        traits: { suv: 4, wagon: 3 }
      },
    ]
  },
    {
    id: 14,
    text: "Чим відрізняються Ланос і Сенс:",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Sens_1.jpg",
    answers: [
      {
        text: "Нічим",
        traits: { wagon: 2, speed: 2, luxury: 2 }
      },
      {
        text: "Ціною",
        traits: { cheap: 2 }
      },
    ]
  },
  {
    id: 15,
    text: "Де шукати руденьких на ланцері:",
    image: "",
    answers: [
      {
        text: "На задньому сидінні",
        traits: { suv: 2, speed: 1, luxury: 2, exotic: 2 }
      },
      {
        text: "Арки, пороги",
        traits: { cheap: 2 }
      },
    ]
  },
  {
    id: 16,
    text: "Люблю",
    image: "",
    answers: [
      {
        text: "Німців",
        traits: { luxury: 2 }
      },
      {
        text: "Японців",
        traits: { cheap: 1  }
      },
      {
        text: "Коп",
        traits: { suv: 3, wagon: 1 }
      },
    ]
  },
    {
    id: 17,
    text: "Бачу люк",
    image: "",
    answers: [
      {
        text: "Маневрую",
        traits: { cheap: 1, wagon: 1 }
      },
      {
        text: "Проїхаю",
        traits: { suv: 3 }
      },
      {
        text: "Забираю",
        traits: { wagon: 3, cheap: 1 }
      },
    ]
  },
    {
    id: 18,
    text: "Вротор:",
    image: "",
    answers: [
      {
        text: "Для дівчаток",
        traits: { suv: 1 }
      },
      {
        text: "Хто?",
        traits: { wagon: 2 }
      },
      {
        text: "Коротко, але яскраво",
        traits: { exotic: 4 }
      },
    ]
  },
    {
    id: 19,
    text: "Заправляюсь завжди:",
    image: "",
    answers: [
      {
        text: "На ОККО",
        traits: { luxury: 1 }
      },
      {
        text: "Шмурдяком",
        traits: { cheap: 1 }
      },
      {
        text: "Часто",
        traits: { speed: 3 }
      },
      {
        text: "На 100 грн",
        traits: { cheap: 1 }
      },
    ]
  },
      {
    id: 20,
    text: "За 2800 віддаш?",
    image: "",
    answers: [
      {
        text: "НабЕрай поговоримо",
        traits: { speed: 1 }
      },
      {
        text: "Рівний як струна",
        traits: { luxury: 1 }
      },
      {
        text: "Гнилий як і ти",
        traits: { cheap: 1 }
      }
    ]
  },
  


];
