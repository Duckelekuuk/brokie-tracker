import Header from './components/header.jsx';
import data from './assets/data.json';
import ExpenseItem from './components/expense-item.jsx';
import { createContext, useEffect, useMemo, useState } from 'react';

const ListContext = createContext(null);
function App() {
    const [list, setList] = useState({});


    console.log(enrichList(data));

    function updateList(list) {
        setList(enrichList(list));
    }

    useEffect(() => {
        setList(enrichList(data))
    }, []);

    const listMemo = useMemo(() => ({list, setList: updateList}), []);
    return (
        <ListContext.Provider value={listMemo}>
            <div className="w-screen h-screen bg-background font-roboto">
                <Header/>
                <main className={'w-full bg-red-600 flex flex-col items-center'}>
                    <ExpenseItem title={"In"} value={data.in} type={'IN'} />
                    <ExpenseItem title={'Out'} value={data.out} type={'OUT'} />
                </main>
            </div>
        </ListContext.Provider>
    )
}

function enrichList(data) {
    return {
        name: data.name,
        in: computeItem(data.in),
        out: computeItem(data.out)
    }
}

function computeItem(item) {
    let totalValue = 0;
    if (Array.isArray(item)) {
        totalValue = item.map(theItem => computeItem(theItem).totalValue).reduce((prev, curr) => prev + curr, 0);
    } else {
        totalValue = item.value;
    }

    return {
        ...item,
        totalValue: totalValue
    }
}


export default App
