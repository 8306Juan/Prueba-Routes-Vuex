<template>
	<div>
		<h1 class="text-2xl">Vendelo!</h1>

		<div class="m-auto mt-6 bg-blue-300 p-2 grid grid-cols-2 gap-4 lg:w-3/4 lg:p-5 2xl:w-1/2">
			<label>Nombre:</label><input type="text" v-model="nombre">
			<label>Imagen (url):</label><input type="text" v-model="img">
			<label class="col-span-2">Descripcion:</label><textarea rows="8" class="col-span-2" v-model="descrip"></textarea>

			<label>Stock:</label><input type="number" v-model.number="stock">
			
			<label>Precio:</label><input type="number" v-model.number="precio">

			<button class="m-auto mt-2 col-span-2 bg-green-200 lg:w-1/2" @click="agregarProd">Vender</button>
		</div>

	</div>
</template>

<script>

	import { mapMutations, mapState } from 'vuex';

	export default{

		name: 'Vender',

		data(){
			return{
				nombre: '',
				img: '',
				descrip: '',
				precio: 0,
				stock: 0,
				prods: []
			}
		},
		methods:{
			agregarProd(){
				
				this.prods = this.productos;

				this.prods.push({nombre: this.nombre, img:this.img, descrip:this.descrip, precio:this.precio, stock:this.stock});

				localStorage.setItem('ListaProds',JSON.stringify(this.prods));
			}
		},
		computed:{
			...mapState(['productos'])
		}
	}
</script>