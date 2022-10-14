const data=[{
    id:1,
    title:"The End of Mankind",
    info:"an end to my mankind",
    img:["./images/arts/art(1).png"]
     },
     {
      id:2,
      title:"Falling into infinite",
      info:"See me fall into the void of nothingness",
      img:["./images/arts/art(19).png"]  
     },
     {
     id:3,
     title:"Falling into infinite:Abstract",
     info:"See me fall into the void of nothingness",
     img:["./images/arts/art(29).png"]  
     },
     {
        id:3,
        title:"Falling into infinite:Abstract",
        info:"See me fall into the void of nothingness",
        img:["./images/arts/art(15).png"]  
        }

]

const sectionEl=document.getElementById('section1');
const toggleBtn=document.querySelector('.toggle');
const showClass=document.querySelector('.drop-down');

toggleBtn.addEventListener('click',()=>{
    showClass.classList.toggle('show-links')
})
// let currentItem=[];

// window.addEventListener('DOMcontentLoaded',()=>{
//     showTile(currentItem)
// })
// const imgEl=document.querySelector('.banner-img');
// const titleEl=document.querySelector(".title");
// const infoEl=document.querySelector(".info");

// const showTile=showTiles=>{
//     const items=data[showTiles];
//     console.log(items)
//     imgEl.src=img.items;
//     titleEl.textContent=items.title;
//     infoEl.textContent=items.info;
// }


function showTiles(data){
    sectionEl.innerHTML=" ";
}

data.forEach(designs=>{
    const{id,title,info,img}=designs;

    // tile image starts here==================
   
    
    const tileImages=[];

    for(let i=0;i<img.length;i++){
        const imageSource=img[i];
        
         tileImages.push(imageSource);

    }
    console.log(tileImages)
    const titleEl=[];
    for(let j=1;j<title.length;j++){
      const newTitle=designs.title;
      titleEl.push(newTitle);
    }

    const infoEl=[]
    for(let i=0;i<info.length;i++){
        const newInfo=designs.info
        infoEl.push(newInfo)
    }

    const newTileEl=document.createElement('section');
    newTileEl.innerHTML=`
                <section id="section">
                <container class="container">
                    <img class="banner-img" src="${tileImages}" alt="" srcset="">

                <h4 class="title">${titleEl[1]}</h4><br>
                
                <p class="info">${infoEl[1]}</p>
                <button class="addtocart">Add to Cart &#x1F6D2;</button><br>
                    <counter id="qty">Qty</counter><br>
                    <button class="plus-btn">+</button>

                    <button class="minus-btn">-</button>
            </section>
    
     `
     sectionEl.appendChild(newTileEl);

})