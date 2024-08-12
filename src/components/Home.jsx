import React from 'react';
import Header from './Header';
import CardsPizza from './CardsPizza';
import pizza1 from '../assets/img/pizza-1.jpg';
import pizza2 from '../assets/img/pizza-2.jpg';
import pizza3 from '../assets/img/pizza-3.jpg';

export const Home = () =>{
    const data = [
        {
            titulo: "Pizza Pepperoni",
            ingredientes: ["Mozzarella", "Pepperoni", "Orégano"],
            precio: "$5.990",
            img: pizza1,
            key: "pizza-1",
        },
        {
            titulo: "Pizza Napolitana",
            ingredientes: ["Mozzarella", "Tomate", "Jamón", "Orégano"],
            precio: "$7.990",
            img: pizza2,
            key: "pizza-2",
        },
        {
            titulo: "Pizza Española",
            ingredientes: ["Mozzarella", "Chorizo", "Parmesano", "Orégano"],
            precio: "$8.990",
            img: pizza3,
            key: "pizza-3",
        },
    ]

    return (
        <>
        <Header/>
        <div className='container'>
            <div className='row'>
                {data.map((pizza) => (
                    <div className='col-md-4 col-xs-12 caja-cards' key={pizza.key}>
                         <CardsPizza 
                                titulo={pizza.titulo} 
                                ingredientes={pizza.ingredientes} 
                                precio={pizza.precio} 
                                img={pizza.img} 
                            />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Home;