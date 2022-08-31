const items = {
    list: [
        {
            id: '1',
            title: 'Sweater',
            price: 8700,
            image: '/images/Sweater.jpg',
            description:
                "Жіночий светр Marc O'Polo грубої в'язки. Особливості: • Тільки ручне прання • Високий комір-стійка • Довгі рукава • Опущені плечі Склад: 70% натуральна шерсть, 30% поліакрил."
        },
        {
            id: '2',
            title: 'Jeans',
            price: 13400,
            image: '/images/Jeans.jpg',
            description: "Сірі потерті джинси моми класичного звуженого до низу крою. Модель високої посадки з п'ятьма кишенями декорована молодіжною нашивкою на кишені. Виріб із застібкою-ґудзиком та блискавкою оснащений поясними шльовками та декорований зборками."
        },
        {
            id: '3',
            title: 'Loafers',
            price: 17000,
            image: '/images/Loafers.jpg',
            description: "Лофери жіночі бежеві шкіра від виробника 3M."
        },
        {
            id: '4',
            title: 'Clutch',
            price: 9300,
            image: '/images/Clutch.jpg',
            description: "Трендовий багет із якісної еко-шкіри бежевого кольору. Всередині відділення, підкладка та кишені. Застібається блискавкою. Довжина ремінця регулюється. Виробництво – Україна."
        }
    ],
};
const handler = async ({ httpMethod }) => {
    return { statusCode: 200, body: JSON.stringify(items) };
};

module.exports = { handler };