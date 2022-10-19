const data=[{
    id:1,
    title:"The End of Mankind",
    info:"an end to my mankind",
    img:["./images/arts/art(1).png"],
    description:"This is the descrption"  
    },
    {
      id:2,
      title:"Falling into infinite",
      info:"See me fall into the void of nothingness",
      img:["./images/arts/art(2).png"],
      description:"This is the description"    
    },
    {
     id:3,
     title:"Falling into infinite:Abstract",
     info:"See me fall into the void of nothingness",
     img:["./images/arts/art(3).png"] , 
     description:"This is the description"  
    },
    {
        id:4,
        title:"Falling into infinite:Abstract",
        info:"See me fall into the void of nothingness",
        img:["./images/arts/art(4).png"],
        description:"This is the description"    

        }
    ,
    {
        id:5,
        title:"The Black Hole",
        info:"See me fall into the void of nothingness",
        img:["./images/arts/art(5).png"],
        description:"This is the description"  
    },
    {
        id:6,
        title:"The Black Hole",
        info:"See me fall into the void of nothingness",
        img:["./images/arts/art(6).png"],
        description:"This is the description"  
    }

]

const sectionEl=document.getElementById('section1');
const section2El=document.getElementById('section2');
const toggleBtn=document.querySelector('.toggle');
const showClass=document.querySelector('.drop-down');

toggleBtn.addEventListener('click',()=>{
   showClass.classList.toggle('show-links'); 

    
})


function showTiles(data){
    sectionEl.setHTML=" ";
}

data.forEach(designs=>{
    const{id,title,info,img,description}=designs;

    // tile image starts here==================

    const tileImages=[];

    for(let i=0;i<img.length;i++){
        const imageSource=img[i];
         tileImages.push(imageSource);

    }
   


    //tile title header==============================
    const titleEl=[];
    const newTitle=designs.title;
    titleEl.push(newTitle);


    //tile info section=============================
    const infoEl=[]
    const newInfo=designs.info
       infoEl.push(newInfo)

    const desEl=[]
    const newDes=designs.description;
    desEl.push(newDes)

    const newTileEl=document.createElement('section');
    newTileEl.innerHTML=`
                <section id="section1">
                <container class="container">
                    <img class="banner-img" src="${tileImages}" alt="" srcset="">

                <h4 class="title">${titleEl}</h4><br>
                
                <p class="info">${infoEl}</p>
                <button class="addtocart">Add to Cart &#x1F6D2;</button><br>
                    <counter id="qty">Qty</counter><br>
                    <button class="plus-btn">+</button>

                    <button class="minus-btn">-</button>
                    </container>
            </section>
    
     `
    sectionEl.appendChild(newTileEl);

});

