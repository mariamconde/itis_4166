const { DateTime } = require("luxon");
const stories = [{
    id: '1',
    title: 'A funny story',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis augue, consequat quis dapibus at, elementum id nisl. Etiam congue urna a feugiat ultricies. Ut sed elit viverra, fermentum nulla id, scelerisque justo. Proin eu elementum elit. Nullam non pellentesque nisi. Praesent vestibulum ut justo posuere lacinia. Nulla vitae faucibus neque. Cras id volutpat quam. Sed at imperdiet sem. Suspendisse urna diam, blandit at ullamcorper sit amet, dictum vel tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    author: 'Mariam',
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
},
{
    id: 2,
    title: 'It is raining',
    content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    author: 'Micheal',
    createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(DateTime.DATETIME_SHORT)
}
];

exports.find = () => stories;