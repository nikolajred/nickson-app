import {renderEntireTree} from "../render";

const state = {



    contentPage:{
        posts : [
            {id: '1', post: 'Hello!', like : '10' },
            {id: '2', post: 'How are you?', like : '13' },
        ],
        newPostText: 'Hi! I am newPostText'
    },
    dialogsPage:{
        dialogs : [
            {id: '1', name: 'Nikolas'},
            {id: '2', name: 'Ivan'},
            {id: '3', name: 'Sandra'},
            {id: '4', name: 'Maxim'},
            {id: '5', name: 'Masha'},
            {id: '6', name: 'Valera'},
        ],
        messages : [
            {id: '1', message: 'Hi!'},
            {id: '2', message: 'How are you?'},
            {id: '3', message: 'Glad to see you!'}
        ]
    }
}

export let addNewPost = () => {

    let newObj = {id: '3', post: state.contentPage.newPostText, like: '0'};
    state.contentPage.posts.push(newObj);
    state.contentPage.newPostText = ' ';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) =>{
    state.contentPage.newPostText = newText;
    renderEntireTree(state);
}

export let addNewMessage = (newMessage) => {

    let newObj = {id: '4', message: newMessage};
    state.dialogsPage.messages.push(newObj);
    renderEntireTree(state);
}


export default state;