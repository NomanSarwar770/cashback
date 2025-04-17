<template>
  <section class="privacy-policy full-page-container">
    <div class="container">
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> April 16, 2025</p>

      <p>Thank you for choosing to be part of our community at Rev Savings ("Company," "we," "us," or "our"). We are committed
        to protecting your personal information and your right to privacy. If you have any questions or concerns about this
        privacy notice or our practices regarding your personal information, please contact us at <a href="mailto:hello@revsavings.com">hello@revsavings.com</a>.</p>

      <p>This privacy notice applies to all information collected through our Chrome extension ("Services"), as well as any related
        services, sales, marketing, or events.</p>

      <p>Please read this privacy notice carefully to understand what we do with the information that we collect.</p>

      <div v-for="section in policySections" :key="section.title" class="policy-section">
        <h2>{{ section.title }}</h2>
        <p v-for="(para, index) in section.content" :key="index">{{ para }}</p>
      </div>

      <p class="contact">
        <strong>Rev Savings</strong><br />
        PO Box 6378<br />
        Anchorage, AK 99506<br />
        Email: <a href="mailto:hello@revsavings.com">hello@revsavings.com</a>
      </p>
    </div>
  </section>
</template>

<script setup>
const policySections = [
  {
    title: '1. WHAT INFORMATION DO WE COLLECT?',
    content: [
      'Personal Information You Disclose to Us',
      'In Short: We collect personal information that you provide to us.',
      'We collect personal information that you voluntarily provide to us when registering for our Services or otherwise contacting us. The personal information we collect may include:',
      '- Email Address: Used for account creation, authentication, and communication.',
      'All personal information you provide must be true, complete, and accurate, and you must notify us of any changes.'
    ]
  },
  {
    title: 'Information Automatically Collected',
    content: [
      'In Short: Some information is collected automatically when you use our Services.',
      'We automatically collect certain information when you use our Chrome extension, such as:',
      '- Browser and Device Information: Including IP address, browser type, and operating system.',
      '- Usage Data: Information about how you interact with our extension.',
      'This information helps us maintain security and improve our Services.'
    ]
  },
  {
    title: '2. HOW DO WE USE YOUR INFORMATION?',
    content: [
      'In Short: We use your information to provide, improve, and administer our Services, communicate with you, and comply with legal obligations.'
    ]
  },
  {
    title: '3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?',
    content: [
      'In Short: We only share information with your consent, to comply with laws, provide you services, or protect your rights.'
    ]
  },
  {
    title: '4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?',
    content: [
      'In Short: We may use cookies and tracking technologies to collect and store your information.'
    ]
  },
  {
    title: '5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?',
    content: [
      'In Short: We may transfer, store, and process your information in countries other than your own.'
    ]
  },
  {
    title: '6. HOW LONG DO WE KEEP YOUR INFORMATION?',
    content: [
      'In Short: We retain your information as long as needed to fulfill the purposes outlined in this policy unless required otherwise by law.'
    ]
  },
  {
    title: '7. HOW DO WE KEEP YOUR INFORMATION SAFE?',
    content: [
      'In Short: We aim to protect your personal information through technical and organizational security measures.'
    ]
  },
  {
    title: '8. DO WE COLLECT INFORMATION FROM MINORS?',
    content: [
      'In Short: We do not knowingly collect data from or market to children under 18 years of age.'
    ]
  },
  {
    title: '9. WHAT ARE YOUR PRIVACY RIGHTS?',
    content: [
      'In Short: You have rights that allow you greater access to and control over your personal information.'
    ]
  },
  {
    title: '10. CONTROLS FOR DO-NOT-TRACK FEATURES',
    content: [
      'Most browsers and some mobile OS include a Do-Not-Track ("DNT") feature or setting. We do not currently respond to DNT signals.'
    ]
  },
  {
    title: '11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?',
    content: [
      'In Short: Yes, if you are a resident of California, you are granted specific rights under state law.'
    ]
  },
  {
    title: '12. DO WE MAKE UPDATES TO THIS NOTICE?',
    content: [
      'In Short: Yes, we will update this privacy notice as necessary to stay compliant with relevant laws.'
    ]
  },
  {
    title: '13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?',
    content: [
      'You can contact us using the details provided at the bottom of this page.'
    ]
  },
  {
    title: '14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?',
    content: [
      'To request to review, update, or delete your personal information, please contact us at hello@revsavings.com.'
    ]
  }
]
</script>

<style scoped>
.privacy-policy {
  padding: 40px 20px;
  background-color: #f9f9f9;
  font-family: 'Arial', sans-serif;
}

.container {
  width: 100vw;
  margin: auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 80px;
}
.full-page-container {
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: #f8f8f8;
  padding: 0;
  text-align: left;
  min-height: 500px;
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;
}

h2 {
  font-size: 20px;
  margin-top: 25px;
  color: #333;
}

p {
  line-height: 1.7;
  margin: 10px 0;
}

a {
  color: #007BFF;
  text-decoration: underline;
}

.contact {
  margin-top: 30px;
  font-weight: bold;
}
</style>
