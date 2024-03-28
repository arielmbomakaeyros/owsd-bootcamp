import { createSlice } from '@reduxjs/toolkit';
import { NavigationBarSlice } from './types';

const initialState: NavigationBarSlice = {
    sideBartoggle: false
}

export const navigation = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
      toggleSideBar: (state, action) => {
          state.sideBartoggle = action.payload;
      },      
    },
});

export const { 
    toggleSideBar, 

} = navigation.actions;

export default navigation.reducer;



































//   addChat: (state, action) => {
    //     const { conversations, selectedConversation, id, message, messageTime, client, name } = action.payload; 
    //     const newConversation = conversations?.map((coversation: ConversationsType) => {
    //       if (coversation?.id === selectedConversation) {
    //         // console.log("selectedConversation: ", data, coversation?.id, coversation, selectedConversation, coversation?.messages)
    //         const data = {
    //           id: id, message: message, messageTime: messageTime, client: !coversation?.client, name
    //         }
    //         return {...coversation, messages: [...coversation.messages, data], client: !coversation?.client }; 
    //       }; 
    //       return coversation
    //     }); 
    //     // console.log("result: ", newConversation)
    //     state.conversations = newConversation
    //     // state.conversation?.messages?.push(action.payload)
    //   },