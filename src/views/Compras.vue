<template>
	<div>
		<h1 class="text-2xl">Tus Compras</h1>

		<div class="flex justify-around flex-wrap">
			<div v-for="(prod,idx) of compras" :key="idx">
				<div class="w-40 mt-4 m-auto p-3 bg-blue-200">
					<label class="text-xl"><b>{{prod.nombre}}</b></label>
					<img v-bind:src="prod.img">
					<p class="block mt-2 border-2 border-gray-400 rounded-md">{{prod.descrip}}</p>
					<label class="block mt-2"><b>Stock: </b>{{prod.stock}}</label>
					<label class="block mt-2"><b>Precio: </b>${{prod.precio}}</label>

					<button class="mt-4 border-2 p-1 border-red-400 bg-red-300 rounded-lg" @click="eliminar(idx)">Eliminar</button>
				</div>
			</div>
		</div>
		
		<Footer></Footer>
	</div>

</template>

<script>
	
	import Footer from '@/components/Footer.vue';

	export default{
		name: 'Compras',
		components:{
			Footer
		},
		data(){
			return{
				compras:""
			}
		},
		created(){
			let comprados = JSON.parse(localStorage.getItem('ListaCompras'));
			
			this.compras=comprados;
		}
	}

</script>