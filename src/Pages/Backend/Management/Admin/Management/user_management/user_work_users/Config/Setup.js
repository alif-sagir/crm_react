let prefix = 'user_work_user';
var setup = {
    prefix,
    route_prefix: 'user-work-user',
    api_prefix: 'user-work-user',
    layout_title: 'user work user management',
    all_page_title: 'All',
    crate_page_title: 'Create',
    edit_page_title: 'Edit',

    dispatch: () => null,
    actions: {
        fetch_all_data: async () => null,
        set_page_limit: async () => null,
        set_search_key: async () => null,
    },
}

setup.set_async = function(async_actions, dataStoreSlice){
    setup.actions.fetch_all_data = async (query_params) => await setup.dispatch(async_actions[`fetch_all_data`](query_params));
    
    setup.actions.set_page_limit = (limit=10) => setup.dispatch(dataStoreSlice['actions'][`set_page_limit`](limit));
    setup.actions.set_search_key = (search_key='') => setup.dispatch(dataStoreSlice['actions'][`set_search_key`](search_key));
}



export default setup;