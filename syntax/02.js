const tableau = [
    { title: 'test_1', id: 1 },
    { title: 'Test_2', id: 2 },
    { title: 'test_3', id: 3 },
    { title: 'test_4', id: 4 },
    { title: 'test_5', id: 5 }
];


const listItems = tableau.map( product =>
    <li key = {product.id}>
        {product.title}
    </li>
);


return (
    <ul>
        {listItems}
    </ul>
);