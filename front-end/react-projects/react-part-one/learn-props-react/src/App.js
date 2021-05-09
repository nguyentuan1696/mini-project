import './App.css';

// 1

// function MyComponent(props)
// {
//   return <h1>Hello React {props.title}</h1>
// }

// function App() {
//   return (
//     <MyComponent  title='first app' />
//   );
// }

// 2 
// function MyComponent(props) {

//     if (props.showTitle) {
//       return (
//         <h1> Hello React</h1>
//       ) 
//     } else {
//       return null
//     }
// }

// function App() {
//   return <MyComponent showTitle={true} />
// }

// 3 
// function MyComponent({showTitle, title}) {
//   if (showTitle) {
//     return <h1> { title }</h1>
//   } else {
//     return null
//   }
// }

// function App() {
//   return <MyComponent showTitle title='Hello React' />
// }

// 3 
// function MyComponent({ showTitle, children }) {
//   if (showTitle) {
//     return children
//   } else {
//     return null
//   }
// }

// function App() {
//   return <MyComponent showTitle> <h1>Hello React</h1></MyComponent>}

function App()

{
  const data = {
  // title: 'Hello React',
  description: 'this is my description',
  button:'see more'
}
  return (
    <MyComponent {...data} />
  )
}
 

function MyComponent({title = 'my default title', description = 'my default description', button: buttonText})
{

  const button = <button>Like this post</button>
  return (
    <div>
      <h1>{ title }</h1>
      <p>{ description }</p>
      <button>{buttonText}</button>
      {button}
    </div>
  )
}

export default App;
