<template>
  <section class="privacy-policy full-page-container">
    <div class="container">
      <h1>Rev Savings — Data & Offer Disclaimer</h1>

<p>
  Rev Savings (“we,” “our,” “us”) is an independent, third-party platform that aggregates publicly available and partner-provided information on cash-back rates, discount gift cards, points and miles offers, coupons, and other shopping incentives (“Offers”).
</p>
      <div v-for="section in policySections" :key="section.title" class="policy-section">
        <h2>{{ section.title }}</h2>
        <p v-for="(para, index) in section.content" :key="index">{{ para }}</p>
      </div>

      <div>
        By using Rev Savings, you acknowledge that you have read, understood, and agree to this disclaimer and our Terms of Service and Privacy Policy. If you do not agree, please discontinue use of the site.
      </div>
    </div>
  </section>
</template>

<script setup>
const policySections = [
  {
    title: 'Information Source & Ownership',
    content: [
      'All brand names, logos, trademarks, Offers, and related content featured on this site belong to their respective merchants, networks, or licensors.',
      'Rev Savings does not claim ownership of, or rights to, any merchant data, rates, or promotions displayed.'  
    ]
  },
  {
    title: 'Accuracy & Timeliness',
    content: [
      'We strive to display the most current and accurate Offer details, but rates, terms, exclusions, and expiration dates frequently change without notice.',
      'The information on Rev Savings is provided “as is” and “as available.” We make no warranty—express or implied—regarding completeness, accuracy, reliability, suitability, or availability of any Offer.'
    ]
  },
  {
    title: 'No Endorsement or Partnership Implied',
    content: [
      'Inclusion of an Offer does not constitute endorsement or recommendation of the associated merchant, product, or service.',
      'Any merchant logos or trademarks shown are for identification purposes only.'
    ]
  },
  {
    title: 'User Responsibility',
    content: [
      'Before transacting, users must verify rates, terms, and eligibility directly with the merchant or rewards provider.',
      'Rev Savings is not responsible for losses, missed rewards, or discrepancies arising from reliance on information shown on this site.'
    ]
  },
  {
    title: 'Financial & Tax Disclaimer',
    content: [
      'Content on Rev Savings is for informational purposes only and should not be construed as financial, tax, or legal advice.',
      'Consult a qualified professional regarding any financial decisions or tax implications related to cash-back, points, or miles earnings.'
    ]
  },
  {
    title: 'Affiliate Relationships',
    content: [
      'Rev Savings may earn commissions or referral fees when users click through links or complete qualifying transactions with certain merchants.',
      'Such relationships do not affect the objectivity of Offer listings; we aim to present the best publicly available rates regardless of compensation.'
    ]
  },
  {
    title: 'Changes & Updates',
    content: [
      'Rev Savings reserves the right to modify, update, or remove content at any time without prior notice.',
      'Continued use of this site constitutes acceptance of the most recent version of this disclaimer.'
    ]
  },
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
  margin-bottom: 50px;
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
