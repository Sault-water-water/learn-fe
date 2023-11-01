export default {
    // getters,actions,mutation默认合并到根 

  // namespaced: true,加上命名空间以后则不会:写法: $store.getters['counter/xxx'];store.dispatch('counter/xxx');
  state: () => ({
    homeInfo:'homeInfo'
  }),
  actions: () => ({
    changeRootState(commit,dispath,state,rootState,getters,rootGetters) {
      commit('changeRootState', null, { root:true})
    }
  })


}  