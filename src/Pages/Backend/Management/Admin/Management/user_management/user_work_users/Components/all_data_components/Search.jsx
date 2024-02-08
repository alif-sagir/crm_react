import React, { useEffect } from 'react'
// import setup from '../../Config/setup';

function Search() {
    // const data_store = useSelector((state) => state[setup.prefix]);
    // setup.dispatch = useDispatch();
    // const { set_search_parameter, get_data } = setup.actions;
    // useEffect(() => {
    //     get_data();
    // }, [
    //     data_store.search_key
    // ]);
    return (
        <>
            <div className="search">
                {/* sdkjfhdksjhfkdjs */}
                <input
                    type="text"
                    className="form-control border"
                    placeholder="Search..."
                ></input>
            </div>
        </>
    )
}

export default Search