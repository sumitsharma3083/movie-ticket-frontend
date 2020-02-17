var movie_select = document.querySelector('.movie-select-input')

var seats = document.querySelectorAll('.seat') ;

var seats_selected  = 0 ;
var totalprice = 0 ;
var price  = Number(movie_select.value)

var final_seat = document.querySelector('.final_seats')
var final_price = document.querySelector('.final_price')


movie_select.addEventListener('change', ()=>{
     price = Number(movie_select.value) ;  
     
     totalprice = seats_selected*price
     final_seat.innerHTML  = seats_selected
     final_price.innerHTML =   totalprice
}
)


 
seats.forEach(seat => {  
   
       seat.addEventListener('click', ()=>{
               
         if(seat.classList[1] !== 'booked')
         {
            if(seat.getAttribute('selected') == 'true')
            {
              seat.setAttribute('selected' , 'false')
              seat.classList.remove('select') 
              seats_selected -= 1 ; 
              totalprice = seats_selected*price 
              final_seat.innerHTML  = seats_selected
              final_price.innerHTML =   totalprice
            }
            else{
              seat.setAttribute('selected' , 'true')
              seat.classList.add('select') 
              seats_selected += 1 ; 
              totalprice = seats_selected*price 
              final_seat.innerHTML  = seats_selected
              final_price.innerHTML =   totalprice
            }
           }
         }   
       )
});









