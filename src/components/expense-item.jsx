export default function ExpenseItem({title, value, type}) {

    // const group = Array.isArray(value);
    // let subItems = [];
    //
    // const sum = 0;
    // if (group) {
    //
    // }

    return (
        <div className={"w-1/2 h-20 bg-zinc-800 my-2 rounded-md"}>
            <div className="">
                {title}
            </div>
            <div>
                <div>{ type === 'IN' ? '+' : '-'} </div>
            </div>
        </div>
    );
}
