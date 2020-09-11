import {ALL_USERS} from "@/assets/js/data";

export const state = () => ({
  allUsers: [],
  filteredAllUsers: [],
  selectedUsers: [],
  filteredSelectedUsers: [],
  userDescription: {},
  isFetch: false,
  isFilteredAllUsers: false,
  isFilteredSelectedUsers: false,
});

export const actionTypes = {
  GET_USERS: "userList/getAllUsers",
  GET_USER_INFO: 'userList/getUserInfo',
  ADD_USER_TO_SELECTED: "userList/addUserToSelected",
  REMOVE_USER_TO_SELECTED: "userList/removeUserToSelected",
  GET_FILTERED_ALL_USERS: "userList/getFilteredAllUsers",
  GET_FILTERED_SELECTED_USERS: "userList/getFilteredSelectedUsers",
};

export const mutations = {
  setAllUsers(state, payload) {
    state.allUsers = payload;
  },
  setUserInfo(state, payload) {
    state.userDescription = state.allUsers.filter(item => +item.id === +payload)[0];
  },
  setUserDescription(state, payload) {
    state.userDescription = payload;
  },
  setFetchState(state, payload) {
    state.isFetch = payload;
  },


  addUserToSelected(state, payload) {
    state.allUsers.map(item => {
      if (+item.id === +payload && !item.selected) {
        item.selected = true;
      }
    });
    let selectedUser = state.allUsers.filter(item => +item.id === +payload)[0];
    if (!state.selectedUsers.includes(selectedUser)) {
      state.selectedUsers.push(selectedUser);
    }
  },
  removeUserToSelected(state, payload) {
    state.allUsers.map(item => {
      if (+item.id === +payload && item.selected) {
        item.selected = false;
      }
    });
    let selectedUser = state.allUsers.filter(item => +item.id === +payload)[0];
    let indexSelectedElement = state.selectedUsers.indexOf(selectedUser);
    state.selectedUsers.splice(indexSelectedElement, 1);
  },



  filterAllUsers(state, payload) {
    let searchString = payload;
    state.isFilteredAllUsers = true;
    state.filteredAllUsers = state.allUsers.filter(item => item.fullName.toLowerCase().includes(searchString.toLowerCase()));
  },
  clearFilteredAllUsers(state) {
    state.filteredAllUsers = [];
    state.isFilteredAllUsers = false;
  },



  filterSelectedUsers(state, payload) {
    let searchString = payload;
    state.isFilteredSelectedUsers = true;
    state.filteredSelectedUsers = state.selectedUsers.filter(item => item.fullName.toLowerCase().includes(searchString.toLowerCase()));
  },
  clearFilteredSelectedUsers(state) {
    state.filteredSelectedUsers = [];
    state.isFilteredSelectedUsers = false;
  },
};

export const actions = {
  async getAllUsers({commit}) {
    commit("setFetchState", true);
    setTimeout(() => {
      commit("setAllUsers", ALL_USERS);
      commit("setFetchState", false);
    }, 1000);
  },

  async getUserInfo({commit}, id) {
    commit("setUserInfo", id);
  },

  async addUserToSelected({commit}, id) {
    commit("addUserToSelected", id);
  },

  async removeUserToSelected({commit}, id) {
    commit("removeUserToSelected", id);
  },



  async getFilteredAllUsers({commit}, searchString) {
    if (searchString.length) {
      commit("filterAllUsers", searchString);
    } else {
      commit("clearFilteredAllUsers", searchString);
    }
  },

  async getFilteredSelectedUsers({commit}, searchString) {
    if (searchString.length) {
      commit("filterSelectedUsers", searchString);
    } else {
      commit("clearFilteredSelectedUsers", searchString);
    }
  },



  async getUserById({commit}, userId) {
    let currentUserDescription = ALL_USERS.filter(item => +item.id === +userId) || {};
    commit("setUserDescription", currentUserDescription);
  },
};

