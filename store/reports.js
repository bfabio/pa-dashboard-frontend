/* eslint-disable no-param-reassign */

export const state = () => ({
  list: [],
  byHostname: {},
  problemsByHostname: {},
});

export const mutations = {
  setReports(st, reports) {
    st.list = reports;

    st.byHostname = reports.reduce((map, r) => {
      map[r.hostname] = map[r.hostname] || [];
      map[r.hostname].push(r);
      return map;
    }, {});

    st.problemsByHostname = Object.assign({}, ...Object.entries(st.byHostname).map(([k, v]) => ({ [k]: v.filter((report) => report.severity.match(/^low|medium|high$/)) })));
  },
};

export const actions = {
  async fetchReports({ commit }) {
    return this.$axios.get('/reports', { baseURL: 'https://pa-dashboard-backend.zland.org' })
      .then((res) => {
        commit('setReports', res.data);
      });
  },
};
