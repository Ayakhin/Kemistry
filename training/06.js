function Mybutton(){
    return(
        <div>
            <h1>My button</h1>
        </div>
    );
}


export default function MyApp(){
    return(
        <div>
            <h1>My App</h1>
            <Mybutton />
        </div>
    );
}