import {reactive} from "vue";

export const store = reactive({

  //START CARDS MAIN 
  pelicula : [
    {
      img:'/macchina-da-ripresa.svg',
      title:'ARRAY OF EQUIPMENT',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae.',
      date:null,
      isSVG:true,
      isGallery:false,
      isPeople:false,
    },
    {
      img:'/3d.svg',
      title:'NEW TECHNOLOGIES',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae.',
      date:null,
      isSVG:true,
      isGallery:false,
      isPeople:false,
    },
    {
      img:'/maschere.svg',
      title:'VERSITILE ACTORS',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae.',
      date:null,
      isSVG:true,
      isGallery:false,
      isPeople:false,
    },
    {
      img:'/sedia.svg',
      title:'TOP DIRECTORS',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae.',
      date:null,
      isSVG:true,
      isGallery:false,
      isPeople:false,
    },
    {
      img:'/player.svg',
      title:'MINUTE EDITING',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae.',
      date:null,
      isSVG:true,
      isGallery:false,
      isPeople:false,
    },
    {
      img:'/pellicola.svg',
      title:'VERSITILE ACTORS',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae.',
      date:null,
      isSVG:true,
      isGallery:false,
      isPeople:false,
    },
  ],
  
  watchlist : [
    {
      img:'/Gallery-01.jpg',
      title:'SEVENTEENTH SUMMER',
      text:'Commercial, Music Video.',
      date:null,
      isSVG:false,
      isGallery:true,
      isPeople:false,
    },
    {
      img:'/Gallery-02.jpg',
      title:'A MESSAGE TO SPACE',
      text:'Short Film',
      date:null,
      isSVG:false,
      isGallery:true,
      isPeople:false,
    },
    {
      img:'/Gallery-03.jpg',
      title:'THE MOST BEATIFUL THING',
      text:'Music Video',
      date:null,
      isSVG:false,
      isGallery:true,
      isPeople:false,
    },
    {
      img:'/Gallery-04.jpg',
      title:'PERMISSION TO SPEAK',
      text:'Documentary',
      date:null,
      isSVG:false,
      isGallery:true,
      isPeople:false,
    },
    {
      img:'/Gallery-05.jpg',
      title:'EXPLORE OUR SPACE',
      text:'Film noir',
      date:null,
      isSVG:false,
      isGallery:true,
      isPeople:false,
    },
    {
      img:'/Gallery-06.jpg',
      title:'FILM PRODUCTION',
      text:'Blaxplaitation',
      date:null,
      isSVG:false,
      isGallery:true,
      isPeople:false,
    },
  ],

  team:[
    {
      img:'/Team-01.jpg',
      title:'FABRICIO GUERRA',
      text:'Main Director',
      date:null,
      isSVG:false,
      isGallery:false,
      isPeople:true,
    },
    {
      img:'/Team-02.jpg',
      title:'UMBERTO PAGODA',
      text:'Main Writer',
      date:null,
      isSVG:false,
      isGallery:false,
      isPeople:true,
    },
    {
      img:'/Team-03.jpg',
      title:'GLORIA RICCASSO',
      text:'Main Producer',
      date:null,
      isSVG:false,
      isGallery:false,
      isPeople:true,
    },
    {
      img:'Team-04.jpg',
      title:'LIO NAPOIN',
      text:'Cameramen',
      date:null,
      isSVG:false,
      isGallery:false,
      isPeople:true,
    },
  ],

  news:[
    {
      img:'/blog07.jpg',
      title:'RECAP YOUR LATEST COMPANY EVENT',
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quidem quos ipsam.',
      date:'November 06, 2021 By Admin',
      isSVG:false,
      isGallery:true,
      isPeople:false,
    },
    {
      img:'blog02.jpg',
      title:'HOW TO EDIT A FILM SCORE TO SERVE',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vero autem.',
      date:'May 27, 2022 By Admin',
      isSVG:false,
      isGallery:true,
      isPeople:false,
    },
    {
      img:'blog02.jpg',
      title:'ARE YOU READY TO MAKE IT AWESOME',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus placeat obcaecati, dolorem ab provident?',
      date:'May 07, 2022 By Admin',
      isSVG:false,
      isGallery:true,
      isPeople:false,
    },
  ],
  // END CARDS MAIN

  // START LINK FOOTER

  contact : [
    {
      href:'#',
      img:'/footer-location-dot-solid.svg',
      text:'2/45 Tower Street, New York USA',
    },
    {
      href:'#',
      img:'/footer-phone-solid.svg',
      text:'Call Us On 0800 840 1010',
    },
    {
      href:'#',
      img:'/footer-envelope-soli.svg',
      text:'Demo@Example.Com',
    },
  
  ],
  
   info : [
    {
      href:'#',
      img:null,
      text:'Product Support',
    },
    {
      href:'#',
      img:null,
      text:'Checkout',
    },
    {
      href:'#',
      img:null,
      text:'Report Abuse',
    },
    {
      href:'#',
      img:null,
      text:'Redeem Voucher',
    },
    {
      href:'#',
      img:null,
      text:'Order Status',
    },
  
  
  ],
  
   useful : [
    {
      href:'#',
      img:null,
      text:'Policiees & Rules',
    },
    {
      href:'#',
      img:null,
      text:'Privacy Policy',
    },
    {
      href:'#',
      img:null,
      text:'License Policy',
    },
    {
      href:'#',
      img:null,
      text:'My Account',
    },
    {
      href:'#',
      img:null,
      text:'Locality',
    },
  
  ],
  // END LINK FOOTER
  
})