export const MICELIUM_MAP = {
    "а": "👁",
    "г": "🚰",
    "е": "✡️",
    "и": "🫁",
    "м": "🪼",
    "н": "👀",
    "о": "🧿",
    "п": "🦷",
    "т": "🎚",
    "х": "🪬",
    "э": "🍤",
    "ь": "💺",
    "ж": "🫟",
    "ё": "🔯",
    "у": "🫚",
    "с": "🗜️",
    "б": "🥌"
};

export const VOCABULARYWORDS_MAP = {
    "Глаз": "🚰л🧿🗜️🗜️",
    "Куплино": "К*рл🫁👀🧿",
    "Мицелиум": "мiцеlium",
    "Мозг": "з🪼🧿🚰",
    "Пес": "🗜️ы🦷",
    "Свадьб": "🗜️в👁️🥌д",
    "Хайп": "др🧿зд",
    "Чувак": "ч🫚вч🧿",
    "Зашквар": "з🪼👁️🚰др",
    "Яблок": "з🥌л🧿к",
    "Звук": "з🥌🫚к",
    "Александр": "*******",
    "Мажор": "🗜️кря🚰👁️",
    "Мажоры": "🗜️кря🚰🫁",
    "Псы": "🗜️ы🦷ы",
    "Спасибо": "з🪼🧿🚰🫁🪼",
    "каджаз": "р👁зр👁🥌🧿🎚ч🫁к"
};

export const REVERSE_MICELIUM_MAP = Object.fromEntries(
    Object.entries(MICELIUM_MAP).map(([char, emoji]) => [emoji, char])
);

export const REVERSE_VOCABULARYWORDS_MAP = Object.fromEntries(
    Object.entries(VOCABULARYWORDS_MAP).map(([word, translate]) => [translate, word])
);
