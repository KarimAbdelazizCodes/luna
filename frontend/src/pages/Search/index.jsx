import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../store/actions/get_categories";
import RestaurantCard from "../../components/Restaurant/card/RestaurantCard";
import {Results} from "../Home/styled";
import {search} from "../../store/actions/home_search";
import ReviewCard from "../../components/ReviewCard";
import CategoryDropdown from "../../components/CategoryDropdown";
import {Wrapper} from "./styled";
import UserCard from "../../components/userCard";

const SearchPage = props => {
    const dispatch = useDispatch()
    const searchResults = useSelector(state => state.defaultReducer.searchResults)
    const categories = useSelector(state => state.defaultReducer.categories)
    const dropKey = useSelector(state => state.defaultReducer.dropKey)

    let searchParams = props.location.search.split('=')[1]
    let defaultSearch = searchParams ? searchParams : ''
    
    const [keyword, setKeyword] = useState(defaultSearch)
    const [current, setCurrent] = useState('restaurants')
    const [resetCategory, setResetCategory] = useState(false)

    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(search(current, keyword))
    }, [keyword, current])

    const clearState = (current) => {
        const action = {
            type: 'SEARCH_RESULTS',
            payload: []
        }
        dispatch(action)
        setCurrent(current)
    }

    useEffect(()=> setKeyword(dropKey),[dropKey])

    return (
        <Wrapper>
            <Header />
            <main>
                <div className="container">
                    <div className="search-bar">
                        <form>
                            <input type="text" placeholder="Search..."
                                   value={keyword}
                                   onChange={(e) => {
                                       setKeyword(e.target.value)
                                       setResetCategory(!resetCategory);
                                    }}
                                   onFocus={(e) => e.target.select()}/>
                        </form>
                        <CategoryDropdown 
                            categories={categories} 
                            current={current} 
                            reset={resetCategory} 
                            keyword={keyword}/>
                    </div>

                    <div className='views'>
                        <h2 className={current === 'restaurants' ? 'view border-bottom' : 'view'}
                            onClick={() => clearState('restaurants')}>
                            RESTAURANTS</h2>

                        <h2 className={current === 'reviews' ? 'view border-bottom' : 'view'}
                            onClick={() => clearState('reviews')}>
                            REVIEWS</h2>

                        <h2 className={current === 'users' ? 'view border-bottom' : 'view'}
                            onClick={() => clearState('users')}>
                            USERS</h2>
                    </div>
                    <Results>
                        <div className="results">
                            { current === 'restaurants' ? searchResults.map((result, index) =>
                                <RestaurantCard key={index} restaurant={result}/>) : null }

                            { current === 'reviews' ? searchResults.map((result, index) =>
                                <ReviewCard key={index} review={result} />) : null }

                            { current === 'users' ? searchResults.map((result, index) =>
                                <UserCard key={index} user={result}/>) : null }
                        </div>
                    </Results>
                </div>
            </main>
            <Footer />
        </Wrapper>
    )
}

export default SearchPage;
