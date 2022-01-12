//javascript



 let count = 0;
let like = document.querySelector("#like_btn");
let like_count = document.querySelector("#like_counter");
like.addEventListener("click",  function (){
    count +=1;
    like_count.innerHTML = count;
});
   like.addEventListener("click", function(){
    if(count%2==0){
        console.log("The Number " +count+ " is Even");
    } else{
        console.log("The Number "+count+ " is Odd");
    }
   });

