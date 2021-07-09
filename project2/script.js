// GET DOM ELEMENTS
const container= document.querySelector('.container');//queryselector is used for single query
const seats=document.querySelectorAll('.row.seat');// .rw.seat rows k andarjo seats hongi wo acess hongi
const count=document.getElementById('count');
const total=document.getElementById('total');
const selectMovie=document.getElementById('movie');
//get the ticket price for select movie drop down
const ticketPrice=selectMovie.value;

