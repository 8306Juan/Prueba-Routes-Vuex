<template>
	<div>
		<h1 class="text-2xl">Bienvenido!</h1>
		
		<div class="flex justify-around flex-wrap">

			<div v-for="(prod,idx) of productos" :key="prod.nombre">
				<div class="w-40 mt-4 m-auto p-3 bg-gray-200">
					<label class="text-xl"><b>{{prod.nombre}}</b></label>
					<img v-bind:src="prod.img">
					<p class="block mt-2 border-2 border-gray-400 rounded-md">{{prod.descrip}}</p>
					<label class="block mt-2"><b>Stock: </b>{{prod.stock}}</label>
					<label class="block mt-2"><b>Precio: </b>${{prod.precio}}</label>

					<button class="mt-4 border-2 p-1 border-green-400 bg-green-300 rounded-lg" @click="comprar(idx)">Comprar</button>
					<button class="mt-4 border-2 p-1 border-red-400 bg-red-300 rounded-lg" @click="eliminar(idx)">Eliminar</button>
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
		name: 'Inicio',
		computed:{
			...mapState(['productos']),
			...mapMutations(['refreshProds', 'comprado'])
		},
		methods:{
			comprar(idx){

				this.productos[idx].stock --;
				localStorage.setItem('ListaProds', JSON.stringify(this.productos));

				
				let objC = JSON.stringify(this.productos[idx]);
				this.$store.commit('comprado', objC);

			},
			eliminar(idx){
				this.productos.splice(idx,1);
				localStorage.setItem('ListaProds', JSON.stringify(this.productos));
			}
		},
		created(){
			this.$store.commit('refreshProds');
		},
		components:{
			Footer
		}
	}
</script>