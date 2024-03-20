const boxlar = document.querySelector('.boxlar');


async function getItem(){
    const response = await fetch('dummy.json');
    const data = await response.json();
    return data;
}

async function Items(){
    const data = await getItem();
    for (const item of data) {
        boxlar.innerHTML += 
        `
        <div class="box">
        <img class="img" src="${item.image}" alt="">
        <div class="boxText">
            <h2 class="boxHeader">${item.title}</h2>
            <p class="boxP">${item.aciklama}</p>
        </div>
    </div>
        `
    }
}

Items();

{/* <div class="box">
<img src="${item.image}">
<h2 class="title">${item.title}</h2>
<p class="aciklama">${item.aciklama}</p>
</div> */}