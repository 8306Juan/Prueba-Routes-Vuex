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
      let stockOK = false;
      if (DBC == null){
        let obj = JSON.parse(objC);
        obj.stock = 1;
        state.vendidos.push(obj);
        localStorage.setItem('ListaCompras', JSON.stringify(state.vendidos));
      }else{
        for(let i=0; i<DBC.length; i++){
          if (DBC[i].nombre == JSON.parse(objC).nombre){
            DBC[i].stock++;
            state.vendidos = DBC;
            localStorage.setItem('ListaCompras', JSON.stringify(state.vendidos));
            stockOK = true;
          }
        }
        if (stockOK === false){
            JSON.parse(objC).stock = 1;
            state.vendidos = DBC;
            let obj = JSON.parse(objC);
            obj.stock = 1;
            state.vendidos.push(obj);
            localStorage.setItem('ListaCompras', JSON.stringify(state.vendidos));
        }
      }

      

      
    }
  },//		Mutations
  actions: {
  },//		Actions
  modules: {
  }//		Modules
})
