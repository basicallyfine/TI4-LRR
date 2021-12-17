import React, { useMemo, useEffect, useState } from 'react';
import _ from 'lodash';

import { Link } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';

import Search from '../../lib/content-search';

const NavSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    let contentSearch;

    useEffect(() => {
        contentSearch = new Search();
    }, []);

    const searchHandler = (throttledSearchTerm) => {
        console.log({ throttledSearchTerm });
        if (!throttledSearchTerm) {
            setSearchResults([]);
            return;
        }
        contentSearch(throttledSearchTerm).then((results) => {
            console.log(results);
            setSearchResults(results);
        });
    };
    const throttledSearchHandler = useMemo(
      () => _.throttle(searchHandler, 500),
      []
    );

    useEffect(() => ( throttledSearchHandler(searchTerm) ), [searchTerm]);

    const show = searchTerm && (searchResults.length > 0);

    return (
        <div className="search-wrapper ms-auto w-auto flex-grow-1">
            <FormControl
                type="search"
                placeholder="Search..."
                aria-label="Search"
                variant="outline-light"
                value={searchTerm || ''}
                onChange={(e) => { setSearchTerm(e.target.value.replace(/^\s+/, '')); }}
            />
            <div className="search-results">
                <ul className={`dropdown-menu ${show ? 'show' : ''}`}>
                    {searchResults.map(item => (
                        <li key={item.id}>
                            <Link
                                className="dropdown-item"
                                to={item.link}
                                onClick={(e) => { setSearchTerm(''); }}
                            >
                                {item.location.join(' / ')}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavSearch;