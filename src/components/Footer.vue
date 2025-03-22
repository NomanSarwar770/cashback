<script setup>
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-column">
        <h3>About</h3>
        <ul>
          <li>
            <RouterLink to="/about">Our Story</RouterLink>
          </li>
          <li>
            <RouterLink to="/team">Team</RouterLink>
          </li>
          <li>
            <RouterLink to="/careers">Careers</RouterLink>
          </li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Media</h3>
        <ul>
          <li>
            <RouterLink to="/press">Press Releases</RouterLink>
          </li>
          <li>
            <RouterLink to="/news">News & Updates</RouterLink>
          </li>
          <li>
            <RouterLink to="/gallery">Gallery</RouterLink>
          </li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Blog</h3>
        <ul>
          <li>
            <RouterLink to="/blog/latest">Latest Posts</RouterLink>
          </li>
          <li>
            <RouterLink to="/blog/categories">Categories</RouterLink>
          </li>
          <li>
            <RouterLink to="/blog/popular">Popular Articles</RouterLink>
          </li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Contact Us</h3>
        <ul>
          <li>Email: support@cashbackmonitor.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>
            <RouterLink to="/contact">Contact Form</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      Copyright © 2024-2025 CashbackMonitor.com, A Yansonic Website
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  width: 100vw;
  max-width: 100%;
  background-color: black;
  padding: 30px 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5%;
}

.footer-column {
  flex: 1;
  min-width: 200px;
  text-align: left;
}

.footer-column h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  color: white;
  font-weight: bold;

  margin-bottom: 15px;
}

.footer-column ul li {
  font-size: 14px;
  margin-bottom: 15px;
}

.footer-column ul li a {
  text-decoration: none;
  color: white;


}

.footer-column ul li a:hover {
  text-decoration: underline;

}

.footer-bottom {


  margin-top: 30px;
  font-size: 14px;
  color: white;
  font-weight: bold;
  border-top: 1px solid #ddd;
  padding-top: 10px;
  text-align: center;
  font-weight: bold;
}
</style>
