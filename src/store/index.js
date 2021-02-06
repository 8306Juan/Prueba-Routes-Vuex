import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	productos: [],
    vendidos: [],
    prodComprados:[]
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
    refreshCompras(state){
      let comprados = JSON.parse(localStorage.getItem('ListaCompras'));
      if (comprados == null){
        state.prodComprados = [];
      }else{
        state.prodComprados = comprados;
      }
    },
    comprado(state,objC){

      let DBC = JSON.parse(localStorage.getItem('ListaCompras'));
      if (DBC == null){
        state.vendidos.push(JSON.parse(objC));
        console.log(state.vendidos);
        localStorage.setItem('ListaCompras', JSON.stringify(state.vendidos));
      }else{
        state.vendidos = DBC;
        state.vendidos.push(JSON.parse(objC));
        localStorage.setItem('ListaCompras', JSON.stringify(state.vendidos));

      }
    }
  },//		Mutations
  actions: {
  },//		Actions
  modules: {
  }//		Modules
})
