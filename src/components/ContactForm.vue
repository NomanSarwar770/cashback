<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import Tabs from './Tabs.vue'

const toast = useToast()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = async () => {
  try {
    const response = await fetch('https://revsavings.com/sendMail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    const result = await response.text()

    if (response.ok) {
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Message sent successfully!',
        life: 3000
      })
      form.value = { name: '', email: '', message: '' }
    } else {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: result || 'Something went wrong!',
        life: 3000
      })
    }

  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Failed to send message. Please try again.',
      life: 3000
    })
    console.error('Error sending form:', error)
  }
}
</script>

<template>
  <Tabs />
  <div class="page-container">
    <div class="main-content">
      <div class="full-page-container">
        <div class="form-wrapper">
          <div class="form-card">
            <h2>Contact Us</h2>
            <form @submit.prevent="submitForm" class="contact-form">

              <div class="form-group">
                <label for="name">Name</label>
                <input v-model="form.name" type="text" id="name" required />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input v-model="form.email" type="email" id="email" required />
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea v-model="form.message" id="message" rows="4" required></textarea>
              </div>

              <div class="button-wrapper">
  <button type="submit">Send</button>
</div>
            </form>
          </div>
        </div>
        <Toast />
      </div>
    </div>
  </div>
</template>


<style scoped>
.form-group {
  display: flex;
  align-items: center;
  gap: 12px;
}
.button-wrapper {
  display: flex;
  justify-content: center;
}
.form-group label {
  width: 80px;
  font-weight: bold;
  color: #444;
  text-align: left;
  margin: 0;
}
.form-wrapper {

  display: flex;
  justify-content: center;
  padding: 10px 10px 10px 10px;
  margin-bottom: 50px;
  background-color: white;

}

.form-card {
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  min-height: 400px;
}

h2 {
  margin-bottom: 12px;
  text-align: center;
  font-size: 1.3rem;
  color: #333;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}


.form-group input,
.form-group textarea {
  flex: 1;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin: 0;
}
button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  width: auto;
  height: auto;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;
}


button:hover {
  background-color: #0056b3;
}

.success {
  color: green;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
}

/* Mobile responsive tweaks */
@media (max-width: 480px) {
  .form-card {
    padding: 16px;
  }

  input,
  textarea {
    font-size: 0.95rem;
  }

  button {
    font-size: 0.95rem;
  }
}
.full-page-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #f8f8f8;
  padding: 0;
  text-align: center;
  min-height: 500px;
}
</style>
