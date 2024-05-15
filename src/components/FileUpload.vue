<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <br />
    <span v-if="data">{{data}}</span>
  </div>
</template>

<script>
export default {
  name: 'FileUpload',
  data() {
    return {
      data: null
    }
  },
  methods: {
     handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.readFileContent(file);
      }
    },
    readFileContent(file) {
      const reader = new FileReader();
      
      // Read the file as a text
      reader.readAsText(file, 'UTF-8');

      reader.onload = () => {
        this.fileTextContent = reader.result;
        window.electron.send('toMain', reader.result);
      };

      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
    }
  },
  mounted() {
    // You can use this to test if the API is exposed correctly
    window.electron.receive('fromMain', (data) => {
      this.data = data
      // console.log('Received data:', data);
    });
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
