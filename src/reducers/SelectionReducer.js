export default (state = {}, action) => {
    //console.log(action);
    switch (action.type) {
      case 'select_library':
        console.log(`run on reducer select_library ${action.payload}`);
        debugger;
        return {...state, selectedLibraryId: action.payload};
      default:
        return state;
    }

};
