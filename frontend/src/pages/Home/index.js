import React from 'react';
import Rating from '../../components/Rating';
import Input from '../../components/Input';
import { PageWrapper } from '../Login/styled';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

const HomePage = () => {
    return (
    <>
        <Header></Header>

        <Rating />
        <Input
            placeholder='Search...'
            name='search'
            formId='search_form'/>
        <Input
            placeholder='Find...'
            name='find'
            formId='search_form'/>
        <Input
            placeholder='Random...'
            name='random'
            formId='random_form'/>
        <h1>Title 1</h1>
        <h2>Title 2</h2>
        <h3>Title 3</h3>
        <h4>Title 4</h4>
        <button>HALLO</button>
        <button>ZWEI</button>
        <article>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh risus, 
            feugiat vel laoreet at, finibus a ex. Sed placerat mi nec lectus commodo finibus. 
            Ut quis dictum leo, eget gravida est. Suspendisse luctus egestas odio ut finibus. 
            Aenean suscipit pretium urna ut scelerisque. Praesent feugiat malesuada orci, vel vehicula ex congue 
            quis. Vivamus et metus non est lobortis malesuada id ut velit. Donec elementum tortor arcu, nec scelerisque 
            sem dapibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent convallis in velit in elementum. 
            Integer placerat nulla nec urna bibendum, at vestibulum felis blandit. Nulla placerat ipsum vitae ante dapibus dignissim. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Nam ullamcorper cursus risus eu pretium.
        </p>
        </article>
        <article>
        <p className='template'> 
            Suspendisse vehicula, tellus quis suscipit dictum, sapien velit fermentum ipsum, 
            tristique viverra velit metus at magna. Ut auctor, 
            arcu a finibus sollicitudin, nulla neque posuere metus, sed cursus justo lorem pulvinar mauris. 
            Duis ornare velit quis interdum euismod. Vivamus mi erat, sodales sed arcu nec, varius maximus elit. 
            Donec euismod libero id sapien venenatis sagittis. Quisque mollis quis leo ac volutpat. Donec ut arcu et odio 
            fermentum imperdiet. Donec vel accumsan arcu. Donec iaculis sapien enim, id vehicula turpis imperdiet a. 
            Praesent non felis volutpat nunc porta dictum vel eu justo. Sed eros nisi, convallis eget eros sit amet, 
            pulvinar mollis massa. Ut vitae consequat velit. Vivamus in cursus arcu.
        </p>
        </article>
        
        <ul>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
            <li>item4</li>
            <li>item5</li>
        </ul>
        <nav>
            <ul>
            <li>navigation1</li>
            <li>navigation2</li>
            <li>navigation3</li>
            <li>navigation4</li>
            <li>navigation5</li>
        </ul>
        </nav>

    <RestaurantCard></RestaurantCard>

    <Footer></Footer>

    </>
    )
}

export default HomePage;