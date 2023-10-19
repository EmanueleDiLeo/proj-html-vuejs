const menu = [
  {
    href:'#',
    text:'HOME',
    isArrow:false,
  },
  {
    href:'#',
    text:'BLOG',
    isArrow:false,
  },
  {
    href:'#',
    text:'PAGES',
    isArrow:true,
    dropDown: [
      {
        href:'#',
        text:'SERVICES',
      },
      {
        href:'#',
        text:'OUR WORK FLOW',
      },
      {
        href:'#',
        text:'VIDEO THUMBNAIL TYPE',
      },
    ],
  },
  {
    href:'#',
    text:'ABOUT',
    isArrow:false,
  },
  {
    href:'#',
    text:'CONTACTS',
    isArrow:false,
  },
  {
    href:'#',
    text:'GALLERY',
    isArrow:false,
  },
  {
    href:'#',
    text:'SHOP',
    isArrow:true,
    dropDown: [
      {
        href:'#',
        text:'MY ACCOUNT',
      },
      {
        href:'#',
        text:'CART',
      },
      {
        href:'#',
        text:'MY ORDERS',
      },
    ],
  },
];

const social = [
  {
    text:'facebook',
    href:'#',
    img: "/public/facebook.svg",
  },
  {
    text:'twitter',
    href:'#',
    img: "/public/twitter.svg",
  },
  {
    text:'youtube',
    href:'#',
    img: "/public/youtube.svg",
  },
  {
    text:'instagram',
    href:'#',
    img: "/public/instagram.svg",
  },
];

export {menu, social}