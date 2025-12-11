<template>
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="#">SpringMVC</a>
        </div>
        <ul class="nav navbar-nav">
        <li class="active"><router-link to="/">Home</router-link></li>
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">맛집
            <span class="caret"></span></a>
            <ul class="dropdown-menu">
            <li><router-link to="/food">맛집 목록</router-link></li>
            <li><a href="#">맛집 추천</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">상품
            <span class="caret"></span></a>
            <ul class="dropdown-menu">
            <li><a href="#">전체 상품</a></li>
            <li><a href="#">베스트 상품</a></li>
            <li><a href="#">특가 상품</a></li>
            <li><a href="#">신상품</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">레시피
            <span class="caret"></span></a>
            <ul class="dropdown-menu">
            <li><router-link to="/recipe">레시피</router-link></li>
            <li><a href="#">쉐프</a></li>
            <li><a href="#">레시피 검색</a></li>
            </ul>
        </li>
        <li><a href="#">커뮤니티</a></li>
        <li><a href="#">실시간 채팅</a></li>
        </ul>
    </div>
    </nav>
</template>