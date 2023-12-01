
<script>
  $: clicked = false
  const onClick = () => clicked = true
</script>

{#if !clicked}
<form method="POST">
  <button on:click={onClick} type="submit">GOING</button>
</form>
  {:else}
  <h1>
    Thank you!!
  </h1>
 {/if}


<style>
  :global(body){
    margin: 0;
    width:100vw;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(67, 67, 67);
  }
  form{
    display: flex;
    align-items: center;
    justify-content: center;
    width:400px;
    height:400px;
    clip-path: circle(10);
  }
  button{
    width:50%;
    height: 50%;
    color: white;
    text-shadow: 
    1px 1px 0px rgb(129, 129, 129),
    3px 3px 0px rgb(129, 129, 129);
    background-color: rgb(162, 0, 0);
    border-radius: 100%;
    border: unset;
    box-shadow:
    inset 9px 9px 10px rgb(255, 255, 255, 0.5), 
    inset -9px -9px 10px rgb(0, 0, 0, 0.5), 
    inset -3px -3px 5px rgb(255, 255, 255, 0.5), 
    9px 9px 10px rgba(0, 0, 0, 0.7), 
    1px 1px 0 red,
    3px 3px 0 red,
    5px 5px 0 red,
    7px 7px 0 red,
    9px 9px 0 red;
    font-size: 2rem;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  button:hover{
    box-shadow: inset 5px 5px 10px black;
    scale: .97;
  }
  h1{
    color: white;
    font-size: xx-large;
  }
</style>
