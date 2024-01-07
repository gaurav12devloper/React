const pet=(props)=>{
    return React.createElement("div",{},[
    React.createElement("h1",{},props.animal),
    React.createElement("h2",{},props.name),
    React.createElement("h2",{},props.breed)
]);
}

const App=()=>{
    return React.createElement("div",{}, //
    React.createElement("h1",{},[
        ////pet is a component, we can use it as a tag, we can pass props to it, animal, name, breed pass as props to pet component 
        React.createElement(pet,{ 
            animal:"dog", //
            name:"Luna",
            breed:"Havanese"
        }),
        React.createElement(pet,{
            animal:"bird",
            name:"pepper",
            breed:"curtails"
        }),
        React.createElement(pet,{
            animal:"cat",
            name:"Doing",
            breed:"Mixed"
        })
    ])
    );
 };
const container=document.getElementById("root");
const root=ReactDOM.createRoot(container);
root.render(React.createElement(App));