const load = () => {
    try {
        let items = JSON.parse(localStorage.getItem('nn_cart') || '[]');        
        // ensure old items have a boolean tracking them
        items = items.map(i => {
           if(typeof i.selected === 'undefined') i.selected = true;
           return i;
        });
        return items;
    }
    catch (_) { return []; }
};

const save = (items) => localStorage.setItem('nn_cart', JSON.stringify(items)); 

const state = {
    items: load(),
};

const getters = {
    items:      s => s.items,
    selectedItems: s => s.items.filter(i => i.selected !== false),
    itemCount:  s => s.items.filter(i => i.selected !== false).reduce((t, i) => t + i.quantity, 0),
    subtotal:   s => s.items.filter(i => i.selected !== false).reduce((t, i) => t + i.price * i.quantity, 0),
    isEmpty:    s => s.items.length === 0,    
    findItem:   s => (productId, size, color) =>
        s.items.find(i => i.product_id === productId && i.size === size && i.color === color),
};

const mutations = {
    ADD_ITEM(state, item) {
        const existing = state.items.find(
            i => i.product_id === item.product_id && i.size === item.size && i.color === item.color
        );
        if (existing) {
            existing.quantity += item.quantity;
            existing.selected = true; // Auto-select when adding again
        } else {
            state.items.push({ ...item, selected: true });
        }
        save(state.items);
    },
    UPDATE_QUANTITY(state, { index, quantity }) {
        if (quantity <= 0) {
            state.items.splice(index, 1);
        } else {
            state.items[index].quantity = quantity;
        }
        save(state.items);
    },
    TOGGLE_SELECT(state, index) {
        if(typeof state.items[index].selected === 'undefined') {
            state.items[index].selected = true;
        }
        state.items[index].selected = !state.items[index].selected;
        save(state.items);
    },
    REMOVE_ITEM(state, index) {
        state.items.splice(index, 1);
        save(state.items);
    },
    CLEAR_CART(state) {
        state.items = [];
        localStorage.removeItem('nn_cart');
    },
    CLEAR_SELECTED(state) {
        state.items = state.items.filter(i => i.selected === false);
        save(state.items);
    },
};

const actions = {
    addItem({ commit }, item) { commit('ADD_ITEM', item); },
    updateQuantity({ commit }, payload) { commit('UPDATE_QUANTITY', payload); },
    toggleSelect({ commit }, index) { commit('TOGGLE_SELECT', index); },     
    removeItem({ commit }, index) { commit('REMOVE_ITEM', index); },
    clearCart({ commit }) { commit('CLEAR_CART'); },
    clearSelected({ commit }) { commit('CLEAR_SELECTED'); },
};

export default { namespaced: true, state, getters, mutations, actions };     
