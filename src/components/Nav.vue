<template>
    <nav class="topNav">
        <div class="divLinks">
        <p class="link">
        <RouterLink to="/" class="link">Home</RouterLink></p>
        <p class="link">
        <RouterLink to="/category" class="link">Category</RouterLink></p>
        </div>
        <input type="text" placeholder="Search" class="searchBar">
      </nav>
</template>

<style>


.topNav{
    display: flex;
    justify-content: space-between;
    background-color: rgb(44, 212, 204);
    margin-bottom: 2%;
}

.divLinks {
    display: flex;
}

.searchBar {
    height: 110%;
    width: 150px;
    margin-top: 1%;
    margin-right: 5%;
}

.link{
    text-decoration: none;
    margin-left: 30%;
    margin-right: 5%;

}
.link:visited{
    text-decoration: none;
    color: black;

}
</style>