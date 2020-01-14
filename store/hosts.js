export const state = () => ({
  list: [],
});

export const mutations = {
  setHosts(st, hosts) {
    /* eslint-disable-next-line no-param-reassign */
    st.list = hosts;
  },
};

export const actions = {
  async fetchHosts({ commit }) {
    return this.$axios.get('/hosts.json')
      .then((res) => {
        commit('setHosts', res.data);
      });
  },
};
