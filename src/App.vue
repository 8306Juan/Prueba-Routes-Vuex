<template>
  <div id="app" class="w-full text-center">
    <div id="nav" class="w-full bg-purple-300 flex justify-around m-auto lg:w-3/4">
    	<router-link to="/" class="p-3" >Inicio</router-link> |
    	<router-link to="/vender" class="p-3">Vender</router-link> |
    	<router-link to="/compras" class="p-3">Compras</router-link>
    </div>
    <router-view class="pt-10"/>
  </div>
</template>
