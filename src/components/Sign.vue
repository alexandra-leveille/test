<template lang="html">
  <div class="signs">


<div class="up">
  <button type="button" name="button"> Sign in </button>
  <button type="button" name="button"> Sign up </button>
</div>

<div class="down">

<div class="left">
<h2>{{into}}</h2>

<input type="text" name="" placeholder="Enter your email">
<p class="fgt"> {{fgtemail}} </p>

<input type="password" name="" placeholder="Enter your password">
<p class="fgt"> {{fgtpassword}} </p>

<button type="button" name="button">Join</button>

</div>


<div class="right">
  <h2>{{point}}</h2>
  <h4> {{point1}}</h4>
  <h4> {{point2}}</h4>
</div>



</div>


  </div>
</template>
<script>
export default {
  name: 'Signs',
  data () {
    return {
      into:'Want to sign in ?',
      fgtemail :'email forgotten ?',
      fgtpassword:'password forgotten ?',
      point:'Are you wondering whet our move is all about ?',
      point1:'Dont waste your time and join the club',
      point2:'Fill your information below'
    }
  }
}
</script>


<style lang="css">

h4{
  font-weight: 100;
font-size:1vw;
}

h2{
  font-size:2vw;
}

.up{
  /* background: red; */
  height: 15vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.up button{
  height: 7vh;
  width: 180px;
  border: none;
  font-size: 20px;
  background: gold;
  color: white;
}

.up button:first-of-type{
    margin-right: 3vw
}

.down{
/*  border: 2px solid blue; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-wrap: nowrap;
}
.right{
/*  background: cyan; */
text-align: left;
  width: 50%;
  align-self:flex-start;
}

.left{
/* background: yellow; */
    width: 50%;
}

.left input{
  width: 25vw;
  height: 10vh;
  border: none;
  border-bottom: 2px solid gold;
  background: none;
  font-family: 'Alef', sans-serif;
  font-size: 1.5vw;
}
p.fgt{
  text-align: center;
  font-size:1vw;
  margin-right:16vw;
  margin-top:1vh;
}
.left button{
  height: 7vh;
  width: 150px;
  border: none;
  font-size: 20px;
  background: gold;
  color: white;
}
.signs{
  line-height: 5px;
}
</style>
