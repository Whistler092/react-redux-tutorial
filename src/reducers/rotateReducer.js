export default (state, action) => {
    console.log("reducer", action.type);
    console.log("action", action.payload);
    
    switch (action.type) {
        case "rotate":
            return {
                rotating: action.payload
            };
        default:
            return state;
    }
};

/*So, the reducer will receive both of our actions, 
both of which are of type rotate, and they both change 
the same state in the app — which is state.rotating. 

Based on the payload of these actions, state.rotating will 
change into true or false.

*/