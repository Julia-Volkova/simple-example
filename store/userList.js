import { ALL_USERS } from "@/assets/js/data";

export const state = () => ({
  allUsers: [],
  selectedUsers: [],
  userDescription: {},
});

export const actionTypes = {
  GET_USERS: "userList/getAllUsers",
};

export const mutations = {
  setAllUsers(state, payload) {
    state.allUsers = payload;
  },
  setUserDescription(state, payload) {
    state.userDescription = payload;
  },
  clearSelectedUsers(state, payload) {
    state.selectedUsers = payload;
  },
};

export const actions = {
  async getAllUsers({ commit }) {
    commit("setAllUsers", ALL_USERS);
  },

  async getUserById({ commit }, userId) {
    let currentUserDescription = ALL_USERS.filter(item => +item.id === +userId) || {};
    commit("setUserDescription", currentUserDescription);
  },

  async clearSelectedUsers({ commit }) {
    commit("clearSelectedUsers", []);
  },
};

