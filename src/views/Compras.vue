<template>
	<div>
		<h1 class="text-2xl">Tus Compras</h1>
		
		<div class="mt-10 mb-10 text-xl"><b>Suma Total: </b>${{total}}</div>

		<div class="flex justify-around flex-wrap m-auto min-h-screen lg:grid lg:grid-cols-4 lg:w-3/4 2xl:grid-cols-5">
			<div v-for="(prod,idx) of prodComprados" :key="idx">
				<div class="w-44 mt-4 m-auto p-3 bg-blue-200 2xl:w-56">
					<label class="text-xl"><b>{{prod.nombre}}</b></label>
					<img class="w-48 h-32 2xl:w-52 2xl:h-36" v-bind:src="prod.img">
					<p class="block mt-2 border-2 border-gray-400 rounded-md">{{prod.descrip}}</p>
					<label class="block mt-2"><b>Comprados: </b>{{prod.stock}}</label>
					<label class="block mt-2"><b>Precio: </b>${{prod.precio}}</label>
					<label class="block mt-2"><b>Total: </b>${{prod.precio*prod.stock}}</label>

					<button class="mt-4 border-2 p-1 border-red-400 bg-red-300 rounded-lg" @click="eliminarC(idx,prod)">Eliminar</button>
				</div>
			</div>
		</div>
		
		<Footer></Footer>
	</div>

</template>

<script>
	
	import Footer from '@/components/Footer.vue';
	import { mapState, mapMutations }  from 'vuex';

	export default{
		name: 'Compras',
		data(){
			return{
				total: 0
			}
		},
		components:{
			Footer
		},
		computed:{
			...mapState(['prodComprados']),
			...mapMutations(['refreshCompras'])
		},
		methods:{
			eliminarC(idx,prod){
				this.prodComprados.splice(idx, 1);
		        localStorage.setItem('ListaCompras', JSON.stringify(this.prodComprados));
			}
		},
		created(){
			this.$store.commit('refreshCompras');
			const total = ()=>{
				for(let produ of this.prodComprados){
					let subTotal = produ.precio * produ.stock;
					this.total += subTotal;
				}
			}
			total();
		}
	}

</script>