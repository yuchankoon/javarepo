import fetch from 'node-fetch';

fetch('https://api.thedogapi.com/v1/breeds')
.then(response => response.json())
.then(async data => {
    //[1] 전체데이터
console.log(data);
//[2] 전체 데이터에서 키(name)에 해당하는 값 출력
    const name =data.map(item => item.name);
    console.log(data);
    //[3] 전체 데이터에서 키(id와 name)에 해당하는 값 출력
    const idAndName = data.map(item=> ({id: item.id, name: item.name}));
    //console.log(idAndName);
    //[4] 이미지 id로 이미지 url 받아오기
    //let images = [];
    //for (const item of data) {
    //    const result = {
    //        id: item.id,
    //        name: item.name,
    //        image_url: await getImageFromImageID(item.reference_image_id)
    //    }
    //    console.log(result);
    //    images.push(result);
   // }
   //[5] 이미지 id로 이밎 url받아오기(데이터 한번에 리턴)
    const promiseImage = data.map(item => new Promise((resolve, reject) => {
        getImageFromImageID(item.reference_image_id)
        ,then((imageUrl) => {
            resolve({
                id: item.id,
                name: item.name,
                image_Url: imageUrl
            })
        })
})
)

return Promise.all(promiseImage)
})
.catch(err => console.log(err));

async function getImageFromImageID(referenceImageID) {
try {
const responseIamge = await fetch(`https://api.thedogapi.com/v1/images/${referenceImageId}`);
const imageData = await responseIamge.json();
//console.log(imageData);
return imageData.url
} catch(err) {
    console.error(err);
}
}