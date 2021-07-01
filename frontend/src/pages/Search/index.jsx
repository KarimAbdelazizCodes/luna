import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../store/actions/get_categories";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import {Results} from "../Home/styled";
import {search} from "../../store/actions/home_search";
import ReviewCard from "../../components/ReviewCard";
import {Wrapper} from "./styled";

const SearchPage = props => {
    const dispatch = useDispatch()
    const searchResults = useSelector(state => state.defaultReducer.searchResults)
    const categories = useSelector(state => state.defaultReducer.categories)

    let searchParams = props.location.search.split('=')[1]
    const [searchParam, setSearch] = useState(searchParams)
    const [current, setCurrent] = useState('restaurants')

    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(search(current, searchParams))
    }, [dispatch, current])

    return (
        <Wrapper>
            <Header />
            <main>
                <div className="container">
                    <div className="search-bar">
                        <form>
                            <input type="text" placeholder="Search..."
                                   value={searchParam}
                                   onChange={(e) => setSearch(e.target.value)}/>
                        </form>
                        <select className="categories">
                            <option>Select a category</option>
                            {categories.map(category => <option>{category.category}</option>)}
                        </select>
                    </div>

                    <div className='views'>
                        <h2 className={current === 'restaurants' ? 'view border-bottom' : 'view'}
                            onClick={() => setCurrent('restaurants')}>
                            RESTAURANTS</h2>

                        <h2 className={current === 'reviews' ? 'view border-bottom' : 'view'}
                            onClick={() => setCurrent('reviews')}>
                            REVIEWS</h2>

                        <h2 className={current === 'users' ? 'view border-bottom' : 'view'}
                            onClick={() => setCurrent('users')}>
                            USERS</h2>
                    </div>
                    <Results>
                        <div className="results">
                            { current === 'restaurants' ? searchResults.map((result, index) =>
                                <RestaurantCard key={index} restaurant={result}/>) : null }

                            { current === 'reviews' ? searchResults.map((result, index) =>
                                <ReviewCard key={index} review={result}/>) : null }

                            {/*{ current === 'users' ? searchResults.map((result, index) =>*/}
                            {/*    <UserCard key={index} review={result}/>) : null }*/}
                        </div>
                    </Results>
                </div>
            </main>
            <Footer />
        </Wrapper>
    )
}

export default SearchPage;
