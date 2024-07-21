let arr_of_image = [
    "./clr01.png", "./clr02.png", "./clr03.png", "./clr13.png", "./clr14.png", "./clr15.png",
]
let id;
function show_img(index = 0) {
    let container = document.getElementById("images");
    container.innerHTML = "";
    let image = document.createElement("img");
    image.src = arr_of_image[index];
    container.append(image);
}
index = 2;
show_img(index);

function previous_func() {
    index--;
    index = index == 0 ? arr_of_image.length - 1 : index;
    show_img(index);
}
function next_func() {
    index++;
    index = index == arr_of_image.length - 1 ? 0 : index;
    show_img(index);
}
function start_slideshow() {
    if (!id) {
        id = setInterval(() => {
            index++;
            index = index == arr_of_image.length - 1 ? 0 : index;
            show_img(index);
        }, 2000)
    }

}

function stop_func() {
    clearInterval(id);
    id=null;
}

function start_func() {
    start_slideshow();
}

function resume_func(){
    if(!id){
        start_slideshow()
    }
}
