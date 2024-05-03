<template>
    <div>
      <div class="container">
        <section>
          <h2>About Me</h2>
          <p>Insert your general about me content here.</p>
        </section>

        <div>
          <UButton to="/index" label="Home"></UButton>
        </div>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <!-- Add more skills as needed -->
          </ul>
        </section>

        <section>
          <h2>Hobbies</h2>
          <p>Insert your hobbies here.</p>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  
  export default {
    components: {
      Header,
      Footer
    }
  }
  </script>
  
  <style scoped>
  .container {
    width: 80%;
    margin: 0 auto;
  }
  /* Add your page-specific styles here */
  </style>
  