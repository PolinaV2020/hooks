import React, { useState } from 'react';

export const UseStateExample = () => {
  
  const setInitialCount = () => {
    console.log("setInitialCount worked");
    return Math.trunc(Math.random() * 20)
  }
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(() => setInitialCount()); // используем callback-функцию для ленивой инициализации
  const [title, setTitle] = useState({
    title: "Title",
    date: new Date(),
  }); 

  const updateTitle = () => { //пример обновления объекта через setState
    setTitle(prev => {
      return {
        ...prev,
        title: "New title"
      }
    })
  }

  const addOne = () => {
    setCount(count + 1)
  }

  const minusTen = () => {
    setCount(count - 1)
    setCount(prev => prev - 9) // используем callback-функцию, чтобы обратиться к предыдущему состоянию
  }

  const addTen = () => {
    setCount(count + 1)
    setCount(prev => prev + 9) // используем callback-функцию, чтобы обратиться к предыдущему состоянию
  }

  const minusOne = () => {
    setCount(count - 1)
  }

  return (
    <>
    <div style={{padding: "5px 15px 15px 15px", backgroundColor: "#85DCBA"}}>
      <h3>useState</h3>
      <ul style={{listStyle: "none"}}>
        <li># предоставляет функциональным компонентам доступ к состоянию React;</li>
        <li># объявляет «переменную состояния»;</li>
        <li># вызов useState вернёт пару значений: текущее состояние и функцию, обновляющую состояние;</li>
        <li># функция setState принимает новое значение состояния и ставит в очередь пвторный рендер компонента;</li>
        <li># ленивая инициализация состояния: если начальное значение initialState является результатом дорогостоящих вычислений, можно вместо этого предоставить функцию, которая будет выполняться только при начальном рендере;</li>
        <li># досрочное прекращение обновления состояния: если передать в setState такое же значение как предыдущее, React досрочно выйдет из хука и не будет запускать новый рендер или эффекты</li>
      </ul>
    </div>
    <div style={{padding: "5px 15px 15px 15px", backgroundColor: "#41B3A3"}}>
      <h3>Example</h3>
      <div>
        <h5 style={{marginBottom: "20px"}}>Count: {count}</h5>
        <div style={{width: "200px", display:"flex", justifyContent: "space-between"}}>
          <button style={{padding: "10px 20px"}} onClick={minusOne}>-1</button>
          <button style={{padding: "10px 20px"}} onClick={minusTen}>-10</button>
          <button style={{padding: "10px 20px"}} onClick={addOne}>+1</button>
          <button style={{padding: "10px 20px"}} onClick={addTen}>+10</button>
        </div>
      </div>
      <h5>{title.title}</h5>
      <button style={{padding: "10px 30px"}} onClick={() => updateTitle()}>Update title</button>
    </div>
    </>
    
  );
};
