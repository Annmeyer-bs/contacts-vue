<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <div class="logo navbar-logo">
        <a class="navbar-brand" href="#">Cool Project Name - {{ localeDate }}</a>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <p><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-user" class="svg-inline--fa fa-circle-user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"></path></svg>
                  Your Name</p>
              </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </ul>
      </div>
      <hr>
    </div>
    <hr align="center" width="99%" size="3" color="#dddddd" />
  </nav>
</template>

<script>
export default {
  data() {
    return { date: new Date(),
    interval: null,
    dropdown: null};
  },
  computed: {
     localeDate() {
       var options = {  year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
       return (new Date(this.date)).toLocaleDateString('en-US',options);
     }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    },1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-collapse {
  display: flex;
  justify-content: end;
}
.dropdown {
  justify-content: end;
  margin: 0 10px;
  background: #7f4c00;
  padding: 0 10px;
}
.navbar-light{
  display: block;
  position: relative;
  background: #ff9900;
  z-index: 2;
}
.navbar-brand, .nav-item, p{
  color: white;
  margin: auto;
}
svg{
  color: white;
  max-width: 24px;
}
.container-fluid{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.dropdown-toggle{
  display: flex;
  align-items: center;
}
a {
  flex-direction: row;
  display: flex;
}
.dropdown-toggle::after {
  margin-left: 30px;
  color: white;
}
hr {
  margin: .75rem .15rem .10rem .20rem;
  background-color: white;
  border: 0;
  opacity: 1;
  align-items: center;
}
</style>
