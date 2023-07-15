const {createStore} = window.Redux


//state
//reducer
//store


const initialState =[
    'sleep'
]

const hobbyReducer =(state=initialState,action)=>{
    switch (action.type) {
        case 'ADD_HOBBY':{
            const newlist= [...state]
            newlist.push(action.payload)
            return newlist;
        }
        default:
            return state;
    }
}



const store = createStore(hobbyReducer)



//render hobbylist
const renderHobbylist =(hobyylist)=>{
    if(!Array.isArray(hobyylist)|| hobyylist.length===0)return;
    const ulElement = document.querySelector('#hobbylist')
    if(!ulElement) return;


    //reset
    ulElement.innerHTML='';

    for (const hobby of hobyylist) {
        const liElement = document.createElement('li')
        liElement.textContent =hobby;
        ulElement.appendChild(liElement);

    }
}


//reder initial
const initialHobbylist = store.getState()


renderHobbylist(initialHobbylist)
const formElement = document.querySelector('#form');


const handlesubmitform=(e)=>{
    e.preventDefault()
    const content = formElement.querySelector('#hobbytext').value
    if(!content)return;
    const action = {
        type:'ADD_HOBBY',
        payload:content
    }
    store.dispatch(action)
    //resetform
    // formElement.reset()

    formElement.querySelector('#hobbytext').value=''
}

formElement.addEventListener('submit',handlesubmitform)



store.subscribe(()=>{
    renderHobbylist(store.getState())
})

