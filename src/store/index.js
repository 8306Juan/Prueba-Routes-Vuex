import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	productos: [],
    vendidos: []
  },//		State
  mutations: {
  	refreshProds(state){
  		let DB = JSON.parse(localStorage.getItem('ListaProds'));
  		if (DB == null){
  			state.productos = [];
  		}else{
  			state.productos = DB;
  		}
  	},
    comprado(state,objC){

      let DBC = JSON.parse(localStorage.getItem('ListaCompras'));
      if (DBC == null){
        state.vendidos.push(objC);
        localStorage.setItem('ListaCompras', state.vendidos);
      }else{
        
        state.vendidos.push(DBC);
        state.vendidos.push(JSON.parse(objC));
        console.log(state.vendidos);
        localStorage.setItem('ListaCompras', JSON.stringify(state.vendidos));
      }
    }
  },//		Mutations
  actions: {
  },//		Actions
  modules: {
  }//		Modules
})
