import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReduser from './contacts/contacts-redusers';

// const rootReduser = {
//   contacts: contactsReduser,
// };

const store = createStore(contactsReduser, composeWithDevTools());

export default store;
