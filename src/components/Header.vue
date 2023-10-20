<template>
  <header>

    <!-- START CONTAINER -->
    <div class="container-fluid p-20">

      <!-- START FLEX-HEADER-->
      <div class="d-flex justify-content-between align-items-center ">

        <!-- START LOGO -->
        <div class="logo">
          <img src="/public/logo.svg" alt="logo">
        </div>
        <!-- END LOGO -->

        <!-- START MAIN-MENU -->
        <nav class="main-menu ">
          <ul class="d-flex mt-3">
            <li v-for="(item,index) in menu"
              :key="index"
              class="d-flex active">
              <a :href="item.href">{{ item.text }}</a>
              <div v-if="item.isArrow === true">
                <img class="arrow arrow-bot " src="/public/arrow-down.svg" alt="arrow-down">
                <img class="arrow arrow-top mt-1" src="/public/arrow-top.svg" alt="arrow-top">
                <div class="my-drop ">
                  <ul>
                    <li v-for="(down,index) in item.dropDown"
                      :key="index">
                      <a class="color" :href="down.href">{{ down.text }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <!-- END MAIN MENU -->

        <!-- START SOCIAL-MENU -->
        <div class="social-menu d-flex mt-3">
          <div class="search">
            <img src="/public/Search-1.svg" alt="search">
          </div>
          <ul class="d-flex">
            <li v-for="(icon,index) in social" :key="index">
              <a :href="icon.href">
                <img :src="icon.img" :alt="icon.text">
              </a>
            </li>
          </ul>

        </div>
        <!-- END SOCIAL_MENU -->

      </div>
      <!-- END FLEX-HEADER-->

    </div>
    <!-- END CONTAINER -->

  </header>
</template>

<script>
  // IMPORT
  import {menu, social} from '../data/headerMenu';


  export default {
    name:'Header',
    data(){
      return{
        menu,
        social,
      }
    },


  }
</script>

<style lang="scss" scoped>
  @use '../scss/main' as *;
  @use '../scss/partials/variables' as *;
  

  header{
    border-bottom: 1px solid #eaeaea;
    box-shadow: 0px 1px 10px #eaeaea;
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    .logo{
      img{
        height: 40px;
        width: 190px;
      }
    }
    .active{
      position: relative;
      padding: 0 20px;
      
      a{
        color:$color-p;
      }
      &:hover .arrow-bot{
        display: none;
      }
      &:hover .my-drop{
        display: inline-block;
      }
      &:hover .arrow-top{
        display: block;
      }
      .arrow-top{
        display: none;
      }
      .arrow{
        width: 15px;
        color:$color-dark;
      }
      .my-drop{
        display: none;
        position: absolute;
        width: 300px;
        left:0;
        top:60px;
        background-color: $color-dark;
        ul{
          padding-left: 0;
          li{
            color:$color-white;
            padding:15px 10px;
            border-bottom: 1px solid $color-p;
            a.color{
              color:$color-white;
            }
          }
        }
        
      }
    }
    .social-menu{
      .search{
        border-right: 2px solid $color-p;
        height: 30px;
        padding-right: 30px;
      }
      ul{
        padding-left:20px;

        li{
          padding: 0 15px;

          img{
            height: 22px;
          }
        }
      }
    }
  }



  
</style>