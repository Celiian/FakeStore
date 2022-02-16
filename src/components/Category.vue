<script setup>
</script>
<template>
  <div id="menu">
    <ul>
      <li>
        <a href="#">Catégories</a>
        <ul>
        <li><a href="#">truc</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "Category",
}
</script>

<style>
#menu ul {
  margin: 0;
  padding: 0;
}

#menu li {
  list-style: none;
  float: left;
  position:relative;
}

#menu ul li a {
  color: #000;
  text-decoration: none;
  width: 150px;
  height: 30px;
  display: block;
  text-align: center;
  border:1px solid #000;
}

#menu ul ul {
  position:absoulte;
  top:30px;
  visibility:hidden;
}

#menu ul li:hover{
  visibility: visible;
}
</style>